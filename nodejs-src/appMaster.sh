echo starting apple
forever start -a -l forever.log -e err.log app.js
#echo starting target
#forever start -a -l forever.log -e err.log appTarget.js
echo starting amazon
forever start -a -l forever.log -e err.log appAmazon.js
echo starting costco
forever start -a -l forever.log -e err.log appCostco.js
echo starting bestbuy
forever start -a -l forever.log -e err.log appBestbuy.js
#echo starting lowes
#forever start -a -l forever.log -e err.log appLowes.js
#echo starting homedepot
#forever start -a -l forever.log -e err.log appHomeDepot.js
#echo starting macys
#forever start -a -l forever.log -e err.log appMacys.js
echo starting frys
forever start -a -l forever.log -e err.log appFrys.js
#echo starting regal
#forever start -a -l forever.log -e err.log appRegal.js
echo starting fandango
forever start -a -l forever.log -e err.log appFandango.js
echo starting wholefoods
forever start -a -l forever.log -e err.log appWholefoods.js
echo starting walmart
forever start -a -l forever.log -e err.log appWalmart.js
#echo starting forever21
#forever start -a -l forever.log -e err.log appForever21.js
echo starting chickfila
forever start -a -l forever.log -e err.log appChick.js
#echo starting subway
#forever start -a -l forever.log -e err.log appSubway.js
#echo starting chipotle
forever start -a -l forever.log -e err.log appChipotle.js
echo starting inout
#forever start -a -l forever.log -e err.log appInout.js





echo listing
forever list
