import React, { useState } from 'react'
import CallToAction from './callToAction'
import RoiChart from './roiChart'

// STYLES
import {
  Container,
  Header,
  RoiSection,
  ProductionAndCall,
  ProductionVariables,
  ProductOptions,
  Variable,
  Range
} from './styles'

export const ROICalculator = ({
  productName,
  competitorProduct,
  productArray,
  defaultProductIndex,
  companyProductStats,
  competitorInformation,
  companyColour,
  sliderLowerLimit,
  sliderUpperLimit
}) => {
  const [desiredMonthlyOutput, setDesiredMonthlyOutput] = useState(48)
  const [selectedProduct, setSelectedProduct] = useState({
    value: defaultProductIndex + 1,
    label: productArray[defaultProductIndex].name
  })
  const [productStats, setProductStats] = useState({
    ...companyProductStats,
    productOutput: productArray[selectedProduct.value - 1].output
  })

  const updateDesiredMonthlyOutput = (event) => {
    setDesiredMonthlyOutput(event.target.value)
  }

  const handleFillingValueChange = (selectedOption) => {
    setSelectedProduct(selectedOption)
    setProductStats({
      ...productStats,
      productOutput: productArray[selectedProduct.value - 1].output
    })
  }

  const createCommaNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // CALCULATION
  const hoursForProduct =
    (desiredMonthlyOutput * 1000) / productStats.productOutput

  const costToRunProductPerHour =
    companyProductStats.numOfEmployees * companyProductStats.wage

  const productMonthlyCost =
    companyProductStats.leasingCost * companyProductStats.outputPer +
    costToRunProductPerHour * hoursForProduct

  const competitorRequiredHours =
    (desiredMonthlyOutput * 1000) /
    (competitorInformation.numOfEmployees *
      competitorInformation.outputPerEmployee)

  const competitorHourlyCost =
    competitorInformation.numOfEmployees * competitorInformation.wage

  const handFillMonthlyCost = competitorHourlyCost * competitorRequiredHours

  const difference = createCommaNumber(handFillMonthlyCost - productMonthlyCost)

  const options = productArray.map((product, index) => {
    return { value: index, label: product.name }
  })

  const table = [
    {
      title: null,
      competitor: competitorProduct,
      company: productName
    },
    {
      title: 'Employees',
      competitor: competitorInformation.numOfEmployees,
      company:
        companyProductStats.numOfEmployees * companyProductStats.outputPer
    },
    {
      title: 'Hours',
      competitor: Math.round(
        competitorRequiredHours * competitorInformation.numOfEmployees
      ),
      company: Math.round(hoursForProduct)
    },
    {
      title: 'Wage / Lease',
      competitor: `$${competitorInformation.wage}/Hour`,
      company: `$${Math.round(hoursForProduct)}/${productName}/Month`
    },
    {
      title: 'Monthly Cost',
      competitor: createCommaNumber(handFillMonthlyCost),
      company: createCommaNumber(productMonthlyCost)
    }
  ]

  return (
    <Container companyColour={companyColour}>
      <Header>
        <h1>Return On Investment Calculator</h1>
        <p>
          Use our ROI Calculator to see how much money you could save switching
          from {competitorProduct} to {productName}
        </p>
      </Header>
      <RoiSection>
        <ProductionAndCall>
          <h2>Your Production</h2>
          <ProductionVariables>
            <Variable>
              <label>Product: </label>
              <ProductOptions
                value={selectedProduct}
                options={options}
                onChange={handleFillingValueChange}
              />
            </Variable>
            <Variable>
              <label>Monthly Output: {desiredMonthlyOutput},000 </label>
              <input
                type='range'
                min='4'
                max='250'
                value={desiredMonthlyOutput}
                onChange={updateDesiredMonthlyOutput}
              />
              <Range>
                <span>{sliderLowerLimit}</span>
                <span>{createCommaNumber(sliderUpperLimit)}</span>
              </Range>
            </Variable>
          </ProductionVariables>
          <CallToAction
            productName={productName}
            difference={difference}
            mobile={false}
          />
        </ProductionAndCall>
        <RoiChart data={table} />
      </RoiSection>
    </Container>
  )
}
