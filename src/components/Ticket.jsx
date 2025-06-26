import React from 'react'
import logo from "/logo-mark.svg"
// import avatar from "/image-avatar.jpg"
import githubIcon from "/icon-github.svg"
import ticket from "/pattern-ticket.svg"

const Ticket = ({formData, avatar}) => {
  return (
    <div className='px-5'>
         <h1 className='mb-4 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'>Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37362] to-[#FFFFFF]">{formData.fullName}! </span> Your ticket is ready.</h1>
         <p className='text-center text-lg w-full md:w-2/3 lg:w-3/6 xl:w-[30%] 2xl:w-[26%] mx-auto mb-16'>We've emailed your ticket to <span className='text-[#E16151]'>{formData.email} </span>and will send updates in the run up to the event.</p>
         <div className=' w-full 2xl:w-3/5 mx-auto h-[300px]  relative '>
         <img src={ticket} alt="" className='w-full h-full' />
           <div className='absolute flex items-center justify-between top-5 left-32 w-[70%] h-full'>
            <div className='flex flex-col  '>
                 <div className='flex gap-4 items-center -mt-24 mb-[100px] '>
                <img src={logo} alt=""  className="" width={50}/>
                <div className='flex flex-col gap-3 '>
                    <p className=' text-lg md:text-5xl font-bold'>Coding Conf</p>
                    <p className='text-gray-300 '> Jan 31, 2025 / Austin, TX</p>
                </div>
            </div>
            
                
            <div className='flex gap-4 items-center -mb-16'>
                <img src={URL.createObjectURL(avatar)} alt=""  className=' w-20  rounded-md'/>
                <div className='flex flex-col'>
                    <p className=' md:text-4xl '>{formData.fullName}</p>
                    <div className='flex items-center gap-4'>
                        <img src={githubIcon} alt="" />
                        <p className='text-gray-300'>{formData.githubUserName}</p>
                    </div>
                </div>
            </div>
           </div>
           <div>
                <p className='text-gray-300 rotate-90'>#1000000</p>
           </div>

           </div>
         </div>
    </div>
  )
}

export default Ticket