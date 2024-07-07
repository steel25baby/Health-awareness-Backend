import React from 'react'
import service1 from "../../assets/sample1.jpeg"
import service2 from "../../assets/sample2.jpeg"
import service3 from "../../assets/sample3.jpeg"
import service4 from "../../assets/sample4.jpeg"
import service5 from "../../assets/sample5.jpeg"
import service6 from "../../assets/sample6.jpeg"

const Sampleservices = () => {
  return (
    <>
    <div className='sample-services-heading'> 
            <h1>sample services</h1>
        </div>
    <section className='Sample-services'>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service1} alt="" />
            </div>
            <div className='sample-details'>
                <h1>Physical Therapy</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 1300/= per session</h4>
            </div>
        </div>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service2} alt="" />
            </div>
            <div className='sample-details'>
                <h1>CT Scan</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 100000/= per session</h4>
            </div>
        </div>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service3} alt="" />
            </div>
            <div className='sample-details'>
                <h1>Ultrasound</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 2000/= per session</h4>
            </div>
        </div>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service4} alt="" />
            </div>
            <div className='sample-details'>
                <h1>Hemodialysis</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 30000/= per session</h4>
            </div>
        </div>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service5} alt="" />
            </div>
            <div className='sample-details'>
                <h1>Nutritional Advice</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 500/= per session</h4>
            </div>
        </div>
        <div className='Sample-card'>
            <div className='sample-image'>
                <img src={service6} alt="" />
            </div>
            <div className='sample-details'>
                <h1>Therapy sessions</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis molestias fuga, commodi sed eligendi ullam.</p>
                <h4>ksh 5000/= per session</h4>
            </div>
        </div>

    </section>
    </>
  )
}

export default Sampleservices