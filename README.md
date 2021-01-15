# Elm WebDriver Test

This is a test for elm Web Driver

# Required preperation steps

Make sure that the .jar webDriver is running on port :4444

`java -jar selenium-server-standalone-*.jar`

You can get the jar here: <https://www.selenium.dev/downloads/>

You will have to install the chromedriver or geckodriver, by default this uses the chrome driver.

# Building and running

Use the build.sh script to build (there is some XMLHttpRequest injection needed, since this is missing from Node.js).

`sh build.sh`

Then run: 

`node main.js`

It will load knmi.nl in chrome and run some test. If it passes you see a green period <span style="color:green">.</span>, otherwise a red <span style="color:red">F</span>.
