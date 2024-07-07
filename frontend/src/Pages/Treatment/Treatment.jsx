import React from 'react'
import "./Treatment.css"
import { Link } from 'react-router-dom'
import case1 from "../../assets/Treat1.jpg"
import case2 from "../../assets/Treat2.jpeg"
import case3 from "../../assets/Treat3.jpg"
import case4 from "../../assets/Treat4.jpeg"
import case5 from "../../assets/Treat5.jpeg"

const Treatment = () => {
  return (
    <>
    <section className='Treatment-banner'>
      <div className='Banner-content'>
        <h1>
          Treatment
        </h1>
        <p>
          various types of treatments with examples and descriptions
        </p>

      </div>

    </section>
    <section className='Treatment-section'>
      <div className='Treatment-card'>
        <div className='Treatment-image'>
            <img src={case1} alt="" />
        </div>
        <div className='Treatment-details'>
          <h1>Medical Treatment</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor ut rem officia aut fuga esse, vel magni numquam veniam similique ipsum dolores aliquam ullam quis obcaecati commodi aperiam. Ex ipsam nemo est facilis debitis velit deserunt porro libero consequatur.</p>
        </div>
      </div>
      <div className='Treatment-card'>
        <div className='Treatment-details'>
          <h1>Surgical Treatment</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor ut rem officia aut fuga esse, vel magni numquam veniam similique ipsum dolores aliquam ullam quis obcaecati commodi aperiam. Ex ipsam nemo est facilis debitis velit deserunt porro libero consequatur.</p>
        </div>
        <div className='Treatment-image'>
            <img src={case2} alt="" />
        </div>
      </div>
      <div className='Treatment-card'>
        <div className='Treatment-image'>
            <img src={case3} alt="" />
        </div>
        <div className='Treatment-details'>
          <h1>Radiation Therapy</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor ut rem officia aut fuga esse, vel magni numquam veniam similique ipsum dolores aliquam ullam quis obcaecati commodi aperiam. Ex ipsam nemo est facilis debitis velit deserunt porro libero consequatur.</p>
        </div>
      </div>
      <div className='Treatment-card'>
        <div className='Treatment-details'>
          <h1>Physical Therapy</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor ut rem officia aut fuga esse, vel magni numquam veniam similique ipsum dolores aliquam ullam quis obcaecati commodi aperiam. Ex ipsam nemo est facilis debitis velit deserunt porro libero consequatur.</p>
        </div>
        <div className='Treatment-image'>
            <img src={case4} alt="" />
        </div>
      </div>
      <div className='Treatment-card'>
        <div className='Treatment-image'>
            <img src={case5} alt="" />
        </div>
        <div className='Treatment-details'>
          <h1>Immuno Therapy</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor ut rem officia aut fuga esse, vel magni numquam veniam similique ipsum dolores aliquam ullam quis obcaecati commodi aperiam. Ex ipsam nemo est facilis debitis velit deserunt porro libero consequatur.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Treatment