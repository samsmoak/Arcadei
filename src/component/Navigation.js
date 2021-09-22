import React from "react";
// import { InView } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation() {
	const [navbar, setnavbar] = useState(false);
	const [isShown, setIsShown] = useState(false);
	// const [isShown, setIsShown] = useState(false);
	const [isShown1, setIsShown1] = useState(false);
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});
	const navbarhandler = () => {
		if (window.scrollY >= 100) {
			setnavbar(true);
		} else {
			setnavbar(false);
		}
		// console.log(window.scrollY);
		// console.log(navbar);
	};
	window.addEventListener("scroll", navbarhandler);
	return (
		<div
			className={`fixed z-10  top-0 opacity-100 px-3 w-screen flex items-center justify-between  ${
				navbar
					? "bg-white h-12 duration-500 text-gray-900"
					: "bg-mamba-100 h-20 duration-300 text-white"
			} `}
		>
			<div className='flex space-x-3 '>
				<div className='font-extrabold text-xl'>ARCADEI</div>
				<div className=' space-x-6 hidden  lg:flex'>
					<div
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}
					>
						<button className='relative  hover:bg-blue-400 font-bold'>
							Why Arcadei
						</button>
						{isShown && (
							<div
								className={`absolute z-20 flex  bg-white  p-4   items-center text space-x-3 px-2  w-96 text-sm transition ease-in duration-300   `}
								// onMouseEnter={() => setIsShown(true)}
								// onMouseLeave={() => setIsShown(false)}
							>
								<div
									className={`flex flex-col  `}
									style={{ textDecoration: "none" }}
								>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										undergraduates
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
										// onMouseEnter={() => setIsShown(true)}
									>
										Graduates & professionals
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										Schools&colleges
									</Link>
								</div>
								<div className={`flex flex-col  `}>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										undergraduates
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										Graduates & professionals
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										Schools&colleges
									</Link>
								</div>
								<div className={`flex flex-col `}>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										undergraduates
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										Graduates & professionals
									</Link>
									<Link
										to=''
										className='hover:bg-gray-300 '
										style={{ textDecoration: "none" }}
									>
										Schools&colleges
									</Link>
								</div>
							</div>
						)}
					</div>
					<div>
						<button
							className='relative inline-block hover:bg-blue-400 font-bold '
							onMouseEnter={() => setIsShown1(true)}
							onMouseLeave={() => setIsShown1(false)}
						>
							Features
						</button>

						<div
							className={`absolute z-30 bg-white  flex justify-around space-x-4    items-center text space-x-3 px-2   text-sm transition ease-in duration-300  `}
							onMouseLeave={() => setIsShown1(false)}
						>
							<div
								className={`flex flex-col  space-y-3 `}
								style={{ textDecoration: "none" }}
								onMouseEnter={() => setIsShown1(true)}
							>
								<Link
									to=''
									className={` hover:bg-gray-300 mt-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									undergraduates
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Graduates & professionals
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 mb-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Schools&colleges
								</Link>
							</div>
							<div
								className={`flex flex-col  space-y-3 `}
								onMouseEnter={() => setIsShown1(true)}
							>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									undergraduates
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Graduates & professionals
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 mb-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Schools&colleges
								</Link>
							</div>
							<div
								className={`flex flex-col  space-y-3`}
								onMouseEnter={() => setIsShown1(true)}
							>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									undergraduates
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 transition ease-in duration-700  ${
										isShown1 ? "block" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Graduates & professionals
								</Link>
								<Link
									to=''
									className={`hover:bg-gray-300 mt-4 mb-4 transition ease-in duration-700  ${
										isShown1 ? "block ease-in duration-700" : "hidden"
									}`}
									style={{ textDecoration: "none" }}
								>
									Schools&colleges
								</Link>
							</div>
						</div>
					</div>

					<div className='cursor-pointer'>
						<a
							href='#pricing'
							className={`${
								navbar ? "text-black no-underline" : "text-white no-underline"
							} `}
						>
							{" "}
							Pricing
						</a>
					</div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className=' space-x-4 px-4 hidden lg:flex'>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
					>
						Support
					</Link>
				</div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
					>
						contact-sales
					</Link>
				</div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
					>
						Sign in
					</Link>
				</div>
				<div>
					{" "}
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
					>
						Get started
					</Link>
				</div>
			</div>
			<div className='sm:flex lg:hidden cursor-pointer'>
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
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
		</div>
	);
}

export default Navigation;
