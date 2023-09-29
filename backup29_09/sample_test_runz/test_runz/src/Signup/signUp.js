import React from 'react'
import googleImg from "../assets/google.png"
import microsoftImg from "../assets/microsoft.png"
import linkedinImg from "../assets/linkedin.png"

export default function SignUp() {
  return (
    <div className='flex items-center flex-col m-0 bg-gradient-to-b from-bgColorFrom to-bgColorTo '>
    <div className='w-3/4 mx-auto  p-5 '>
    <div className='flex justify-center h-46 rounded-xl shadow-lg'>
    <div  className="flex flex-col w-1/2 h-46  bg-testRunz-color ">
    <div  className="w-full h-46 rounded-l-xl flex  flex-col justify-start items-start  bg-testRunz-color p-10">
<p className="font-medium text-logo-color1 text-3xl">Welcome to</p>
<p className=" text-logo-color2 text-6xl">Test Runz</p>
<p  className='pt-16 pb-8  text-logo-color2 text-xl '>Sign Up Via</p>
<button className=' border border-white text-black rounded-md p-2 w-60 shadow-lg  bg-white flex items-center'><img src={googleImg} className='w-12 pr-2'/>Sign Up with Google</button>
<button className=' border border-white text-black rounded-md p-2 w-60 shadow-lg mt-10 bg-white flex items-center'><img src={microsoftImg} className='w-12 pr-2'/>Sign Up with Microsoft</button>
<button className=' border border-white text-black rounded-md p-2 w-60 shadow-lg mt-10 bg-white flex items-center'><img src={linkedinImg} className='w-12 pr-2'/>Sign Up with LinkedIn</button>

</div>
<div className='flex w-full flex-row p-10 justify-between'>
  <div>
    <p>ⓘ English (United States) ⌄ </p>
  </div>
  <div className='flex flex-row justify-evenly w-48'>
  <p>Help</p>
  <p>Terms</p>
  <p>Privacy</p>
  </div>
</div>
</div>
<div  className=' w-2/4 h-46 rounded-r-xl bg-white '>
    <div>
<p className='p-70 font-bold text-black text-2xl text-center'>Sign Up for a <span className='text-testRunz-color' >free</span> Test Runz account</p>
<div className='pl-24 pr-24 flex justify-center flex-col m-0'>
{/* <div className='flex flex-col h-20'>
<label>First Name<span className="text-red-700">*</span></label>
            <input type="text" name="first_name" className="border border-keywe-blue rounded-md h-16" />
            </div><div className='flex flex-col h-20' >
            <label>Last Name<span className="text-red-700">*</span></label>
            <input type="text" name="last_name" className="border border-keywe-blue rounded-md h-16"  />
            </div> */}
              <div className='flex flex-col h-24 mb-3' >
            <label className='mb-3 font-bold text-left	'>Full Name<span className="text-red-700 "> *</span></label>
            <input type="text" name="email" className="border border-black rounded-md h-12 focus:border pl-4 pr-4 focus:border-keywe-blue "  />
            </div>
            <div className='flex flex-col h-24 mb-3' >
            <label className='mb-3 font-bold text-left	'>Email<span className="text-red-700 "> *</span></label>
            <input type="text" name="email" className="border border-black rounded-md h-12 focus:border pl-4 pr-4 focus:border-keywe-blue "  />
            </div>
            <div className='flex flex-col h-24 mb-3' >
            <label className='mb-3 font-bold text-left	'>Password<span className="text-red-700 "> *</span></label>
            <input type="text" name="email" className="border border-black rounded-md h-12 focus:border pl-4 pr-4 focus:border-keywe-blue "  />
            </div>
            <div className='flex flex-col h-24 mb-3' >
            <label className='mb-3  font-bold text-left	'>Create Password<span className="text-red-700 "> *</span></label>
            <input type="password" name="password" className="border border-black pl-4 pr-4 rounded-md h-12 " />
            </div>
            <div className='flex justify-between'>
            <div className='flex flex-row h-18 mb-3 items-center'>
           
            <input type="checkbox" name="password" className=" h-12 w-6 border border-black rounded-md " /> <label>&nbsp; Remember me</label>
            </div>  <div className='flex items-center mb-3 ' ><label className='text-keywe-blue'> &nbsp; Forgot Password</label></div></div>
            <div className='flex flex-col h-24 mb-3' >
            <button className='border bg-testRunz-color rounded-md w-full text-white h-12 mb-3'>Login</button>
            </div>
</div>
</div>
    </div>
    </div>
    </div>
   </div>
  )
}
