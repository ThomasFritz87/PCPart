import Navbar from "./navbar"
import Offer from "./offer"

function Main(props) {

    return (
        <>
            <Navbar category={props.category}/>
            <Offer category={props.category}/>
        </>
    )
}

export default Main