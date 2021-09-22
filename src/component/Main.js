import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Navbar, Carousel } from "react-bootstrap";

import Factory from "../componentsvg/factory";
import Gundraw from "../componentsvg/gundraw";
import Gwebdev from "../componentsvg/gwebdev";
import Gworkingguys from "../componentsvg/gworkingguys";
import Andriod from "../componentsvg/andriod";
import Flut from "../componentsvg/flut";
import Reactnode from "../componentsvg/reactnode";
import { Imagesdata } from "../Data/imagesdata";
import Navigation from "./Navigation";
import Img from "../Data/sampic.jpg";

// import "glider-js/glider.min.css";
// import Glider from "react-glider/glider.defaults.css";

function Main({ isVisible }) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div>
			<Navigation className='bg-blue-600' />
			{/* <Carouselcam className='h-96 ' /> */}
			<div className=' w-screen bg-mamba-100 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 auto-cols-max '>
				<div className=' h-bigxx w-full  bg-mamba-100 col-span-1 flex justify-center items-center '>
					<div className=' text-white h-big w-big space-y-8 pt-11 pl-10'>
						<h1 className='md:text-7xl'>Enterprise Productivity, Redefined.</h1>
						<p>
							Transform how you work with complex documents and data by using
							highly configurable toolkits and powerful building blocks. One
							platform, endless automation solutions.
						</p>
						<button
							className={`w-40 h-12 rounded-2xl   flex items-center justify-center space-x-6 border-4 border-blue-500 transition duration-700 hover:bg-white hover:text-gray-800`}
						>
							Get Started
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className=' bg-mamba-100 col-span-1  justify-center hidden items-center    md:flex  '>
					<div className=' h-big w-full '>
						<Factory />
					</div>
				</div>
			</div>
			<div className=' bg-blue-200 relative'>
				<div className='w-screen bg-white flex justify-center'>
					<div className=' w-bigx bg-paper-100 relative -top-36 p-4 border-blue-700  border-t-4  grid grid-cols-1'>
						<p className='sm:text-3xl lg:text-6xl  text-gray-600 '>
							we transform the client developer experience by building projects
							faster , better and more securely.
						</p>
						<div className='flex justify-center items-center'>
							<div className='grid grid-cols-1 sm:grid-cols-3'>
								<Gundraw className='transform hover:scale-x-150' />
								<Gwebdev className='transform hover:scale-x-150' />
								<Gworkingguys />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-screen grid grid-cols-5'>
				<div className='flex items-center justify-center  font-light col-span-3 col-start-2'>
					<div className=' grid  grid-cols-1  gap-10 place-self-center  sm:grid-cols-2 lg:grid-cols-3 py-36  bg-white'>
						<div className='  bg-white flex flex-col col-span-1    px-7  place-self-end      transform duration-300 hover:shadow-2xl'>
							<div className='w-full flex flex-col items-center'>
								<Flut />
							</div>
							<h6 className='text-red-500 font-extrabold text-2xl'> React</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>

						<div className='bg-white flex flex-col    px-4  place-self-center  transform duration-300 hover:shadow-2xl'>
							<div className='w-full flex flex-col items-center'>
								<Reactnode />
							</div>
							<h6 className='text-greener-600 font-extrabold text-2xl'>
								{" "}
								Mongo DB
							</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>

						<div className='bg-white flex flex-col   px-7  place-self-start    transform duration-300 hover:shadow-2xl '>
							<div className='w-full flex flex-col items-center'>
								<Andriod />
							</div>
							<h6 className='text-blue-500 font-extrabold text-2xl'>
								{" "}
								Flutter
							</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
						<div className='bg-white flex flex-col   px-7  place-self-center    transform duration-300 hover:shadow-2xl '>
							<div className='w-full flex flex-col items-center'>
								<Andriod />
							</div>
							<h6 className='text-blue-500 font-extrabold text-2xl'>
								{" "}
								Flutter
							</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
						<div className='bg-white flex flex-col   px-7  place-self-center     transform duration-300 hover:shadow-2xl '>
							<div className='w-full flex flex-col items-center'>
								<Andriod />
							</div>
							<h6 className='text-blue-500 font-extrabold text-2xl'>
								{" "}
								Flutter
							</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
						<div className='bg-white flex flex-col   px-7  place-self-center    transform duration-300 hover:shadow-2xl '>
							<div className='w-full flex flex-col items-center'>
								<Andriod />
							</div>
							<h6 className='text-blue-500 font-extrabold text-2xl'>
								{" "}
								Flutter
							</h6>

							<p className='text-center'>
								React makes it painless to create interactive UIs. Design simple
								views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className=' w-screen bg-white flex flex-col   '>
				<div className='w-screen grid grid-cols-4'>
					<div className='h-40 row-span-1  bg-mamba-100 text-white flex items-center justify-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-10 w-10'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
							/>
						</svg>
					</div>
				</div>

				<div className='  py-10 w-screen bg-mamba-100 grid  lg:grid-cols-4 place-items-center content-center text-white '>
					<div className='col-span-1 px-4 self-center'>
						<h6 className='font-medium text-indigo-400'>RESOURCES</h6>
						<h3 className='font-bold text-3xl font-sans'>Company Insights.</h3>
						<p className='font-light text-lg'>
							Learn more about how Instabase is revolutionizing operational
							productivity.
						</p>
					</div>
					<div className=' col-span-3  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-black '>
						<div className='  bg-paper-400 col-span-1 space-y-4 pb-2  '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
						<div className='   bg-paper-200 col-span-1 space-y-4 pb-2 '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2301&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
						<div className='  bg-paper-100 col-span-1 space-y-4 pb-2 '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* card carousel */}
			<div className='h-screen    flex flex-col  items-center justify-center  '>
				<p className='text-3xl font-semibold text-indigo-400'>
					And Over 80,000 Satisfied Engineers.
				</p>
				<div className='grid grid-cols-6 '>
					<div className=' col-start-2 col-span-4 '>
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							className='mt-14 border-b-2 hover:border-blue-600 '
							// onChange={setInView}
							variant='dark'
							images={Imagesdata}
						>
							<Carousel.Item hover={"pause"} className='p-10'>
								<img
									className='d-block h-96 w-screen'
									src='https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
									alt='First slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0 font-light'>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img src={Img} alt='' className=' w-full h-full' />
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img
													src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
													alt=''
													className=' w-full h-full'
												/>
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item hover={"pause"} className='p-10'>
								<img
									className='d-block h-96 w-screen'
									src='https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
									alt='First slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0'>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img
													src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
													alt=''
													className=' w-full h-full'
												/>
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img
													src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
													alt=''
													className=' w-full h-full'
												/>
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item hover={"pause"} className='p-10'>
								<img
									className='d-block h-96 w-screen'
									src='https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
									alt='First slide'
								/>
								{/* <div className='bg-mamba-100'></div> */}

								<Carousel.Caption className=''>
									<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0'>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img
													src='https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80'
													alt=''
													className=' w-full h-full'
												/>
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
										<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
											<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
												<img
													src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
													alt=''
													className=' w-full h-full'
												/>
											</div>
											<p>
												lorem20Praesent commodo cursus magna, vel scelerisque
												nisl consectetur. lorem20Praesent commodo cursus magna,
												vel scelerisque nisl consectetur.
											</p>
										</div>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
			{/* another section */}
			<div className='flex flex-col justify-center items-center' id='pricing'>
				<div className='h-20 text-5xl font-thin'> pricing</div>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
					{/* card 1 */}
					<div className='   py-5 space-y-7 border-t-8 px-4 border-blue-500 border-r-2 border-l-2 border-b-2 duration-300 hover:shadow-2xl'>
						<h6 className='h-10 w-full text-center bg-blue-500 pt-2'>
							STANDARD
						</h6>
						<h4>US$15</h4>
						<div className='flex w-full justify-between space-x-3'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
									/>
								</svg>
							</div>
							<p>5 TB (5,000 GB) of space for secure storage</p>
						</div>
						<div className='flex w-full justify-between space-x-3'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
									/>
								</svg>
							</div>
							<p>Easy-to-use sharing and collaboration tools</p>
						</div>
						<div className='w-full flex justify-center items-center'>
							<button className='border-2 border-blue-400 w-36 py-2 '>
								try it now
							</button>
						</div>
					</div>
					{/* card 2 */}
					<div className='border-t-8 border-r-2 border-l-2 border-b-2  border-yellow-200 duration-300 hover:shadow-2xl'>
						<div className='text-center text-black h-20 pt-4 bg-yellow-200'>
							MOST PREFERED
						</div>
						<div className='    py-5 space-y-7  px-4 '>
							<h6 className='h-10 w-full text-center bg-yellow-200 pt-2'>
								ADVANCED
							</h6>
							<h4>US$15</h4>
							<div className='flex w-full justify-between space-x-3'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
										/>
									</svg>
								</div>
								<p>5 TB (5,000 GB) of space for secure storage</p>
							</div>
							<div className='flex w-full justify-between space-x-3'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
										/>
									</svg>
								</div>
								<p>Easy-to-use sharing and collaboration tools</p>
							</div>
							<div className='w-full flex justify-center items-center'>
								<button className='border-2 border-blue-400 w-36 py-2 '>
									try it now
								</button>
							</div>
						</div>
					</div>
					{/* card3 */}
					<div className='    py-5 space-y-7 border-t-8 border-r-2 border-l-2 border-b-2 px-4 border-yellow-700 duration-300 hover:shadow-2xl'>
						<h6 className='h-10 w-full text-center bg-yellow-700 text-yellow-400 pt-2'>
							PREMIUM
						</h6>
						<h4>US$15</h4>
						<div className='flex w-full justify-between space-x-3'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
									/>
								</svg>
							</div>
							<p>5 TB (5,000 GB) of space for secure storage</p>
						</div>
						<div className='flex w-full justify-between space-x-3'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
									/>
								</svg>
							</div>
							<p>Easy-to-use sharing and collaboration tools</p>
						</div>
						<div className='flex w-full justify-between space-x-3'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
									/>
								</svg>
							</div>
							<p>Easy-to-use sharing and collaboration tools</p>
						</div>
						<div className='w-full flex justify-center items-center'>
							<button className='border-2 border-blue-400 w-36 py-2 '>
								try it now
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='h-small2 flex items-center justify-center '>
				<div className='grid gap-3 lg:grid-cols-4'>
					<p className='col-span-3 text-5xl font-bold'>
						Bring Arcadei Business to your business.
					</p>
					<div className='col-span-1'>
						<button className='px-5 bg-yellow-400 py-2'>contact team</button>
					</div>
				</div>
			</div>
			<div className=' bg-mamba-100 flex items-center justify-center'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-5 text-white gap-5  py-20'>
					<div>
						<h4>Arcadei</h4>
						<h6>Desktop app</h6>
						<h6>Mobile apps</h6>
						<h6>Plans</h6>
						<h6>Features</h6>
					</div>
					<div>
						<h4>Company</h4>
						<h6>Desktop app</h6>
						<h6>Mobile apps</h6>
						<h6>Plans</h6>
						<h6>Features</h6>
					</div>
					<div>
						<h4>Support</h4>
						<h6>Desktop app</h6>
						<h6>Mobile apps</h6>
						<h6>Plans</h6>
						<h6>Features</h6>
					</div>
					<div>
						<h4>Community</h4>
						<h6>Desktop app</h6>
						<h6>Mobile apps</h6>
						<h6>Plans</h6>
						<h6>Features</h6>
					</div>
					<div>
						<h4>Products</h4>
						<h6>Desktop app</h6>
						<h6>Mobile apps</h6>
						<h6>Plans</h6>
						<h6>Features</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
