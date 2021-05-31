const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
        {
            type: 'input',
            name: 'gitName',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project repo?',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the path to a screenshot of your project:',
        },
        {
            type: 'input',
            name: 'year',
            message: 'Enter the copywrite year for your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.  Include the following info as appropriate:\n- What was your motivation?\n- Why did you buiild the project?\n- What problem does it solve?\n- What did you learn?\n- What makes your project stand out?\n',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter information on how someone should install your project:\n',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information on how a user would use your project:\n',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Give credit for the outside resouces you used (libraries, modules, API\'s, etc.):\n',
        },
        {
            
        }
    ])
};

const generateReadme = (answers) =>
`# ${answers.projectName}
## Description
${answers.description}
![Screenshot of the apllication or project](${answers.screenshot})
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Credits
${answers.credits}
## Questions
If you have any questions you can contact me through my github user profile: https://github.com/${answers.gitName}\n
or by emailing me at ${answers.email}
## License
${answers.license}
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features

## How to Contribute

## Tests
`;

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();