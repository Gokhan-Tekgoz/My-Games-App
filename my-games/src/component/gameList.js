import React from 'react';

const Gamelist = (props) => {


    return (
        <div className='row'>

                {props.games.map((game) => (

                    <div className='col-lg-4' key={game.id}>
                        <div className='card mb-4 shadow-sm'>
                            <img src={game.imageURL} className='card-img-top' alt='Sample Game' />
                            <div className='card-body'>
                                <h5 className='card-title'> {game.name} </h5>
                                <p className='card-text'>  {game.overview} </p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={(event) => props.deletegameProps(game)} className='btn btn-md btn-outline-primary'> Delete </button>
                                    <h2><span className='badge bg-secondary'> {game.rating} </span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
    );
};

export default Gamelist;