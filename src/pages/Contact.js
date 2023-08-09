import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import AOS from 'aos';
import { useState , useEffect } from 'react'
import 'aos/dist/aos.css';


const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  })
  
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
        return {
            ...preValue,
            [name]: value,
        }
    });
  };
  
  const formSubmit = (e) => {
  e.preventDefault();
  alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone}. My Email Address is ${data.email} and Here is what I want to say ${data.msg} `)
  }
  
  return (
    <>

      <Head>
        <title>
          Contact Page
        </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }} data-aos="fade-right"  data-aos-delay="600">

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
      <div className='container contact-div' data-aos="fade-right" data-aos-delay="600">
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" />Full Name
                <input type="text" name='fullname' className="form-control" onChange={InputEvent} id="exampleFormControlInput1" value={data.fullname} placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" name='phone' className="form-control" onChange={InputEvent} id="exampleFormControlInput1" value={data.phone} placeholder="Enter Your Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" onChange={InputEvent} value={data.email} id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" name='msg'value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
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