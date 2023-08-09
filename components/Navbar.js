import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" href="/">
                                    <Image
                                        src="/logo.jpg"
                                        height={50}
                                        width={100}
                                        alt="homePage"
                                        priority />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link

                                                className="nav-link active" aria-current="page" href="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/Product" style={{fontWeight: 'bold'}}>
                                                Products
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/About">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/Contact">
                                                Contact
                                            </Link>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar;