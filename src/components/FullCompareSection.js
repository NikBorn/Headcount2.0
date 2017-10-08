import React from 'react';
import GraphCard from './GraphCard.js';
import CompareCard from './CompareCard.js';
import PropTypes from 'prop-types';



const FullCompareSection = ({ district1, district2, fetchCompareObj, handleSelected }) => {
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
    );
};

FullCompareSection.PropTypes = {
  district1: PropTypes.object.isRequired,
  district2: PropTypes.object.isRequired,
  fetchCompareObj: PropTypes.func.isRequired,
  handleSelected: PropTypes.func.isRequired,
}

export default FullCompareSection;