import React from 'react';
import DistrictCard from './DistrictCard.js';
import PropTypes from 'prop-types';


const CardCatalog = ( { schoolDistricts, handleSelected } ) => {

  let districtGraphs = schoolDistricts.map( district =>{
    return (
      <DistrictCard districtData={ district.data } 
                 districtLocation={ district.location }
                 handleSelected={ handleSelected }
                 id={ district.id } 
                 key={ district.id } 
                 isSelected={ district.isSelected }
                 />
    );
  });

  return (
        <div className='graph-catalog'>
            { districtGraphs }
        </div>
  );
};

CardCatalog.PropTypes = {
  schoolDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelected: PropTypes.func.isRequired
};

export default CardCatalog;
