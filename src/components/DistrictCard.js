import React from 'react';
import PropTypes from 'prop-types';

const DistrictCard = ( 
  { districtData, districtLocation, handleSelected, id, isSelected } ) => {
  let keys = Object.keys(districtData);
  let districtInfo = keys.map((key, index)=>{
    let stylez = districtData[key] < .5 ? 'table-below' : 'table-above';
    
    return <div className='district-table' key={Date.now()+index}>
             <div className='table-header'>
               { key }
             </div>
             <div className={ stylez }>
               { districtData[key] }
             </div>
           </div>;
  });
  let cardStyle = isSelected ? 'card-header-selected' : 'card-header';
  
  return (
    <div className='graph-card'
         key={ id }
         onClick={(event)=>{
           event.preventDefault();
           handleSelected(districtLocation);
         }}>
      <div className={cardStyle}>
        <h4>{ districtLocation }</h4> 
      </div>
      <article>
        { districtInfo }
      </article>
    </div>
    );
};

DistrictCard.propTypes = {
  districtData: PropTypes.object.isRequired,
  districtLocation: PropTypes.string.isRequired,
  handleSelected: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default DistrictCard;

