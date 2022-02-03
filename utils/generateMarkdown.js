// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  if (!license) {
      return "";
  }
  return `
  [![license: ${license}](https://img.shields.io/badge/License-${badgeLicense(license)}-${color})](https://opensource.org/licenses/${linkLicense(license)})
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `
  * [License](#license)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  }
  return `


## License
  
  This application is licensed under [${license}](https://opensource.org/licenses/${linkLicense(license)}).`;
};

function renderTestsLink(tests) {
  if (!tests) {
    return "";
  }
  return `
  * [Tests](#tests)`;
};

function renderTestsSection(tests) {
  if (!tests) {
    return ""
  }
  return`


## Tests

${tests}`;
};

// alter license to be compatible with badge link
function badgeLicense(license) {
  let badge = license.replace(/ /gi, "_").replace(/-/gi, "--");
  return badge;
};
// alter license to be compatible with license link
function linkLicense(license) {
  let link = license.replace(/ /gi, "-");
  return link;
};

// TODO: Create a function to generate markdown for README
module.exports = data => {
  const { license, title, color, description, installation, usage, contributing, tests, github, email } = data;
  return `${renderLicenseBadge(license, color)}
# ${title}

## Description

${description}


**Table of Contents**

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)${renderLicenseLink(license)}${renderTestsLink(tests)}
  * [Questions](#questions)


## Installation

${installation}


## Usage

${usage}


## Contributing

${contributing}${renderTestsSection(tests)}${renderLicenseSection(license)}


## Questions

Github: [${github}](https://github.com/${github})

Contact Me: [${email}](mailto:${email})

---
© ${new Date().getFullYear()} ${github}`;
};



// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.