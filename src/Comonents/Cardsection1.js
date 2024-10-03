import React from 'react'
import Cardsection from './Cardsection'
import img1 from "../image/mails-removebg-preview.png"
import img2 from "../image/builder.jpeg"
import img3 from "../image/new mail.jpeg"
import img4 from "../image/manager.png"

const Cardsection1 = () => {

    const data = [
        {
            img1: img1,
            title: "Email Marketing",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit"
        },
        {
            img2: img2,
            title: "Email Builder",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit"
        },
        {
            img3: img3,
            title: "Customer Builder",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit"
        },
        {
            img4: img4,
            title: "Campaign Manager",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit"
        }
    ]

    return (

        <div className='container'>

            <div className='text-center my-5'>
                <h5>Our Feature</h5>
                <h1 className='fw-bold'>Important Features For Email Marketing</h1>
                <p>Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.</p>
                
            </div>

            <div className='row'>
                <div className='col-12 col-md-6 col-xl-3'>
                    <Cardsection image={data[0].img1} title={data[0].title} para={data[0].para} />
                </div>
                <div className='col-12 col-md-6 col-xl-3'>
                    <Cardsection image={data[1].img2} title={data[1].title} para={data[1].para} />

                </div>
                <div className='col-12 col-md-6 col-xl-3'>
                    <Cardsection image={data[2].img3} title={data[2].title} para={data[2].para} />

                </div>
                <div className='col-12 col-md-6 col-xl-3'>
                    <Cardsection image={data[3].img4} title={data[3].title} para={data[3].para} />

                </div>
            </div>
        </div>
    )
}

export default Cardsection1
