// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
  } else if (license === "GPL v3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    return licenseBadge;
  }  else if (license === "MPL 2.0") {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    return licenseBadge;
  } else if (license === "Unlicense") {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    return licenseBadge;
  } else if (license === "WTFPL") {
    licenseBadge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    return licenseBadge;
  } else {
    return [];
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    licenseLink = "[Link to License](https://www.apache.org/licenses/LICENSE-2.0)";
    return licenseLink;
  } else if (license === "GPL v3") {
    licenseLink = "[Link to License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    return licenseLink;
  } else if (license === "MPL 2.0") {
    licenseLink = "[Link to License](https://www.mozilla.org/en-US/MPL/2.0/)";
    return licenseLink;
  } else if (license === "Unlicense") {
    licenseLink = "[Link to License](https://unlicense.org/)";
    return licenseLink;
  } else if (license === "WTFPL") {
    licenseLink = "[Link to License](http://www.wtfpl.net/)";
    return licenseLink;
  } else {
    return [];
  };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
