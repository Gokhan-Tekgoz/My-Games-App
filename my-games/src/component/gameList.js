import React, { Component } from 'react';

class Gamelist extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='card mb-4 shadow-sm'>
                        <img src='https://dummyimage.com/240x340/616161/000000' className='card-img-top' alt='Sample Game'/>
                        <div className='card-body'>
                            <h5 className='card-title'> Sample Game </h5>
                            <p className='card-text'> Sample Game Description </p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <button type='button' className='btn btn-md btn-outline-primary'> Delete </button>
                                <h2><span className='badge bg-secondary'> 4.8 </span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gamelist;