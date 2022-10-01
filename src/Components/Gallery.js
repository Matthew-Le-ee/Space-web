import React,{useEffect} from 'react'
import Milkyway from '../Image/Galaxies/milky way.jpg'
import Andromeda from '../Image/Galaxies/Andromeda.jpg'
import Messier81 from '../Image/Galaxies/Messier 81.jpg'
import HerculesA from '../Image/Galaxies/Hercules A.jpg'
import iCC1101 from '../Image/Galaxies/ICC 1101.jpg'
import Triangulum from '../Image/Galaxies/Triangulum.jpg'
import Satellite from "../Image/Satellite/Satellite.webp";
import StarLink from "../Image/Satellite/STARLINK.webp";
import SpaceStation from "../Image/Satellite/SpaceStation.webp";
import WILDBLUE from "../Image/Satellite/WILDBLUE1.webp";
import sentinel2a from "../Image/Satellite/Sentinel@A.webp";
import sentinel2b from "../Image/Satellite/SENTINEL2b.webp";
import HST from "../Image/Satellite/HST.webp";
import Aist2d from "../Image/Satellite/AIST2D.webp";
import adeos2 from "../Image/Satellite/ADEOS2.webp";
import aausat4 from "../Image/Satellite/AAUSAT4.webp";
import aausatcubesat from "../Image/Satellite/aausat cubesat.webp";
import Noaa20 from "../Image/Satellite/NOAA20.webp";
import Earth from '../Image/Planets/earth.jpg'
import Mars from '../Image/Planets/Mars.jpg'
import Merkerius from '../Image/Planets/merkerius.jpg'
import Neptunus from '../Image/Planets/neptunus.jpg'
import Saturn from '../Image/Planets/saturn.jpg'
import Uranus from '../Image/Planets/uranis.jpeg'
import Venus from '../Image/Planets/venus.jpg'
import '../Components/Gallery.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
		AOS.init({
			duration: "2000",
		});
  }, []);
  return (
		<>
			<div className="row">
				<div className="column" data-aos="flip-left">
					<img src={Neptunus} alt="" className=" w-full" />
					<img src={Earth} alt="" className=" w-full" />
					<img src={Mars} alt="" className=" w-full " />
					<img src={Merkerius} alt="" className=" w-full" />
					<img src={Venus} alt="" className=" w-full" />
				</div>
				<div className="column" data-aos="flip-left">
					<img src={Uranus} alt="" className="w-full" />
					<img src={Milkyway} alt="" className=" w-full" />
					<img src={Andromeda} alt="" className=" w-full" />
					<img src={Messier81} alt="" className=" w-full" />
					<img src={HerculesA} alt="" className=" w-full" />
					<img src={iCC1101} alt="" className=" w-full" />
				</div>
				<div className="column" data-aos="flip-left">
					<img src={Satellite} alt="" className=" w-full" />
					<img src={StarLink} alt="" className=" w-full" />
					<img src={SpaceStation} alt="" className=" w-full" />
					<img src={WILDBLUE} alt="" className=" w-full" />
					<img src={sentinel2b} alt="" className=" w-full" />
					<img src={sentinel2a} alt="" className=" w-full" />
					<img src={HST} alt="" className=" w-full" />
				</div>
				<div className="column" data-aos="flip-left">
					<img src={Triangulum} alt="" className="w-full" />
					<img src={Aist2d} alt="" className="w-full" />
					<img src={aausat4} alt="" className="w-full" />
					<img src={adeos2} alt="" className="w-full" />
					<img src={aausatcubesat} alt="" className="w-full" />
					<img src={Noaa20} alt="" className="w-full" />
					<img src={Saturn} alt="" className="w-full" />
				</div>
			</div>
		</>
  );
}

export default Gallery