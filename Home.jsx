import React, { useEffect, useRef, useState } from 'react'
import { icons } from '../utilits/icons'

import rasm from '../img/1.jpg'
import rasm1 from '../img/11.webp'
import rasm2 from '../img/12.webp'
import rasm3 from '../img/13.webp'
import rasm4 from '../img/14.webp'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  
];
export default function Home() {
    const [toggle, settoggle] = useState(false)
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const handleScroll = () => {
            setIsAtStart(slider.scrollLeft === 0);
            setIsAtEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth);
            if (document.activeElement !== document.body) {
                document.activeElement.blur();
            }
        };
        slider.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollLeft = () => {
        document.querySelector('.slider').scrollBy({
            left: -150,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        document.querySelector('.slider').scrollBy({
            left: 150,
            behavior: 'smooth'
        });
    };
    const swich = () => {
        settoggle(!toggle);
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [rasm1, rasm2, rasm3, rasm4, rasm1, rasm2, rasm3,];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    };
    const [isHovered, setIsHovered] = useState(false);
    const [like, setlike] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filteredCountries = countries.filter(country =>
            country.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filteredCountries);
        setShowDropdown(true);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(selectedCountry);
        setSearchTerm(searchTerm); 
        setShowDropdown(false);
    };

    return (
        <>
            <div>
                <div className="container py-[0px] relative">
                    <div className="fixedli top-0 w-full container left-[50%] -translate-x-[50%] bg-white">
                        <div className="flex justify-between items-center mb-[30px]">
                            <div className="w-[30%]">
                                <span>{icons.logo}</span>
                            </div>
                            <div className="w-[40%]">
                                {scrolled ? <div className="p-[4px] flex border-[1px] pl-[20px] border-gray-400 rounded-[40px] shadow-lg w-[100%]">

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
                                </div> : <ul className={scrolled ? 'flex items-center top-[-200px]  duration-500 delay-100 justify-around text-[18px]' : 'flex items-center justify-around text-[18px]'}>
                                    <li>Stays</li>
                                    <li>Experiences</li>
                                    <li>Online Experiences</li>
                                </ul>}
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
                        <div className="flex justify-center relative">
                            <div className={scrolled ? "p-[10px] absolute top-[7px] scale-50 duration-1000 hidden flex border-[1px] pl-[20px]  border-gray-400 rounded-[40px] mb-[20px] shadow-lg w-[70%]" : " p-[10px] flex border-[1px] pl-[20px] border-gray-400 rounded-[40px] mb-[20px] shadow-lg w-[70%]"}>
                                <div className="grid w-[25%] text-start">
                                    <label htmlFor="searchInput" className="grid">
                                        <span>Where</span>
                                        <input
                                            type="text"
                                            id="searchInput"
                                            placeholder="Search destinations"
                                            className="w-4/5  rounded-md"
                                            value={selectedCountry}
                                            onChange={handleSearch}
                                            onBlur={() => setShowDropdown(false)}
                                        />
                                    </label>
                                    {showDropdown && (
                                        <ul className="absolute left-[17%] mt-2 top-[80%] w-[20%] bg-white border border-gray-300 rounded-md shadow-md z-10">
                                            {filteredCountries.map((country, index) => (
                                                <li key={index} onClick={() => handleSelectCountry(country)} className="p-2 cursor-pointer hover:bg-gray-100">{country}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="grid w-[20%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                    <p>Chake in</p>
                                    <span>feb 26</span>
                                </div>
                                <div className="grid w-[20%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                    <p>Chake in</p>
                                    <span>feb 65</span>
                                </div>
                                <div className="grid w-[25%] text-start border-l-[1px] border-gray-200 pl-[20px]">
                                    <p>Who</p>
                                    <span>feb 26</span>
                                </div>
                                <div className="w-[10%] flex justify-end">
                                    <span className='p-[15px] rounded-[50%] bg-[#FF385C]'>{icons.search}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-[1px] border-gray-300 py-[20px]">
                            <div className="w-[70%] flex items-center">
                                {!isAtStart && (
                                    <button className='border-[1px] rounded-full px-[5px] py-[5px] hover:scale-110 hover:shadow-2xl mr-[10px] bg-transparent' onClick={scrollLeft}>
                                        {icons.arrowl}
                                    </button>
                                )}
                                {/* <button className='border-[1px] rounded-full px-[5px] py-[5px] hover:scale-110 hover:shadow-2xl mr-[10px] bg-transparent' onClick={scrollLeft}>{icons.arrowl}</button> */}
                                <ul className='text-[16px] flex gap-[45px] overflow-hidden items-center slider'>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-center'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>
                                    <li className='flex-col text-center items-centerq'>
                                        <img src={rasm} alt="" className='w-[30px]' />
                                        <p>island</p>
                                    </li>

                                </ul>
                                {/* <button className='border-[1px] rounded-full px-[10px] py-[10px]' onClick={scrollRight}>{icons.arrovr}</button> */}
                                {!isAtEnd && (
                                    <button className='border-[1px] ml-[20px] rounded-full px-[5px] py-[5px] hover:scale-110 hover:shadow-2xl mr-[10px] bg-transparent' onClick={scrollRight}>
                                        {icons.arrovr}
                                    </button>
                                )}
                            </div>
                            <div className="w-[30px] flex items-center justify-between gap-[20px]">
                                <button className='flex items-center border-[1px] rounded-[10px] p-3 font-semibold text-[14px]'><span className='mr-[10px] rotate-[-90deg]'>{icons.filter}</span> Filters</button>
                                <button className=' whitespace-nowrap border-[1px] rounded-[10px] p-3 flex items-center font-semibold text-[14px]'>Display total before taxes
                                    <div className="flex justify-center items-center ml-[10px]">
                                        <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                    className="hidden"
                                                    checked={toggle}
                                                    onChange={swich}

                                                />
                                                <div className={`w-[40px] h-[24px] bg-gray-400 rounded-full shadow-inner ${toggle ? 'bg-gray-800' : ''}`}></div>
                                                <div className={`absolute w-5 h-5 bg-white rounded-full top-[50%] justify-center translate-y-[-50%] shadow inset-y-0 left-[1px] ${toggle ? 'transform translate-x-[16px]' : ''}`}>{toggle ? icons.true : null}</div>
                                            </div>
                                        </label>
                                    </div></button>
                            </div>

                        </div>
                    </div>
                    <div className="py-[20px] flex flex-wrap justify-between gap-[20px] mt-[300px]">
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>
                        <div className="grid w-[23%] relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="relative">
                                {isHovered && (
                                    <React.Fragment>
                                        {currentImageIndex !== 0 ?
                                            <button
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"
                                                onClick={prevImage}
                                            >
                                                {icons.arrowl}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 left-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 ml-[10px]"

                                            >
                                                {icons.arrowl}
                                            </button>
                                        }
                                        {currentImageIndex !== images.length - 1 ?
                                            <button
                                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"
                                                onClick={nextImage}
                                            >
                                                {icons.arrovr}
                                            </button> : <button
                                                className="absolute opacity-0 top-1/2 right-0 transform -translate-y-1/2 bg-white text-white py-[7px] px-[7px] rounded-full transition-opacity duration-300 mr-[10px]"

                                            >
                                                {icons.arrovr}
                                            </button>
                                        }
                                    </React.Fragment>
                                )}
                                <div className="absolute top-[2%] right-[5%]" onClick={() => setlike(!like)}>
                                    {like ?
                                        <span>{icons.likered}</span> : <span>{icons.likeb}</span>

                                    }

                                </div>
                                <Link to={'/page'}>                            <img src={images[currentImageIndex]} alt="" className='w-full rounded-[10px] h-[300px] object-cover' />
                                </Link>
                                <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 mb-2  flex gap-[2px]">
                                    {images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                                        />
                                    ))}

                                </div>
                            </div>
                            <Link to={'/page'}>
                                <div className="flex justify-between items-center mt-[10px]">
                                    <p className='text-[16px] font-semibold'>Maldavia</p>
                                    <h3 className='flex ic'>
                                        <span>{icons.star}</span>4.83
                                    </h3>

                                </div>
                                <p className='text-[16px] font-normal text-gray-500 leading-6'>5.000 square meters</p>
                                <p className='text-[16px] font-normal text-gray-500 leading-6 mb-[10px]'>5. night set 9 -14</p>
                                <h4 className=''>$1.9654 total before taxes</h4>
                            </Link>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}
