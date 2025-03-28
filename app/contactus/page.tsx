"use client"
import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
    //accordion code
    const [isPlus, setIsPlus] = useState(true);

    const toggleIcon = () => {
        setIsPlus((prev) => !prev);
    };
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[20px] lg:pt-[120px] pt-[80px] overflow-hidden  bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12 ">



                        <div className="lg:pb-[60px] pb-[30px] text-center">

                            <p className="lg:text-[3vw] text-[6vw] lg:leading-[3vw] leading-[5vw] font-bold lg:pt-[30px] pt-[20px]">Contact Us</p>
                            <div className="flex  justify-center">
                                <div className="col-lg-6 ">
                                    <p className="lg:text-[1vw] text-[3vw] text-[#212833]  text-center lg:leading-[1.5vw] leading-[4vw] lg:pt-[8px] pt-[5px]">Contact us for all your queries. From explaining the difference between bookkeeping and accounting, starting a business in Madagascar, to recommending the business books our CEO loves – we've got the answers.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section >
            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12 ">
                        <div className=" justify-center flex items-center">
                            <div className="col-md-6">
                                <div className='row'>
                                    <div className="col-md-6 mb-4">
                                        <input type="email" id="email" className="border rounded-lg w-full h-10 p-4" placeholder="*Your Name" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3  border border-e-0 border-gray-300 rounded-s-md ">
                                                <Image
                                                    className="img-responsive w-10"
                                                    src="/assets/Group 17699.svg"
                                                    alt="logo"
                                                    width={1830}
                                                    height={750}
                                                />
                                            </span>
                                            <input type="text" id="website-admin" className="border form-select rounded-r-lg w-full h-10 p-4" placeholder="+91  000 000 0000" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="email" id="email" className="border rounded-lg w-full h-10 p-4" placeholder="Your Email*" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="text" id="website-admin" className="border form-select rounded-r-lg w-full h-10 p-4" placeholder="Interested in*" required />
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                        <textarea id="message" className="border form-control rounded-r-lg w-full h-[200px]  " placeholder="Leave a comment..." ></textarea>

                                        <div className="flex mt-4 mb-4 justify-center">
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-xl text-md lg:px-5 lg:py-3 px-3 py-2 text-center items-center">Send Your Message</button>
                                        

                                        </div>
                                        <div className="flex justify-center">
                                            <div className="col-lg-7">
                                        <p className="lg:text-[1vw] text-[3vw] text-[#212833]  text-center lg:leading-[1.5vw] leading-[4vw] lg:pt-[8px] pt-[5px]">By clicking, you agree to our<span className="font-medium underline">Terms & Conditions, Privacy and Data Protection Policy</span> 
                                        </p>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                           


                        </div>


                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="col-lg-5">
                        <form className="">

                        </form></div></div>


            </section >
            <section className=" overflow-hidden  bg-[#FFF]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52856920.36508397!2d-161.635942460536!3d36.04152347094136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1742812612872!5m2!1sen!2sin" width="1920" height="900"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <Footer/>
        </>
    )
};