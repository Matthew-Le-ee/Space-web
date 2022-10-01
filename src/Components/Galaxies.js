import React, {useEffect} from 'react'
import  Milkyway from '../Image/Galaxies/milky way.jpg'
import Andromeda from '../Image/Galaxies/Andromeda.jpg'
import Messier81 from '../Image/Galaxies/Messier 81.jpg'
import HerculesA from '../Image/Galaxies/Hercules A.jpg'
import iCC1101 from '../Image/Galaxies/ICC 1101.jpg'
import Triangulum from '../Image/Galaxies/Triangulum.jpg'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css";


const Galaxies = () => {
    useEffect(() => {
		AOS.init({
			duration: "2000",
		});
	}, []);
  return (
		<div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={Milkyway}
					alt=""
					className="w-[20%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center pb-6 card"
					data-aos="fli-right"
				>
					<h3 className="text-center py-4 uppercase tracking-[.2rem] text-2xl">
						Milky way
					</h3>
					<p className="pb-4 medium:pb-3">
						The Milky Way is the galaxy that includes our Solar
						System, with the name describing the galaxy's appearance
						from Earth: a hazy band of light seen in the night sky
						formed from stars that cannot be individually
						distinguished by the naked eye.
					</p>
					<p className="medium:pb-4">
						Escape velocity: 550 km/s
						<br />
						Absolute magnitude: -21
						<br />
						Age: 13.61 billion years
						<br />
						Radius: 52,850 light years
						<br />
						Number ofstars: 100–400 billion ((1–4)×1011)
						<br />
						Declination: −29°00′ 28.1699″
						<br />
						Constellations: Sagittarius, Orion, Scorpius, Carina,
						Ara, Auriga
					</p>
				</div>
			</div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={Andromeda}
					alt=""
					className="w-[30%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center card"
					data-aos="flip-right"
				>
					<h3 className="text-center py-6 uppercase tracking-[.2rem] text-2xl">
						Andromeda
					</h3>
					<p className="pb-4 medium:pb-3">
						The Andromeda Galaxy, also known as Messier 31, M31, or
						NGC 224 and originally the Andromeda Nebula, is a barred
						spiral galaxy with diameter of about 46.56 kiloparsecs
						approximately 2.5 million light-years from Earth and the
						nearest large galaxy to the Milky Way.
					</p>
					<p className="pb-6 medium:pb-4">
						Absolute magnitude: -21.5
						<br />
						Age: 10.01 billion years
						<br />
						Radius: 110,000 light years
						<br />
						Constellations: RA 0h 42m 44s
						<br />
						Apparent magnitude : 3.44
						<br />
						Distance to Earth : 2.537 million light years
					</p>
				</div>
			</div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={HerculesA}
					alt=""
					className="w-[20%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center card"
					data-aos="flip-right"
				>
					<h3 className="text-center py-6 uppercase tracking-[.2rem] text-2xl">
						Hercules A
					</h3>
					<p className="pb-4 medium:pb-3">
						Hercules A is a bright astronomical radio source within
						the vicinity of the constellation Hercules corresponding
						to the galaxy 3C 348.
					</p>
					<p className="pb-6 medium:pb-4">
						Absolute magnitude: -22.88
						<br />
						Declination: +04° 59′ 33.32″
						<br />
						Constellations: Hercules
						<br />
						Distance to Earth: 2.1 billion light years
						<br />
						Magnitude : 18.25
					</p>
				</div>
			</div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={iCC1101}
					alt=""
					className="w-[20%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center card"
					data-aos="flip-right"
				>
					<h3 className="text-center py-6 uppercase tracking-[.2rem] text-2xl">
						IC 1101
					</h3>
					<p className="pb-4 medium:pb-3">
						IC 1101 is a class S0 supergiant lenticular galaxy at
						the center of the Abell 2029 galaxy cluster. It has an
						isophotal diameter at about 123.65 to 169.61
						kiloparsecs.
					</p>
					<p className="pb-6 medium:pb-4">
						Age: 12.31 billion years
						<br />
						Radius: 1.9569 light years
						<br />
						Stars: 100 trillion
						<br />
						Distance to Earth: 1.045 billion light years
					</p>
				</div>
			</div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={Messier81}
					alt=""
					className="w-[30%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center  card"
					data-aos="flip-right"
				>
					<h3 className="text-center py-6 uppercase tracking-[.2rem] text-2xl">
						Messier 81
					</h3>
					<p className="pb-4 medium:pb-3">
						Messier 81 is a grand design spiral galaxy about 12
						million light-years away, with a diameter of 90,000
						light years, in the constellation Ursa Major. Due to its
						proximity to our galaxy, large size, and active galactic
						nucleus, Messier 81 has been studied extensively by
						professional astronomers.
					</p>
					<p className="pb-6 medium:pb-4">
						Distance to Earth: 11.74 million light years
						<br />
						Magnitude: 6.94
						<br />
						Age: 13.31 billion years
						<br />
						Radius: 45,000 light years
						<br />
						Stars: 250 billion
						<br />
						Constellations: Ursa Major
					</p>
				</div>
			</div>
			<div className="flex items-center medium:flex-col py-6">
				<img
					src={Triangulum}
					alt=""
					className="w-[20%]"
					data-aos="flip-left"
				/>
				<div
					className="text-white text-center card"
					data-aos="flip-right"
				>
					<h3 className="text-center py-6 uppercase tracking-[.2rem] text-2xl">
						Triangulum
					</h3>
					<p className="pb-4 medium:pb-3">
						The Triangulum Galaxy is a spiral galaxy 2.73 million
						light-years from Earth in the constellation Triangulum.
						It is catalogued as Messier 33 or NGC 598.
					</p>
					<p className="pb-6 medium:pb-4">
						Magnitude: 5.72
						<br />
						Age: 2.73 million light years
						<br />
						Distance to Earth : 2.723 million light years
						<br />
						Constellations: Alpha Trianguli, Beta Trianguli, Gamma
						Trianguli
					</p>
				</div>
			</div>
		</div>
  );
}

export default Galaxies