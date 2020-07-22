import Nav from '../components/nav';

export default function IndexPage() {
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
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
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
								<li>Made For you</li>
								<li>Made For you</li>
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
								Student in Universitas Gadjah Mada, Interest In Lorem ipsum, dolor sit amet consectetur adipisicing
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
          
          

					<div className="work-exp mt-4 px-10 py-6">
						<div>
							<div className="relative  m-8">
								<div className="border-r-2 border-gray-800 border-dotted absolute h-full z-0 pl-2 " />
								<ul className="list-none m-0 p-0">
									<li className="mb-2">
										<div className="flex items-center mb-1">
											<div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10  " />
											<div className="flex-1 ml-4 text-2xl">Sofware Engineering Intern</div>
										</div>
										<div className="ml-12 ">
											<ul className="list-disc space-y-3 pl-4">
												<li>test</li>
												<li>test</li>
												<li>test</li>
											</ul>
										</div>
									</li>
									<li className="mb-2">
										<div className="flex items-center mb-1">
											<div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10" />
											<div className="flex-1 ml-4 font-medium">May 2019 - Learn Golang</div>
										</div>
										<div className="ml-12">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
											tenetur, suscipit atque et nulla dolores unde maiores doloribus nemo
											possimus commodi totam consectetur temporibus odit velit illo repellendus
											provident vitae.
										</div>
									</li>
									<li className="mb-2">
										<div className="flex items-center mb-1">
											<div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10" />
											<div className="flex-1 ml-4 font-medium">
												April 2019 - Learn Photography
											</div>
										</div>
										<div className="ml-12">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
											tenetur, suscipit atque et nulla dolores unde maiores doloribus nemo
											possimus commodi totam consectetur temporibus odit velit illo repellendus
											provident vitae.
										</div>
									</li>
									<li className="mb-2">
										<div className="flex items-center mb-1">
											<div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10" />
											<div className="flex-1 ml-4 font-medium">Feb 2018 - Learn Laravel</div>
										</div>
										<div className="ml-12">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
											tenetur, suscipit atque et nulla dolores unde maiores doloribus nemo
											possimus commodi totam consectetur temporibus odit velit illo repellendus
											provident vitae.
										</div>
									</li>
									<li className="mb-2">
										<div className="flex items-center mb-1">
											<div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10" />
											<div className="flex-1 ml-4 font-medium">May 2017 - Learn PHP</div>
										</div>
										<div className="ml-12">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
											tenetur, suscipit atque et nulla dolores unde maiores doloribus nemo
											possimus commodi totam consectetur temporibus odit velit illo repellendus
											provident vitae.
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
            <h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky">Projects 📂</h1>
            <div className="flex flex-col w-full items-center">
              <h1 className="text-3xl">Bitcoin Tracker</h1>
              <ul className="list-disc w-2/3">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum ad expedita!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.</li>
              </ul>

            </div>

            <div className="flex flex-col w-full items-center">
              <h1 className="text-3xl">Bitcoin Tracker</h1>
              <ul className="list-disc w-2/3">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum ad expedita!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.</li>
              </ul>

            </div>

            <div className="flex flex-col w-full items-center">
              <h1 className="text-3xl">Bitcoin Tracker</h1>
              <ul className="list-disc w-2/3">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi reprehenderit magnam corrupti necessitatibus assumenda dolor quasi earum ad expedita!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima.</li>
              </ul>

            </div>
           
          </div>
          <div>
            <h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky">Stack 🛠</h1>
            "stack on stack on stack"
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus ipsa, praesentium quisquam voluptate iste dignissimos illum harum! Officiis quidem nam repellendus placeat assumenda autem laudantium. Adipisci tempora asperiores modi?
          </div>
          <div >
            <h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky ">About 👨‍🚀</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam accusantium ullam. Debitis perferendis incidunt iure officiis atque cumque sapiente sed velit sunt assumenda! Repellendus reiciendis veniam enim alias asperiores modi ipsam laborum aut illo omnis? Recusandae eius dignissimos iste rem iure quae a odio asperiores enim nesciunt quam assumenda maxime, nostrum quia impedit doloribus harum repellendus ipsam natus qui velit nisi, culpa accusantium consequuntur! Ratione temporibus, autem fuga facere similique quisquam voluptatem recusandae quidem voluptatum nihil? Totam necessitatibus asperiores excepturi sapiente ipsum vitae earum perferendis, blanditiis, ullam aliquid, saepe dicta architecto. Molestiae deserunt iusto illo, doloremque quis odit tempora?
					</div>
          
          
				</div>
			</div>
		</div>
	);
}
