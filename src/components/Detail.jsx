import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ENROLL } from "../states/reducers";
import { Icon } from '@iconify/react';
import logo from '../assets/logo.svg'
//this is the last page i.e 3rd page

export default function Detail() {
  const dispatch = useDispatch();
  const unroll = () => {
    dispatch(ENROLL(false))
  }
  const { name, age } = useSelector((state) => state.checker);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-white shadow-md flex  justify-between py-2 px-3 text-black">
        <div className="w-12">
          <img src={logo} className="w-full" alt="" />
        </div>
        <button type="submit" className="text-2xl" onClick={unroll}><Icon icon="ri:logout-box-line" /></button>
      </div>
      <div className=" h-full items-center justify-center flex text-center text-lg font-medium">
        Your name {name} aged {age} has been added to student system. You may now exit.
      </div>
    </div>
  )
}
