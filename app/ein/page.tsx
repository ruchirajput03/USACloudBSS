import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";

import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
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
            <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[80px] overflow-hidden bg-[#FFF]">
            
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <div className="lg:pb-[90px] pb-[30px]">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="col-lg-10">
                                                    <p className="font-bold lg:text-[2.5vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Get your Employer Identification Number today</p>
                                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[30px] ">
                                                    Whether you are starting a new business or have an existing business, doola formation services can help you register for an EIN. Don’t waste time navigating complex IRS forms and procedures.</p>
                                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[30px] ">
                                                    EIN registration is included in all of our business formation packages and can get you setup quickly and effortlessly.</p>
                                                    <div className="flex gap-4 pt-4 pb-4">
            
            
                                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>
            
            
                                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>
            
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <Image className="img-responsive w-full " src="/assets/register.png" alt="logo" width={1830} height={750} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
            
                        </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center items-center">
                            <div className="col-lg-8">
                                <p className="lg:text-[2vw] text-[5vw] text-center lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold ">Why choose Cloud BSS to get an EIN?</p>
                                <p className="lg:text-[1vw] lg:pt-[0px] pt-[10px] text-[3vw] lg:leading-[1.5vw] text-center leading-[4vw]  text-[#616161]">Save time and eliminate the hassle of complex IRS forms and procedures with our expert service.</p>
                            </div>
                        </div>
                        <div className="lg:flex gap-2 lg:mt-10 mb-4">
                            <div className="col-lg-3 mb-4">



                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#276EF1" fill="none">
                                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M12.0303 11.9624L16.5832 7.40948M19.7404 4.3445L19.1872 2.35736C19.0853 2.02999 18.6914 1.89953 18.4259 2.1165C16.9898 3.29006 15.4254 4.87079 16.703 7.36407C19.2771 8.56442 20.7466 6.94572 21.8733 5.58518C22.0975 5.31448 21.9623 4.90755 21.6247 4.80993L19.7404 4.3445Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="col-lg-10 lg:mt-0 mt-2">
                                    <p className="lg:text-[1vw] text-[4vw]  lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold lg:mt-0 mt-2">Filed by Experts</p>
                                    <p className="mb-3 font-normal lg:text-[0.9vw] text-[3vw] lg:mt-0 mt-2 text-[#6B6B6B] ">Navigating complex IRS forms and procedures is stressful and time consuming. Leave it to the experts at Cloud BSS to handle your EIN application.</p>
                                </div>


                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#FFABC0" fill="none">
                                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="col-lg-10 lg:mt-0 mt-2">
                                        <p className="  lg:text-[1vw] text-[4vw]  lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold ">Stress-Free process</p>
                                        <p className="mb-3 font-normal text-[#6B6B6B] lg:mt-0 mt-2 lg:text-[0.9vw] text-[3vw] ">Save time with our streamlined process. Just provide basic business information, and Cloud BSS takes care of the rest!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#FF6F1F" fill="none">
                                        <path d="M13 5C17.9706 5 22 8.35786 22 12.5C22 14.5586 21.0047 16.4235 19.3933 17.7787C19.1517 17.9819 19 18.2762 19 18.5919V21H17L16.2062 19.8674C16.083 19.6916 15.8616 19.6153 15.6537 19.6687C13.9248 20.1132 12.0752 20.1132 10.3463 19.6687C10.1384 19.6153 9.91703 19.6916 9.79384 19.8674L9 21H7V18.6154C7 18.2866 6.83835 17.9788 6.56764 17.7922C5.49285 17.0511 2 15.6014 2 14.0582V12.5C2 11.9083 2.44771 11.4286 3 11.4286C3.60665 11.4286 4.10188 11.1929 4.30205 10.5661C5.32552 7.36121 8.83187 5 13 5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M14.5 8C13.868 7.67502 13.1963 7.5 12.5 7.5C11.8037 7.5 11.132 7.67502 10.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.49981 11H7.50879" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 8.5C21.5 8 22 7.06296 22 5.83053C22 4.26727 20.6569 3 19 3C18.6494 3 18.3128 3.05676 18 3.16106" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <div className="col-lg-9 lg:mt-0 mt-2">
                                        <p className="lg:text-[1vw] text-[4vw]  lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold ">Verified Approval</p>
                                        <p className="mb-3 font-normal lg:mt-0 mt-2  text-[#6B6B6B] lg:text-[0.9vw] text-[3vw] ">We’ll handle everything, ensuring you receive the official documentation with your confirmed Employer Identification Number.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#C19469" fill="none">
                                        <path d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54628 14.5 8.31594 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 9.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>
                                    <div className="col-lg-9 lg:mt-0 mt-2">
                                        <p className="lg:text-[1vw] text-[4vw]  lg:leading-[3vw] p-0 m-0 leading-[5vw] font-semibold ">Focus on Business</p>
                                        <p className="mb-3 font-normal text-[#6B6B6B] lg:mt-0 mt-2 lg:text-[0.9vw] text-[3vw] ">Cloud BSS handles all the paperwork to keep you compliant and penalty-free. You focus on your business while we take care of the rest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] px-[20px] mb-4 lg:pt-[80px] pt-[40px] overflow-hidden bg-[#000]">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row ">
                            <div className="col-lg-9">
                                <div className="col-lg-6 lg:pb-[80px] pb-[30px]">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Got questions? Chat with our local <br></br>experts</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.</p>


                                    </div>
                                    <div className="lg:pt-[0px] pt-[15px]">
                                        <button type="button" className="border border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Schedule a call</button>
                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/assets/image 28.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] px-[20px] overflow-hidden ">


                <div className="col-md-12 lg:pt-[80px] pt-[10px]">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="col-md-12">
                                <Image className="img-responsive w-full" src="/assets/ein5.png" alt="logo" width={1080} height={1080} />
                            </div>
                        </div>
                        <div className="col-lg-6 lg:pt-[60px] pt-[20px]">
                            <div className="flex ">
                                <div className="col-lg-12">
                                    <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Do I need a business Operating Agreement?</p>
                                    <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Yes, having a business Operating Agreement is highly recommended for any type of business entity, especially for LLCs. While not always legally required, an Operating Agreement provides numerous benefits:
                                    </p>
                                    <div className="col-lg-9">
                                        <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "><span className=" font-medium">Clarity and Structure:</span> It outlines the ownership and management structure of the business, clarifying the roles, rights, and responsibilities of each member or partner.
                                        </p>
                                        <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "><span className=" font-medium">Legal Protection: </span> An Operating Agreement helps protect the limited liability status of the business, ensuring that the business is recognized as a separate legal entity from its owners.

                                        </p>
                                        <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "><span className=" font-medium">Dispute Resolution: </span> It establishes procedures for resolving disputes among members, reducing the likelihood of conflicts escalating into costly legal battles.
                                        </p>
                                    </div>
                                    <ul className="list-disc text-[#404040] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium ">
                                        <li>Facilitates decision-making in multi-member LLCs</li>
                                        <li>Required for bank accounts and loans in most states</li>
                                        <li>Enhances credibility and legitimacy of your business</li>

                                    </ul>





                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[120px] px-[20px] pb-4 overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-md-12 ">
                        <div className="lg:pt-[80px] pt-[10px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[60px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex ">
                                        <div className="col-lg-12">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Do I need a business Operating Agreement?</p>
                                            <div className="col-lg-11">
                                                <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">An Operating Agreement is a crucial document for LLCs, outlining the structure, management, and operation of the business. It should include details such as organization information, member details, management structure (member-managed or manager-managed), decision-making procedures, profit and loss allocation, distributions, transfer of membership interests, dissolution protocols, dispute resolution mechanisms, amendment procedures, and governing law.
                                                </p></div>
                                            <p className="text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">By including these elements, the Operating Agreement provides clarity, guidance, and protection for all members involved in the LLC.
                                            </p>

                                            <ul className="list-disc text-[#404040]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium ">
                                                <li className="mt-2">Filing taxes, reporting income, and fulfilling tax obligations</li>
                                                <li className="mt-2">Managing employee payroll taxes and reporting wages to the IRS</li>
                                                <li className="mt-2">Enhances security and privacy, minimizing identity theft risks</li>
                                                <li className="mt-2">Aids in establishing credit history and accessing loans
                                                </li>

                                            </ul>





                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/assets/ein6.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] px-[20px] mb-4 lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="lg:flex">
                            <div className="col-lg-6 mb-4">
                                <div className="col-lg-6 ">


                                    <button className="bg-[#FAD333] px-4 py-2 flex gap-2 lg:mb-0 mb-2 !rounded-xl font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>Incl. in Total Compliance</button>

                                    <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1.8vw] leading-[5vw] font-bold lg:pt-[20px] pt-[10px]">EIN included with business formation</p>

                                </div>
                                <div className="col-lg-9 mb-4">
                                    <p className="lg:text-[0.9vw] text-[3.3vw] lg:leading-[1vw] leading-[4.2vw]">Streamline your business journey with us! Let us handle your IRS paperwork while you focus on what truly matters – building your business! Get your Employer Identification Number (EIN) today!</p>


                                </div>
                            </div>

                            <div className="col-lg-6 mb-4 flex lg:justify-end justify-center">
                                <div className="col-lg-6 rounded-xl bg-[#F6F6F6]">
                                    <div className="lg:pt-[20px] pt-[10px] flex gap-4 lg:px-5 px-3 ">
                                        <Image
                                            className="img-responsive w-48"
                                            src="/assets/Group 17804.svg"
                                            alt="logo"
                                            width={1830}
                                            height={750}
                                        />
                                         <p className="lg:text-[2vw]  text-[4vw] m-0 p-0">EIN</p>
                                        
                                    </div>
                                    <ul className="list-disc mt-4 font-medium">
                                            <li>EIN application filed directly with IRS</li>
                                            <li>Confirmed identification number</li>

                                         </ul>
                                         <div className=" flex items-center lg:justify-end justify-center lg:px-4 mb-4 ">
                                         <button type="button" className="text-white bg-black hover:bg-transparent focus:ring-4 font-medium  rounded-5 text-sm  flex gap-1 py-2.5 px-4 dark:hover:bg-transparent ">Sign up <IoIosArrowForward className=" h-6 w-6"/></button>
                                         </div>
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
                                                                  <Footer/>
        </>
    )
};