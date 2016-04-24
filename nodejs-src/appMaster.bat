echo starting apple
start forever start -a -l forever.log -o out.log -e err.log app.js
echo starting target
start forever start -a -l forever.log -o out.log -e err.log appTarget.js
echo starting amazon
start forever start -a -l forever.log -o out.log -e err.log appAmazon.js
echo starting costco
start forever start -a -l forever.log -o out.log -e err.log appCostco.js
echo starting bestbuy
start forever start -a -l forever.log -o out.log -e err.log appBestbuy.js
echo starting lowes
start forever start -a -l forever.log -o out.log -e err.log appLowes.js
echo starting homedepot
start forever start -a -l forever.log -o out.log -e err.log appHomeDepot.js
echo starting macys
start forever start -a -l forever.log -o out.log -e err.log appMacys.js
echo starting frys
start forever start -a -l forever.log -o out.log -e err.log appFrys.js
echo starting regal
start forever start -a -l forever.log -o out.log -e err.log appRegal.js
echo starting fandango
start forever start -a -l forever.log -o out.log -e err.log appFandango.js
echo starting wholefoods
start forever start -a -l forever.log -o out.log -e err.log appWholefoods.js
echo starting walmart
start forever start -a -l forever.log -o out.log -e err.log appWalmart.js
echo starting forever21
start forever start -a -l forever.log -o out.log -e err.log appForever21.js

echo starting close program
start closeMaster.bat

echo listing
start forever list
