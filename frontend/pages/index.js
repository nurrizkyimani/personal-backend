import Nav from '../components/nav';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndexPage(props) {
	const links = [
		{
			href1: (
				<svg
					className="w-5 md:w-8 mr-2 "
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>
			),
			label: 'Instagram'
		},
		{
			href1: (
				<svg
					className="w-5 md:w-8  mr-2"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
				</svg>
			),
			label: 'Linkedin'
		},
		{
			href1: (
				<svg
					className="w-5 md:w-8  mr-2"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
				</svg>
			),
			label: 'Github'
		}
	];

	const [ projects, setProjects ] = useState([]);
	const [ experiences, setExperiences ] = useState([]);

	useEffect(() => {
		const fetching = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/projects`);
				setProjects(res.data);
				console.log('setproject done');
			} catch (error) {
				console.log(error);
			}
		};

		const fetchingexp = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/experiences`);
				setExperiences(res.data);
				console.log('setproject done');
			} catch (error) {
				console.log(object);
			}
		};
		fetching();
		fetchingexp();
	}, []);

	useEffect(
		() => {
			console.log(experiences);
		},
		[ experiences ]
	);

	return (
		<div className="">
			<div className="flex flex-col relative bg-gray-100">
				<Nav />

				<div className="flex-1 md:flex md:overflow-y-hidden h-screen ">
					{/* sidebar */}
					<div className="sidebar md:w-48 mb-5 md:mb-0 flex-none md:flex flex-col divide-y px-4 pl-5  md:mt-5 min-h-screen fixed z-20 md:static md:z-0 md:bg-gray-0 bg-gray-100 w-screen top-0">
						
						<div className="sidebar-top text-4xl md:text-base space-y-5 md:space-y-0 object-center py-10 md:py-0  ">

							
								<p className="self-center text-5xl font-serif flex justify-between no-underline text-center transform hover:-translate-y-1 duration-300  md:hidden
									">
									"👨‍💻 👨‍🚀 👨‍🎓"
								</p>
						

							<div className="icon-work flex py-2  hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2  ">
								<p className="md: mr-1">🏠</p>
								<a href="" className="ml-3 ">
									{' '}
									Exprience
								</a>
							</div>

							<div className="icon-work flex py-2 hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2  ">
								<p className="md:text-xl mr-1">📂‍</p>
								<a href="" className="ml-3">
									{' '}
									Projects{' '}
								</a>
							</div>

							<div className="icon-work flex py-2 hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2  ">
								<p className="md:text-xl mr-1">🛠</p>
								<a href="" className="ml-3">
									Stack
								</a>
							</div>

							<div className="icon-work flex py-2 hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2  ">
								<p className="md:text-xl mr-1">👨‍🚀</p>
								<a href="" className="ml-3">
									About
								</a>
							</div>

							<ul className="flex justify-between items-center space-x-1 mr-3 md:hidden">
								{links.map((link) => (
									<li>
										<a
											href="#"
											className="inline-block text-sm py-2 pr-2 hover:shadow-inner transform pl-1 leading-snug rounded-md text-gray-900  transition duration-300 ease-in-out  hover:bg-gray-300 mt-4 lg:mt-0"
										>
											<div className="flex">
												{link.href1}
												<p className="text-base"> {link.label}</p>
											</div>
										</a>
									</li>
								))}
							</ul>

							<div className="close">close</div>
						</div>

						<div className="sidebar overflow-y-scroll mt-2 hidden">
							<div className="your-librari py-2  mt-4 ">
								<h1 className=" font-thin  tracking-widest mb-2">Your Library</h1>
								<ul className="space-y space-y-2 text-sm pl-1">
									<li>Reading List </li>
									<li>Principles</li>
									<li>Gallery</li>
									<li>Made For you</li>
								</ul>
							</div>

							<div className="your-librari py-2  mt-4 ">
								<h1 className=" font-thin tracking-widest mb-2">Playlist</h1>
								<ul className=" space-y space-y-2 text-sm pl-1">
									<li>downtown manhattan</li>
									<li>downtown toronto</li>
									<li>madison Square</li>
									<li>Made For you</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="main w-full lg:px-5 overflow-y-auto  ">
						<div className="container mx-auto px-6 md:px-12 flex flex-col-reverse sm:flex-row items-center  mb-5  min-h-full ">
							<div className="sm:w-4/5 flex flex-col items-start sm:mt-0">
								<h1 className="text-4xl lg:text-6xl leading-none mb-4">
									<strong className="font-black"> Hi, I am Nurrizky Imani 👋👋</strong>
								</h1>
								<p className="text-lg mb-2">
									Student in Universitas Gadjah Mada, Currently interest in Backend Development &
									Artificial Intelligent.
								</p>

								<p className="text-lg mb-5 md:mb-12">Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
								<a
									href="#"
									class="font-semibold text-lg bg-blue-500 hover:bg-blue-400 transition duration-300 ease-in-out  text-white py-3 px-10 rounded-full hover:shadow-inner transform"
								>
									Let's Gooo !
								</a>
							</div>
						</div>

						<h1 className=" border-b  border-blue-600 mb-5 md:mb-0 text-4xl sticky px-5 md:px-0">
							Experience 🧳
						</h1>

						<div className="work-exp md:px-8 md:py-1">
							<div>
								<div className="relative  m-8">
									<div className="border-r-2 border-gray-800 border-dotted absolute h-full z-0 pl-2 mt-2" />
									<ul className="list-none m-0 p-0">
										{experiences.map((exp) => (
											<li key={exp.id} className="mb-4">
												<div className="flex mb-1 align-top content-start">
													<div className="flex">
														<img
															className="w-12 h-12 object-none -ml-4 z-10"
															src="https://picsum.photos/200/300?random=1"
															alt="Sunset in the mountains"
														/>
														<div className="flex flex-col">
															<div className="ml-4 font-medium">{exp.title}</div>
															<p className=" ml-4 text-sm ">{exp.company}</p>
														</div>
													</div>

													<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
														<p className="text-sm">{exp.location}</p>
														<p className="text-sm">{exp.time_range}</p>
													</div>
												</div>
												<div className="ml-12 ">
													<div className="flex flex-col" />
													<ul className="list-disc space-y-2 pl-5">
														{exp.job_desc.map((job) => (
															<li key={job.id}>{job.each_jobdesc}</li>
														))}
													</ul>

													<div class="align-start pt-4">
														{exp.tech_stack.map((stack) => (
															<span
																key={stack.id}
																class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
															>
																{stack.each_stack}
															</span>
														))}
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div>
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky px-5 md:px-0 ">
								Projects 📂
							</h1>

							<div className="project-cards-list flex w-full justify-between flex-wrap py-10 px-10 md:px-0">
								{projects.map((project) => (
									<a
										href={project.url_link}
										key={project.id}
										className=" card max-w-sm flex-grow mb-8  mr-2 border-gray-500  shadow-lg overflow-hidden rounded-md transform hover:scale-105 duration-300 hover:shadow-xl"
									>
										<img
											className="w-full h-48 object-cover border-b"
											src={`http://localhost:1337${project.photo[0].url}`}
											alt="Sunset in the mountains"
										/>
										<dir className="px-5 py-2 ">
											<div className="flex flex-col w-full ">
												<h1 className="text-2xl">{project.title}</h1>
												<ul className="space-y-4 text-sm pt-4 list-disc px-5">
													{project.each_explanation.map((expla) => (
														<li key={expla.id}>{expla.each_explanation}</li>
													))}
												</ul>

												<div class="align-start pt-4">
													{project.tags_project.map((tag) => (
														<span
															key={tag.id}
															class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
														>
															{tag.each_tag}
														</span>
													))}
												</div>
											</div>
										</dir>
									</a>
								))}
							</div>
						</div>

						<div>
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky px-5 md:px-0 ">Stack 🛠</h1>
							<div className="px-5 md:px-0">
								<p className="md:pb-5">
									I do exploring a lot of stuff. That's my current strategy and curiosity. However, I
									found out i lean toward backend and want to learn production A.I.
								</p>

								<div className="flex flex-col md:flex-row md:space-x-5 pt-4 py-20 space-y-3 md:space-y-0">
									<div className="md:w-1/3">
										<h5 className="text-xl pb-2"> Man I love this</h5>
										<div className="pl-4 flex">
											<ul className="space-y-2 w-1/2">
												<li>Kotlin</li>
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Kotlin</li>
												<li>ReactJS</li>
											</ul>
											<ul className="space-y-2 md:mt-0 w-1/2">
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Python</li>
												<li>Pytorch</li>
											</ul>
										</div>
									</div>

									<div className="md:w-1/3">
										<h5 className="text-xl pb-2"> Experience</h5>
										<div className="pl-4 flex">
											<ul className="space-y-2 w-1/2">
												<li>Kotlin</li>
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Kotlin</li>
												<li>ReactJS</li>
											</ul>
											<ul className="space-y-2 md:mt-0 w-1/2">
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Python</li>
												<li>Pytorch</li>
											</ul>
										</div>
									</div>

									<div className="md:w-1/3">
										<h5 className="text-xl pb-2">Want to Learn</h5>
										<div className="pl-4 flex">
											<ul className="space-y-2 w-1/2">
												<li>Kotlin</li>
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Kotlin</li>
												<li>ReactJS</li>
											</ul>
											<ul className="space-y-2 md:mt-0 w-1/2">
												<li>Tailwindcss</li>
												<li>Javascript</li>
												<li>Python</li>
												<li>Pytorch</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="min-h-full">
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky font-bold  px-5 md:px-0">
								About 👨‍🚀
							</h1>

							<div className="flex flex-col lg:flex-row px-5 md:px-0">
								<div className=" lg:w-1/2 border-gray-500 pr-5">
									<h5 className="text-lg text-gray-600 font-thin -mb-1"> Nice to meet you </h5>
									<h1 className="text-5xl font-bold tracking-wide"> Hi there, I'am Nurrizky </h1>
									<h2 className="text-2xl font-normal tracking-wide pt-2  ">
										{' '}
										My name is Nurrizky Imani. I am interest in anything tech 🤷‍♂️.{' '}
									</h2>

									<p className="text-lg font-light tracking-normal pt-8 text-left">
										Currently, I'am student who interest in fullstack development and really enjoy
										exploring any tech stack. But, I am currently on side lean into Backend and
										Artificial Intelligent.{' '}
									</p>

									<p className="text-lg font-light tracking-normal pt-8 text-left ">
										Outside of my full-time commitments, I do read books, photograph, food and stuff
										and religiously working on the social econ meritocracy ladder by joining
										competition and hackathon.{' '}
									</p>

									<p className="text-lg font-light tracking-normal pt-8 text-left">
										I’m passionate about building product with side lean toward technology. My
										current 3 years plan is to focus on engineering on right hand and try to
										delightfully learn business and product dev on left hand.
									</p>

									<p className="text-xl font-light tracking-w pt-8 text-justify">
										Also, emoji is awesome. 😉{' '}
									</p>
								</div>

								<div className=" border-gray-500 flex lg:items-center flex-col justify-center ">
									<div className="card rounded-md shadow-md px-10 py-8 md:w-7/12 flex flex-col items-center space-y-3 transform hover:scale-105 duration-300 hover:shadow-xl">
										<img
											className="rounded-full "
											src="https://avatars3.githubusercontent.com/u/25843889?s=460&u=0665df9620e6db3156619b8414fdd6b047f32286&v=4"
											alt="Sunset in the mountains"
										/>

										<a href="" class=" rounded p-2 w-20  mt-10 ">
											{' '}
											contact{' '}
										</a>
										<a href="" class=" rounded p-2 w-20 ">
											{' '}
											CV{' '}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
