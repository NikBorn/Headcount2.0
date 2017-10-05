import React from 'react';
// , { Component }
// export default class Searchbar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: ''
//     };
//   }

//   render() {
//     return (
      
//         <input className='search-bar'
//                placeholder='search by district'
//                onChange={(e)=>{
//                  e.preventDefault();
//                  this.props.searchForDistricts(e.target.value)
//                }} />
      
//     );
//   }
// };

const Searchbar = ({ searchForDistricts }) => {
  return (
    
      <input className='search-bar'
             placeholder='search by district'
             onChange={(e)=>{
               e.preventDefault();
               searchForDistricts(e.target.value)
             }} />
    
  );
}

export default Searchbar;
