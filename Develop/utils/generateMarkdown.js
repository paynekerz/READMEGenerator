
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE"){
    return `\n * [License](#license)\n`
  }
  return ""
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE"){
    return `\n ## License
    This project is licensed under the ${license}
    `
  }
  return ""
}


function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.contents}

  ## Installation Process
  ${data.install}

  ## Usage Information
  ${data.usage}

  ## License Information
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.contribtuions}

  ## Testing Information
  ${data.tests}

  ## Questions
  ${data.question}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
