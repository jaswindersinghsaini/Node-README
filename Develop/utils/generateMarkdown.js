// Function that returns the Badge

function renderLicenseBadge(license) {
  if (!license || license == "None") {
    return "No Badge - No License Selected";
  } else {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
}

// //  Function that returns the license link

function renderLicenseLink(license) {
  if (license == "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license == "LGPL_v3") {
    return `(https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license == "MPL_2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == "AGPL_v3") {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license == "Unlicense") {
    return `(http://unlicense.org/)`;
  } else if (license == "Apache_2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPLv3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "None") {
    return "No License Selected";
  }
}
// Function that returns the license section of README

function renderLicenseSection(license) {
  if (license == "None") {
    return "No License Selected";
  } else {
    return `For more info read about this here ${renderLicenseLink(license)}`;
  }
}
// Function to generate markdown for README
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
   ${renderLicenseSection(data.license)}

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
