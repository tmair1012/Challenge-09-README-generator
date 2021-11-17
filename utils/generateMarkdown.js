// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT' || license === 'GNU'){
    return `![License](https://img.shields.io/static/v1?label=liscense&message=${license}&color=green)`
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`
  }
  else if(license === 'GNU'){
    return `https://www.gnu.org/licenses/licenses.en.html`
  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT' || license === 'GNU'){
    return `(#license)`
  }
  else{
    return ''
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License]${renderLicenseSection(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

### Installation:
${data.installation}

### Usage:
${data.usage}

### Contributions:
${data.contribution} Github: ${data.github}

### License:
${data.license}

### Link to License Information"
${renderLicenseLink(data.license)}

### Email:
${data.email}
`
}

module.exports = generateMarkdown;
