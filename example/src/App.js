import React from 'react'

import { ROICalculator } from 'react-roi-calculator'
import 'react-roi-calculator/dist/index.css'

const App = () => {
  return <ROICalculator 
    productName="RoboCAP"
    competitorProduct="Manual Hand filling"
    productArray={productArray}
    competitorInformation={competitorInformation}
    defaultProductIndex={1}
    companyProductStats={companyProductStats}
    companyColour='#0076BE'
    sliderLowerLimit={4000}
    sliderUpperLimit={250000}
  />
}

const companyProductStats = {
  outputPer: 1,
  numOfEmployees: 2,
  wage: 15,
  leasingCost: 800,
}

const competitorInformation = {
  numOfEmployees: 5,
  wage: 15,
  outputPerEmployee: 60
}

const productArray = [
  { output: 3000, name: 'Capsules' },
  { output: 1200, name: 'Bottles/Tinctures' },
  { output: 1500, name: 'Candy' },
  { output: 600, name: 'Creams' },
  { output: 600, name: 'Salves' },
  { output: 1200, name: 'Cartridges' }
]

export default App
