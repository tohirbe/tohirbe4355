import React, { useEffect, useState } from 'react'
import { icons } from '../utilits/icons'
import GoogleMapReact from 'google-map-react';

import rasm1 from '../img/11.webp'
import rasm2 from '../img/12.webp'
import rasm3 from '../img/13.webp'
import rasm4 from '../img/14.webp'
import '../index.css'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const roomsData = [
    { id: 1, image: rasm3, title: 'Bedroom 1', description: '1 single bed' },
    { id: 2, image: rasm3, title: 'Bedroom 2', description: '1 single bed' },
    { id: 3, image: rasm3, title: 'Bedroom 3', description: '1 single bed' },
    { id: 4, image: rasm3, title: 'Bedroom 4', description: '1 single bed' },
    { id: 5, image: rasm3, title: 'Bedroom 5', description: '1 single bed' },
    { id: 6, image: rasm3, title: 'Bedroom 6', description: '1 single bed' },
    { id: 7, image: rasm3, title: 'Bedroom 7', description: '1 single bed' },
    { id: 8, image: rasm3, title: 'Bedroom 8', description: '1 single bed' }
];
export default function Page() {

    const [startIndex, setStartIndex] = useState(0);
    const roomsPerPage = 2;
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    };
    const Next = () => {
        if (startIndex + roomsPerPage < roomsData.length) {
            setStartIndex(prevIndex => prevIndex + roomsPerPage);
        }
    };

    const Prev = () => {
        if (startIndex - roomsPerPage >= 0) {
            setStartIndex(prevIndex => prevIndex - roomsPerPage);
        }
    };

    const currentRooms = roomsData.slice(startIndex, startIndex + roomsPerPage);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            if (scrollPos >= 555 && scrollPos < 2000) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        console.log("Skrol bo'lgan pikseller:", scrollPosition);
    });
    return (
        <>
            <div className='container'>
                <div className="flex justify-between items-center mb-[30px] pt-[30px]">
                    <div className="w-[30%]">
                        <span>{icons.logo}</span>
                    </div>
                    <div className="w-[40%]">
                        <div className="p-[4px] flex border-[1px] pl-[20px] border-gray-400 rounded-[40px] shadow-lg w-[100%]">

                            <div className="grid w-[25%] text-start ">
                                <p>Anywhere</p>

                            </div>
                            <div className="grid w-[25%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                <p>Any week</p>

                            </div>
                            <div className="grid w-[25%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                <p>Add guests</p>

                            </div>
                            <div className="w-[25%] flex justify-end">
                                <span className='p-[7px] rounded-[50%] bg-[#FF385C] scale-90'>{icons.search}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] flex items-center justify-end gap-[30px]">
                        <p className='text-[16px] font-semibold'>Airbnb your home</p>
                        <span>{icons.language}</span>
                        <button className='rounded-full flex items-center border-solid border-[1px] px-[10px] py-[7px] relative'>
                            <span>{icons.bars}</span>
                            <img src="" alt="" className='w-7 h-7 rounded-full bg-black ml-[5px]' />
                            <p className='text-[12px] font-bold absolute top-[-5px] right-[0px] px-[6px] border-solid border-white border-[3px] rounded-full bg-[#FF385C] text-white'>1</p>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between py-[20px]">
                    <p className='text-[26px] font-semibold'>Linnéaholmen: Private island reached by footbridge</p>
                    <div className="flex">
                        <h3 className='flex items-center ml-[20px] gap-[10px]'> <span>{icons.share}</span> Share</h3>
                        <h3 className='flex items-center ml-[20px] gap-[10px]'> <span>{icons.likeb}</span>Save</h3>
                    </div>
                </div>
                <div className="flex items-center justify-between relative">
                    <div className="w-[50%]">
                        <img src={rasm1} alt="" className='w-full h-[420px] rounded-l-xl object-cover' />
                    </div>
                    <div className="w-[50%] grid">
                        <div className="flex p-[10px] gap-[10px]">
                            <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover' />
                            <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover rounded-r-xl' />
                        </div>
                        <div className="flex p-[10px] gap-[10px]">
                            <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover' />
                            <img src={rasm3} alt="" className='w-[50%] h-[200px] object-cover rounded-r-xl' />
                        </div>
                    </div>
                    <button className='flex items-center gap-[10px] absolute bg-white py-[5px] px-[10px] rounded-lg bottom-[10%] right-[4%]'><span>{icons.img}</span> Show all photos</button>
                </div>
                <div className="flex py-[30px] justify-between">
                    <div className="w-[55%] overflow-auto">
                        <div className="grid border-b-[1px] pb-[30px] border-gray-400">
                            <p className='text-[22px] font-semibold'>Island in Ytterån, Sweden</p>
                            <h4 className='text-[16px] py-[5px]'>10 guests6 bedrooms8 beds3 baths</h4>
                            <h4 className='flex items-center font-bold'> <span>{icons.star}</span>
                                4.83
                                ·
                                <span className=' underline'> 24 reviews</span></h4>
                        </div>
                        <div className="flex py-[30px] items-center border-b-[1px] border-gray-400">
                            <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                            <div className="grid ml-[20px]">
                                <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                <p className='text-gray-600'>5 years hosting</p>
                            </div>
                        </div>
                        <div className="grid py-[30px] gap-[20px] border-b-[1px] border-gray-400">
                            <div className="flex items-start ml-[10px]">
                                <span>{icons.note}</span>
                                <div className="grid ml-[30px]">
                                    <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                    <p className='text-gray-600'>5 years hosting</p>
                                </div>
                            </div>
                            <div className="flex items-start ml-[10px]">
                                <span>{icons.note}</span>
                                <div className="grid ml-[30px]">
                                    <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                    <p className='text-gray-600'>5 years hosting</p>
                                </div>
                            </div>
                            <div className="flex items-start ml-[10px]">
                                <span>{icons.note}</span>
                                <div className="grid ml-[30px]">
                                    <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                    <p className='text-gray-600'>5 years hosting</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid border-b-[1px] border-gray-400 py-[30px] ">
                            <button className='py-[10px] px-[20px] bg-gray-100 text-[17px] text-start rounded-xl text-gray-600'>Some info has been automatically translated. <Link className='text-black underline'>Show original</Link></button>
                            <p className='py-[20px] text-[17px] text-gray-700'>Welcome to Linnéaholmen – a unique place on a private island in Storsjön. The island is accessible via a short footbridge from a private parking area, which is prepared for charging an electric car (3-phase). Linnéaholmen is perfect if you want the luxury of fantastic views, peace and quiet, and a big charming house with room for up to 10 persons.
                            </p>
                            <p>...</p>
                            <button className='flex items-center font-bold underline'>Show more <span>{icons.arrovr}</span></button>
                        </div>
                        <div className="grid border-b-[1px] border-gray-400 py-[30px]">
                            <div className="flex items-center justify-between">
                                <p className='text-[24px] font-semibold py-[20px]'>Where you'll sleep</p>
                                <div className="flex">
                                    <div className="counter  text-black py-1 px-2 rounded-bl-lg">
                                        {startIndex / 2 + 1} / {roomsData.length / 2}
                                    </div>
                                    {startIndex !== 0 ?
                                        <button
                                            className="rotate-180 bg-white border-[1px] border-gray-600  text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                            onClick={Prev}
                                        >
                                            {icons.arrovr}
                                        </button> : <button
                                            className="rotate-180 opacity-20 border-[1px] border-gray-600  bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                        >
                                            {icons.arrovr}
                                        </button>
                                    }
                                    {startIndex !== startIndex.length - 1 ?
                                        <button
                                            className=" bg-white text-white border-[1px] border-gray-600  py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                            onClick={Next}
                                        >
                                            {icons.arrovr}
                                        </button> : <button
                                            className="opacity-20  bg-white border-[1px] border-gray-600  text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                        >
                                            {icons.arrovr}
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className="flex justify-between">
                                {currentRooms.map((element) => (
                                    <div key={element.id} className="grid">
                                        <img src={element.image} alt="" className='w-[330px] h-[250px] rounded-2xl' />
                                        <h3 className='text-[18px] font-semibold mt-[15px]'>{element.title}</h3>
                                        <p>{element.description}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="grid py-[30px] border-b-[1px] border-gray-400">
                            <h2 className='text-[22px] font-semibold'>What this place offers</h2>
                            <div className="flex pt-[20px] items-center">
                                <div className="grid w-[50%] gap-[15px]">
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>

                                </div>
                                <div className="grid w-[50%] gap-[15px]">
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <span>{icons.note}</span>
                                        <p className='text-[16px] text-gray-700'>Lake view</p>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <button className='mt-[30px] border-black border-[1px] py-[8px] px-[15px] rounded-xl font-semibold'>Show all 51 aminities</button>
                            </div>
                        </div>

                    </div>
                    <div id="fixedContainer" className={`fixed-container w-[45%] bg-white rounded-2xl right-[10%] delay-100 duration-500 ${fixed ? 'fixed mt-[30px]' : ''}`} style={{ position: fixed ? 'fixed' : 'relative', top: fixed ? '0' : 'auto' }}>
                        <div className="grid p-[30px] border-[1px] border-gray-200 rounded-2xl shadow-2xl">
                            <h3 className='text-[26px] font-semibold'>$207
                                <span className='text-[18px] text-gray-700'> night</span></h3>
                            <div className="flex border-[1px] border-gray-500 rounded-t-[10px] p-[10px]">
                                <div className="grid w-[50%]">
                                    <p className='text-[14px] font-medium'>chack in</p>
                                    <p className='text-[14px] text-gray-700'>9/9/2024</p>
                                </div>
                                <div className="grid w-[50%] border-l-[1px] pl-[15px] border-gray-500">
                                    <p className='text-[14px] font-medium'>chack out</p>
                                    <p className='text-[14px] text-gray-700'>9/14/2024</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-[1px] border-gray-500 rounded-b-[10px] p-[10px]">
                                <div className="grid">
                                    <p className='text-[14px] font-medium'>chack out</p>
                                    <p className='text-[14px] text-gray-700'>9/14/2024</p>
                                </div>
                                <span className=' rotate-90 scale-125'>{icons.arrovr}</span>
                            </div>
                            <button className='py-[10px] rounded-xl mt-[20px] text-white bg-[#FF385C] text-[18px] font-semibold'>Reserve</button>
                            <p className='text-center my-[15px]'>You won't be charged yet</p>
                            <div className="grid gap-[15px] mt-[10px] border-b-[1px] border-gray-400 pb-[20px]">
                                <div className="flex items-center justify-between">
                                    <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                    </p>
                                    <span className='text-gray-600 text-[17px]'>$1024</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                    </p>
                                    <span className='text-gray-600 text-[17px]'>$1024</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className='underline text-gray-600 text-[17px]'>$207 x 5 nights
                                    </p>
                                    <span className='text-gray-600 text-[17px]'>$1024</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-[20px]">
                                <p className='text-[17px] font-semibold'>Total before taxes</p>
                                <span className='text-[17px] font-semibold'>$1065</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-[20px] flex my-[15px]'>
                    <Calendar onChange={onChange} value={date} />
                    <Calendar onChange={onChange} value={date} />
                </div>




                <div className="grid border-b-[1px] border-gray-400 pb-[30px]">
                    <h2 className=' flex items-center gap-[15px] text-[26px] font-semibold'><span>{icons.star}</span>4.83 · 24 reviews</h2>
                    <div className="flex justify-between items-start mt-[30px]">
                        <div className="w-[12%] border-gray-400">
                            <h2 className=' text-[16px] font-semibold'>Overall rating
                            </h2>
                            <div className="flex items-center">
                                <h2 className='w-[20%] text-[12px]'>5</h2>
                                <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                    <div className=" h-[5px] w-[90%] bg-black"></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h2 className='w-[20%] text-[12px]'>4</h2>
                                <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                    <div className=" h-[5px] w-[20%] bg-black"></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h2 className='w-[20%] text-[12px]'>3</h2>
                                <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                    <div className=" h-[5px] w-[10%] bg-black"></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h2 className='w-[20%] text-[12px]'>2</h2>
                                <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                    <div className=" h-[5px] "></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h2 className='w-[20%] text-[12px]'>1</h2>
                                <div className=" h-[5px] w-[80%] bg-gray-400 rounded-md">
                                    <div className=" h-[5px] "></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                        <div className="w-[12%] border-l-[1px] pl-[20px] border-gray-400">
                            <div className="grid mb-[30px]">
                                <h2 className='text-[16px] font-semibold'>Cleanliness
                                </h2>
                                <p className=' text-[16px] font-semibold'>4.6</p>
                            </div>
                            <div className=''>{icons.likeb}</div>
                        </div>
                    </div>

                </div>
                <div className="py-[30px]">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-[40%] py-[20px]">
                            <div className="grid">
                                <div className="flex items-center gap-[10px]">
                                    <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                    <div className="grid ml-[px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <p className='flex items-center font-semibold text-[16px] py-[8px]'><span>{icons.starmiddle}</span> September 2023 ,· <span className='text-gray-600 font-normal'>Stayed about a week</span></p>
                                <h3>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] py-[20px]">
                            <div className="grid">
                                <div className="flex items-center gap-[10px]">
                                    <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                    <div className="grid ml-[px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <p className='flex items-center font-semibold text-[16px] py-[8px]'><span>{icons.starmiddle}</span> September 2023 ,· <span className='text-gray-600 font-normal'>Stayed about a week</span></p>
                                <h3>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] py-[20px]">
                            <div className="grid">
                                <div className="flex items-center gap-[10px]">
                                    <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                    <div className="grid ml-[px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <p className='flex items-center font-semibold text-[16px] py-[8px]'><span>{icons.starmiddle}</span> September 2023 ,· <span className='text-gray-600 font-normal'>Stayed about a week</span></p>
                                <h3>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%] py-[20px]">
                            <div className="grid">
                                <div className="flex items-center gap-[10px]">
                                    <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                    <div className="grid ml-[px]">
                                        <h3 className='text-[16px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <p className='flex items-center font-semibold text-[16px] py-[8px]'><span>{icons.starmiddle}</span> September 2023 ,· <span className='text-gray-600 font-normal'>Stayed about a week</span></p>
                                <h3>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start font-bold pt-[10px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <button className='py-[10px] px-[15px] text-[18px] font-semibold border-[1px] border-black rounded-[10px]'>Show all 24 reviews</button>
                    </div>
                </div>
                <div className="border-b-[1px] border-gray-400 py-[30px]">
                    <p className='text-[26px] font-semibold border-t-[1px] border-gray-300 pt-[30px]'>Where you’ll be</p>
                    <div style={{ height: '500px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBEYcOpF8doUaqqaksgFw1W20f-3YyK8bw" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                    <div className="w-[100%]">
                        <div className="grid">
                            <p className='flex items-center text-[18px] py-[20px] font-semibold'> September 2023 ,Stayed about a week</p>
                            <h3 className='text-[18px] font-normal text-gray-500 pb-[10px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                            <div className="">
                                <button className='underline  flex font-semibold text-[18px] items-center'>Show more <span>{icons.arrovr}</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border-t-[1px] border-gray-300 py-[30px] items-center">
                    <div className="grid w-[50%] gap-[20px]">
                        <div className="w-[90%]">
                            <div className="grid">
                                <div className="flex items-center gap-[20px]">
                                    <img src="" alt="" className='w-[70px] h-[70px] rounded-full bg-black' />
                                    <div className="grid ml-[20px]">
                                        <h3 className='text-[20px] font-semibold'>Hosted by Per-Henrik</h3>
                                        <p className='text-gray-600'>5 years hosting</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[15px] text-[17px] py-[15px] font-normal">
                                    <p className='flex items-center gap-[15px]'><span>{icons.starmiddle}</span> September 2023</p>
                                    <p className='flex items-center gap-[15px]'><span>{icons.starmiddle}</span> September 2023</p>

                                </div>
                                <h3 className='text-gray-600 font-[17px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start mt-[10px] font-semibold text-[17px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%]">
                            <div className="grid">
                                <p className='flex items-center font-medium text-[17px] py-[10px]'>During</p>
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center gap-[10px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <h3 className='text-[16px] font-normal'>Hosted by</h3>
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <img src="" alt="" className='w-[40px] h-[40px] rounded-full bg-black' />
                                        <h3 className='text-[16px] font-normal'>Hosted by</h3>
                                    </div>

                                </div>
                                <p className='flex items-center font-medium text-[18px] py-[10px]'>During your stay</p>
                                <h3 className='text-gray-600 font-[17px]'>This island is absolutely beautiful. Peaceful and enjoyable for outside activities like swimming or canoeing or just sitting by the lake. The house was an old fashioned country house, and</h3>
                                <div className="">
                                    <button className='underline items-start mt-[10px] font-semibold text-[17px]'>Show more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <p className='text-[17px] text-gray-700'>Languages: English, Deutsch, Svenska</p>
                        <p className='text-[17px] text-gray-700 py-[15px]'>Response rate: 100%</p>
                        <p className='text-[17px] text-gray-700'>Response time: within a day</p>
                        <button className='border-[1px] border-black py-[10px] px-[15px] font-semibold rounded-xl my-[20px]'>Contact Host</button>
                        <div className="flex items-center">
                            <span>{icons.ico}</span>
                            <p className='text-[12px] font-normal leading-4 text-black w-[50%] ml-[20px]'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                        </div>
                    </div>
                </div>
                <div className="grid border-t-[1px] border-gray-300 py-[30px]">
                    <h2 className='text-[22px] font-semibold py-[15px]'>Things to know</h2>
                    <div className="flex">
                        <div className="w-1/3">
                            <h3 className='text-[18px] font-semibold'>House rules</h3>
                            <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                <li>Check-in after 3:00 PM</li>
                                <li>Checkout before 12:00 PM</li>
                                <li>10 guests maximum</li>
                            </ul>
                            <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                        </div>
                        <div className="w-1/3">
                            <h3 className='text-[18px] font-semibold'>House rules</h3>
                            <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                <li>Check-in after 3:00 PM</li>
                                <li>Checkout before 12:00 PM</li>
                                <li>10 guests maximum</li>
                            </ul>
                            <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                        </div>
                        <div className="w-1/3">
                            <h3 className='text-[18px] font-semibold'>House rules</h3>
                            <ul className='text-[17px] font-normal text-gray-600 gap-[10px] my-[15px] grid'>
                                <li>Check-in after 3:00 PM</li>
                                <li>Checkout before 12:00 PM</li>
                                <li>10 guests maximum</li>
                            </ul>
                            <button className='flex items-center underline font-semibold text-[18px]'>Show more <span>{icons.arrovr}</span></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-[40px] border-t-[1px] border-gray-400">
                <div className="flex items-start container w-full">
                    <div className="flex border-b-[1px] border-gray-600 w-full">
                        <div className="grid w-1/3 items-start">
                            <h3 className='text-[16px] font-semibold'>Support</h3>
                            <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                <li>Help Center</li>
                                <li>Get help with a safety issue</li>
                                <li>AirCover</li>
                                <li>Anti-discrimination</li>
                                <li>Disability support</li>
                                <li>Cancellation options</li>
                                <li>Report neighborhood concern</li>
                            </ul>
                        </div>
                        <div className="grid w-1/3 items-start">
                            <h3 className='text-[16px] font-semibold'>Support</h3>
                            <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                <li>Help Center</li>
                                <li>Get help with a safety issue</li>
                                <li>AirCover</li>
                                <li>Anti-discrimination</li>
                                <li>Disability support</li>
                                <li>Cancellation options</li>
                            </ul>
                        </div>
                        <div className="grid w-1/3 items-start">
                            <h3 className='text-[16px] font-semibold'>Support</h3>
                            <ul className='grid text-[15px] gap-[10px] my-[15px]'>
                                <li>Help Center</li>
                                <li>Get help with a safety issue</li>
                                <li>AirCover</li>
                                <li>Anti-discrimination</li>
                                <li>Disability support</li>
                                <li>Cancellation options</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
