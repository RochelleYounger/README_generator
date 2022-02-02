// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![license: ${license}](https://img.shields.io/badge/License-${badge}-${color})
# ${title}

## Description

${description}


## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Questions](#questions)


## Installation

${installation}


## Usage

${usage}


## License

This application is licensed under ${license}.


## Contributing

${contributing}


## Questions

  Github: [${github}](https://github.com/${github})
  Contact Me: [${email}](mailto:${email})

---
© ${new Date().getFullYear()} ${copyright}`;
}

module.exports = generateMarkdown;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.