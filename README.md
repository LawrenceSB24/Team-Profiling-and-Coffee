# Team-Profiling-and-Coffee
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Summary
A command line application using Node.js to create simple profiles for members of a team. Coffee is optional.

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I can have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

To install this application, you will first need a command line application installed on your computer (Git Bash or Powershell are good examples). 

Next, you will need to install the Inquirer package. This can be accomplished by typing in `npm i inquirer` into the command line. 

You will need a package.json to hold the dependencies and tests required for the application. For this, type in `npm init` into the command line. This will lauch a series of prompts that will generate your own custom `package.json` based on your input. 

Finally, to launch the application, you can either type in `node apps.js` or `npm start` into the command line.


## Testing
To test this application, run `npm test` in the command line. This will launch the Jest testing package, which will cycle through a series of test js files. When all the tests have passed, then the application can be run smoothly.

## Usage
This application uses the Inquirer package for the following:

>1) When the application is started, a series of prompts will ask the user for information about the manager

>2) Once all manager information has been gathered and stored, the user will be given 3 choices: 'Enter an Engineer', 'Enter an Intern', or 'All set'.

>3) If the user chooses either 'Enter an Engineer' or 'Enter an Intern', then the user is prompted for information about these team members. There are two differing pieces of info required for the Engineer and Intern respectively. For the engineer, their GitHub username must be provided. And for the intern, the school they are currently enrolled/graduated from must be provided.

>4) The user can continue to fill their roster until they select 'All set', in which the app will build the team with the current roster.

>5) Once the team is built, then the application will generate an HTML file with all of the team's info stored on cards that will be displayed neatly on the page.

>6) After the application finishes the HTML file, then the program will end with a final message indicating everything has been completed succesfully. If there are ANY errors found, then an error message will be generated showing what errors have been detected within the code.

## Contributions
For contributions to further the development of the application, users can either clone the code from the repository and push into the repository or you can contact me directly via the contact information provided below

## Video Demonstration
Due to the application mainly being run using command line, there are no deployment page links that can be provided. Instead, here is a video demonstration showing how the application works and the results that are generated from the informtion provided

[Video Demonstration of Team Profiler](https://drive.google.com/file/d/1xnJ-bXBiAbsl229yy9Tu-AJR4wmjLY9z/view)

## Questions
For further questions, you can reach out to my GitHub or email me directly

Github: (https://github.com/LawrenceSB24)
Email: [Lawrsblundo22@outlook.com](lawrsblundo22@outlook.com)