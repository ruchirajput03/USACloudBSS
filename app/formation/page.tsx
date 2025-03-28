"use client"
import Image from "next/image";
import Link from "next/link";
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

      <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[150px] overflow-hidden bg-[#FFF]">

        <div className="row ">
          <div className="col-lg-12 ">
            <div className="lg:pb-[90px] pb-[30px]">
              <div className="row">

                <div className="col-lg-6 flex items-center justify-center">
                  <div className="col-lg-10">
                    <p className="font-bold lg:text-[2.5vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw]  text-[#212833]">Form your US company from anywhere in the world</p>

                    <div className="flex gap-4 pt-4 pb-4">


                      <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Get Started</button>


                      <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-3 py-2 text-center items-center">Schedule a call</button>

                    </div>
                  </div>
                </div>


                <div className="col-lg-6">
                  <Image className="img-responsive w-full " src="/assets/formation.png" alt="logo" width={1830} height={750} />
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
                  <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> LLC</p>
                  <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Form an LLC to monetize your US <br></br>presence.</p>
                  <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161]">A Limited Liability Company merges partnership flexibility with corporate liability protection. It shields your personal assets from business debts, simplifies management, and allows for pass-through taxation, making it a popular choice for small businesses.</p>
                  <div className="lg:pt-[15px] pt-[10px] text-center flex justify-center">
                    <div className="flex gap-2  border rounded-full items-center">

                    </div></div>

                </div>
              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                  <div className="lg:pt-[20px] pt-[10px]">
                    <Image className="img-responsive w-30 " src="/assets/image 56.svg" alt="logo" width={1830} height={750} />
                  </div>
                  <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">C-Corp</p>
                  <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]">Establish a C-Corp for global growth.</p>
                  <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161] lg:pb-10 lg:pt-4">Empower your startup with a C-Corporation—crafted for growth and attracting investors. Offering liability protection and diverse funding options, it’s ideal for entrepreneurs aiming at significant expansion and actively seeking external investments.</p>


                </div>
              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                  <div className="lg:pt-[20px] pt-[10px]">
                    <Image className="img-responsive w-30 " src="/assets/Layer_2.svg" alt="logo" width={1830} height={750} />
                  </div>
                  <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> DAO LLC</p>
                  <p className="lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] text-[#2A2A2A] leading-[5vw] font-medium lg:pt-[4px] pt-[8px]"> Forge the future with a DAO LLC.</p>
                  <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#616161] lg:pb-10 ">Step into the future with a DAO LLC, merging LLC flexibility with blockchain tech. Transform governance for transparency, autonomy, and innovation—an ideal option for shaping decentralized structures and revolutionizing decision-making processes.</p>


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

              <p className="lg:text-[2vw] text-[5vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Learn about business structures</p>
              <div className="flex  justify-center">
                <div className="col-lg-8 ">
                  <p className="lg:text-[1.2vw] text-[4vw]  text-center lg:leading-[2vw] leading-[4vw] lg:pt-[2px] pt-[5px]"> <button className="text-[#276EF1] "> Take our quiz →</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="col-lg-12">
            <div className="lg:flex gap-4 ">




              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">LLC</p>

                    <div className="col-lg-8 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Great for small businesses due to more flexibility</p></div>
                    <div className="col-lg-8 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Simple management structure and easier to operate</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Less paperwork, corporate restrictions, no meeting requirements</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="24" color="#EF0000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Ownership represented by members (LLCs cannot issue stock)</p></div>


                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">C-Corp</p>

                    <div className="col-lg-8 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Great for startups fundraising from investors</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Ability to raise capital by issuing stock; ownership represented by shareholders</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="24" color="#EF0000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Management structure with more operating requirements</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="24" color="#EF0000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Management structure with more operating requirements</p></div>


                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">DAO LLC</p>

                    <div className="col-lg-10 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Great for companies that primarily operate on-chain under a Decentralized Autonomous Network</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Simple management structure and easy to operate via smart contracts</p></div>
                    <div className="col-lg-9 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="24" color="#EF0000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">Legal Protection for the owners from lawsuits or legal procedures</p></div>
                    <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[5px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="24" color="#EF0000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw] ">DAO LLC ownership represented by owners % ownership in the LLC. (LLCs cannot issue stock)</p></div>


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
              <div className="col-lg-3 w-full">
                <Image className="img-responsive w-full " src="/assets/image 46.png" alt="logo" width={1830} height={750} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

        <div className="row">
          <div className="col-lg-12 ">



            <div className="lg:pb-[60px] text-center">

              <p className="lg:text-[2vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Getting started is easy</p>

            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="col-lg-12 mb-4">
            <div className="flex word-break marquee gap-4 ">
	

              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 1</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Form your company</p>
                      <p className="lg:text-[1.1vw] text-[4vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[2px] pt-[1px]">What we need from you is your:</p>

                      <div className="col-lg-8 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Ideal company name</p></div>
                      <div className="col-lg-12 flex flex-wrap gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[4vw] word-break ">Personal address (it can be anywhere in the world)</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Email address</p>
                      </div>
                    </div>

                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[85px] pt-[10px]">Get your company formed in:</p>

                    <button>
                      <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] lg:leading-[1vw] leading-[3vw]  font-medium   items-center flex gap-2 !rounded-xl"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>1 week (on average)</div></button>



                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4  ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 2</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Get everything you need</p>
                      <p className="lg:text-[1.1vw] text-[4vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[2px] pt-[1px]">What you get from us:</p>

                      <div className="col-lg-10 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Company formed with any state</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Employer Identification Number (EIN)</p></div>
                      <div className="col-lg-12 flex  flx-wrap gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1.5vw] leading-[4vw] word-break ">Operating Agreement & Articles of Organization</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Registered Agent service</p>
                      </div>
                    </div>




                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[30px] pt-[15px]">Get your EIN in:</p>

                    <button>
                      <div className="bg-[#F3EFE7]  px-4 py-2 lg:text-[16px] text-[12px] items-center flex gap-2 !rounded-xl font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>1 - 2 business days with SSN</div></button>
                    <div className="pt-3">
                      <button>
                        <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] flex gap-2  !rounded-xl truncate items-center font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                          <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>8 weeks (on average) without SSN</div></button>
                    </div>



                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 3</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Set up your US bank account</p>




                      <div className="col-lg-12 gap-2 lg:pt-[10px] pt-[10px] ">
                       

                        <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1.5vw] leading-[3vw] break-word ">Once you get your EIN (required for a bank account), you’re ready to apply for a US bank account through our custom partner portal. A passport is required for this step. ‍</p>
                      </div>
                    </div>

                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[85px] pt-[10px]">Get your bank account in:</p>


                    <button>
                      <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] flex gap-2 !rounded-xl items-center font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>3 - 5 business days</div></button>



                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 1</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Form your company</p>
                      <p className="lg:text-[1.1vw] text-[4vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[2px] pt-[1px]">What we need from you is your:</p>

                      <div className="col-lg-8 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Ideal company name</p></div>
                      <div className="col-lg-12 flex flex-wrap gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[4vw] word-break ">Personal address (it can be anywhere in the world)</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1vw] leading-[3vw] ">Email address</p>
                      </div>
                    </div>

                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[85px] pt-[10px]">Get your company formed in:</p>

                    <button>
                      <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] lg:leading-[1vw] leading-[3vw]  font-medium   items-center flex gap-2 !rounded-xl"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>1 week (on average)</div></button>



                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4  ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 2</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Get everything you need</p>
                      <p className="lg:text-[1.1vw] text-[4vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[2px] pt-[1px]">What you get from us:</p>

                      <div className="col-lg-10 flex  gap-2 lg:pt-[20px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Company formed with any state</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Employer Identification Number (EIN)</p></div>
                      <div className="col-lg-12 flex  flx-wrap gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[1.5vw] leading-[4vw] word-break ">Operating Agreement & Articles of Organization</p></div>
                      <div className="col-lg-12 flex  gap-2 lg:pt-[10px] pt-[10px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="30" height="24" color="#19B500" fill="none">
                          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="lg:text-[1.2vw] text-[3vw] font-medium lg:leading-[2vw] leading-[3vw] ">Registered Agent service</p>
                      </div>
                    </div>




                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[30px] pt-[15px]">Get your EIN in:</p>

                    <button>
                      <div className="bg-[#F3EFE7]  px-4 py-2 lg:text-[16px] text-[12px] items-center flex gap-2 !rounded-xl font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>1 - 2 business days with SSN</div></button>
                    <div className="pt-3">
                      <button>
                        <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] flex gap-2  !rounded-xl truncate items-center font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                          <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>8 weeks (on average) without SSN</div></button>
                    </div>



                  </div >
                </div>


              </div>
              <div className="col-lg-4 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <button className="bg-[#F6F6F6] px-4 py-2 !rounded-full font-semibold">Step 3</button>
                    <div className="lg:h-[400px]">
                      <p className="lg:text-[1.8vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px]">Set up your US bank account</p>




                      <div className="col-lg-12 gap-2 lg:pt-[10px] pt-[10px] ">
                       

                        <p className="lg:text-[1vw] text-[3vw] font-medium lg:leading-[1.5vw] leading-[3vw] break-word ">Once you get your EIN (required for a bank account), you’re ready to apply for a US bank account through our custom partner portal. A passport is required for this step. ‍</p>
                      </div>
                    </div>

                    <p className="lg:text-[1.1vw] text-[3.5vw] lg:leading-[1vw] leading-[5vw]  lg:pt-[85px] pt-[10px]">Get your bank account in:</p>


                    <button>
                      <div className="bg-[#F3EFE7] px-4 py-2 lg:text-[16px] text-[12px] flex gap-2 !rounded-xl items-center font-medium"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>3 - 5 business days</div></button>



                  </div >
                </div>


              </div>


            </div>
          </div>
        </div>
      </section >
      <section className="lg:px-[80px] px-[20px] lg:pt-[80px]  overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

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
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Starter</p>
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium">Start your business</p>
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#666666] word-break">Formation & EIN filings, RA service, Operating Agreement, and regular compliance reminders.</p>

                    <p className="lg:text-[2.5vw] text-[3vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">$297/y</p>
                    <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">State fee not included.</p>
                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff]  font-medium !rounded-full text-md w-full py-2 text-center items-center">Formation</button>
                  </div >
                </div>


              </div>

              <div className="col-lg-6 mb-4 ">
                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                  <div className="block  p-6 bg-[#FFFDFA] rounded-4   ">
                    <p className="lg:text-[1.5vw] text-[5vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px]">Total Compliance</p>
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
                  <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium 
                   text-sm  text-center items-centerborder border-black !rounded-lg px-4 py-2  mt-4 mb-4">Learn More</button>

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
      <Footer />

    </>
  )
};