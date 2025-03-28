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

      <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[90px] overflow-hidden bg-[#FFF]">

        <div className="row ">
          <div className="col-lg-12 ">
            <div className="lg:pb-[90px] pb-[30px]">
              <div className="row">
                <div className="col-lg-6">
                  <div className="col-lg-10">
                    <p className="font-bold lg:text-[2.5vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Start Your Start your US business from anywhere and keep it 100% compliant</p>
                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[30px] ">
                      Formation, EIN, Registered Agent, Annual State Filings, Federal Tax Filings and a Dedicated Account Manager. Grow your business and let doola handle your business compliance needs.</p>
                    <div className="flex gap-4 pt-4 pb-4">


                      <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>


                      <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>

                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Image className="img-responsive w-full " src="/assets/comp1.png" alt="logo" width={1830} height={750} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

        <div className="row">
          <div className="col-lg-12">

            <div className="row ">
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                  <div className="lg:pt-[20px] pt-[10px]">
                    <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                  </div>
                  <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Formation</p>
                  <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Form your US company from anywhere in the world.</p>
                  <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Form your US company effortlessly with doola—no SSN required. We handle LLC, C-Corp, and DAO LLC formations. Our all-inclusive service covers Employer Identification Number (EIN), Registered Agent service, and Operating Agreement, all without hidden fees.</p>
                  <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center w-full">
                    <div className="flex gap-2  w-full border rounded-full items-center">
                      <button
                        type="button"
                        className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300 ">
                        <div className="flex gap-2  w-full justify-center items-center">
                          <div>Incl, in Total Compliance</div>
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
                  <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
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
                  <div className="lg:pt-[40px] pt-[10px] text-center flex justify-center w-full">
                    <div className="flex gap-2  w-full border rounded-full items-center">
                      <button
                        type="button"
                        className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] !w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300 ">
                        <div className="flex gap-2  w-full justify-center items-center">
                          <div>Incl, in Total Compliance</div>
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
                  <div className="lg:pt-[20px] pt-[10px] text-center flex justify-center">
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
          </div>

        </div>

      </section>



      {/* <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[20px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
        <div className="row ">
          <div className="col-lg-12 ">
            <div className="row">
              <div className="col-lg-9">
                <div className="col-lg-5">
                  <div className="row justify-start">

                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Kickstart your business with expert accounting services</p>
                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px] text-[#0061FE]">Streamline your company's financial admin right from the start with our accounting packages, starting at just £65/month.</p>


                  </div>
                  <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Get this offer</button>
                </div>
              </div>
              <div className="col-lg-3">
                <Image className="img-responsive w-full " src="/Images/copy5.png" alt="logo" width={1830} height={750} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="lg:px-[100px] px-[20px] overflow-hidden ">
        <div className="row justify-center">
          <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[30px] sm:pb-[50px] pb-[10px] text-center ">
            <div className="flex justify-center ">
              <div className="col-lg-5">
                <p className=" text-black lg:text-[2vw] font-semibold text-[4vw] lg:leading-[2vw] leading-[3vw]">One-stop solution for busy entrepreneurs</p>


              </div>
            </div>
          </div>
          <div className="col-md-10 lg:pt-[80px] pt-[10px]">
            <div className="row ">
              <div className="col-lg-6">
                <div className="col-md-12">
                  <Image className="img-responsive w-full" src="/assets/image.png" alt="logo" width={1830} height={750} />
                </div>
              </div>
              <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                <div className="flex lg:justify-end">
                  <div className="col-lg-9">
                    <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Kickstart your business</p>
                    <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">From the formation of your company to BOI Reporting, we’re by your side every step, ensuring your business remains 100% compliant.
                    </p>
                    <button
                      type="button"
                      className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium mb-4 !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                      <div className="flex gap-2 items-center">
                        <div>Get Started</div>

                      </div>
                    </button>



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="lg:px-[120px] px-[20px] pb-4 overflow-hidden">
        <div className="row  justify-center ">
          <div className="col-md-10 ">
            <div className="lg:pt-[80px] pt-[10px]">
              <div className="row ">
                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                  <div className="flex lg:justify">
                    <div className="col-lg-9 ">
                      <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Select Your SIC Code</p>
                      <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We offer essential tools for seamless global business operations, including international money transfers and tax support.
                      </p>

                      <button
                        type="button"
                        className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                        <div className="flex gap-2 items-center">
                          <div>Get Started</div>

                        </div>
                      </button>

                    </div>

                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                  <div className="col-lg-12 ">
                    <Image className="img-responsive w-full" src="/assets/image2.png" alt="logo" width={1830} height={750} />
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
  );
}
