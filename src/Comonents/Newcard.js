import React from 'react'

const Newcard = (props) => {
    return (
        <div className='panu text-center my-3'>
            <div className="card">
                <img src={props.image} className="card-img-top img-fluid" alt="image not found" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.para}</p>
                    <a href="#" className="btn">{props.btn}</a>
                </div>
            </div>
        </div>
    )
}

export default Newcard;
