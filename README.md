# Automation test suite
## imdb-test
### Talon.One

### Steps to run the test

**Prerequisities:** 

Install latest Node Version

Clone the Repository from URL "https://github.com/padma-into-git/imdb-test.git"

Navigate to the Cloned Repository Path in the Terminal

To install Dependencies, Run the following Command in Terminal

    npm install


Run the following commands to execute the Test:

**End-To-End Scenario:**

    npm run test:e2e

(or)

Navigate to the cloned Repository path in Terminal and paste node_modules\.bin\cypress open and click enter
Cypress Test Runner will open then you can find all your test folders on right side ,just click EndToEndTest.js
A new chrome window opens and test run on it

Other ways to run:
open package.json file and right click and run on this line "specificTest": 

    npm run mochaReport -- --spec "cypress/integration/modules/EndToEndTest.js

To run headless:

    npx cypress run --record --key b86b6211-af50-48ed-9d6b-f9f32f1d3080
or
open package.json--> select 'RecordDashBoard' under scripts--> Right click on it--> Run Script.

To run on Browser:
open terminal --> type 

    npx cypress open
    
--> Cypress Test runner opens, select desired browser on top right corner--> tap on 'EndToEndTest.js'

**To check the Test Reports**, Open mochawesome\*.html in the folder mochawesome-report

**To check the Test Videos**, Open EndToEndTest.js.mp4 in the folder videos/modules

**Dashboard Report:** To view the results on Dashboard, click on the below URL or copy paste the below URL in your desired browser.

 https://dashboard.cypress.io/projects/n4hffz/runs/1/overview
 
### Project Details & Overview
**Tool used to Automate :** Cypress

**Programming Langauge **: JavaScript / Nodejs

**Programming Model :** This project used page object/Factory model and data driven framework

**POM**: As per the page object/Factory model, I have maintained a class for every web page. Each web page has a separate class which holds functionalities and members of that web page.

**Packages**: Cypress

**config**: This Folder is used to maintain the Configuration Information for different environments

**fixtures**: This Folder is used to store the Test data & Configuration or environment Settings
fixtures/config.json: Contains Test URL. Can be added for Other Environments too in the same file
fixtures/user-data.json: Contains Test Data

**modules**: This Folder contains the test Spec Files

**page-models**: This Folder contains the Page Objects of HomePage, LoginPage, LoginOptionsPage, MoviesSearchListPage, MoviePlayPage & page.js to return the Instance of Page Class Objects

**mochawesome-report**: To store Mochawesome Test Reports in HTML. Just run the Html file to see the report (Both Positive & Negative Scenario is attached with the Project).

**Package.json: **This will help to make it easy for others to manage and install the dependencies.

**cypress.json:** To store Cypress related Settings & Mochawesome Report Settings
