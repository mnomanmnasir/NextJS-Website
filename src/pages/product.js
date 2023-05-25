import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Data from "../../components/Data";
import Card from "../../components/Card";


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
          Welcome to my product page
        </h1>

        <Image
          src="/des-8.jpg"
          alt="Product Image"
          width={500}
          height={350}
          priority
        />
      </div>

      <h1 className='text-center'>
        Our Services
      </h1>


      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            
          <div className='row gy-5' style={{gap: 20, marginLeft: '10%', alignItems: 'center'}}>
  
       

              <div className="card" style={{ width: '18rem' }} >
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              
              <div className="card" style={{ width: '18rem' }} >
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }} >
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }} >
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
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