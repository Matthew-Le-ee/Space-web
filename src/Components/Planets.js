import React,{useState,useEffect} from 'react'
import '../App.css'

const Planets = () => {
  const [Container, setContainer] = useState([]);
  function fetchMe() {
    const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"8697341581mshcfec72bf784f1eep1e486ejsn5abfa648eab8",
			"X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
		},
	};

	fetch(
		"https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
		options
	)
		.then((response) => response.json())
		.then((data) => setContainer(data))
  }
  useEffect(() => {
    fetchMe()
  }, []);
    Container.sort((a,b)=>{
      if(a.planetOrder < b.planetOrder) return -1;
      if (a.planetOrder > b.planetOrder) return 1;
      return 0
    })
  return (
		<>
			{Container.map((hi) => (
				<>
					<div className='pb-5'>
						<div className="flex items-center medium:flex-col">
							<img
								src={hi.imgSrc[0].img}
								alt=""
								className="w-[30%]"
							/>
							<div className="text-white text-center gap-2 card">
								<h3 className="text-center pb-6 uppercase tracking-[.2rem] text-2xl">
									{hi.name}
								</h3>
								<p>
									Mass : {hi.basicDetails[0].mass}
									<br />
									Volume : {hi.basicDetails[0].volume}
								</p>
								<p className=' pb-6 medium:pb-4'>
									Description : <br />
									{hi.description}
								</p>
							</div>
						</div>
					</div>
				</>
			))}
		</>
  );
}

export default Planets