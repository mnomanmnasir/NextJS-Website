import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";


const index = () => {
  return (
    <>
      <Head>
        <title>
          Product Page
        </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: 'center' }}>

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

      <h1 className='text-center'>
        Our Products
      </h1>


      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>

            <div className='row gy-5' style={{ gap: 20, marginLeft: '10%' }}>



              <div className="card" style={{ width: '18rem' }} >
                <Image
                  src={'/nikeShoes1.webp'}
                  alt="shoesImage"
                  style={{ backgroundColor: 'green', marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div class="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikeShoes.webp'}
                  alt="shoesImage"
                  style={{ backgroundColor: 'green', marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div class="card-body">
                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes1.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div class="card-body">

                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">   Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes2.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div class="card-body">

                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">   Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes3.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div class="card-body">

                  <h5 className="card-title">Nike Air Max Plus</h5>
                  <h5 className="card-title">   Colour Shown: White/University Blue/Black/University Gold  </h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£169.95</h5>
                </div>
                        </div>

              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes4.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />
                <div class="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes5.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div class="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>

              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes6.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />


                <div class="card-body">
                  <h5 className="card-title">Nike Dunk Low</h5>
                  <h5 className="card-title">Colour Shown: Sail/Photon Dust/Light Smoke Grey</h5>
                  <h5 className="card-title">Men's Shoes</h5>
                  <h5 className="card-title">£109.95</h5>
                </div>
              </div>


              <div class="card" style={{ width: "18rem;" }}>

                <Image
                  src={'/nikecardShoes7.webp'}
                  alt="shoesImage"
                  style={{ marginLeft: '-2%' }}
                  width={270}
                  height={230}
                  priority
                />

                <div class="card-body">
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