import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const [captainData, setCaptainData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    setCaptainData({email, password})
    console.log(captainData);
    
    setEmail('')
    setPassword('')

  }
  
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
    <div>
      <img
        className="w-16 ml-1 pb-8 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <form onSubmit={(e)=>
      {submitHandler(e)}
    }>
        <h2 className="text-lg font-semibold mb-2">What&apos;s Your email</h2>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
          required
          placeholder="email@example.com"
          type="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        <h2 className="text-lg font-medium mb-2">Enter Your Password</h2>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
          type="password"
          placeholder="your password"
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <button className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 border w-full text-xl ">
          Login
        </button>
       
      </form>
      <p className="text-center">join a fleet <Link to={'/captain-signup'} className="text-blue-900">Register as a captain</Link></p>
    </div>
    <div>
    <Link to={'/login'} className="bg-[#ff5b29] flex justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-xl ">
          Sign in as User
        </Link>
    </div>
  </div>
  )
}

export default CaptainLogin