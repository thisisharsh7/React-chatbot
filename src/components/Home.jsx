import { useDispatch } from "react-redux"
import { ENROLL } from "../states/reducers";
import Chat from "./Chat/index";
import { Icon } from '@iconify/react';
import logo from '../assets/logo.svg'



export default function Home() {
    const dispatch = useDispatch();
    const unroll = () => {
        dispatch(ENROLL(false))
    }
    return (
        <div className="flex flex-col w-full">
            <div className="bg-white shadow-md flex justify-between py-2 px-3 text-black">
                <div className="w-12">
                    <img src={logo} className="w-full" alt="" />
                </div>
                <button type="submit" className="text-2xl" onClick={unroll}><Icon icon="ri:logout-box-line" /></button>
            </div>
            <div className="w-full ">
                <Chat />
            </div>
        </div>
    )
}
