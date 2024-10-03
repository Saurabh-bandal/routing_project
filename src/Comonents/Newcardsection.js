import React from 'react'
import Newcard from './Newcard'
import img1 from "../image/blog-1.png"
import img2 from "../image/blog-2.png"
import img3 from "../image/blog-3.png"
import  img4 from "../image/blog-4.png"

const Newcardsection = () => {

    const data=[
        {   
            img1:img1,
            title:"Dolor, sit amet consectetur adipisicing",
            para:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
            btn:"Read More"
        },
        {   
            img2:img2,
            title:"Dolor, sit amet consectetur adipisicing",
            para:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
            btn:"Read More"
        },
        {   
            img3:img3,
            title:"Dolor, sit amet consectetur adipisicing",
            para:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
            btn:"Read More"
        },
        {   img4:img4,
            title:"Dolor, sit amet consectetur adipisicing",
            para:"Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
            btn:"Read More"
        }
    ]

  return (
    <div className='container'>

        <div className='row'>

            <div className='col-12 col-md-6 col-xl-3'>
                <Newcard image={data[0].img1} title={data[0].title} para={data[0].para} btn={data[0].btn}/>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
            <Newcard image={data[1].img2} title={data[1].title} para={data[1].para} btn={data[1].btn}/>

            </div>
            <div className='col-12 col-md-6 col-xl-3'>
            <Newcard image={data[2].img3} title={data[2].title} para={data[2].para} btn={data[2].btn}/>

            </div>
            <div className='col-12 col-md-6 col-xl-3'>
            <Newcard image={data[3].img4} title={data[3].title} para={data[3].para} btn={data[3].btn}/>

            </div>

        </div>
       
    </div>
  )
}

export default Newcardsection;
