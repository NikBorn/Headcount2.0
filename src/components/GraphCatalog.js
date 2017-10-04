import React from 'react';
import GraphCard from './GraphCard.js'

const GraphCatalog = ( { schoolDistricts } ) => {

    
    
    let districtGraphs = schoolDistricts.map( district =>{
        return(
            <GraphCard key={ district.id } districtData={ district.data } districtLocation={ district.location }/>
        )
    })

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