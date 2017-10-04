import React, { Component } from 'react';

export default class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }



    handleChange(string) {
        this.setState({ input: string }, () => {
            this.props.searchForDistricts(this.state.value)
          })
    }

    render() {
        return(
            <div className='search-section'>
                <input className='search-bar'
                        placeholder='search by district'
                        onChange={(e)=>{
                            e.preventDefault();
                            this.handleChange(e.target.value)
                        }}
                />
            </div>
        )
    }

}

