@echo off
setlocal ENABLEDELAYEDEXPANSION ENABLEEXTENSIONS

set MaxRunningMinutes=1
set ProcessName=phantomjs.exe

:loop

for /f "usebackq skip=1" %%t in (
  `wmic.exe path Win32_OperatingSystem get LocalDateTime`) do (
    if "%%t" GEQ "0" set T=%%t)

rem echo !T!
rem echo !T:~,4!/!T:~4,2!/!T:~6,2! !T:~8,2!:!T:~10,2!:!T:~12,2!
rem echo !T:~15,-4! !T:~-4!

set fsec=!T:~15,-4!
set tzone=!T:~-4!

call :DateToSecs !T:~,4! !T:~4,2! !T:~6,2! !T:~8,2! !T:~10,2! !T:~12,2! UNIX_TIME
rem echo !UNIX_TIME!

set /a CutOffTime=UNIX_TIME-MaxRunningMinutes*60
rem echo !CutOffTime!

call :SecsToDate !CutOffTime! yy mm dd hh nn ss
rem echo !yy!/!mm!/!dd! !hh!:!nn!:!ss!
set UTC=!yy!!mm!!dd!!hh!!nn!!ss!.!fsec!!tzone!
rem echo !UTC!

wmic process where "name='%ProcessName%' AND CreationDate<'%UTC%'" call terminate

rem * Alternate kill method. May be useful if /F flag is needed to
rem * to forcefully terminate the process. (Add the /F flag to
rem * taskill cmd if needed.)

rem for /f "usebackq skip=1" %%p in (
rem   `wmic process where "name='%ProcessName%' AND CreationDate<'%UTC%'" get processid`) do (
rem   if "%%p" GEQ "0" taskkill /PID %%p)

rem goto :EOF
timeout /t 10
goto loop

rem From: http://www.commandline.co.uk/lib/treeview/index.php
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:DateToSecs %yy% %mm% %dd% %hh% %nn% %ss% secs
::
:: By:   Ritchie Lawrence, updated 2002-08-13. Version 1.1
::
:: Func: Returns number of seconds elapsed since 1st January 1970 00:00:00
::       for a given calendar date and time of day. For NT4/2000/XP/2003.
::
:: Args: %1 year to convert, 2 or 4 digit (by val)
::       %2 month to convert, 1/01 to 12, leading zero ok (by val)
::       %3 day of month to convert, 1/01 to 31, leading zero ok (by val)
::       %4 hours to convert, 1/01 to 12 for 12hr times (minutes must be
::          suffixed by 'a' or 'p', 0/00 to 23 for 24hr clock (by val)
::       %5 mins to convert, 00-59 only, suffixed by a/p if 12hr (by val)
::       %6 secs to convert, 0-59 or 00-59 (by val)
::       %7 var to receive number of elapsed seconds (by ref)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

setlocal ENABLEEXTENSIONS
set yy=%1&set mm=%2&set dd=%3&set hh=%4&set nn=%5&set ss=%6
if 1%yy% LSS 200 if 1%yy% LSS 170 (set yy=20%yy%) else (set yy=19%yy%)
set /a dd=100%dd%%%100,mm=100%mm%%%100
set /a z=14-mm,z/=12,y=yy+4800-z,m=mm+12*z-3,j=153*m+2
set /a j=j/5+dd+y*365+y/4-y/100+y/400-2472633
if 1%hh% LSS 20 set hh=0%hh%
if {%nn:~2,1%} EQU {p} if "%hh%" NEQ "12" set hh=1%hh%&set/a hh-=88
if {%nn:~2,1%} EQU {a} if "%hh%" EQU "12" set hh=00
if {%nn:~2,1%} GEQ {a} set nn=%nn:~0,2%
set /a hh=100%hh%%%100,nn=100%nn%%%100,ss=100%ss%%%100
set /a j=j*86400+hh*3600+nn*60+ss
endlocal&set %7=%j%&goto :EOF
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:SecsToDate %secs% yy mm dd hh nn ss
::
:: By:   Ritchie Lawrence, updated 2002-07-24. Version 1.1
::
:: Func: Returns a calendar date and time of day from the number of
::       elapsed seconds since 1st January 1970 00:00:00. For
::       NT4/2000/XP/2003.
::
:: Args: %1 seconds used to create calendar date and time of day (by val)
::       %2 var to receive year, 4 digits for all typical dates (by ref)
::       %3 var to receive month, 2 digits, 01 to 12 (by ref)
::       %4 var to receive day of month, 2 digits, 01 to 31 (by ref)
::       %5 var to receive hours, 2 digits, 00 to 23 (by ref)
::       %6 var to receive minutes, 2 digits, 00 to 59 (by ref)
::       %7 var to receive seconds, 2 digits, 00 to 59 (by ref)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
setlocal ENABLEEXTENSIONS
set /a i=%1,ss=i%%60,i/=60,nn=i%%60,i/=60,hh=i%%24,dd=i/24,i/=24
set /a a=i+2472632,b=4*a+3,b/=146097,c=-b*146097,c/=4,c+=a
set /a d=4*c+3,d/=1461,e=-1461*d,e/=4,e+=c,m=5*e+2,m/=153,dd=153*m+2,dd/=5
set /a dd=-dd+e+1,mm=-m/10,mm*=12,mm+=m+3,yy=b*100+d-4800+m/10
(if %mm% LSS 10 set mm=0%mm%)&(if %dd% LSS 10 set dd=0%dd%)
(if %hh% LSS 10 set hh=0%hh%)&(if %nn% LSS 10 set nn=0%nn%)
if %ss% LSS 10 set ss=0%ss%
endlocal&set %7=%ss%&set %6=%nn%&set %5=%hh%&^
set %4=%dd%&set %3=%mm%&set %2=%yy%&goto :EOF
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

rem timeout /t 10


}