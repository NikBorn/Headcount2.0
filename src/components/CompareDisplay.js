import React from 'react';
import GraphCard from './GraphCard.js';
import FullCompareSection from './FullCompareSection.js'

const CompareDisplay = ({ compareArray, compareObj, handleSelected} ) => {
    // console.log('compareArray', compareArray.length)
    // console.log('compareObj: ', compareObj)
    let dist1 = compareArray[0]
    let dist2 = compareArray[1]


  return(
      <div className='compare-display'>
      
          {compareArray.length === 2 &&
              <FullCompareSection    district1={dist1}
                                     district2={dist2}
                                    compareObj={compareObj} 
                                handleSelected={handleSelected}/>
          }

          {compareArray.length === 1 &&
            <GraphCard districtData={dist1.data}
                   districtLocation={dist1.location}
                     handleSelected={handleSelected}
                                 id={dist1.id}
                                key={dist1.id}
                         isSelected={dist1.isSelected}
              />
          }


      </div>
  )
}

export default CompareDisplay;