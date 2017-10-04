import React from 'react';
import ReactDOM from 'react-dom';
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryTheme, VictoryTooltip } from 'victory';

const GraphCard = ( { districtData, districtLocation } ) => {
  let keys = Object.keys(districtData)
  let districtInfo = keys.map((key, i)=>{
    let stylez = districtData[key] < .5 ? 'table-below' : 'table-above'
    return <div className='district-table'>
             <div className='table-header'>
               { key }
             </div>
             <div className={ stylez }>
               { districtData[key] }
             </div>
           </div>
    })

  return (
    <div className='graph-card'>
      <div className='card-header'>
        <h4>{ districtLocation }</h4> 
      </div>
      <article>
        { districtInfo }
      </article>
    </div>
    )
}

export default GraphCard;



{/* <div className='card-body'>
<div className='chart'>
<VictoryChart 
    className='victory-chart'
    theme={VictoryTheme.material}>
<VictoryAxis
    tickValues={[0, 2, 4, 6, 8, 10]}
    tickFormat={["'04", "'06", "'08", "'10", "'12", "'14"]}/>
<VictoryAxis    
    dependentAxis
    tickValues={[0, .2, .4, .7, .8, 1]}
    /> 
<VictoryLine
    style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc"}}}  
    data={graphInfoData} x="year" y="data" 
/>
</VictoryChart> */}

// let graphInfo = keys.map(key=>{
//     return { year: key,
//                 data: districtData[key]}
//     })
//   let graphInfoData = keys.map(key=>{
//         return { data: districtData[key]}
//     })