import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {


    return (
        <>
            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[150px] pt-[80px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[90px] pb-[30px]">
                            <div className="row">
                                <div className="col-lg-6 flex justify-center items-center">
                                    <div className="col-lg-10">
                                        <p className="font-semibold lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Embrace worry-free<br></br>tax filings</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Coming soon, with early access now. <button className="text-[#0061FE] underline">See if you qualify for early access.</button></p>
                                        <div className="flex gap-4 pt-4 pb-4">


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>


                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/assets/tax1.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden ] ">
                <div className="lg:flex justify-center ">
                    <div className="col-lg-10 mb-4 border  rounded-2xl bg-[#F3EFE7] ">
                        <div className="lg:flex">
                            <div className="lg:px-[50px] px-[20px] lg:pt-[100px] pt-[40px]">
                                <p className="  font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">All your forms filed in one place</p>
                                <p className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] ">Cloud BSS prepares and files tax forms for independent contractors, freelancers, startups, e-commerce owners, and service vendors, ensuring a worry-free experience.</p>
                                {/* <div className="flex gap-2 pt-2">
                                            <button type="button" className="border flex border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md lg:px-4 lg:py-2 px-1 py-1 text-center  items-center">See Open Roles
                                                
                                               
                                            </button>
                                            <button type="button" className="border flex border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full  text-md lg:px-10 lg:py-2 px-1 py-1 text-center  items-center">Form we will
                                                
                                               
                                            </button>
                                            </div> */}
                                <div className=" flex gap-4 lg:pb-[60px] pb-[30px] pt-2 ">
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm lg:px-5 lg:py-2 px-1 py-1 text-center items-center">Get Started</button>
                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm lg:px-5 lg:py-2 px-1 py-1 text-center items-center">Watch a demo</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 flex lg:justify-end justify-center">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full" src="/assets/tax.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="lg:flex justify-center ">
                    <div className="col-lg-10  ">
                        <div className="row">
                            <div className="col-lg-6 mb-4 ">
                                <div className="block bg-[#F3EFE7] p-6  border border-white rounded-4 shadow-sm  ">

                                    <div className="lg:h-[240px]">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">The easiest tax solution for <br></br> Non-US residents</p>
                                        <div className="col-lg-9">
                                            <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  ">Starting a US Company as a non-US resident? We’ve got the tax expertise you need. We handle your every tax and compliance need and can answer all your questions. Launch your US business and get your taxes done with Cloud BSS.</p>
                                            <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                                <div className="flex gap-2  border rounded-full items-center">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="block bg-[#F3EFE7] p-6  border border-white rounded-4 shadow-sm  ">

                                    <div className="lg:h-[240px]">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">The easiest tax solution for <br></br> Non-US residents</p>
                                        <div className="col-lg-9">
                                            <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  ">Starting a US Company as a non-US resident? We’ve got the tax expertise you need. We handle your every tax and compliance need and can answer all your questions. Launch your US business and get your taxes done with Cloud BSS.</p>
                                            <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                                <div className="flex gap-2  border rounded-full items-center">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
                <div className="lg:flex justify-center ">
                    <div className="col-lg-10 mb-4 ">
                        <div className="row">
                            <div className="lg:flex justify-center items-center">
                                <div className="col-lg-6 mb-4 mt-4">
                                    <div className="block mt-4 ">


                                        <p className="lg:text-[1.5vw] text-[4vw] lg:px-[80px] px-[20px] lg:leading-[1.5vw] leading-[5vw] font-semibold lg:pt-[80px] pt-[20px]">Seamless tax filings unlocking simplicity with a single price</p>
                                        <div className="col-lg-9 mb-4 pt-2">
                                            <p className="lg:text-[0.8vw] text-[3vw] lg:px-[80px] px-[20px] lg:leading-[1.5vw] leading-[4vw]  ">
                                                <button
                                                    type="button"
                                                    className="border border-dark hover:bg-[#0073FD] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-1 text-center items-center group transition duration-300">
                                                    <div className="flex gap-2 items-center">
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
                                            </p>
                                            <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                                                <div className="flex gap-2  border rounded-full items-center">

                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <div className="col-lg-6 flex lg:justify-end justify-center mb-4 mt-4">
                                    <div className="col-lg-8 lg:mt-8">
                                        <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                            <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">

                                                <div className="lg:h-[430px]">

                                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Cloud Bss Taxes</p>




                                                    <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">


                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className="lg:text-[1.2vw] text-[2vw] font-medium lg:leading-[2vw] leading-[3vw] ">Annual State filings</p>

                                                    </div>

                                                    <div className="col-lg-12 flex  gap-2  ">


                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className="lg:text-[1.2vw] text-[2vw] font-medium lg:leading-[2vw] leading-[3vw] ">Business IRS Tax filings</p>

                                                    </div>
                                                    <div className="col-lg-12 flex  gap-2  ">


                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className="lg:text-[1.2vw] text-[2vw] font-medium lg:leading-[2vw] leading-[3vw] ">1:1 CPA consultation</p>

                                                    </div>
                                                    <div className="col-lg-12 flex  gap-2  ">


                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className="lg:text-[1.2vw] text-[2vw] font-medium lg:leading-[2vw] leading-[3vw] ">24/7 live customer support</p>



                                                    </div>
                                                    <p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]"><span className="font-medium">$ </span>1,999/y</p>
                                                    <div className=" lg:pt-[20px]">
                                                        <Link href="" className="bg-[#F3EFE7] flex justify-center px-4 py-2 text-black !no-underline text-center w-full items-center  gap-2 !rounded-full font-medium">
                                                            <div ><div className="flex justify-center text-center items-center"> Get cloud bss taxes<IoIosArrowForward /></div></div>
                                                        </Link>
                                                    </div>
                                                </div>








                                            </div >

                                        </div>



                                    </div>



                                </div>

                            </div>
                        </div>



                    </div>
                </div>

            </section>

            <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

        <div className="row">
          <div className="col-lg-12 mb-4">



            <div className="lg:pb-[60px] pb-[30px] text-center">

              <p className="lg:text-[2vw] text-[5vw] lg:leading-[3vw] leading-[5vw] font-semibold ">Unleash your success now</p>
              <div className="flex  justify-center">
                <div className="col-lg-8 ">
                  <Link href="/packages"><p className="lg:text-[1.2vw] text-[4vw]  text-center lg:leading-[2vw] leading-[4vw] "> <button className="text-[#276EF1] underline">Compare package →</button></p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="col-lg-8">
            <div className="lg:flex gap-4 ">




              <div className="col-lg-6 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7] rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Starter</p>
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
                    <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Total Compliance</p>
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Stay 100% compliant</p>
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666]">FFormation with Annual State filings, IRS Tax filings, a dedicated Account Manager and a free CPA consultation.</p>

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
                               <Footer/>
                              </>
    )
}