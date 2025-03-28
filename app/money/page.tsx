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

            <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[80px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[90px] pb-[30px]">
                            <div className="row">
                                <div className="col-lg-6 flex justify-center items-center">
                                    <div className="col-lg-10">
                                        <p className="font-bold lg:text-[2.5vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Unlock borderless banking<br></br> with a U.S.-based account</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Coming soon, with early access now. <button className="text-[#0061FE] underline">See if you qualify for early access.</button></p>
                                        <div className="flex gap-4 pt-4 pb-4">


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/assets/mon.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden bg-[#F3EFE7]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center items-center">
                            <div className="col-lg-11 mb-4">
                                <p className="lg:text-[2.5vw] text-[4vw] text-center lg:leading-[3vw] leading-[5vw] font-semibold ">International transfers to 100+ countries.</p>
                                <div >
                                <p className="lg:text-[1vw] text-[3vw]  text-center lg:leading-[1.5vw] leading-[4vw] "> Introducing a powerful, low-cost solution for international money transfers. doola Money facilitates transactions in local currencies worldwide with the added convenience of deposits in $USD. No Social Security Number (SSN) is required to open an account, making it the ideal solution for founders around the globe.</p>
                                <div className="flex flex-wrap justify-center items-center">
                            <div className=" mb-4 flex flex-wrap gap-4">
                                
                                <button type="button" className="border bg-white text-black border-white hover:bg-[#000] hover:text-white font-medium !rounded-full lg:w-[200px] w-full lg:py-2 py-1 text-center items-center     text-sm  items-centerborder  ">Overview</button>


                                <button type="button" className="border bg-white border-white hover:bg-[#000] hover:text-black font-medium !rounded-full text-sm  lg:w-[200px] w-full py-2 text-center items-center">Transfer</button>

                                <button type="button" className="border bg-white border-white hover:bg-[#000] hover:text-black font-medium !rounded-full text-sm  lg:w-[200px] w-full py-2 text-center items-center">Transactions</button>
                                </div>



                            </div>
                          
                        </div>
                        


                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                        <div className="col-lg-8 ">
                        <Image className="img-responsive w-full " src="/assets/mon1.png" alt="logo" width={1830} height={750} />
                            </div>
                            </div>
                        
                    </div>
                </div>


            </section>
            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden ">
            <div className="row ">
            <div className="col-lg-12 mb-4">
            <p className="lg:text-[2.5vw] text-[5vw] text-center lg:leading-[3vw] leading-[5vw] font-semibold ">Designed for global founders</p>
            <div className="lg:flex gap-3 pt-4">
            <div className="col-lg-3  mb-4">
                            <div className="block bg-[#F3EFE7] p-6  border border-white rounded-4 shadow-sm  ">
                              <div className="lg:pt-[20px] pt-[10px]">
                                <Image className="img-responsive w-30 " src="/assets/Vector.svg" alt="logo" width={1830} height={750} />
                              </div>
                             <div className="lg:h-[200px]">
                              <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Fast & Easy Payouts</p>
                              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">Quickly connect your Amazon, Stripe, Paypal accounts, and more to receive your payouts and then transfer anywhere.</p>
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
                              <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Backed by U.S Security</p>
                              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">FDIC-insured for balances up to $250,000. Focus on making money; we’ll keep it secure.</p>
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
                              <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">No (or low) fees</p>
                              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">The account and all $USD transfers are free! International transfers are <span className="text-[#0061FE]">as low as 1%</span>   and transparent: we break it all down before you submit it.</p>
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
                              <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Quick Transfers</p>
                              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">In 1 to 5 days, get your ACH, wire, or international transfers where you want them when you need them.</p>
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
