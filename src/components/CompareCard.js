import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory'

const CompareCard = ({ fetchCompareObj, district1, district2 }) => {
    let compareObj = fetchCompareObj(district1.location, district2.location)
    let keys = Object.keys(compareObj)
    
    // console.log(keys)
    let graphInfo = (district) => {
        // console.log(district)
        let keyz = Object.keys(district.data)
        let graphObj = keyz.map(key => {
            // console.log('key: ', key)
            // console.log('district.data[key]', district.data[key])
            return {
                year: key,
                data: district.data[key]
            }
        })  
        return graphObj;
    } 
    console.log(graphInfo(district1))
  return(
    <div>
          <VictoryChart
              className='victory-chart'
              theme={VictoryTheme.material}>
              <VictoryAxis
                  tickValues={[0, 2, 4, 6, 8, 10]}
                  tickFormat={["'04", "'06", "'08", "'10", "'12", "'14"]} />
              <VictoryAxis
                  dependentAxis
                  tickValues={[0, .2, .4, .7, .8, 1]}
              />
              <VictoryLine
                  style={{
                      data: { stroke: "#c43a31" },
                      parent: { border: "1px solid #ccc" }
                  }}
                  data={graphInfo(district1)} x="year" y="data"
              />
              <VictoryLine
                  style={{
                      data: { stroke: "green" },
                      parent: { border: "1px solid #ccc" }
                  }}
                  data={graphInfo(district2)} x="year" y="data"
              />
          </VictoryChart>



      <p>
        {keys[0]}: {compareObj[keys[0]]} 
      </p>
      <p>
        {keys[1]}: {compareObj[keys[1]]}
      </p>
      <p>
        {keys[2]}: {compareObj[keys[2]]}
      </p>
    </div>

  )

}

export default CompareCard;