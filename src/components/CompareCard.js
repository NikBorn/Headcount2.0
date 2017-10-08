import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';
import PropTypes from 'prop-types';


const CompareCard = ({ fetchCompareObj, district1, district2 }) => {
  let compareObj = fetchCompareObj(district1.location, district2.location);
  let keys = Object.keys(compareObj);
    
  let graphInfo = (district) => {
    let keyz = Object.keys(district.data);
    let graphObj = keyz.map(key => {
      return {
        year: key,
        data: district.data[key]
      };
    });  
    return graphObj;

  };

  return (
    <div className='line-chart'>
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
            {keys[0].toUpperCase()}: {compareObj[keys[0]]}
        </p>  
        <p>
          {keys[2].toUpperCase()}: {compareObj[keys[2]]}
        </p>     
        <p>
            {keys[1].toUpperCase()}: {compareObj[keys[1]]}
        </p>  

    </div>

  );

};
// fetchCompareObj, district1, district2
CompareCard.PropTypes = {
  fetchCompareObj: PropTypes.func.isRequired,
  district1: PropTypes.object.isRequired,
  district2: PropTypes.object.isRequired,
};

export default CompareCard;