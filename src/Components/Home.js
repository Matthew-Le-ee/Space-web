import React from 'react'
import Planets from '../Image/space.jpeg'
import Arrow from '../Image/arrow.png'
import Galaxies from '../Image/galaxy.jpg'
import Satelities from '../Image/Satelties.jpeg'
import Intersellars from '../Image/Intersellars.jpeg'

const Home = () => {
  return (
		<>
			<div className="relative z-[-1] ">
				<img src={Planets} alt="" className=" w-full" />
				<div className=" absolute top-1/2 left-5 medium:top-[40%] ">
					<h2 className=" text-lg text-white tracking-[.1rem] pb-2">
						Discover Planets
					</h2>
					<button className=" bg-black text-white py-[10px] px-[10px] rounded-[10px] flex gap-5 cursor-pointer">
						Explore
						<img src={Arrow} alt="" className="w-7" />
					</button>
				</div>
			</div>

			<div className="relative z-[-1] ">
				<img src={Galaxies} alt="" className=" w-full" />
				<div className=" absolute top-1/2 left-5 medium:top-[40%] ">
					<h2 className=" text-lg text-white tracking-[.1rem] pb-2">
						Discover Galaxies
					</h2>
					<button className=" bg-black text-white py-[10px] px-[10px] rounded-[10px] flex gap-5 cursor-pointer">
						Explore
						<img src={Arrow} alt="" className="w-7" />
					</button>
				</div>
			</div>

			<div className="relative z-[-1] ">
				<img src={Satelities} alt="" className=" w-full" />
				<div className=" absolute top-1/2 left-5 medium:top-[40%] ">
					<h2 className=" text-lg text-white tracking-[.1rem] pb-2">
						Discover Satelities
					</h2>
					<button className=" bg-black text-white py-[10px] px-[10px] rounded-[10px] flex gap-5 cursor-pointer">
						Explore
						<img src={Arrow} alt="" className="w-7" />
					</button>
				</div>
			</div>

			<div className="relative z-[-1] ">
				<img src={Intersellars} alt="" className=" w-full" />
				<div className=" absolute top-1/2 left-5 medium:top-[40%] ">
					<h2 className=" text-lg text-white tracking-[.1rem] pb-2">
						Gallery
					</h2>
					<button className=" bg-black text-white py-[10px] px-[10px] rounded-[10px] flex gap-5 cursor-pointer">
						Explore
						<img src={Arrow} alt="" className="w-7" />
					</button>
				</div>
			</div>
		</>
  );
}

export default Home
