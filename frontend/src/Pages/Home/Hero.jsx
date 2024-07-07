import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Hero1 from "../../assets/Legend 1.jpeg"
import Hero2 from "../../assets/Legend  2.jpeg"
import Hero3 from "../../assets/Legend 3.jpeg"

const Hero = () => {
  return (
    <>
    <Carousel
     showArrows={true}
     infiniteLoop={true}
     showThumbs={false}
     showStatus={false}
     autoPlay={true}
     interval={6100}
    >
             {/* <div className='carousel'>
                    <img src={Hero1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div  className='carousel'>
                    <img src={Hero2} />
                    <p className="legend">Legend 2</p>
                </div> */}
                <div>
                    <div className='carousel'>
                    <img src={Hero1} />
                    </div>
                    <p className="legend">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repellendus debitis aut molestias optio accusantium architecto amet libero illo aspernatur?</p>
                </div>
                <div>
                    <div className='carousel'>
                    <img src={Hero2} />
                    </div>
                    <p className="legend">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos harum reprehenderit tempore nulla expedita repudiandae inventore sed architecto consectetur?</p>
                </div>
                <div>
                    <div className='carousel'>
                    <img src={Hero3} />
                    </div>
                    <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt illum, atque excepturi mollitia magnam placeat porro voluptatibus. Aut, sint!</p>
                </div>

    </Carousel>
    </>
  )
}

export default Hero