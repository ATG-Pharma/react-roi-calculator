![ATG Pharma Inc Logo](https://atg-online-resources.s3.amazonaws.com/logo.png)

# react-roi-calculator

> Return on Investment (ROI) React Component to company product with direct competition. Contains table and slide to show how ROI changes per requirements. Chart coming soon. Made for manufacturing B2B companies

![Screen Shot of ROI Calculator Example](https://atg-online-resources.s3.amazonaws.com/roiScreenShot.png)

[![NPM](https://img.shields.io/npm/v/react-roi-calculator.svg)](https://www.npmjs.com/package/react-roi-calculator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-roi-calculator
```

## Usage

```jsx
import React from 'react';

import { ROICalculator } from 'react-roi-calculator';
import 'react-roi-calculator/dist/index.css';

const App = () => {
  return (
    <ROICalculator
      productName='RoboCAP'
      competitorProduct='Manual Hand filling'
      productArray={productArray}
      competitorInformation={competitorInformation}
      defaultProductIndex={1}
      companyProductStats={companyProductStats}
      companyColour='#0076BE'
      sliderLowerLimit={4000}
      sliderUpperLimit={250000}
    />
  );
};

const companyProductStats = {
  outputPer: 1,
  numOfEmployees: 2,
  wage: 15,
  leasingCost: 800
};

const competitorInformation = {
  numOfEmployees: 5,
  wage: 15,
  outputPerEmployee: 60
};

const productArray = [
  { output: 3000, name: 'Capsules' },
  { output: 1200, name: 'Bottles/Tinctures' },
  { output: 1500, name: 'Candy' },
  { output: 600, name: 'Creams' },
  { output: 600, name: 'Salves' },
  { output: 1200, name: 'Cartridges' }
];

export default App;
```

## Component Inputs

1. productName: string value for your product name

2. competitorProduct: string value for the competing product

3. productArray: array containing objects with the following details about each of your products

- name
- output (hourly)

4. competitorInformation: contains objects with the following details about each of your competitor product

- numOfEmployees
- wage
- outputPerEmployee (hourly)

5. companyProductStats: contains objects with the following details about each of your company's product operation needs

- outputPer (How many of your products are the following stats for)
- numOfEmployees (needed to operate the product)
- wage (per employee)
- leasingCost (or monthly cost of the product)

6. sliderLowerLimit: lower limit for slider

7. sliderUpperLimit: upper limit for slider

## License

Made by [ATG Pharma](https://www.atgpharma.com/) Inc.

MIT © [jahmad7](https://github.com/jahmad7)
