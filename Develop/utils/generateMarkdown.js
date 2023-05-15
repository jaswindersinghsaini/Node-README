// Create an array with licences similar to choices

const licenseArray = [
  "MIT License",
  "GNU Lesser General Public License v3.0",
  "Mozilla Public License 2.0",
  "GNU Affero General Public License v3.0",
  "The Unlicense",
  "Apache License 2.0",
  "GNU General Public License v3.0",
];

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == licenseArray[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == licenseArray[1]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license == licenseArray[2]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == licenseArray[3]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license == licenseArray[4]) {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license == licenseArray[5]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == licenseArray[6]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/MIT)`;
  } else if (license == licenseArray[1]) {
    return `[${licenseArray[1]}](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license == licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == licenseArray[3]) {
    return `[${licenseArray[3]}](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license == licenseArray[4]) {
    return `[${licenseArray[4]}](http://unlicense.org/)`;
  } else if (license == licenseArray[5]) {
    return `[${licenseArray[5]}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == licenseArray[6]) {
    return `[${licenseArray[6]}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}
// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Badges
   ${renderLicenseBadge(data.license)}

   ## Table of Contents
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributors](#contributors)
   * [Tests](#tests)
   * [Questions](#questions)

   ## Description
   ${data.description}


   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ${renderLicenseLink(data.license)}

   ## Contributors
   ${data.contributors}

   ## Tests
   ${data.tests}

   ## Questions?
   Github Profile:
   [${data.username}](https://github.com/${data.username}) 


   #For additional questions:
   ${data.email}


 `;
}

module.exports = generateMarkdown;
