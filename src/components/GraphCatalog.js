import React from 'react';
import GraphCard from './GraphCard.js';
import PropTypes from 'prop-types';


const GraphCatalog = ( { schoolDistricts, handleSelected } ) => {

  let districtGraphs = schoolDistricts.map( district =>{
    return (
      <GraphCard districtData={ district.data } 
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

GraphCatalog.PropTypes = {
  schoolDistricts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelected: PropTypes.func.isRequired
}

export default GraphCatalog;
