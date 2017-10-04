import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryTheme, VictoryTooltip } from 'victory';

const GraphCard = ( { districtData, districtLocation } ) => {
    let keys = Object.keys(districtData)
    let graphInfo = keys.map(key=>{
        return { year: key,
                data: districtData[key]}
    })
    let graphInfoData = keys.map(key=>{
        return { data: districtData[key]}
    })
    let districtInfo = keys.map((key, i)=>{
        return <div className='district-table'>
                 
                     <div className='table-header'>
                        { key }
                     </div>
               
                     <div className='table-footer'>
                        { districtData[key] }
                    </div>
              
               </div>
    })

    return(
        <div className='graph-card'>
            <h3>{ districtLocation }</h3>
            <div className='card-body'>
                <div className='chart'>
                <VictoryChart 
                    className='victory-chart'
                    theme={VictoryTheme.material}>
                <VictoryAxis
                    tickValues={[0, 2, 4, 6, 8, 10]}
                    tickFormat={["'04", "'06", "'08", "'10", "'12", "'14"]}/>
                <VictoryAxis    
                    dependentAxis
                    tickValues={[0, .2, .4, .6, .8, 1]}
                    /> 
                <VictoryLine
                    labels={(d) => d.y}
                    labelComponent={<VictoryTooltip/>}
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}}}  
                    data={graphInfoData} x="year" y="data" label='automatically'
                />
                </VictoryChart>
                </div>
                <article>
                    { districtInfo }
                </article>
            </div>
        </div>
    )
}

export default GraphCard;