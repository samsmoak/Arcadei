/* eslint-disable no-unused-vars */
import React from "react";
// import { InView } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function Navigation() {
	const [navbar, setnavbar] = useState(false);
	const [isShown, setIsShown] = useState(false);
	// const [isShown, setIsShown] = useState(false);
	const [isShown1, setIsShown1] = useState(false);
	const [sidemenu, setSidemenu] = useState(false);
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});
	const sidemenuhandler = () => {
		setSidemenu((sidemenu) => !sidemenu);
		let sidem = sidemenu;
		console.log(sidem);
	};
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
					? "bg-yellow-700 h-12 duration-500 text-gray-900"
					: "bg-mamba-100 h-20 duration-300 text-white"
			} `}
		>
			<div className='flex space-x-3 '>
				<div
					className='font-extrabold text-xl '
					style={{ textDecoration: "none" }}
				>
					<Link
						to='/'
						className={`${navbar ? "text-gray-900 " : "text-white "}`}
						style={{ textDecoration: "none" }}
					>
						ARCADEI
					</Link>
				</div>
				<div className=' space-x-6 hidden  lg:flex'>
					<div
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}
					>
						<button className='relative  hover:bg-blue-400 font-bold'>
							Why Arcadei
						</button>
					</div>
					<div>
						<button className='relative inline-block  font-bold '>
							<Link
								to='/features'
								className={`${navbar ? "text-black" : " text-white"}`}
								style={{ textDecoration: "none" }}
							>
								Features
							</Link>
						</button>
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
						className={`font-bold text-xl ${
							navbar ? "text-black" : "text-white"
						} `}
						to='/team'
					>
						Team
					</Link>
				</div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
						to='/sales'
					>
						contact-sales
					</Link>
				</div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						className={` font-bold ${navbar ? "text-black" : "text-white"} `}
						to='/login'
					>
						Login
					</Link>
				</div>
				<div>
					{" "}
					<Link
						style={{ textDecoration: "none" }}
						className={`${navbar ? "text-black" : "text-white"} `}
						to='signup'
					>
						Get started
					</Link>
				</div>
			</div>
			<div
				className='sm:flex lg:hidden cursor-pointer relative'
				onClick={sidemenuhandler}
				// sidemenu={this.state.sidemenu}
			>
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
				<div
					className={`h-screen w-96 bg-black absolute top-8 -right-4 transform duration-500 flex justify-center ${
						sidemenu ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div
						className='text-white flex flex-col space-y-4 text-xl py-10 w-3/4'
						style={{ textDecoration: "none" }}
					>
						<Link
							to='/'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							ARCADEI
						</Link>
						<Link
							to='/team'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Team
						</Link>
						<Link
							to='/features'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Features
						</Link>
						<Link
							to='/login'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Login
						</Link>
						<Link
							to='/'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Sales
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
