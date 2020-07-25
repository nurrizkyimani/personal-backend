const Gallery = () => {
	return (
		<div className="max-h-screen">
			<div className="max-w-full  flex flex-col items-center font-serif text-3xl p-8">Gallery</div>
			<div className="p-10 space-x-4 flex ">
				<a href="">
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/500/300"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 "> In Africa</h4>

					</div>
				</a>

					<div>
					<div className="card max-w-sm  mr-2 border-gray-500  shadow-xl overflow-hidden rounded-md  transform hover:-translate-y-1 duration-300  ">
						<img
							className="w-full max-h-screen object-fill"
							src="https://picsum.photos/id/237/500/300"
							alt="Sunset in the mountains"
						/>
					</div>

					<div>
						<h4 className="text-2xl transform hover:text-blue-500 duration-300 "> In Africa</h4>

					</div>
				</div>


				
			</div>
		</div>
	);
};

export default Gallery;
