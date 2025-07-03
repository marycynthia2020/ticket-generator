import logo from "/logo-mark.svg"
import githubIcon from "/icon-github.svg"
import ticket from "/pattern-ticket.svg"
import { useParams, Link } from "react-router"


const Ticket = ({userArray}) => {
  const {email} = useParams()
  const foundUser = userArray.find(user =>user.email===email)
  return (
    <div className='px-5'>
          <Link to="/" className="absolute left-10 border p-2 shadow-2xl ">Go Back</Link>
         <h1 className='mb-4 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'>Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37362] to-[#FFFFFF]">{foundUser.fullName}! </span> Your ticket is ready.</h1>
         <p className='text-center text-lg w-full md:w-2/3 lg:w-3/6 xl:w-[30%] 2xl:w-[26%] mx-auto mb-16'>We've emailed your ticket to <span className='text-[#E16151]'>{foundUser.email} </span>and will send updates in the run up to the event.</p>
         <div className=' w-full 2xl:w-3/5 mx-auto h-[300px]  relative '>
         <img src={ticket} alt="" className='w-full h-full' />
           <div className='absolute flex items-center justify-between top-5 left-8  md:left-32 md:w-[70%] h-full'>
            <div className='flex flex-col  '>
                 <div className='flex gap-4 items-center -mt-10 md:-mt-24 md:mb-[100px]  '>
                <img src={logo} alt=""  className=" md:w-12" />
                <div className='flex flex-col gap-3 '>
                    <p className=' text-lg md:text-5xl font-bold'>Coding Conf</p>
                    <p className='text-gray-300 '> Jan 31, 2025 / Austin, TX</p>
                </div>
            </div>
            
                
            <div className=' flex gap-4 items-center  mt-10 md:-mt-0 md:-mb-16'>
                <img src={foundUser.avatar} alt=""  className='w-12 md:w-20  rounded-md'/>
                <div className='flex flex-col'>
                    <p className=' md:text-4xl '>{foundUser.fullName}</p>
                    <div className='flex items-center gap-4'>
                        <img src={githubIcon} alt="" />
                        <p className='text-gray-300'>{foundUser.githubUserName}</p>
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