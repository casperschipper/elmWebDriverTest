# Elm WebDriver Test

This is a personal test for Elm Web Driver. 

# Preperation

Make sure that the .jar webDriver is running on port 4444

`java -jar selenium-server-standalone-*.jar`

You can get the jar here: <https://www.selenium.dev/downloads/>

You will have to install a chromedriver, geckodriver or a webdriver of your choice. By default this uses the chrome driver.

Finally, do an `npm install` for the node dependencies.

# Building and running

Use the build.sh script to build, this makes the elm code and injects the XMLHttpRequest, which is needed for Elm Webdriver, but not available in Node.js by default.

`sh build.sh`

Then run: 

`node main.js`

It will load knmi.nl in chrome and run some test. If it passes you see a green period <span style="color:green">.</span>, otherwise a red <span style="color:red">F</span>.
