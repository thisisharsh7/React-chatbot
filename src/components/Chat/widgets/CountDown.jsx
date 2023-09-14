import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function CountDown() {
    const [number, setNumber] = useState(5);
    const navigate = useNavigate();

    const decNumber = () => {
        setNumber(number - 1);
    }
    useEffect(() => {
        if (number != 0) {
            setTimeout(decNumber, 1000);
        }
        if (number === 0) {
            navigate('/detail');
        }
    }, [number]);



    return (
        <div className="flex ">
            <div className="bg-[#0000ff] text-white px-3 py-2 rounded-full">
                {number} s
            </div>
        </div>
    )
}
