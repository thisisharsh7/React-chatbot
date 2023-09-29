import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="flex items-center justify-center flex-col h-full text-center tex-black">
            <p> page not found </p>
            <p> Return to <Link to="/" className="underline text-blue-500">Home</Link></p>
        </div>
    )
}

export default NotFound