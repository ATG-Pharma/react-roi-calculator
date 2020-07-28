import React from 'react'

// STYLES
import { ChartContainer, Table } from './styles'

const RoiChart = ({ data }) => {
  return (
    <ChartContainer>
      <h4>Your Return</h4>
      <Table>
        <tbody>
          {data.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{entry.title}</td>
                <td>{entry.competitor}</td>
                <td>{entry.company}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </ChartContainer>
  )
}

export default RoiChart
