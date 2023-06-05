import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../styles/index.module.css"
import Head from "next/head";
import Image from "next/image";
import Home from "../../next_bootstrap/src/app/page";

  
const index = () => {
  return (
    <>
      <Head >
        <title>
          Home Page
        </title>
      </Head>
      <Navbar />
      {/* <div style={{ textAlign: 'center' }} className="mt-5">

        <h1 className={styles.header}>
          Welcome to Home Page
        </h1>
      </div> */}

      {/* <Link href="#"
       classNameName={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
    Home
      /> */}
      <section id='header' className='d-flex align-item-center mt-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>

                  <h1>
                    Grow your business with <strong style={{ color: 'red' }}> Nike Shoes </strong>
                  </h1>
                  <h4 className="p-1">
                    We are the team of talented developer making websites
                  </h4>


                  <div className="col-12">
                    <button className="btn btn-outline-black" style={{ borderRadius: '10%', border: '2px solid black'
  , borderRadius: '25px'}}  type="submit">
  <Link href={'/product'} style={{color:'black', textDecoration:'none'}}>
  Get Started
  </Link>
  </button>
                </div>
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img' >

                <Image
                  src="/homePicture.jpg"
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

export default index;