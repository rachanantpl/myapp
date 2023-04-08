import { useState } from 'react'


const Login = () => {
  const [sign, setSign] = useState<string>("")

  return (
    <div className=" flex flex-1 items-center flex-row">
      <div className="flex flex-col w-1/3 min-h-screen bg-[#029E9D]">
        <div className='flex justify-center items-center'>
          <img src="/HomeChef Horizontals.png" alt="" />
        </div>
        <div className="flex ml-20 text-white justify-center items-center">
          <div className="flex flex-col justify-center items-center -translate-y-16 gap-4">
            <p className="text-3xl font-semibold mb-5 ">
              {' '}
              Join the most vibrant chef community & meet amazing people.
            </p>
            <ul className="list-disc list-inside justify-between">
              <li className="font-semibold">Meet top chefs</li>
              <li className="font-semibold">Help your community</li>
              <li className="font-semibold"> Find job opportunities</li>
              <li className="font-semibold">Share your talent</li>
            </ul>
          </div>
          <div className='flex mt-48 mr-5 w-[800px] h-[450px]' >
            <img
              className="flex mt-20"
              src="/image 1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {sign && (
        <div className="flex flex-col justify-center items-start gap-4 ml-32">
          <p className="text-3xl font-semibold text-[#1E1E26]">Registration</p>
          <h2 className="text-sm">
            Fill in the details below to get yourself registered.
          </h2>
          <input
            className="bg-[#F0FAF9] outline-[#029E9D] rounded-lg placeholder-[#029E9D] w-[500px] pl-5 h-14 font-semibold "
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="text"
            placeholder="Mobile Number"
          />
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#029E9D] text-white w-[500px] h-14 rounded-lg text-lg font-semibold">
            Create Account
          </button>
          <p className="text-[#A4A4A4]">
            By continuing , you accept our terms & conditions
          </p>
          <label className="font-bold" htmlFor="">
            Already have an account?
            <button
              className="text-[#029E9D] font-semibold"
              onClick={() => setSign(sign)}
            >
              Login
            </button>
          </label>
        </div>
      )}
      <div className=" flex flex-col justify-center items-start ml-32">
        <div>
          <p className="font-bold text-4xl">Login</p>
          <p className="">Fill in the details below.</p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="bg-[#F0FAF9]  outline-[#029E9D] rounded-lg  placeholder-[#029E9D]  w-[500px] pl-5 h-14 font-semibold"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="bg-[#029E9D] text-white w-[500px] h-14 rounded-lg text-lg font-semibold mt-5">
          Login
        </button>
        <button className="font-bold" onClick={() => setSign(sign)}>
          Forget password?
        </button>
      </div>
    </div>
  )
}

export default Login