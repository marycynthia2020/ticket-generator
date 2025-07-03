import React, { useRef, useState } from 'react'
import uploadIcon from "/icon-upload.svg"
import infoIcon from "/icon-info.svg"

const Form = ({formData, setFormData, setIsSubmitted, userArray, setUserArray}) => {
   
    const handleChange = (e)=>{
        const {name, files, value, type} = e.target
        if(type === "file"){
            setFormData(prev => ({...prev, [name]: URL.createObjectURL(files[0])}))
            return
        } setFormData(prev => ({...prev, [name]: value}))
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(formData.email && formData.fullName && formData.githubUserName && formData.avatar){
            setIsSubmitted(true)
            alert("submitted")
            setUserArray(prev => [...prev, formData])
            setFormData({
                avatar: null,
                fullName: "",
                email: "",
                githubUserName: "",
            })
            return
        } alert("All fields are reaquired") 
    }
  return (
    <div className='px-5'>

        <h1 className='mb-4 text-3xl md:text-5xl md:w-4/5 xl:w-3/5 2xl:w-3/6 mx-auto text-center font-bold'> Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className='text-center text-lg text-gray-300 mb-6'>Secure your spot at next year's biggest coding conference.</p>
        <form  className='w-full md:w-1/2 xl:w-[32%] mx-auto' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 mb-6' >
                <label htmlFor="avatar" className='text-xl'>Upload Avatar</label>
                <div className='  flex flex-col items-center h-32 p-4 border border-dashed rounded-md'>
                    <div className=' border border-gray-600 h-12 w-12 rounded-md flex items-center justify-center P-2'>
                        <img src={formData.avatar ? formData.avatar : uploadIcon} alt="upload icon" />
                    </div>
                    <input type="file" id="avatar"  className='opacity-0 cursor-pointer' name='avatar'   onChange={handleChange} />
                    <p className='-mt-4 text-gray-400'>Drag and drop or click to upload</p>
                </div>
                <div className='flex gap-2 text-gray-400'>
                    <img src={infoIcon} alt="" />
                    <span className='text-sm'>Upload your photo (JPG or PNG, max size: 500KB).</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" className='rounded-lg border border-gray-400 h-12 p-3 bg-transparent' placeholder='' name='fullName' value={formData.fullName} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" className='rounded-lg  border border-gray-400 h-12 p-3 bg-transparent' placeholder='example@email.com' name='email' value={formData.email} onChange={handleChange}  />
            </div>
             <div className='flex flex-col gap-2 text-xl mb-6'>
                <label htmlFor="githubUserName">GitHub Username</label>
                <input id="githubUserName" type="text" className='rounded-lg  border border-gray-400 h-12 p-3 bg-transparent' placeholder='@username' name='githubUserName' value={formData.githubUserName} onChange={handleChange}  />
            </div>
            <button className='bg-[#F57261] py-3 rounded-lg w-full text-[#0C082B] font-bold text-xl z-[999] relative'>Generate My Ticket</button>
        </form>
    </div>
  )
}

export default Form