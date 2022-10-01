import React,{useState, useEffect} from 'react'
import axios from 'axios';
import "../App.css"

const Forum = () => {
  const [Text, setText] = useState('');
  const [Data, setData] = useState([]);
  const postData = () =>{
    axios.post(`https://633447db433198e79dd49150.mockapi.io/datachat`,{
      Text,
    });
  }

  useEffect(()=>{
    async function fetchData(){
      const req = await axios.get(
			`https://633447db433198e79dd49150.mockapi.io/datachat`
		);
    setData(req.data)
    }
    fetchData()
  },[])

  console.log(Data)
  return (
		<>
			<h1>Forum Space</h1>
			<div className="medium:w-3/4 m-auto h-[500px] overflow-auto rounded-xl card text-white text-right p-[30px]">
				{Data.map((hi) => (
					<div className="text-[1rem] text-left relative w-fit">
						<p className="bg-white text-black rounded-lg px-[10px] my-3">
							{hi.Text}
						</p>
					</div>
				))}
			</div>

			<div className="text-black text-center p-5">
				<input
					type="text"
					onChange={(e) => setText(e.target.value)}
					value={Text}
					className="border-none rounded-xl w-3/4 h-[30px]"
				/>
				<button
					onClick={postData}
					className="bg-white text-black py-[2px] px-[10px] rounded"
				>
					Send
				</button>
			</div>
		</>
  );
}

export default Forum