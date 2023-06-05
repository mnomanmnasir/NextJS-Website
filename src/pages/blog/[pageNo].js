import {useRouter} from "next/router"


const pageNo = () => {
    const router = useRouter(); //using dynamic routing
    const pageNumber = router.query.pageNo;
    return (
        <>

            <h1>
                my {pageNumber} content
                    </h1>

        </>
    )
}

export default pageNo;