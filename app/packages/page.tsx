"use client"
import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
    //accordion code
    const [isPlus, setIsPlus] = useState(true);

    const toggleIcon = () => {
        setIsPlus((prev) => !prev);
    };
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[20px] lg:pt-[120px] pt-[80px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12 mb-4">



                        <div className=" text-center">
                            <div className="flex justify-center items center">
                                <div className="col-lg-3">
                                    <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[2.5vw] leading-[5vw] text-center font-semibold lg:pt-[30px] pt-[20px]">Simplified pricing for all your needs</p></div></div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className="col-lg-8 mb-4 ">
                        <div className="lg:flex gap-4 ">




                            <div className="col-lg-6 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Starter</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Start your business</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666]">Formation & EIN filings, RA service, Operating Agreement, and regular compliance reminders.</p>

                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">$297/y</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">State fee not included.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Formation</button>
                                    </div >
                                </div>


                            </div>

                            <div className="col-lg-6 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Total Compliance</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Stay 100% compliant</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666]">Formation with Annual State filings, IRS Tax filings, a dedicated Account Manager and a free CPA consultation.</p>

                                        <p className="lg:text-[2vw] text-[5vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">$300/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">State fee not included.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Total Compliance</button>
                                    </div >

                                </div>
                            </div>
                        </div>
                        <div className="flex mb-4 mt-4">
                            <div className="col-lg-8">
                                <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-bold lg:pt-[10px] pt-[5px]">What's included?</p>
                                <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Formation</p>
                            </div>
                            <div className="col-lg-1"><p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] text-center leading-[5vw] lg:pt-[10px] pt-[5px]">Starter</p> </div>
                            <div className="col-lg-3 flex justify-end"><p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[10px] pt-[5px]">Total Compliance</p>
                            </div>
                        </div>

                   
                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 mb-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Formation Filings </p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[4vw] text-[#666666] lg:leading-[1vw] leading-[5vw] font-normal ">Cloud BSS navigates the complexities of business formation with the state. A step by step wizard guides you through organizing member information, picking a company name, and more. doola’s experts handle all the paperwork to ensure compliance with state regulations.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-12 bg-[#FFF] rounded-xl px-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">EIN </p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[#666666] text-[4vw] lg:leading-[1vw] leading-[5vw] font-normal ">Cloud BSS submits the paperwork to the Internal Revenue Service (IRS) on your behalf once the state has approved your company. The IRS will issue a 9 digit number that allows your business to open a bank account and hire employees in the US.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-1 mb-4">
                            <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] text-center font-medium leading-[5vw] lg:pt-[10px] pt-[5px]">Compliance</p>
                             </div>

                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 mb-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Registered Agent Service </p>
                            <div className="col-lg-8">
                            
                                <p className="lg:text-[0.8vw] text-[4vw] text-[#666666] lg:leading-[1vw] leading-[5vw] font-normal ">Ensure compliance and receive a level of privacy from Cloud BSS Registered Agents. Available to act as your address of record with the state, they receive and forward legal documents, tax notices, and other official correspondence from the state or Internal Revenue Service (IRS).</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-12 bg-[#FFF] rounded-xl px-4 py-2 mb-4">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Operating Agreement (LLCs only)</p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[#666666] text-[4vw] lg:leading-[1vw] leading-[5vw] font-normal ">Cloud BSS will provide the legal document that outlines the inner workings and structure of the Limited Liability Company (LLC) as set forth by you during formation. The operating agreement includes the rights, responsibilities, and obligations of the LLC's members (owners) and provides a framework for how the company will be managed and operated.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 mb-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Annual State Filings </p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[4vw] text-[#666666] lg:leading-[1vw] leading-[5vw] font-normal ">Many states require yearly updates about company structure and charge performance based compliance fees, often called a Franchise Tax. doola handles the calculations and sends updates on your behalf. State charges are not included as part of the filing.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <p className="lg:text-[0.9vw] text-[4vw]  lg:leading-[1vw] leading-[5vw] font-normal ">+$199 /yr</p>
                            </div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>

                        <div className="col-lg-2 mb-4">
                            <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] text-center font-medium leading-[5vw] lg:pt-[10px] pt-[5px]">Tax Support</p>
                             </div>
                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 py-2">
                        

                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw]  leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">CPA Consultation</p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[#666666] text-[4vw] lg:leading-[1vw] leading-[5vw] font-normal ">Phone consultation with a licensed professional working with doola to provide valuable insights and decision making assistance in fields related to taxation, accounting, and other financial matters.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <p className="lg:text-[0.9vw] text-[4vw]  lg:leading-[1vw] leading-[5vw] font-normal ">+$300 /hr</p></div>
                        <div className="col-lg-3 flex justify-center items-center">
                        <p className="lg:text-[0.8vw] text-[4vw] font-medium lg:leading-[1vw] leading-[5vw] ">1 Free Consultation</p>
                            </div>
                     
                        </div>
                        </div>

                        <div className="col-lg-12 bg-[#FFF] rounded-xl px-4 py-2 mb-4">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">IRS Tax Filings</p>
                            <div className="col-lg-8">
                                <p className="lg:text-[0.8vw] text-[#666666] text-[4vw] lg:leading-[1vw] leading-[5vw] font-normal ">Cloud BSS can prepare your annual tax return for submission to the Internal Revenue Service (IRS). Experts at doola will keep you informed of changes to tax aws and help you claim any applicable credits.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"><p className="lg:text-[0.9vw] text-[4vw]  lg:leading-[1vw] leading-[5vw] font-normal ">+$1,200 /yr</p> </div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] text-center font-medium leading-[5vw] lg:pt-[10px] pt-[5px]">Financial management</p>
                             </div>

                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 mb-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Bookkeeping Software</p>
                            <div className="col-lg-8">
                            
                                <p className="lg:text-[0.8vw] text-[4vw] text-[#666666] lg:leading-[1vw] leading-[5vw] font-normal ">Track your expenses, income, and tax deductions in real time. Simply classify a few transactions and doola Books will learn to classify them automatically in the future. Generate core financial documents like an Income Statement or Balance Sheet.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <p className="lg:text-[0.9vw] text-[4vw]  lg:leading-[1vw] leading-[5vw] font-normal ">+$300 /yr</p> </div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[1vw] text-center font-medium leading-[5vw] lg:pt-[10px] pt-[5px]">Customer Service</p>
                             </div>

                        <div className="col-lg-12 bg-[#F3EFE7] rounded-xl px-4 mb-4 py-2">
                            <div className="flex">
                            <div className="">
                            <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[20px] pt-[10px]">Dedicated Account Manager</p>
                            <div className="col-lg-8">
                            
                                <p className="lg:text-[0.8vw] text-[4vw] text-[#666666] lg:leading-[1vw] leading-[5vw] font-normal ">Get a dedicated account manager with white glove support to help you run and grow your business.</p>
                            </div>
                            </div>
                            <div className="col-lg-1 flex justify-center items-center"> <p className="lg:text-[0.9vw] text-[4vw]  lg:leading-[1vw] leading-[5vw] font-normal ">+$600 /yr</p> </div>
                        <div className="col-lg-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                     
                        </div>
                        </div>

                    </div>



                </div>

            </section >
             <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">
            
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                <div className="flex  justify-center">
                                           
                                                <p className="lg:text-[1.2vw] text-[4vw]  text-center lg:leading-[2vw] leading-[4vw] "> <button className="text-[#898989] ">Total Compliance</button></p>
                                            
                                        </div>
                                        <div className="flex  justify-center">
                                        <div className="col-lg-7 mb-4">
            
                                        <p className="lg:text-[2.5vw] text-[4vw] text-center lg:leading-[3vw] leading-[5vw] font-semibold ">The all-in-one bundle to form & manage your US business with ease</p>
                                        
                                    </div>
                                    </div>
                                    <div className="row ">
                                         <div className="col-lg-4 mb-4 ">
                                                        <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                          <div className="lg:pt-[20px] pt-[10px]">
                                                            <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                                          </div>
                                                          <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Formation</p>
                                                          <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Form your US company from anywhere in the world.</p>
                                                          <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Form your US company effortlessly with doola—no SSN required. We handle LLC, C-Corp, and DAO LLC formations. Our all-inclusive service covers Employer Identification Number (EIN), Registered Agent service, and Operating Agreement, all without hidden fees.</p>
                                                          
                                                          <div className="lg:pt-[67px] pt-[10px] text-center flex justify-center">
                                                            <div className="flex gap-2 w-full  border rounded-full items-center">
                                                              <button
                                                                type="button"
                                                                className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                                <div className="flex gap-2  w-full justify-center items-center">
                                                                  <div>Learn More</div>
                                                                  <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="none"
                                                                        className="stroke-black group-hover:stroke-white transition duration-300">
                                                                        <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </button>
                                                            </div></div>
                                                          
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-4 mb-4 ">
                                                        <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                          <div className="lg:pt-[20px] pt-[10px]">
                                                            <Image className="img-responsive w-30 " src="/assets/image 56.svg" alt="logo" width={1830} height={750} />
                                                          </div>
                                                          <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Money</p>
                                                          <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]"> International transfers to 100+ countries.</p>
                                                          <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Introducing a powerful, low-cost solution for international money transfers. doola Money facilitates transactions in local currencies worldwide with the added convenience of deposits in $USD. No Social Security Number (SSN) is required to open an account, making it the ideal solution for founders around the globe.</p>
                                        
                                                          <div className="lg:pt-[30px] pt-[10px] text-center flex justify-center">
                                                            <div className="flex gap-2 w-full  border rounded-full items-center">
                                                              <button
                                                                type="button"
                                                                className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                                <div className="flex gap-2  w-full justify-center items-center">
                                                                  <div>Learn More</div>
                                                                  <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="none"
                                                                        className="stroke-black group-hover:stroke-white transition duration-300">
                                                                        <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </button>
                                                            </div></div>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-4 mb-4 ">
                                                        <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                          <div className="lg:pt-[20px] pt-[10px]">
                                                            <Image className="img-responsive w-30 " src="/assets/Layer_2.svg" alt="logo" width={1830} height={750} />
                                                          </div>
                                                          <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Taxes</p>
                                                          <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]"> Embrace worry-free tax filings.</p>
                                                          <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Ensure 100% IRS and state compliance with the added benefit of a free CPA consultation. Avoid fines up to $25,000 and simplify your tax season with our dedicated support and transparent processes.</p>
                                                         
                                                                
                                                          <div className="lg:pt-[100px] pt-[10px] text-center flex justify-center">
                                                            <div className="flex gap-2 w-full  border rounded-full items-center">
                                                              <button
                                                                type="button"
                                                                className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                                <div className="flex gap-2  w-full justify-center items-center">
                                                                  <div>Learn More</div>
                                                                  <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="none"
                                                                        className="stroke-black group-hover:stroke-white transition duration-300">
                                                                        <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </button>
                                                            </div></div>
                                                        </div>
                                                      </div>
            
                                    </div>
                                    <div className="row ">
                                        
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                <div className="lg:pt-[20px] pt-[10px]">
                                                    <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                                                </div>
                                                
                                                <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Expedited Processing</p>
                                                <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Optimize your business launch with expedited processing.</p>
                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Processing times are contingent upon factors like the availability of a US Social Security Number (SSN). With this service, doola guarantees the expedited submission of your application to the state, facilitating quicker processing.</p>  
                                               
                                                <div className="lg:pt-[60px] pt-[10px] text-center flex justify-center">
                                                            <div className="flex gap-2 w-full  border rounded-full items-center">
                                                              <button
                                                                type="button"
                                                                className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                                <div className="flex gap-2  w-full justify-center items-center">
                                                                  <div>Learn More</div>
                                                                  <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="none"
                                                                        className="stroke-black group-hover:stroke-white transition duration-300">
                                                                        <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </button>
                                                            </div></div>
                                                   
                                            </div>
                                        </div>
                                      
                                        
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                <div className="lg:pt-[20px] pt-[10px]">
                                                    <Image className="img-responsive w-30 " src="/assets/image 56.svg" alt="logo" width={1830} height={750} />
                                                </div>
                                               
                                                <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">CPA Consultation</p>
                                                <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Elevate your financial strategy with our CPA consultations.</p>
                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Unlock financial clarity with the 1:1 CPA consultation included in our Total Compliance package. Ask expert tax questions, get personalized advice, and navigate the complexities of taxes with confidence.</p>
                                                
                                                
                                                <div className="lg:pt-[100px] pt-[10px] text-center flex justify-center">
                                                            <div className="flex gap-2 w-full  border rounded-full items-center">
                                                              <button
                                                                type="button"
                                                                className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                                <div className="flex gap-2  w-full justify-center items-center">
                                                                  <div>Learn More</div>
                                                                  <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="none"
                                                                        className="stroke-black group-hover:stroke-white transition duration-300">
                                                                        <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                      </svg>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </button>
                                                            </div></div>
                                                 
                                          
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                                <div className="lg:pt-[20px] pt-[10px]">
                                                    <Image className="img-responsive w-30 " src="/assets/Layer_2.svg" alt="logo" width={1830} height={750} />
                                                </div>
                                               <div className="lg:h-[410px]">
                                                <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] lg:pt-[40px] pt-[20px] leading-[5vw] font-medium "> Account Manager</p>
                                                <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px]  pt-[8px]">Your personal account manager for dedicated support.</p>
                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] mb-[80px] text-[#616161]">Enjoy dedicated support, guidance, and comprehensive answers to all your queries. Seamlessly navigate the complexities of running and growing your business with personalized assistance.</p>
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

      <p className="lg:text-[2vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] ">Unleash your success now</p>
      <div className="flex  justify-center">
        <div className="col-lg-8 ">
          <p className="lg:text-[1.2vw] text-[3vw]  text-center lg:leading-[2vw] leading-[4vw] lg:pt-[8px] pt-[5px]">Each state charges a one-time formation fee. Your state fee will vary depending on the state you form in. Not sure which state to choose? <button className="text-[#276EF1] underline">Take our quiz →</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <div className="col-lg-8">
    <div className="lg:flex gap-4 ">




      <div className="col-lg-6 mb-4 ">
        <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
          <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Starter</p>
            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Start your business</p>
            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666]">Formation & EIN filings, RA service, Operating Agreement, and regular compliance reminders.</p>

            <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">$297/y</p>
            <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">State fee not included.</p>
            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Formation</button>
          </div >
        </div>


      </div>

      <div className="col-lg-6 mb-4 ">
        <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
          <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Total Compliance</p>
            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Stay 100% compliant</p>
            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666]">Formation with Annual State filings, IRS Tax filings, a dedicated Account Manager and a free CPA consultation.</p>

            <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">$300/m</p>
            <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">State fee not included.</p>
            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Total Compliance</button>
          </div >

        </div>
      </div>
    </div>
  </div>
</div>
</section >





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

<Footer />
        </>
    )
};