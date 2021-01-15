# elmWebDriverTest

This is a test for elm Web Driver

# Required preperation steps

Make sure that the .jar webDriver is running on port :4444
java -jar selenium-server-standalone-*.jar
You can get the jar here: <https://www.selenium.dev/downloads/>

You will have to install the chromedriver or geckodriver, by default this uses the chrome driver.

Use the build.sh script to build (there is some XMLHttpRequest injection needed, since this is missing from Node.js).

Then you can execute the whole thing with

node main.js

It will load knmi.nl and run some test (should result in a green dot, for passed :-) ).
