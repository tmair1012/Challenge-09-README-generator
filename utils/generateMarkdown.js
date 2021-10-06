// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (license === 'MIT') {
    console.log('we got your badge');
    badge = 'badge image goes here';
  }
}
module.exports = renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.badge}
  ## Description: 
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

### Installation:
${data.installation}

### Usage:
${data.usage}

### Contributions:
${data.contributions} + ${data.github}

### License:
${data.license}
`;
}

module.exports = generateMarkdown;
