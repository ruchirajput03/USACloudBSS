"use client"
import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
 const [isPlus, setIsPlus] = useState(true);

  const toggleIcon = () => {
    setIsPlus((prev) => !prev);
  };

    return (
        <>
            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[150px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[90px] pb-[30px]">
                            <div className="row">
                                <div className="col-lg-6 flex justify-center items-center">
                                    <div className="col-lg-10">
                                        <p className="font-semibold lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[5.5vw] lg:pt-[130px]  text-[#212833]">The ultimate bookkeeping solution for busy founders</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Say goodbye to the stress of managing your finances and spend more time focusing on what really matters – your core business.</p>
                                        <div className="flex gap-4 pt-3 mb-8">


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/assets/book.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] lg:pb-[80px] pt-[40px] overflow-hidden bg-[#F3EFE7]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center  items-center">
                            <div className="col-lg-8 ">
                                <div className="lg:flex gap-4 mb-4">
                                    <div className="col-lg-6 mb-4">

                                        <div className="block  p-6  border bg-white border-white rounded-4 shadow-sm  ">
                                            <div className="lg:pt-[20px] pt-[10px]">
                                                <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                            <div className="lg:h-[250px]">
                                                <p className="lg:text-[1.2vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Bookkeeping Software</p>
                                                <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-normal">Keep track of your money.</p>
                                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Optimize your financial management with our intuitive bookkeeping software. Connect multiple bank accounts, send and track invoices effortlessly, categorize transactions with ease, and more.</p>
                                                <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                                    <div className="flex gap-2  border rounded-full items-center">

                                                    </div></div>

                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-6 mb-4">

                                        <div className="block  p-6  border bg-white border-white rounded-4 shadow-sm  ">
                                            <div className="lg:pt-[20px] pt-[10px]">
                                                <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                            <div className="lg:h-[250px]">
                                                <p className="lg:text-[1.2vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Dedicated Bookkeeper</p>
                                                <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-normal">Gain peace of mind with a dedicated bookkeeper.</p>
                                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">While software solutions are valuable, nothing beats the expertise of a dedicated bookkeeper who understands your business. Benefit from expert CPA review, quarterly financial reports, and much more.</p>
                                                <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                                    <div className="flex gap-2  border rounded-full items-center">

                                                    </div></div>

                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden ">
                <div className="row ">
                    <div className="col-lg-12 mb-4">
                        <p className="lg:text-[2vw] text-[4.2vw] text-center lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold ">Software benefits that keep you wow</p>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] text-center leading-[4vw] pt-2 text-[#616161]">Amazing solutions for your hassle-free business transactions</p>
                        <div className="lg:flex gap-3 pt-4">
                            <div className="col-lg-3  mb-4">
                                <div className="block bg-[#F3EFE7] p-6  border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[200px]">
                                        <p className="lg:text-[1vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Manage all your transactions <br></br>in one place</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Manage all your transactions from various sources in one intuitive dashboard, saving you time and reducing the risk of errors.</p>
                                        <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                            <div className="flex gap-2  border rounded-full items-center">

                                            </div></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[200px]">
                                        <p className="lg:text-[1vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Custom invoice templates as <br></br>you wish</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Choose your preferred layout and reflect your brand’s uniqueness with fully customizable invoice templates.</p>
                                        <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                            <div className="flex gap-2  border rounded-full items-center">

                                            </div></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4  ">
                                <div className="block  p-6 bg-[#F3EFE7] border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[200px]">
                                        <p className="lg:text-[1vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Set up recurring invoices</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Automate your billing process to ensure timely invoicing and maintain a consistent cash flow.</p>
                                        <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                            <div className="flex gap-2  border rounded-full items-center">

                                            </div></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[200px]">
                                        <p className="lg:text-[1vw] text-[4.2vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Manage client lists</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Effortlessly organize & track outstanding client invoices and successful payments to simplify your accounting operations.</p>
                                        <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                            <div className="flex gap-2  border rounded-full items-center">

                                            </div></div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12 ">



                        <div className="lg:pb-[60px] pb-[30px] text-center">

                            <p className="lg:text-[2vw] text-[4vw] lg:leading-[3vw] leading-[5vw] p-0 m-0 font-semibold lg:pt-[30px] pt-[10px]">Pricing for all our bookkeeping solutions</p>
                            <p className="lg:text-[1vw] pt-2 text-[3vw] lg:leading-[1.5vw] text-center leading-[4vw]  text-[#616161]">Amazing solutions for your hassle-free business transactions</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="col-lg-12 mb-4">
                        <div className="lg:flex gap-4 ">




                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                                        <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Invoicing</button>
                                        <div className="lg:h-[440px]">


                                            <div className="col-lg-8 flex  gap-2 lg:pt-[30px] pt-[15px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Create customized invoice template</p></div>
                                            <div className="col-lg-8 flex  gap-2 lg:pt-[0px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Manage client lists</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Create or connect merchant processing account via Stripe integration</p></div>
                                            <div className="col-lg-8 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Set up recurring invoices</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Collect payments via the invoices you send with Stripe</p>

                                            </div>
                                            <p className="lg:text-[2vw] text-[5vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[50px] pt-[10px]"><span className="font-normal">$ </span>50/y</p>
                                            <div className=" lg:pt-[4px] ">
                                                <Link href="" className="border border-dark flex justify-center px-4 py-2.5   hover:bg-black !no-underline text-center w-full items-center  gap-2 !rounded-full font-medium">
                                                    <div className="flex justify-center text-center items-center !text-[#000] !hover:text-[#fff]"> Get Invoicing</div>
                                                </Link>
                                            </div>
                                        </div>









                                    </div >
                                </div>


                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                                        <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Bookkeeping Software</button>
                                        <div className="lg:h-[440px]">


                                            <div className="col-lg-8 flex  gap-2 lg:pt-[30px] pt-[15px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Includes doola Invoicing</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[0px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Connect multiple bank accounts to manage transactions all in one platform</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Tag and categorize income and expense transactions</p></div>
                                            <div className="col-lg-8 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Upload and attach receipts to transactions</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Build automated rules for tagging income or expense transactions</p>

                                            </div>
                                            <p className="lg:text-[2vw] text-[5vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[10px]"><span className="font-normal">$ </span>300/y</p>
                                            <div className=" lg:pt-[5px] ">
                                                <Link href="" className="border border-dark flex justify-center px-4 py-2.5   hover:bg-black !no-underline text-center w-full items-center  gap-2 !rounded-full font-medium">
                                                    <div className="flex justify-center text-center items-center !text-[#000] !hover:text-[#fff]"> Get Software </div>
                                                </Link>
                                            </div>
                                        </div>









                                    </div >
                                </div>


                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                                        <button className="bg-[#F6F6F6] px-4 py-2  !rounded-full font-semibold">Dedicated Bookkeeper</button>
                                        <div className="lg:h-[440px]">


                                            <div className="col-lg-10 flex  gap-2 lg:pt-[30px] pt-[15px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Dedicated bookkeeping team of Certified Public Accountant’s</p></div>
                                            <div className="col-lg-8 flex  gap-2 lg:pt-[0px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">1,200 transactions / year*</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="20" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Categorization of business transactions</p></div>
                                            <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Reconciliation of business bank and credit card accounts (unlimited bank accounts and channels of revenue allowed)</p></div>
                                            <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Ongoing Bookkeeping support</p>

                                            </div>
                                            <p className="lg:text-[2vw] text-[5vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[50px] pt-[10px]"><span className="font-normal">$ </span>1500/y</p>
                                            <div className=" lg:pt-[5px] ">
                                                <Link href="" className="border border-dark flex justify-center px-4 py-2.5   hover:bg-black !no-underline text-center w-full items-center  gap-2 !rounded-full font-medium">
                                                    <div className="flex justify-center text-center items-center !text-[#000] !hover:text-[#fff]"> Get Invoicing</div>
                                                </Link>
                                            </div>
                                        </div>









                                    </div >
                                </div>


                            </div>




                        </div>
                    </div>
                </div>
            </section >
            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="justify-center flex items-center">
                            <div className="col-lg-5">
                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] text-center leading-[4vw]  ">* Includes up to 5000 transactions per year, depending on the package you select. Contact us to learn more.</p>
                        </div>
                        </div>

                    </div>
                </div>
            </section>
             <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[20px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
                    <div className="row ">
                      <div className="col-lg-12 ">
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="col-lg-5">
                              <div className="row justify-start">
            
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Download free guide on how to set up business in the US</p>
                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">We’ve put together all of the documents and details you need to figure out before you open a company</p>
            
            
                              </div>
                              <div className="lg:flex gap-4">
                                <div>
                                  <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                </div>
                                <div>
                                <div className="lg:pt-[0px] pt-[10px]">
                                  <button type="button" className="border sm:mt-2 border-white text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Download</button>
                                </div>
                                </div>
                              </div>
            
                            </div>
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px]  text-[#0061FE]">By clicking, you agree to our<span className="underline font-medium">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                          </div>
                          <div className="col-lg-3">
                            <Image className="img-responsive w-full " src="/assets/image 46.png" alt="logo" width={1830} height={750} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                
                        <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[20px] pb-[10px]">Frequently Asked Questions</p>
                                    <p className="font-medium underline lg:text-[1.2vw] text-[4vw] lg:leading-[1.5vw] leading-[3vw] text-center"> More FAQs</p>
                                    <div className="flex justify-center">
                                    <div className="col-lg-8">
                                  
                                      <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1">
                                <div className=""></div>
                                <AccordionTrigger><p className="lg:text-[1vw] text-[3.5vw]">Do I need to be a US citizen to work with doola?</p></AccordionTrigger>
                                <AccordionContent>
                                  Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger><p className="lg:text-[1vw] text-[3.5vw]">What information do you need from me to get started?</p></AccordionTrigger>
                                <AccordionContent>
                                  Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                <AccordionTrigger><p className="lg:text-[1vw] text-[3.5vw]">What is an EIN?</p></AccordionTrigger>
                                <AccordionContent>
                                  Yes. It comes with default styles that matches the other
                                  components&apos; aesthetic.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-4">
                                <AccordionTrigger><p className="lg:text-[1vw] text-[3.5vw]">What is an LLC (Limited Liability Company)?</p></AccordionTrigger>
                                <AccordionContent>
                                  Yes. It's animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-5">
                                <AccordionTrigger><p className="lg:text-[1vw] text-[3.5vw]">Still have a question?</p></AccordionTrigger>
                                <AccordionContent>
                                  Yes. It's animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                                    </div></div>
                                  
                         
                            
                        
                        
                        
                        
                        
                                  </div>
                                  {/* <div className="col-lg-12">
                                    <div className="flex justify-center">
                                      <div className="col-lg-9">
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">Where can I register my company?</p>
                        
                        
                                        <button onClick={toggleIcon} style={{ fontSize: "24px", border: "none", background: "none", cursor: "pointer" }}>
                                          {isPlus ? (
                        
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12 4V20M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          ) : (
                        
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          )}
                                        </button>
                        
                        
                        
                        
                        
                        
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">Do I need to be a US citizen to work with doola?</p>
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">What information do you need from me to get started?</p>
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">What is an EIN?</p>
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">What is an ITIN?</p>
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">What is an LLC (Limited Liability Company)?</p>
                                        <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px]">Still have a question?</p>
                        
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                              </section>
                        
                        <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden ">
                                <div className="row">
                                  <div className="col-lg-12 mb-4 ">
                                    <div className="flex justify-center ">
                                    <div className="col-lg-4 ">
                                    <div className="lg:pb-[60px] pb-[30px] ">
                                      
                        
                                      <p className="lg:text-[2vw] text-[4vw] text-center lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Fresh insights from our business blog</p>
                        
                                    </div>
                                    </div>
                                    </div>
                                 
                                    <div className="lg:flex gap-4">
                                      <div className="col-lg-4">
                        
                        
                                        <div className=" bg-white  ">
                                          <Image className="img-responsive w-full " src="/assets/image 57.png" alt="logo" width={1830} height={750} />
                        
                        
                        
                                          <p className="mb-4 mt-4 font-medium lg:text-[20px] text-[16px] ">How to Deal with Inflation's Effects on <br></br>Your Small Business</p>
                                          <p className="mb-4 mt-4  lg:text-[16px] text-[12px] text-[#7C7C7C] ">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                          <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium  text-sm  text-center items-centerborder border-black !rounded-lg px-4 py-2  mt-4 mb-4">Learn More</button>
                        
                                        </div>
                        
                                      </div>
                                      <div className="col-lg-4">
                        
                        
                                        <div className=" bg-white  ">
                                          <Image className="img-responsive w-full " src="/assets/image 47.png" alt="logo" width={1830} height={750} />
                        
                        
                        
                                          <p className="mb-4 mt-4 font-medium lg:text-[20px] text-[16px] ">How to Deal with Inflation's Effects on <br></br>Your Small Business</p>
                                          <p className="mb-4 mt-4  lg:text-[16px] text-[12px] text-[#7C7C7C] ">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                          <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium  text-sm  text-center items-centerborder border-black !rounded-lg px-4 py-2  mt-4 mb-4">Learn More</button>
                        
                                        </div>
                        
                                      </div>
                                      <div className="col-lg-4">
                        
                        
                                        <div className=" bg-white  ">
                                          <Image className="img-responsive w-full " src="/assets/image 48.png" alt="logo" width={1830} height={750} />
                        
                        
                        
                                          <p className="mb-4 mt-4 font-medium lg:text-[20px] text-[16px] ">How to Deal with Inflation's Effects on <br></br>Your Small Business</p>
                                          <p className="mb-4 mt-4  lg:text-[16px] text-[12px] text-[#7C7C7C] ">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                          <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium  text-sm  text-center items-centerborder border-black !rounded-lg px-4 py-2  mt-4 mb-4">Learn More</button>
                        
                                        </div>
                        
                                      </div>
                                    </div>
                        
                                  </div>
                                </div>
                              </section>
                         <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#050506]">
                                                        <div className="row">
                                                          <div className="col-lg-12">
                                                            <div className="row">
                                                              <div className="col-lg-9">
                                                                <div className="col-lg-7">
                                                                  <div className="row justify-start">
                                                
                                                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Get tips on how to run your business smarter</p>
                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
                                                
                                                
                                                                  </div>
                                                                  <div className="lg:flex gap-4 pt-4 mb-4">
                                                                    <div >
                                                                      <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                                                    </div>
                                                                    <div className="lg:pt-[0px] pt-[10px]">
                                                                      <div>
                                                                        <button type="button" className="border border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center  items-center">Subscribe</button>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                
                                                                </div>
                                                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#ABABAB]">By clicking, you agree to our<span className="text-[#fff]">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                                                              </div>
                                                              <div className="col-lg-3">
                                                                <Image className="img-responsive w-full " src="/assets/gif.gif" alt="logo" width={1830} height={750} />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </section>
                                                      <Footer/>
        </>
    )
};