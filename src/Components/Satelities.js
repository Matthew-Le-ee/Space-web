import React from 'react'
import Satellite from '../Image/Satellite/Satellite.webp'
import StarLink from '../Image/Satellite/STARLINK.webp'
import SpaceStation from '../Image/Satellite/SpaceStation.webp'
import WILDBLUE from '../Image/Satellite/WILDBLUE1.webp'
import sentinel2a from '../Image/Satellite/Sentinel@A.webp'
import sentinel2b from '../Image/Satellite/SENTINEL2b.webp'
import HST from '../Image/Satellite/HST.webp'
import Aist2d from '../Image/Satellite/AIST2D.webp'
import adeos2 from '../Image/Satellite/ADEOS2.webp'
import aausat4 from '../Image/Satellite/AAUSAT4.webp'
import aausatcubesat from '../Image/Satellite/aausat cubesat.webp'
import Noaa20 from '../Image/Satellite/NOAA20.webp'

import '../App.css'

const Satelities = () => {
  return (
		<>
			<div className="flex justify-between flex-wrap medium:justify-center">
				<div className="card mb-4">
					<img src={Satellite} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							ChinaSat 1E
						</h3>
						<p>
							NORAD ID : 53813
							<br />
							LAUNCHED : 09/13/22
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : PRC
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={StarLink} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							Starlink-4667
						</h3>
						<p>
							NORAD ID : 53707
							<br />
							LAUNCHED : 09/05/22
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : US
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={aausat4} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							aausat4
						</h3>
						<p>
							NORAD ID : 41460
							<br />
							LAUNCHED : 04/25/16
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : DEN
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={adeos2} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							adeos2
						</h3>
						<p>
							NORAD ID : 27597
							<br />
							LAUNCHED : 12/14/02
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : JPN
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={Aist2d} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							aist2d
						</h3>
						<p>
							NORAD ID : 41465
							<br />
							LAUNCHED : 04/28/16
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : CIS
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={HST} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							HST
						</h3>
						<p>
							NORAD ID : 53813
							<br />
							LAUNCHED : 04/24/90
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : US
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={SpaceStation} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							Spacestation
						</h3>
						<p>
							NORAD ID : 25544
							<br />
							LAUNCHED : 11/20/98
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : ISS
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={sentinel2a} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							sentinel 2a
						</h3>
						<p>
							NORAD ID : 40697
							<br />
							LAUNCHED : 06/23/15
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : ESA
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={sentinel2b} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							sentinel 2b
						</h3>
						<p>
							NORAD ID : 42063
							<br />
							LAUNCHED : 03/07/17
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : ESA
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={WILDBLUE} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							Wild blue
						</h3>
						<p>
							NORAD ID : 29643
							<br />
							LAUNCHED : 12/08/06
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : US
						</p>
					</div>
				</div>
				<div className="card mb-4">
					<img src={aausatcubesat} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							aausat cubesat-2
						</h3>
						<p>
							NORAD ID : 32788
							<br />
							LAUNCHED : 04/28/08
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : DEN
						</p>
					</div>
				</div>
				<div className="card">
					<img src={Noaa20} alt="" className="w-full" />
					<div className="text-white text-center py-4">
						<h3 className="text-2xl tracking-[.1em] uppercase pb-3">
							noaa 20
						</h3>
						<p>
							NORAD ID : 43013
							<br />
							LAUNCHED : 11/18/17
							<br />
							TYPE : PAYLOAD
							<br />
							COUNTRY : US
						</p>
					</div>
				</div>
			</div>
		</>
  );
}

export default Satelities