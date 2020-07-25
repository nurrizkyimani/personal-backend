import Nav from '../components/nav';

export default function IndexPage(props) {
	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<Nav />

			<div className="flex-1 flex overflow-y-hidden">
				<div className="sidebar w-48 flex-none flex flex-col  divide-y px-4 pl-5 mt-5 ">
					<div className="sidebar-top ">
						<div className="icon-work flex py-2  ">
							<p className="text-xl mr-1">🏠</p>
							<a href="" className="ml-3 ">
								{' '}
								Work Exprience
							</a>
						</div>

						<div className="icon-work flex py-2 ">
							<p className="text-xl mr-1">📂‍</p>
							<a href="" className="ml-3">
								{' '}
								Projects{' '}
							</a>
						</div>

						<div className="icon-work flex py-2 ">
							<svg
								className="w-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<a href="" className="ml-3">
								Stack
							</a>
						</div>

						<div className="icon-work flex py-2 ">
							<p className="text-xl mr-1">👨‍🚀</p>
							<a href="" className="ml-3">
								About
							</a>
						</div>
					</div>
					<div className="sidebar overflow-y-scroll mt-2">
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

				<div className="main w-full px-5  overflow-y-auto  ">
					<div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center  min-h-full">
						<div className="sm:w-4/5 flex flex-col items-start sm:mt-0">
							<h1 className="text-4xl lg:text-6xl leading-none mb-4">
								<strong className="font-black"> Hi, I am Nurrizky Imani 👋👋</strong>
							</h1>
							<p className="text-lg mb-2">
								Student in Universitas Gadjah Mada, Currently interest in Backend Development &
								Artificial Intelligent.
							</p>

							<p className="text-lg mb-12">Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
							<a
								href="#"
								class="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white py-3 px-10 rounded-full"
							>
								Let's Gooo !
							</a>
						</div>
					</div>

					<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky">Work Experience 🧳</h1>

					<div className="work-exp px-8 py-1">
						<div>
							<div className="relative  m-8">
								<div className="border-r-2 border-gray-800 border-dotted absolute h-full z-0 pl-2 mt-2" />
								<ul className="list-none m-0 p-0">

									<li className="mb-4">
										<div className="flex mb-1 align-top content-start">
											<div className="flex"> 
												<img
														className="w-12 h-12 object-none -ml-4 z-10"
														src="https://picsum.photos/200/300?random=1"
														alt="Sunset in the mountains"
													/>
												<div className="flex flex-col">
													
													<div className="ml-4 font-medium">Sofware Engineering Intern</div>
													<p className=" ml-4 text-sm ">ByteDance</p>
												</div>
													
											</div>

											<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
												<p className="text-sm">Jakarta, Indonesia</p>
												<p className="text-sm">Aug. 2018 - Sept. 2019</p>
											</div>
										</div>
										<div className="ml-12 ">
											<div className="flex flex-col" />
											<ul className="list-disc space-y-2 pl-5">
												<li>
													Assemble curriculum of mobile apps development. Using Kotlin as main
													language, and teach android framework such as MVVM, Room Database,
													Retrofit, Firebase, RecyclerView, Fragment & Activity
												</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>

									<li className="mb-4">
										<div className="flex mb-1 align-top content-start">
											<div className="flex"> 
												<img
														className="w-12 h-12 object-none -ml-4 z-10"
														src="https://picsum.photos/200/300?random=1"
														alt="Sunset in the mountains"
													/>
												<div className="flex flex-col">
													
													<div className="ml-4 font-medium">Sofware Engineering Intern</div>
													<p className=" ml-4 text-sm ">ByteDance</p>
												</div>
													
											</div>

											<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
												<p className="text-sm">Jakarta, Indonesia</p>
												<p className="text-sm">Aug. 2018 - Sept. 2019</p>
											</div>
										</div>
										<div className="ml-12 ">
											<div className="flex flex-col" />
											<ul className="list-disc space-y-2 pl-5">
												<li>
													Assemble curriculum of mobile apps development. Using Kotlin as main
													language, and teach android framework such as MVVM, Room Database,
													Retrofit, Firebase, RecyclerView, Fragment & Activity
												</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>

									<li className="mb-4">
										<div className="flex mb-1 align-top content-start">
											<div className="flex"> 
												<img
														className="w-12 h-12 object-none -ml-4 z-10"
														src="https://picsum.photos/200/300?random=1"
														alt="Sunset in the mountains"
													/>
												<div className="flex flex-col">
													
													<div className="ml-4 font-medium">Sofware Engineering Intern</div>
													<p className=" ml-4 text-sm ">ByteDance</p>
												</div>
													
											</div>

											<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
												<p className="text-sm">Jakarta, Indonesia</p>
												<p className="text-sm">Aug. 2018 - Sept. 2019</p>
											</div>
										</div>
										<div className="ml-12 ">
											<div className="flex flex-col" />
											<ul className="list-disc space-y-2 pl-5">
												<li>
													Assemble curriculum of mobile apps development. Using Kotlin as main
													language, and teach android framework such as MVVM, Room Database,
													Retrofit, Firebase, RecyclerView, Fragment & Activity
												</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>

									<li className="mb-4">
										<div className="flex mb-1 align-top content-start">
											<div className="flex"> 
												<img
														className="w-12 h-12 object-none -ml-4 z-10"
														src="https://picsum.photos/200/300?random=1"
														alt="Sunset in the mountains"
													/>
												<div className="flex flex-col">
													
													<div className="ml-4 font-medium">Sofware Engineering Intern</div>
													<p className=" ml-4 text-sm ">ByteDance</p>
												</div>
													
											</div>

											<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
												<p className="text-sm">Jakarta, Indonesia</p>
												<p className="text-sm">Aug. 2018 - Sept. 2019</p>
											</div>
										</div>
										<div className="ml-12 ">
											<div className="flex flex-col" />
											<ul className="list-disc space-y-2 pl-5">
												<li>
													Assemble curriculum of mobile apps development. Using Kotlin as main
													language, and teach android framework such as MVVM, Room Database,
													Retrofit, Firebase, RecyclerView, Fragment & Activity
												</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>

									<li className="mb-4">
										<div className="flex mb-1 align-top content-start">
											<div className="flex"> 
												<img
														className="w-12 h-12 object-none -ml-4 z-10"
														src="https://picsum.photos/200/300?random=1"
														alt="Sunset in the mountains"
													/>
												<div className="flex flex-col">
													
													<div className="ml-4 font-medium">Sofware Engineering Intern</div>
													<p className=" ml-4 text-sm ">ByteDance</p>
												</div>
													
											</div>

											<div className="flex z-auto flex-col flex-1 items-end relative pr-5">
												<p className="text-sm">Jakarta, Indonesia</p>
												<p className="text-sm">Aug. 2018 - Sept. 2019</p>
											</div>
										</div>
										<div className="ml-12 ">
											<div className="flex flex-col" />
											<ul className="list-disc space-y-2 pl-5">
												<li>
													Assemble curriculum of mobile apps development. Using Kotlin as main
													language, and teach android framework such as MVVM, Room Database,
													Retrofit, Firebase, RecyclerView, Fragment & Activity
												</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>
					<div>
						<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky ">Projects 📂</h1>

						<div className="project-cards-list  px-4 flex flex-wrap  items-center justify-start py-10">
							<div className=" card max-w-sm mr-2 border-gray-500  shadow-lg overflow-hidden rounded-md">
								<img
									className="w-full h-48 object-cover"
									src="https://picsum.photos/200/300?random=1"
									alt="Sunset in the mountains"
								/>
								<dir className="px-5 py-2 ">
									<div className="flex flex-col w-full ">
										<h1 className="text-2xl">Bitcoin Tracker</h1>
										<ul className="space-y-4 text-sm pt-4 list-disc px-5">
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi
												reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum
												ad expedita!
											</li>
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.
											</li>
										</ul>

										<div class="align-start pt-4">
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Flutter
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Firebase
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
												Rest Api
											</span>
										</div>
									</div>
								</dir>
							</div>

							<div className=" card max-w-sm mr-2 border-gray-500  shadow-lg overflow-hidden rounded-md">
								<img
									className="w-full h-48 object-cover"
									src="https://picsum.photos/200/300?random=1"
									alt="Sunset in the mountains"
								/>
								<dir className="px-5 py-2 ">
									<div className="flex flex-col w-full ">
										<h1 className="text-2xl">Bitcoin Tracker</h1>
										<ul className="space-y-4 text-sm pt-4 list-disc px-5">
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi
												reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum
												ad expedita!
											</li>
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.
											</li>
										</ul>

										<div class="align-start pt-4">
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Flutter
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Firebase
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
												Rest Api
											</span>
										</div>
									</div>
								</dir>
							</div>

							<div className=" card max-w-sm  mr-2 border-gray-500  shadow-lg overflow-hidden rounded-md">
								<img
									className="w-full h-48 object-cover"
									src="https://picsum.photos/200/300?random=1"
									alt="Sunset in the mountains"
								/>
								<dir className="px-5 py-2 ">
									<div className="flex flex-col w-full ">
										<h1 className="text-2xl">Bitcoin Tracker</h1>
										<ul className="space-y-4 text-sm pt-4 list-disc px-5">
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi
												reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum
												ad expedita!
											</li>
											<li>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.
											</li>
										</ul>

										<div class="align-start pt-4">
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Flutter
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
												Firebase
											</span>
											<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
												Rest Api
											</span>
										</div>
									</div>
								</dir>
							</div>
						</div>
					</div>

					<div>
						<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky ">Stack 🛠</h1>
						<p className="pb-5">
							I do exploring a lot of stuff. That's my current strategy and curiosity. However, I found
							out i lean toward backend and want to learn production A.I.
						</p>

						<div className="flex space-x-5 pt-4 py-20">
							<div className="w-1/3">
								<h5 className="text-xl pb-1"> Man I love this</h5>
								<div className="pl-4">
									<ul className="space-y-2">
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<li>Javascript</li>
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<li>Javascript</li>
										<li>Python</li>
										<li>Pytorch</li>
										<li>ReactJS</li>
									</ul>
								</div>
							</div>

							<div className="w-1/3">
								<h5 className="text-xl pb-1"> Experience</h5>
								<div className="pl-4">
									<ul className="space-y-2">
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<li>Javascript</li>
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<li>Javascript</li>
										<li>Python</li>
										<li>Pytorch</li>
										<li>ReactJS</li>
									</ul>
								</div>
							</div>

							<div className="w-1/3">
								<h5 className="text-xl pb-1"> I am sucks but i want to learn</h5>
								<div className="pl-4">
									<ul className="space-y-2">
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<li>Javascript</li>
										<li>Kotlin</li>
										<li>Tailwindcss</li>
										<h5 className=""> Data Science</h5>
										<ul className="space-y-1  ml-4">
											<li>Kotlin</li>
											<li>Tailwindcss</li>
											<li>Javascript</li>
										</ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="min-h-full">
						<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky font-bold ">About 👨‍🚀</h1>
						<div className="flex ">
							<div className="w-1/2 border-gray-500 pr-5">
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
									Outside of my full-time commitments, I do read books, photograph, food and stuff and
									religiously working on the social econ meritocracy ladder by joining competition and
									hackathon.{' '}
								</p>

								<p className="text-lg font-light tracking-normal pt-8 text-left">
									I’m passionate about building product with side lean toward technology. My current 3
									years plan is to focus on engineering on right hand and try to delightfully learn
									business and product dev on left hand.
								</p>

								<p className="text-xl font-light tracking-w pt-8 text-justify">
									Also, emoji is awesome. 😉{' '}
								</p>
							</div>

							<div className="w-1/2 border-gray-500 flex items-center flex-col justify-center -mt-20">
								<div className="card border rounded-md shadow-md px-10 py-8 w-5/12 flex flex-col items-center">
									<svg fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
											clipRule="evenodd"
										/>
									</svg>
									<button class=" rounded p-2 w-20 bg-blue-400 text-gray-200"> contact </button>
									<button class=" rounded p-2 w-20 bg-blue-400 text-gray-200"> CV </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
