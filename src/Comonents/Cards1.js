import React from 'react'
import Cards from './Cards';
import img1 from "../image/mails-removebg-preview.png"
import img2 from "../image/thumb.jpeg"
import img3 from "../image/train.png"
import img4 from "../image/new mail.jpeg"


const Cards1 = () => {

    const data = [

        {
            img1: img1,
            title: "Email Newsletters",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },
        {   img2:img2,
            title: "Acquistion Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {    
            img3:img3,
            title: "Retention Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {   
            img4:img4,
            title: "Promotional Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {    
            img1:img1,
            title: "Email Newsletters",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {   
            img2:img2,
            title: "Acquistion Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {   
            img3:img3,
            title: "Retention Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        },

        {   
            img4:img4,
            title: "Promotional Emails",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit",
            btn: "Read More"
        }
    ]


    return (
        <div className='container'>
            <div className='text-center'>
                <h5>Our Service</h5>
                <h1 className='fw-bold'>What We Can Do For You</h1>
                <p>Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.</p>
            </div>
            <div className='row'>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[0].img1} title={data[0].title} para={data[0].para} btn={data[0].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[1].img2} title={data[1].title} para={data[1].para} btn={data[1].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[2].img3} title={data[2].title} para={data[2].para} btn={data[2].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[3].img4} title={data[3].title} para={data[3].para} btn={data[3].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[4].img1} title={data[4].title} para={data[4].para} btn={data[4].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[5].img2} title={data[5].title} para={data[5].para} btn={data[5].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[6].img3} title={data[6].title} para={data[6].para} btn={data[6].btn} />
                </div>

                <div className='col-12 col-md-6 col-xl-3'>
                    <Cards image={data[7].img4} title={data[7].title} para={data[7].para} btn={data[7].btn} />
                </div>


            </div>

        </div>
    )
}

export default Cards1;
