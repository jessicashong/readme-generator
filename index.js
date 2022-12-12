// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//readme frame--replace with user input
const generateREADME = ({ title, description, installation, usage, contributions, tests, license, contact }) => 
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
    If you have futher questions or would like to give any feedback, please email me at ${contact}.
    
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
        type: 'input',
        name: 'license'
    },
    {
        message: 'Please provide an email address for contacting purposes.',
        type: 'input',
        name: 'contact'
    }
])
.then((data) => {
const readmeContent = generateREADME(data);

fs.writeFile('README.md', readmeContent, (err) => 
    err ? console.log(err) : console.log('Success!'))
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
