//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//readme skeleton--replace with user input
const generateREADME = ({ title, description, installation, usage, contributions, tests, license, github, contact }) => 
`# ${title}

## Description
${description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## How to Contribute
${contributions}

## Tests
${tests}

## Questions 
If you have futher questions or would like to give any feedback, please feel free to contact me through email.
[GitHub: ](http://www.github.com/${github});
[Email: ](${contact})

## License
${license}    
`;

// array of questions for user input
inquirer
    .prompt ([
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Please enter a description of your application.',
        type: 'input',
        name: 'description'
    },
    {
        message: 'What are the steps required to install this application?',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'Please provide instructions and examples for use.',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'Please provide guidelines of how to contibute.',
        type: 'input',
        name: 'contributions'
    },
    {
        message: 'Please provide any test examples and how to run them.',
        type: 'input',
        name: 'tests'
    },
    {
        message: 'Please choose a license.',
        type: 'list',
        choices: ['MIT License','Apache License 2.0','Mozilla Public License 2.0','GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','The Unlicense 2.0'],
        name: 'license'
    },
    {
        message: 'Please provide your GitHub username for any further questions.',
        type: 'input',
        name: 'github'
    },
    {
        message: 'Please provide an email address for any further questions.',
        type: 'input',
        name: 'contact'
    }
])
//conditional: if nothing was entered for section, omit from readme
.then((data) => {
if (data === '') {

}
const readmeContent = generateREADME(data);

fs.writeFile('README.md', readmeContent, (err) => 
    err ? console.log(err) : console.log('Success!'))
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
