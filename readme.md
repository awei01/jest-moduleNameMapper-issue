# Potential Jest bug

* Clone this repo
* `npm install`
* `npm test` and you should see tests passing properly
* open up `/src/_tests__/foo.test.js`
* comment out line 1. uncomment line 2.
* Jest will hang on `Determining test suites to run...`
* Kill jest in command using `ctrl + C`

Reference: https://github.com/facebook/jest/issues/4524

