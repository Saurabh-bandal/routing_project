import React from 'react'

const Cardsection = (props) => {
    return (
        <div className='container text-center saurya my-5'>
            <div class="card">
                <img src={props.image} className="card-img-top img-fluid" alt="image not found"/>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{props.title}</h5>
                        <p class="card-text">{props.para}</p>
                    </div>
            </div>
            
        </div>
        
    )
}

export default Cardsection;
