import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const about = () => {
  return (
    <>
  <Head>
    <title>
      About Page
    </title>
  </Head>
      <Navbar />
      {/* <div style={{textAlign: 'center'}}>

      <h1>
        Welcome to my about page
      </h1>

      <Image
      src="/portfolio-img2.jpg"
      width={500}
      height={350}
      alt="aboutImage"
      priority
      />
      </div>
 */}

      <section id='header' className='d-flex align-item-center mt-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>

                  <h1>
                   Welcome to About page <strong style={{ color: 'red' }}> Nike Shoes </strong>
                  </h1>
                  <h4 className="p-1">
                    We are the team of talented developer making websites
                  </h4>


                  <div className="col-12">
                    <button className="btn btn-outline-black" style={{ borderRadius: '10%', border: '2px solid black'
  , borderRadius: '25px'}}  type="submit">
  <Link href={'/contact'} style={{color:'black', textDecoration:'none'}}>
  Contact us
  </Link>
  </button>
                </div>
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img' >

                <Image
                  src="/aboutImage.jpg"
                  alt="homeImage"
                  height={350}
                  width={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

    </>
  )
}

export default about;