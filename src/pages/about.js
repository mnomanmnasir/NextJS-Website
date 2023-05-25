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
      <div style={{textAlign: 'center'}}>

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

    </>
  )
}

export default about;