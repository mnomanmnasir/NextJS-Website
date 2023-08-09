import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


const index = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Head>
        <title>
          Product Page
        </title>
      </Head>
      <Navbar />
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" style={{ textAlign: 'center' }}>

        <h1>
          Welcome to Product Page
        </h1>

        <Image
          src="/productImage.jpg"
          alt="Product Image"
          width={500}
          height={350}
          priority
        />
      </div>

      <h1 data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className='text-center'>
        Our Products
      </h1>


      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>

            <div className='row gy-5' style={{ gap: 20, marginLeft: '10%' }}>



              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="card" style={{ width: '18rem' }} >
                <Image
                  src={'/nikeShoes1.webp'}
                  alt="shoesImage"
                  style={{ backgroundColor: 'green', marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>
              <div data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikeShoes.webp'}
                  alt="shoesImage"
                  style={{ backgroundColor: 'green', marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes1.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div className="card-body">

                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">   Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div data-aos="flip-up"
                //  data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes2.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div className="card-body">

                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div data-aos="flip-up"
                //  data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes3.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">   Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div data-aos="flip-up"
                //  data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes4.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>
              <div data-aos="zoom-in"
                //  data-aos-easing="ease-out-cubic"
                data-aos-easing="linear"
                data-aos-duration="1000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes5.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div className="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>

              <div data-aos="zoom-in"
                data-aos-easing="linear"
                //  data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes6.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div className="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>


              <div data-aos="zoom-in"
                data-aos-easing="linear"
                //  data-aos-easing="ease-out-cubic"
                data-aos-duration="2500" className="card" style={{ width: "18rem" }}>

                <Image
                  src={'/nikecardShoes7.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />

                <div className="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default index;