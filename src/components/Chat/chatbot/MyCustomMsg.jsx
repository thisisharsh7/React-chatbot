// import { useDispatch } from "react-redux"
// import { NEXT } from "../../../states/reducers"

import { useRef } from "react"


export default function MyCustomMsg(props) {
    const ref = useRef(null);
    const initialAction = () => {
        props.actions.gotItMsg()
        ref.current.classList.remove("border-gray-400", "text-gray-500", "bg-white");
        ref.current.classList.add("text-white", "bg-[#0000ff]", "border-[#0000ff]")
    }
    return (
        <div ref={ref} className="ml-16 border-2 px-2 py-1 rounded-md border-gray-400 text-gray-500 bg-white hover:border-[#0000ff] hover:bg-[#0000ff] hover:text-white w-min">
            <button className="truncate " onClick={initialAction}>
                Got It!
            </button>
        </div>
    )
}
