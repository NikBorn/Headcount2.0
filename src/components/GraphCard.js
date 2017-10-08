import React from 'react';
import PropTypes from 'prop-types';

const GraphCard = ( { districtData, districtLocation, handleSelected, id, isSelected } ) => {
  let keys = Object.keys(districtData);
  let districtInfo = keys.map((key, i)=>{
    let stylez = districtData[key] < .5 ? 'table-below' : 'table-above';
    
    return <div className='district-table' key={Date.now()+i}>
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
         onClick={(e)=>{
           e.preventDefault();
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

GraphCard.propTypes = {
  districtData: PropTypes.object.isRequired,
  districtLocation: PropTypes.string.isRequired,
  handleSelected: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
}
export default GraphCard;

