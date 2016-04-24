var companyInformationMap = {};

//Test Data
/*
companyInformationMap['/apple'] = {
'name' : 'Apple',
'url' :  'https://www.raise.com/buy-apple-gift-cards',
'percent' : 0.9,
'port' : 3001 };

companyInformationMap['/amazon'] = {
'name' : 'Amazon',
'url' :  'https://www.raise.com/buy-amazon-com-gift-cards',
'percent' : 0.9,
'port' : 3002 };

companyInformationMap['/bestbuy'] = {
'name' : 'BestBuy',
'url' :  'https://www.raise.com/buy-best-buy-gift-cards',
'percent' : 0.0,
'port' : 3003 };

companyInformationMap['/costco'] = {
'name' : 'Costco',
'url' :  'https://www.raise.com/buy-costco-gift-cards',
'percent' : 0.9,
'port' : 3004 };

companyInformationMap['/fandango'] = {
'name' : 'Fandango',
'url' :  'https://www.raise.com/buy-fandango-gift-cards',
'percent' : 0.9,
'port' : 3005 };

companyInformationMap['/frys'] = {
'name' : 'Frys',
'url' :  'https://www.raise.com/buy-fry-s-food-stores-gift-cards',
'percent' : 0.9,
'port' : 3006 };

companyInformationMap['/homedepot'] = {
'name' : 'Home Depot',
'url' :  'https://www.raise.com/buy-home-depot-gift-cards',
'percent' : 0.9,
'port' : 3007 };

companyInformationMap['/lowes'] = {
'name' : 'Lowes',
'url' :  'https://www.raise.com/buy-lowe-s-in-store-only-gift-cards',
'percent' : 0.9,
'port' : 3008 };

companyInformationMap['/macys'] = {
'name' : 'Macys',
'url' :  'https://www.raise.com/buy-macy-s-gift-cards',
'percent' : 0.9,
'port' : 3009 };

companyInformationMap['/regal'] = {
'name' : 'Regal Cinemas',
'url' :  'https://www.raise.com/buy-regal-cinemas-gift-cards',
'percent' : 0.9,
'port' : 3010 };

companyInformationMap['/target'] = {
'name' : 'Target',
'url' :  'https://www.raise.com/buy-target-gift-cards',
'percent' : 0.9,
'port' : 3011 };
*/

//Real Data

companyInformationMap['/apple'] = {
'name' : 'Apple',
'url' :  'https://www.raise.com/buy-apple-gift-cards',
'percent' : 4.9,
'port' : 3001 };

companyInformationMap['/amazon'] = {
'name' : 'Amazon',
'url' :  'https://www.raise.com/buy-amazon-com-gift-cards',
'percent' : 0.9,
'port' : 3002 };

companyInformationMap['/bestbuy'] = {
'name' : 'BestBuy',
'url' :  'https://www.raise.com/buy-best-buy-gift-cards',
'percent' : 10.0,
'port' : 3003 };

companyInformationMap['/costco'] = {
'name' : 'Costco',
'url' :  'https://www.raise.com/buy-costco-gift-cards',
'percent' : 2.4,
'port' : 3004 };

companyInformationMap['/fandango'] = {
'name' : 'Fandango',
'url' :  'https://www.raise.com/buy-fandango-gift-cards',
'percent' : 9.9,
'port' : 3005 };

companyInformationMap['/frys'] = {
'name' : 'Frys',
'url' :  'https://www.raise.com/buy-fry-s-food-stores-gift-cards',
'percent' : 6.0,
'port' : 3006 };

companyInformationMap['/homedepot'] = {
'name' : 'Home Depot',
'url' :  'https://www.raise.com/buy-home-depot-gift-cards',
'percent' : 15.9,
'port' : 3007 };

companyInformationMap['/lowes'] = {
'name' : 'Lowes',
'url' :  'https://www.raise.com/buy-lowe-s-in-store-only-gift-cards',
'percent' : 15.9,
'port' : 3008 };

companyInformationMap['/macys'] = {
'name' : 'Macys',
'url' :  'https://www.raise.com/buy-macy-s-gift-cards',
'percent' : 24.9,
'port' : 3009 };

companyInformationMap['/regal'] = {
'name' : 'Regal Cinemas',
'url' :  'https://www.raise.com/buy-regal-cinemas-gift-cards',
'percent' : 29.9,
'port' : 3010 };

companyInformationMap['/target'] = {
'name' : 'Target',
'url' :  'https://www.raise.com/buy-target-gift-cards',
'percent' : 9.9,
'port' : 3011 };

companyInformationMap['/wholefoods'] = {
'name' : 'Whole Foods',
'url' :  'https://www.raise.com/buy-whole-foods-gift-cards',
'percent' : 20.0,
'port' : 3012 };

companyInformationMap['/walmart'] = {
'name' : 'Walmart',
'url' :  'https://www.raise.com/buy-walmart-gift-cards',
'percent' : 10.0,
'port' : 3013 };

companyInformationMap['/forever21'] = {
'name' : 'Forever21',
'url' :  'https://www.raise.com/buy-forever-21-gift-cards',
'percent' : 20.0,
'port' : 3014 };

companyInformationMap['/chick'] = {
'name' : 'Chick-fil-A',
'url' :  'https://www.raise.com/buy-chick-fil-a-gift-cards',
'percent' : 3.0,
'port' : 3015 };

companyInformationMap['/subway'] = {
'name' : 'Subway',
'url' :  'https://www.raise.com/buy-chick-fil-a-gift-cards',
'percent' : 20.0,
'port' : 3016 };

companyInformationMap['/chipotle'] = {
'name' : 'Chipotle',
'url' :  'https://www.raise.com/buy-chipotle-gift-cards',
'percent' : 20.0,
'port' : 3017 };

companyInformationMap['/inout'] = {
'name' : 'In-n-Out',
'url' :  'https://www.raise.com/buy-in-n-out-burger-gift-cards',
'percent' : 3.0,
'port' : 3018 };

exports.companyInformationMap = companyInformationMap;
exports.timerDelay = 20000;
