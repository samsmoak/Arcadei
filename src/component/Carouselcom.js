/* eslint-disable no-unused-vars */
// import  from "react";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Navbar, Carousel } from "react-bootstrap";
import Navigation from "./Navigation";
import { useInView, ref, entry } from "react-intersection-observer";

function Carouselcom() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				className='mt-14'
				// onChange={setInView}
			>
				<Carousel.Item>
					<img
						className='d-block h-96 w-screen'
						src='https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80'
						alt='First slide'
					/>
					<Carousel.Caption className=''>
						<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0'>
							<div>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
									{/* {inView.toString()} */}
								</p>
							</div>
							<div className='h-60 w-56 bg-yellow-200 text-black '>
								<div className=' w-56'>
									<img
										src='https://images.unsplash.com/photo-1631641551473-fbe46919289d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
										alt=''
									/>
								</div>
								<div>lorem sdjnjdnjdnk dckmlkmo</div>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block h-96 w-screen'
						src='https://images.unsplash.com/photo-1507835661088-ac1e84fe645f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
						alt='Second slide'
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block h-96 w-screen'
						src='https://images.unsplash.com/photo-1518043042228-645b04785ced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Carouselcom;
