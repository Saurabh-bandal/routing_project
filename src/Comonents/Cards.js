import React from 'react'

const Cards = (props) => {
    return (
        <div className='container my-4 saurya text-center'>
            <div className="card">
                <img src={props.image} className="card-img-top img-fluid" alt="image not found"/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text">{props.para}</p>
                        <a href="#" className="btn">{props.btn}</a>
                    </div>
            </div>
        </div>
    )
}

export default Cards;
