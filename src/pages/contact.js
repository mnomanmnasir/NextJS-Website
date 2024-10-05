import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>

<Head>
  <title>
    Contact Page
  </title>
</Head>
      <Navbar />
<div style={{textAlign: "center"}}>

      <h1>
        Welcome to My Contact Page
      </h1>

      {/* <style jsx>
      {`
      h1{

        color: yellow;      
      }
      `}
      
    </style> */}

      {/* <Image
      src="/mens-banner.jpg"
      
      width="500"
      height={350}
      alt="Contact Image"
      priority
/> */}
      </div>
        <div className='my-5'>
            </div>
            <div className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label" />Full Name
                                <input type="text" name='fullname' className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" name='phone' className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name='email'  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name='msg' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                    </div>

                </div>


            </div>

    </>
  )
}

export default Contact;