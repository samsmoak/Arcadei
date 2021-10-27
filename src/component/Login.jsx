import React from "react";
import { Link } from "react-router-dom";
// import Pager from "../componentsvg/pager";
import { Imagesdata } from "../Data/imagesdata";

function Login() {
	// var images = Imagesdata;
	return (
		<div className='w-screen h-screen relative'>
			<div className='flex flex-row  w-screen h-screen'>
				<div className=/*'grid grid-cols-8 w-full h-full'*/"flex flex-row ">
					<div className='h-screen w-small1   bg-white hidden md:block  px-8 '>
						<div className='mt-14 '>
							<form action=''>
								<h3 className='font-bold text-mamba-100'>ARCADEI</h3>
								<p className='font-medium text-3xl text-gray-500'>
									Log in into your account
								</p>
								<div className='flex '>
									<i class='fab fa-google-plus-square text-5xl text-red-600 bg-yellow-200'></i>
									<button className='py-2 px-3 bg-greener-500'>
										Login with google
									</button>
								</div>
								<div className=' w-full'>
									<div className='mt-8 border border-dotted border-gray-800'></div>
									<div className='text-center'>or</div>
									<div className=' border border-dotted border-gray-800'></div>
								</div>
								<div className='mt-7'>
									<label for='Email' className='font-semibold'>
										Email Address
									</label>
								</div>
								<input
									type='email'
									placeholder='email'
									id='Email'
									className='w-full'
								></input>
								<div className='  flex py-2  mt-20 space-x-2 '>
									<div className="col-span-1">
										<button className='py-1 rounded-md px-3 bg-gray-300 '>
											next
										</button>
									</div>
									<div className='font-light col-span-1 '>Dont have an account</div>
									
								</div>
								<div className="w-full flex justify-center text-gray-700">
									<Link  style={{ textDecoration: "none" }} className="text-gray-700" to="/signup">
										sign up
									</Link>
									</div>
							</form>
						</div>
					</div>
					<div className='h-screen w-auto   relative'>
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
						<div className='absolute top-0  hidden md:block '>
							<div className='text-white w-96 mt-20 ml-20'>
								<h3 className='text-3xl text-yellow-500'>
									Easily scale with serverless instances
								</h3>
								<p className='text-gray-200 font-light'>
									Note that the development build is not optimized. To create a
									production build, use npm run build.
								</p>
								<div className='space-x-2'>
									<button>see the tutorial</button>
									<i class='fas fa-arrow-right'></i>
								</div>
							</div>
						</div>
						<div className="absolute top-0 right-0 left-0 bottom-0 flex md:hidden lg:hidden justify-center items-center text-white">
							<div className="bg-mamba-100 py-10  rounded-lg w-small2 shadow-2xl">
								<form action="" className=" w-full px-10">
									<div className="text-xl font-bold text-center mb-8 text-yellow-600">Login Into Your Account</div>
								
									<div className="space-y-2 ">
										<label for="Email" className="font-light">Email</label>
									<div className="w-full">
										<input type="email" id="Email" className="w-full" />
									</div>
									</div>

									<div className="space-y-2">
										<label for="Password " className="font-light">Password</label>
									<div className="w-full"><input type="password" id="Password" className="w-full" /></div>
									</div>
									<div className="w-full flex justify-center"><button className="py-1 px-4 bg-yellow-500 rounded-md mt-4">signin</button></div>
										<Link  style={{ textDecoration: "none" }} className="text-white" to="/signup">
										sign up
									</Link>
									
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
