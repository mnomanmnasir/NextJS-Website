import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../styles/index.module.css"
import Head from "next/head";
import Image from "next/image";

const index = () => {
  return (
    <>     
    <Head >

<title>
  Home Page
</title>

    </Head>
      <Navbar />
<div style={{textAlign:'center'}}> 

      <h1 className={styles.header}>
        Welcome to Home Page
      </h1>

      {/* <Link href="#"
       classNameName={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}
    Home
      /> */}

      <Image 
    src="/blog-6.jpg"
    height={350}
    width={500}
    alt="homePage"
    priority
/>

</div>

    </>
  )
}

export default index;