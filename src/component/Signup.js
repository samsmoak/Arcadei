import React from "react";
import { Link } from "react-router-dom";
// import Pager from "../componentsvg/pager";
import { Imagesdata } from "../Data/imagesdata";
import Navigation from "./Navigation";

function Signup() {
	return (
		<div>
			<Navigation />
			<div className='flex relative mt-6 h-auto  w-screen bg-yellow-900 md:bg-white py-14 '>
				<div className='w-96 h-full hidden md:block bg-white '></div>
				<div className=' w-auto h-bigmax md:h-auto '>
					{Imagesdata.map((slide, id) => {
						return (
							<div>
								{id === 0 && (
									<img
										src={slide.image}
										alt='carousel  '
										className=' h-screen w-screen '
										key={id}
									/>
								)}
							</div>
						);
					})}
				</div>
				<div className='absolute  top-0 right-0 left-0 bottom-0   '>
					<div className=' w-full flex justify-center items-center '>
						<div className='grid grid-rows-2 md:grid-rows-none md:grid-cols-10  '>
							<div className=' row-span-1 md:col-span-4 md:col-start-2    opacity-100  flex  justify-center items-start '>
								<div className='bg-white   rounded-lg    mt-40  shadow-2xl '>
									<form action='' className=' w-full  px-10 py-12'>
										<div className='text-3xl font-bold  text-yellow-800'>
											Request a demo by signing in
										</div>
										<div className='space-y-2  '>
											<label for='Text' className='font-light'>
												First Name
											</label>
											<div className='w-full'>
												<input type='text' id='Text' className='w-full' />
											</div>
										</div>
										<div className='space-y-2  '>
											<label for='Text2' className='font-light'>
												Last Name
											</label>
											<div className='w-full'>
												<input type='text' id='Text2' className='w-full' />
											</div>
										</div>

										<div className='space-y-2  '>
											<label for='Email' className='font-light'>
												Email
											</label>
											<div className='w-full'>
												<input type='email' id='Email' className='w-full' />
											</div>
										</div>

										<div className='space-y-2'>
											<label for='Company ' className='font-light'>
												Company
											</label>
											<div className='w-full'>
												<input type='text' id='Company' className='w-full' />
											</div>
										</div>
										<div className='space-y-2  '>
											<label for='Job' className='font-light'>
												Job Title
											</label>
											<div className='w-full'>
												<input type='text' id='Job' className='w-full' />
											</div>
										</div>
										<div className='space-y-2  '>
											<label for='Message' className='font-light'>
												Message
											</label>
											<div className='w-full'>
												<input
													type='text'
													id='Message'
													className='w-full h-32'
												/>
											</div>
										</div>
										<div className='flex '>
											<input
												type='checkbox'
												className='rounded-full mt-1 mr-3'
											/>
											<p>
												By clicking this box, you are agreeing that you are
												interested in receiving additional marketing materials
												related to products and services from Instabase.
											</p>
										</div>
										<div className='w-full flex justify-center'>
											<button className='py-2 px-12 bg-mamba-100 hover:bg-gray-600 text-white rounded-2xl '>
												signin
											</button>
										</div>
									</form>
								</div>
							</div>
							<div className=' row-span-1 row-start-1   md:col-span-4 md:col-start-7  pr-12 flex items-center   '>
								<div className='mt-44 space-y-10 text-gray-200'>
									<h4 className=' font-medium text-5xl'>
										Schedule a Live Demo of Arcadei
									</h4>
									<p className='text-xl font-light'>
										Thank you for your interest in Instabase. Request a custom
										demo today and see why Instabase is the platform of choice
										for some of today’s largest, organizations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=' w-screen py-12   bg-white flex flex-col  items-center'>
				<div className='lg:w-3/4 md:w-3/4 w-3/4 '>
					<div className=''>
						<p className='font-bold text-2xl md:text-4xl text-mamba-100'>
							What to expect
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						<div className=''>
							<div className='w-6 h-6 rounded-full bg-black text-center text-white mb-3'>
								1
							</div>
							<h4 className='lg:w-3/4 text-2xl font-semibold'>
								Understanding your requirement
							</h4>
							<p className='w-3/4 md:w-3/4 font-light'>
								A Instabase expert will give you a call and talk about what
								you're trying to solve for: process, pains and what you want to
								achieve.
							</p>
						</div>
						<div>
							<div className='w-6 h-6 rounded-full bg-black text-center text-white mb-3'>
								2
							</div>
							<h4 className='lg:w-3/4 text-2xl font-semibold'>
								The right solution for you
							</h4>
							<p className='w-3/4 font-light '>
								We'll discuss the right solutions to fit your use case need.
							</p>
						</div>
						<div>
							<div className='w-6 h-6 rounded-full bg-black text-center text-white mb-3'>
								3
							</div>
							<h4 className='lg:w-3/4 text-2xl font-semibold'>
								Moving forward with Instabase
							</h4>
							<p className='w-3/4 font-light'>
								If you like what you see, we'll lead you through a deeper dive
								about how our solutions fit your specific needs.
							</p>
						</div>
					</div>
				</div>
				<div className='h-small2 md:h-small3 w-screen flex justify-center mt-14 '>
					<div className='w-3/4  grid-cols-2 grid '>
						<div className=' w-full  col-span-2 lg:col-span-1 bg-yellow-400 flex flex-col justify-center py-5 md:py-0  px-12 space-y-7'>
							<div>
								<i class='fas fa-quote-left text-2xl'></i>
							</div>
							<p className='text-xl md:text-2xl font-medium'>
								We saw tremendous potential in how Instabase could automate
								highly manual operations across the bank, from client due
								diligence, to retail bank statements, to vendor invoice
								processing.
							</p>
							<p>
								Michael Gorriz, Group Chief Information Officer Standard
								Chartered
							</p>
						</div>
					</div>
				</div>
				<footer className='h-36 md:h-60 outline-black w-full  flex justify-center items-center mt-20 bg-mamba-100'>
					<div className='space-y-2'>
						<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  font-light  text-white space-x-5 '>
							<Link
								style={{ textDecoration: "none" }}
								className='text-white border-r-4 px-2'
							>
								contact us
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								className='text-white border-r-4 px-2'
							>
								FAQ
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								className='text-white border-r-4 px-2'
							>
								Reviews
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								className='text-white border-r-4 px-2'
							>
								Blog
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								className='text-white border-r-4 px-2'
							>
								jobs
							</Link>
							<Link style={{ textDecoration: "none" }} className='text-white '>
								SWE project contest
							</Link>
						</div>
						<div className='w-full flex justify-center text-gray-400'>
							<p>&copy; 2015 RapidTables.com</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Signup;
