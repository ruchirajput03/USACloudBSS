
"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";




function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };
    const handleMouseLeave = () => {
        setOpenMenu(null);
    };
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () => {
        setIsVisible(!isVisible);
    }








    return (
        <>
            <section className="lg:px-[100px] px-[20px] z-100 fixed w-full bg-white">

                <div className="container-fluid  w-full z-100  flex items-center justify-between  py-4 lg:h-30 lg:pt-[40px] ">

                    <div className="col-5 col-md-3">
                        <Link href="/">
                            <Image
                                className="img-responsive lg:w-[150px] w-full"
                                src="/assets/Group 17804.svg"
                                alt="logo"
                                width={1830}
                                height={750}
                            /></Link>
                    </div>

                    <nav className=" col-md-6 hidden lg:flex  items-center gap-24 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] font-medium ">
                        <Link href="/about" className="text-black !no-underline hover:text-gray-400">About</Link>

                        <Link href="/formation" className="text-black !no-underline  hover:text-gray-400">Formation</Link>

                        
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("products")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                Products
                                <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                </span>
                            </button>

                            {openMenu === "products" && (
                                <div className="absolute left-[-2] top-[10px] py-2 mt-2 w-[300px] bg-white shadow-md rounded-md transition-all ease-in-out">
                                    <ul className="pl-5 py-0 space-y-2 mt-3">
                                        <div className="pt-2">
                                            <p ><Link href="/totalcompliances" className="lg:text-[1vw] text-black text-[3vw] p-0 m-0   !no-underline">Total Compliance</Link></p>
                                            <p className=" lg:text-[0.8vw] text-[3vw] font-normal   text-[#949494]  p-0 m-0 ">Everything you need in one package</p>
                                        </div>
                                        <div className="pt-2">
                                            <p ><Link href="/money" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Money</Link></p>
                                            <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">Move money internationally</p>
                                        </div>
                                        <div className="pt-2">
                                            <p ><Link href="/bookkeeping" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Bookkeeping</Link></p>
                                            <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">The ultimate bookkeeping solution</p>

                                        </div>
                                        <div className="pt-2">
                                            <p ><Link href="/tax" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Taxes</Link></p>
                                            <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">Embrace worry-free tax filings</p>
                                        </div>

                                    </ul>
                                </div>
                            )}
                        </div>



                        <Link href="/pricing" className="text-black !no-underline  hover:text-gray-400">Pricing</Link>





                    </nav>


                    <div className="col-md-2  lg:block hidden">
                        <div className="flex gap-4 items-center">
                            <div className="flex gap-2">
                               
                                <div className="">
                                 
                                    <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("US")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex gap-2  justify-center items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                <div>
                                    <Image className="img-responsive w-8" src="/assets/Vector.png" alt="logo" width={1830} height={750} /></div>
                                    <p className="font-bold lg:text-[1.2vw] text-[3vw] p-0 m-0 ">US</p>
                            </button>

                            {openMenu === "US" && (
                                <div className="absolute right-0 top-[30px] border border-black  py-2 mt-2 w-[200px] px-3 bg-white shadow-md rounded-md transition-all ease-in-out">
                                    
                                      
                                        <div className="pt-2">
                                        <Link href="" className="flex gap-3 justify-center  items-center text-lg text-black !no-underline hover:text-gray-900 group ">
                             
                                   
                                    <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">Singapore</p>
                            </Link>
                                        </div>
                                        <div className="pt-2">
                                        <Link href="" className="flex gap-3 justify-center  items-center  text-black !no-underline hover:text-gray-900 group">
                               
                                   
                                    <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0">HongKong</p>
                            </Link>

                                        </div>
                                        <div className="pt-2">
                                        <Link href="" className="flex gap-3 justify-left pl-9  items-center  text-black !no-underline hover:text-gray-900 group">
                                
                                  
                                    <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">UAE</p>
                            </Link>
                                        </div>
                                        <div className="pt-2">
                                        <Link href="" className="flex gap-3 justify-left pl-9  items-center  text-black !no-underline hover:text-gray-900 group">
                                
                                    
                                    <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">US</p>
                            </Link>
                                        </div>
                                        <div className="pt-2">
                                        <Link href="" className="flex gap-3 justify-left pl-9  items-center  text-black !no-underline hover:text-gray-900 group">
                             
                               
                                    <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">UK</p>
                            </Link>
                                        </div>

                                   
                                </div>
                            )}
                        </div>

                                </div>
                            </div>
                            <div>
                                <button type="button" className="text-white bg-black hover:bg-transparent focus:ring-4 font-medium rounded-5 text-sm px-5 py-2.5 dark:hover:bg-transparent ">Log in</button>
                            </div>
                        </div>
                    </div>



                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-3xl text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>


                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                            <div className="fixed overflow-y-auto top-0 right-0 w-full h-full bg-white shadow-lg p-5 flex flex-col">
                                <button onClick={() => setIsOpen(false)} className="self-end text-gray-600">
                                    <XMarkIcon className="h-6 w-6" />
                                </button>

                                <nav className="mt-4 flex flex-col space-y-4">
                                    <Link href="/about" className="text-black !no-underline hover:text-black">About</Link>
                                    
                                    <Link href="/formation" className="text-black !no-underline hover:text-black">Formation</Link>
                              <button type="button" onClick={toggleContent} >
                        <div className="text-black !no-underline  hover:text-gray-400 ">
                            <div className="flex  ">
                                <p className=" p-0 m-0" >Products</p>

                                
                                    <MdOutlineArrowDropDown />
                                    </div>
                                    <div className=" ">

                                        {isVisible && (
                                            <div className=" 
                                            z-100   rounded-lg  py-2 px-4  shadow-md w-auto bg-white ">

                                                <div className="text-left   ">
                                                   
                                                <p ><Link href="/totalcompliances" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Total Compliance</Link></p>
                                                <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">Everything you need in one package</p>
                                                <div className="pt-2">
                                                <p ><Link href="/money" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Money</Link></p>
                                                <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">Move money internationally</p>
                                                </div>
                                                <div className="pt-2">
                                                <p ><Link href="/bookkeeping" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Bookkeeping</Link></p>
                                                <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">The ultimate bookkeeping solution</p>
                                                
                                                </div>
                                                <div className="pt-2">
                                                <p ><Link href="/tax" className="lg:text-[1vw] text-black text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Cloud BSS Taxes</Link></p>
                                                <p className=" lg:text-[0.8vw] text-[3vw] font-normal lg:leading-[0vw] leading-[2vw]  text-[#949494]  ">Embrace worry-free tax filings</p>
                                                </div>
                                                   
                                                </div>



                                            </div>
                                        )}
                                    </div>

                                

                           
                        </div>
                        </button> 
                                    <Link href="/pricing" className="text-black pt-4 !no-underline hover:text-black">Pricing</Link>
                                    

                                </nav>
                            </div>
                        </div>
                    )}

                </div>
            </section>











        </>
    );
}

export default Header;



