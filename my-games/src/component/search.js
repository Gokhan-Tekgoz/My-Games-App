import React, { Component } from 'react';

class Search extends Component {


    clicksubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.clicksubmit}>
                <div className='form-row mb-4'>
                    <div className='col-12'>
                        <input onChange={this.props.propSearch} type="text" className='form-control' placeholder='Search a game'/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;