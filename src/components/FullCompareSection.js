import React from 'react';
import GraphCard from './GraphCard.js';
import CompareCard from './CompareCard.js';


const FullCompareSection = ({ district1, district2, fetchCompareObj, handleSelected }) => {
        // console.log()
    return (
        <div className='full-compare'>
            <GraphCard districtData={district1.data}
                   districtLocation={district1.location}
                     handleSelected={handleSelected}
                                 id={district1.id}
                                key={district1.id}
                         isSelected={district1.isSelected}
            />
            <CompareCard fetchCompareObj={fetchCompareObj}
                               district1={district1}
                               district2={district2} />
            <GraphCard districtData={district2.data}
                districtLocation={district2.location}
                handleSelected={handleSelected}
                id={district2.id}
                key={district2.id}
                isSelected={district2.isSelected}
            />
        </div>
    )
}

export default FullCompareSection;