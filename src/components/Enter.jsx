import { useDispatch } from "react-redux";
import { ENROLL } from "../states/reducers";


//this is the intro page
export default function Enter() {
    const dispatch = useDispatch()
    const Enroll = () => {
        dispatch(ENROLL(true))
    }

    return (
        <div className="p-4 flex items-center h-full">
            <div className="flex gap-2 flex-col w-full">
                <p>Enter into student info system.</p>
                <button type="submit" className="w-full text-center p-2 border-[1px] border-black focus:outline-none rounded-none bg-green-500" onClick={Enroll}>Enroll Now</button>

            </div>
        </div >
    )
}
