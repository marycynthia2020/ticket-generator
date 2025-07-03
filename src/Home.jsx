import React from 'react'
import Form from './components/Form'
import Users from './components/Users'

const Home = ({formData, setFormData, setIsSubmitted, userArray, setUserArray}) => {
  console.log(userArray)
  return (
    <div>
        <Form  formData ={formData} setFormData={setFormData} setIsSubmitted ={setIsSubmitted} userArray={userArray} setUserArray={setUserArray} />
        <Users userArray={userArray}/>
    </div>
  )
}

export default Home