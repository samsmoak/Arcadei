import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Features() {
	return (
		<div>
			<Navigation />
			<div className='mt-16 h-bigxx w-screen flex justify-center '>
				<div className='grid grid-cols-8 mt-20 w-full'>
					<div className='col-span-8 col-start-1 md:col-span-6  md:col-start-2 w-full  '>
						<div className='flex flex-col w-full justify-center '>
							<div className=' flex flex-col items-center w-full'>
								<div className='w-3/4'>
									<p className='text-3xl font-bold text-center '>
										"There is Simply No Better Landing Builder For Websites Than
										Arcadei"
									</p>
								</div>
								<div>
									<p className=''>
										The fastest and easiest way to create Landing Pages without
										being a Marketing Guru
									</p>
								</div>
							</div>
							<div className=' w-full h-96 flex md:justify-center mb-8   '>
								<div className='grid grid-cols-8 w-full h-3/4 md:h-full  '>
									<div className='col-span-6 col-start-2 lg:col-start-2 lg:col-span-5  w-full mt-20'>
										<ReactPlayer
											controls
											volume='none'
											className='react-player'
											url='https://youtu.be/bO4RoQL9H8I'
											width='100%'
											height='100%'
										/>
									</div>
								</div>
							</div>
							{/* section 1 */}
							<div className='space-y-10  '>
								<div className='ml-20 text-yellow-500 text-2xl font-bold'>
									BUILDERS FEATURES
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-tv text-yellow-500 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-book text-yellow-500 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-broadcast-tower text-yellow-500 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-th text-yellow-500 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Layout Navigation</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-history text-yellow-500 text-3xl '></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-pencil-ruler text-yellow-500 text-3xl '></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-save text-yellow-500 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='far fa-heart text-yellow-500 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
								</div>
							</div>
							{/*  section-2 */}
							<div className='space-y-10 mt-28  '>
								<div className='ml-20 font-bold text-2xl text-purple-700'>
									TEMPLATE FEATURES
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-fire text-purple-700 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>150+ Landing Page Templates</h4>
											<p className='w-2/3'>
												Create a variety of landing pages including sales,
												optin, coming soon, maintenance mode, webinar, login and
												thank you pages. New templates added regularly.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-book text-purple-700 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Responsive and Mobile Ready Pages
											</h4>
											<p className='w-2/3'>
												Pages created with SeedProd look great on any device, so
												your message is always clear no matter which size screen
												your audience uses to browse.
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-broadcast-tower text-purple-700 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>Smart Sections</h4>
											<p className='w-2/3'>
												We created professionally designed pre-built sections
												like headers, calls to action, so you don't need to be a
												designer to create beautiful layouts.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-th text-purple-700 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Bloat Free Code</h4>
											<p className='w-2/3'>
												The code our builder produces, unlike other builders, is
												bloat-free and minimal to load your page quickly. Faster
												pages = more conversions.
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-history text-purple-700 text-3xl '></i>
										</div>
										<div>
											<h4 className='text-xl'>Block Templates</h4>
											<p className='w-2/3'>
												Our landing page blocks have ready-made block templates
												so you can switch styles fast. For example create a
												vintage, flat, 2D, or ghost button with 1 click.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-pencil-ruler text-purple-700 text-3xl '></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Color Schemes</h4>
											<p className='w-2/3'>
												Choose from over 20 built-in color schemes or create
												your own custom color palette to use throughout your
												landing page design.
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-save text-purple-700 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>Font Combinations</h4>
											<p className='w-2/3'>
												SeedProd integrates with Google Fonts to provide
												unlimited font combinations. Plus we show you which ones
												look great together with our curated list.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='far fa-heart text-purple-700 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Custom CSS</h4>
											<p className='w-2/3'>
												Need to tweak the style of an element on your page? No
												problem, painlessly add custom CCS code and snippets to
												any landing page.
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* section-3 */}
							<div className='space-y-10 mt-14  '>
								<div className='ml-20 text-2xl font-bold text-greener-600'>
									PAGE TYPES
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-tv text-greener-600 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Built-In Coming Soon, Maintenance
											</h4>
											<p className='w-2/3'>
												Use our built-in Coming Soon and Maintenance Modes to
												limit access to your website while under construction.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-book text-greener-600 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Custom Login Pages</h4>
											<p className='w-2/3'>
												Turn your boring login page into a beautiful custom
												login page to help reinforce your brand and even use it
												to highlight features or cross promote your products or
												services.
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-broadcast-tower text-greener-600 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>Custom 404 Pages</h4>
											<p className='w-2/3'>
												Easily turn your site's lost traffic into leads. With
												the click of a button, you can add a custom 404 page
												that allows you to collect emails from otherwise lost
												traffic.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-th text-greener-600 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>Access Controls</h4>
											<p className='w-2/3'>
												Our access controls let you give users a bypass URL,
												limit access by role or IP address so only people you
												want can see your real site while under construction.
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-history text-greener-600 text-3xl '></i>
										</div>
										<div>
											<h4 className='text-xl'>Domain Mapping</h4>
											<p className='w-2/3'>
												Domain Mapping lets you create landing pages and point
												them to any domain name instead of your main website
												domain. No extra WordPress installs needed.
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-pencil-ruler text-greener-600 text-3xl '></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2'>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='fas fa-save text-greener-600 text-3xl'></i>
										</div>
										<div>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
											</p>
										</div>
									</div>
									<div className='col-span-1 flex space-x-8'>
										<div>
											<i class='far fa-heart text-greener-600 text-3xl'></i>
										</div>
										<div className=''>
											<h4 className='text-xl'>
												Powerful Drag & Drop Page Builder{" "}
											</h4>
											<p className='w-2/3'>
												Our Drag & Drop Page Builder lets you create
												great-looking pages and layouts fast so you can get your
												landing page up in minutes. No coding required!
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
									<Link
										style={{ textDecoration: "none" }}
										className='text-white '
									>
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
			</div>
		</div>
	);
}

export default Features;
