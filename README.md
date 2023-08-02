# RAWES-Data-Analysis
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

tool to get some statistical analysis and visual data representations from RAWES assessment data. (early development)

## Preview

<p align="center">
<img src="./assets/images/preview.png" width="500" alt="screenshot of site">
</p>

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Technologies](#technologies)
- [Future Development](#future-development-options)
- [Contacts](#contacts)

## Description

The idea for this app is to be able to fill out forms with data from RAWES assessments and easily create visual data representation of various types to interpret and communicate the data more easily

There are currently 3 tabs
- Info: about RAWES
- Enter Data: The RAWES sheet to fill out. There are default services, but this is customisable
- Pie Chart: Placeholder tab for a pie chart breakdown of service type

The RAWES sheet is split into 4 sections for the 4 types of service: Provisioning, Regulating, Cultural, Supporting.

## Usage

To fill out the form:
- Click on the `Enter Data` tab
- Click the red `-` button to remove a row
- Click the green`+` button to add a new row
- Enter the name of the new service in the `service` column
- Use the checkboxes to choose the value of the benfit or disbenefit
- Click `submit` at the bottom of the page to update the graphs

## Technologies

- HTML
- CSS
- JavaScript
- jQuery
- Local Storage / JSON

## Future Development Options

- When you remove all rows in a service, no way to add back again
- map doesn't work for empty titles as same
- form doesn't persist if tabs switched
- remove data box and use timestamp instead
- track changes over time
- Split data based on scale (e.g. local, regional, global)
- Research whether services with 0 value are included in calculations or omitted

## Contacts

- GitHub: [DaisyEverard](https://github.com/DaisyEverard)
- LinkedIn: [daisy-everard](https://www.linkedin.com/in/daisy-everard/)
- Email: msdeverard@gmail.com

## License

MIT License