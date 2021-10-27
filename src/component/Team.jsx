import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Team() {
	return (
		<div className=''>
			<Navigation />
			<div className='bg-mamba-100 h-small1 w-screen flex justify-center items-center'>
				<div className='grid grid-flow-col grid-cols-4'>
					<div className='text-white col-span-2 col-start-2 place-content-center'>
						<h3 className='text-5xl text-center font-semibold '>
							We Love Technical Interviews
						</h3>
						<p className='text-center'>
							But we love helping developers prepare for technical interviews.
						</p>
						<div className='w-full flex flex-col justify-center items-center'>
							<button className='bg-yellow-600 hover:bg-yellow-800 px-10 py-3'>
								Start Dev
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='w-screen '>
				<div className='flex justify-center items-center py-20  bg-white'>
					<div className='grid grid-flow-col grid-cols-8 '>
						<div className='col-span-6 col-start-2  grid  grid-cols-1 md:grid-cols-2'>
							<div className='px-6 w-full col-span-1'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'> Samuel Zih</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-56 w-56 overflow-hidden  bg-mamba-100 rounded-full  shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover'
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-youtube text-4xl text-red-600'></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider'>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
							<div className='px-6 w-full col-span-1'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'>Antoine Pourchet</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-56 w-56 overflow-hidden  bg-mamba-100 rounded-full outline-black  shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover '
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-youtube text-4xl text-red-600'></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider'>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=' w-screen'>
				<div className='flex justify-center items-center py-20  bg-white'>
					<div className='grid grid-flow-col grid-cols-8 '>
						<div className='col-span-6 col-start-2 grid grid-cols-1 md:grid-cols-2 '>
							<div className='px-6 w-full'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'>Mark Luke</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-48 w-48 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover'
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-4xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-500'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider '>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
							<div className='px-6 w-full'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'>Sara Banks</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-48 w-48 overflow-hidden  bg-mamba-100 rounded-full   shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1594361487118-f4e2b2288aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80'
											alt=''
											className=' w-full h-full object-cover '
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-4xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider mt-6 '>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-screen '>
				<div className='flex justify-center items-center py-20  bg-white'>
					<div className='grid grid-flow-col grid-cols-8 '>
						<div className='col-span-6  col-start-2 grid grid-cols-1 md:grid-cols-2 '>
							<div className='px-6 w-full'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'>Timothy Dorro</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-48 w-48 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl '>
										<img
											src='https://images.unsplash.com/photo-1609081524998-a1163e2d44cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover left-3'
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-4xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-500'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider '>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
							<div className='px-6 w-full'>
								<div className='w-full flex flex-col justify-center items-center'>
									<h3 className='text-mamba-100 text-4xl'>Michael Vega</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-48 w-48 overflow-hidden  bg-mamba-100 rounded-full   shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1568316280532-71d1baad0986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80'
											alt=''
											className=' w-full h-full object-cover '
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-4xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-4xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<p className='text-gray-500 tracking-wider mt-6 '>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
									program, he dove deeper into the field of algorithms and aced
									the Google interviews. The frustration that he felt during his
									interview prep led him to creating AlgoExpert. He used
									AlgoExpert to prepare for the Facebook interviews;
									unsurprisingly, he aced them!
								</p>
							</div>
						</div>
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
	);
}

export default Team;
