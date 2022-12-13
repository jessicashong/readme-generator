//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
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
        message: 'What is required to install this application?',
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
        choices: ['None','MIT License','Apache License 2.0','GNU General Public License v3.0'],
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
];

//then run data through genereateREADME function and write file with user input
const writeREADME = (data) => {
    console.log(data);
    const readmeContent = generateREADME(data);
    
    fs.writeFile('./assets/generatedREADME.md', readmeContent, (err) => 
    err ? console.log(err) : console.log('Success!'))
};

//using license input, create license badge 
const licenseBadge = (data) => {
    let badge = '';
    if (data === 'MIT License'){
        badge = '![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)';
        console.log(badge);
        return badge;
    } else if (data === 'Apache License 2.0'){
        badge = '![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)';
        console.log(badge);
        return badge;
    } else if (data === 'GNU General Public License v3.0'){
        badge = '![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20GPLv3.0-brightgreen)';
        console.log(badge);
        return badge;
    } else {
        badge = ''
        console.log(badge);
        return badge;
    }
};

//using license input, create link with license information
const licenseLink = (data) => {
    let link = '';
    if (data === 'MIT License'){
        link = 'For more information about this license, visit [https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/).';
        console.log(link);
        return link;
    } else if (data === 'Apache License 2.0'){
        link = 'For more information about this license, visit [https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/).';
        console.log(link);
        return link;
    } else if (data === 'GNU General Public License v3.0'){
        link = 'For more information about this license, visit [https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/).';
        console.log(link);
        return link;
    } else {
        link = ''
        console.log(link);
        return link;
    }
}

//readme skeleton--replace with user input
const generateREADME = (data) => 
`# ${data.title}

## Description
${data.description}

${licenseBadge(data.license)}


## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contributions}

## Tests
${data.tests}

## Questions 
If you have futher questions or would like to give any feedback, please feel free to contact me.

GitHub: [http://www.github.com/${data.github}](http://www.github.com/${data.github})

Email: [${data.contact}](${data.contact})

## License
${data.license} 

${licenseLink(data.license)}
`;

//function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            writeREADME(data)
        })
};

// Function call to initialize app
init();