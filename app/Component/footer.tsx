"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
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
            <section className="lg:px-[100px] px-[20px] overflow-hidden lg:pt-[50px] pt-[60px] bg-[#212833]">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row lg:pb-[30px] pb-[30px]">
                            <div className="col-lg-5 lg:pb-[0px] pb-[30px] ">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] ">PARTNER WITH US</p>
                                <p className="text-[#FFF] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Earn 50% uncapped commissions (up to $1800 per referral) or 30% recurring commissions in perpetuity by simply introducing new customers to Cloud Bss.</p>
                                <div className="col-lg-11 pt-4 pb-4">
                                <button type="button" className="border border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-10 py-3 w-full text-center text-bold items-center">Become Partener</button></div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#ABABAB]">By clicking, you agree to our<span className="text-[#fff]">Terms & Conditions,Privacy <br></br>and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-2 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">SOLUTIONS FOR BUSINESS</p>
                                <p ><Link href="/formation" className="lg:text-[0.8vw] !text-[#FFF] text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Formation</Link></p>
                                <p ><Link href="/ein" className="lg:text-[0.8vw] !text-[#FFF] text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">EIN</Link></p>
                                <p ><Link href="/register" className="!text-[#FFF] !no-underline lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Registered Agent</Link></p>
                                <p ><Link href="/operating" className="!text-[#FFF]  !no-underline lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Operating agreement</Link></p>
                                <p><Link href="/bookkeeping" className="!text-[#FFF]  !no-underline lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Bookkeeping</Link></p>
                                <p ><Link href="/totalcompliances" className="!text-[#FFF]  !no-underline lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Incl, in Total Compliance</Link></p>
                            </div>
                            <div className="col-lg-3 lg:pb-[10px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">RESOURCES</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Our Blog</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">FAQ</p>
                                
                            </div>
                            <div className="col-lg-2 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">COMPANY</p>
                                <p className="lg:text-[0.8vw] !text-[#FFF] text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">About Us</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Our Partners</p>
                                <p ><Link href="/career" className="!text-[#FFF]  !no-underline lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Career at Cloud Bss</Link></p>
                                <p ><Link href="/contactus" className="lg:text-[0.8vw] !text-[#FFF] text-[3vw] lg:leading-[1vw] !no-underline leading-[4vw]">Contact Us</Link></p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Privacy Policy</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Terms & Conditions</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Terms of Business</p>
                            </div>
                        </div>
                    </div>
                    <hr className=" border-2 border-white"></hr>
                </div>
                <div className="col-lg-12 lg:pt-[30px] pt-[10px] lg:pb-[50px] pb-[50px]">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="lg:flex gap-8">
                                <div>
                                    <Image className="img-responsive w-48" src="/assets/Group 17660.png" alt="logo" width={1080} height={1080} />
                                </div>
                                <div className="lg:pt-[0px] pt-[30px] ">
                                    <button type="button" className="border border-[#939393]  font-medium rounded-3 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="##939393" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                                <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                                <path d="M21 15H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21 9H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            
                                            <div className="">
                                 
                                    <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("United States")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex gap-2  justify-center items-center text-lg hover:text-gray-900 group font-[cd-r]">
                            <p className="p-0 m-0">United States</p>
                                  
                                   
                            </button>

                            {openMenu === "United States" && (
                                <div className="absolute center top-[-225px] border border-black  py-2 mt-2 w-[200px] px-3 bg-white shadow-md rounded-md transition-all ease-in-out">
                                    
                                      
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
                                            <div className="p-0 m-0" >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#939393" fill="none">
                                                    <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#939393" fill="none">
                                                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>

                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="lg:flex gap-8 justify-end">
                                <div className="lg:pt-[0px] pt-[30px]">
                                    <button type="button" className="border border-[#939393] bg-black  font-medium rounded-5 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex gap-2">
                                            <Image className="img-responsive w-5" src="/assets/apple.svg" alt="logo" width={1080} height={1080} />
                                            <p className="p-0 m-0">App Store</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="lg:pt-[0px] pt-[20px]">
                                    <button type="button" className="border border-[#939393] bg-[#000] font-medium rounded-5 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex gap-2">
                                            <Image className="img-responsive w-5" src="/assets/Vector1.png" alt="logo" width={1080} height={1080} />
                                            <p className="p-0 m-0">Play Store</p>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <p className="text-[#C1C1C1] lg:pt-[40px] pt-[30px]"> Copyright © 2018–2024 Cloud BSS Pvt. Ltd., United States. All rights reserved </p>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="flex gap-8 lg:justify-end">
                                    <div className="flex gap-5 lg:pt-[40px] pt-[30px]">
                                        <div>
                                            <Image className="img-responsive w-3" src="/assets/Vector2.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/assets/Group 17654.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/assets/2.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/assets/3.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>



        </>
    );
}