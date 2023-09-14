import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";



const styleBtn = "border-gray-400 text-gray-500 text-sm font-medium bg-white  border-2 px-1 py-1 rounded-md hover:border-blue-500  shadow-md"

export default function Slot(props) {
    const [slot, setSlot] = useState({
        day: "",
        date: "",
        time: "",
    })



    const handleClick = (e) => {
        let p = "";
        let el = e.target.parentElement.id;
        let k = "";
        if (el !== "morning" && el !== "noon") {
            p = e.target.parentElement.parentElement.children;
            el = e.target.parentElement;
            k = DaDate;

        } else {
            p = e.target.parentElement.children;
            el = e.target
            if (e.target.parentElement.id === "morning") {
                k = Morning;
            } else {
                k = Noon;
            }
        }
        console.log('harsh')
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === el.id) {
                p[i].classList.remove("border-gray-500", "text-gray-200", "bg-white");
                p[i].classList.add("text-white", "bg-[#0000ff]", "border-[#0000ff]");
                k[i].hadler();
            } else {
                p[i].classList.add("border-gray-500", "text-gray-200", "bg-white");
                p[i].classList.remove("text-white", "bg-[#0000ff]", "border-[#0000ff]");
            }
        }

    }



    const DaDate = [
        {
            date: '13 SEP',
            day: 'WED',
            hadler: () => { setSlot({ ...slot, date: '5 MAY', day: "THU" }) },
            id: "date1"
        },
        {
            date: '14 SEP',
            day: 'THU',

            hadler: () => { setSlot({ ...slot, date: '5 MAY', day: "THU" }) },
            id: "date2"
        },
        {
            date: '15 SEP',
            day: 'FRI',

            hadler: () => { setSlot({ ...slot, date: '5 MAY', day: "THU" }) },
            id: "date3"
        }
    ]

    const Morning = [
        {
            text: '09:00AM',
            hadler: () => { setSlot({ ...slot, time: '09:00AM' }) },
            id: "mtime1"
        },
        {
            text: '10:00AM',
            hadler: () => { setSlot({ ...slot, time: '10:00AM' }) },
            id: "mtime2"
        },
        {
            text: '11:00AM',
            hadler: () => { setSlot({ ...slot, time: '11:00AM' }) },
            id: "mtime3"
        },
        {
            text: '12:00AM',
            hadler: () => { setSlot({ ...slot, time: '12:00AM' }) },
            id: "mtime4"
        }
    ];

    const Noon = [
        {
            text: '02:00PM',
            hadler: () => { setSlot({ ...slot, time: '02:00PM' }) },
            id: "ntime1"
        },
        {
            text: '03:00PM',
            hadler: () => { setSlot({ ...slot, time: "03:00PM" }) },
            id: "ntime2"
        },
        {
            text: '04:00PM',
            hadler: () => { setSlot({ ...slot, time: "04:00PM" }) },
            id: "ntime3"
        },
        {
            text: '05:00PM',
            hadler: () => { setSlot({ ...slot, time: "05:00PM" }) },
            id: "ntime4"
        }
    ];

    const buttonsDate = DaDate.map((option) => {
        return <button onClick={handleClick} key={option.id} id={option.id} className={styleBtn} >
            <p>
                {option.date}
            </p>
            <p>
                {option.day}
            </p>
        </button>
    })
    const buttonsMorning = Morning.map((option) => {
        return <button onClick={handleClick} key={option.id} id={option.id} className={styleBtn}>
            {option.text}
        </button>
    })
    const buttonsNoon = Noon.map((option) => {
        return <button onClick={handleClick} key={option.id} id={option.id} className={styleBtn}>
            {option.text}
        </button>
    })
    useEffect(() => {
        const { day, date, time } = slot;
        if (day != "" && date != "" && time != "") {
            props.actions.afterSlotMsg(date, day, time);
        }
    }, [slot])

    return (
        <div className="flex flex-col gap-6 pt-4 pb-3">
            <div className="flex items-center relative justify-center">
                <button className="text-3xl absolute left-[-15px]">
                    <Icon icon="icon-park-solid:left-c" />
                </button>
                <div className="flex  gap-5 " id="dayDates">
                    {buttonsDate}
                </div>
                <button className="text-3xl absolute right-[-15px]">
                    <Icon icon="icon-park-solid:right-c" />
                </button>
            </div>

            <div className="w-full flex flex-col gap-3 font-medium">
                <p className="text-gray-500 ">Morning</p>
                <div className="flex justify-between " id="morning">
                    {buttonsMorning}
                </div>
            </div>
            <div className="w-full flex flex-col gap-3 font-medium" id="noon">
                <p className="text-gray-500 ">Noon</p>
                <div className="flex justify-between" id="noon">
                    {buttonsNoon}
                </div>
            </div>
        </div>
    )
}

