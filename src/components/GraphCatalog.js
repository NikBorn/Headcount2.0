import React from 'react';
import GraphCard from './GraphCard.js'

const GraphCatalog = ( { schoolDistricts, handleSelected } ) => {

    
    
  let districtGraphs = schoolDistricts.map( district =>{
    return (
      <GraphCard districtData={ district.data } 
                 districtLocation={ district.location }
                 handleSelected={ handleSelected }
                 id={ district.id } 
                 key={ district.id } 
                 />
    );
  });

    return(
        <div className='graph-catalog'>
            { districtGraphs }
        </div>
    )
}

export default GraphCatalog;



// const districtArray = districtData.map(district=> {
//     return <Card key={district.id} data={district.data} location={district.location} addCompare={addCompare} />
//   })

//   return (
//     <div className='card-container'>
//       { districtArray }
//     </div>
//   )
// }