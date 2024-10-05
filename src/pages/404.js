import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"

const Errorpage = () => {
    const router = useRouter();
    const handleInput = () =>{
        router.push("/");
    };
    
    // Redirect home page
    
    // useEffect(() =>{
    //     setTimeout(() => {
    //         router.push("/");
    //     }, 3000);
        
    // }, []);
    
    return (
        <>

            {/* Link Components */}
            <nav>
                <ul className="menu-bar">
                    <li>

                        <Link href="/"> Home
                        </Link>
                    </li>
                    <li>

                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>

                        <Link href={"/contact"}>
                            contact
                        </Link>
                    </li>
                    <li>

                        <Link href={"/product"}>
                            Product
                        </Link>
                    </li>

                </ul>
            </nav>
            <h1>
                404 Error Page
            </h1>

            <Link href="/" onClick={handleInput} >

                Back to Home
            </Link>

        </>
    )
}

export default Errorpage;