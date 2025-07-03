 import  topLine from "/pattern-squiggly-line-top.svg"
import mobileBottomLine from "/pattern-squiggly-line-bottom-mobile-tablet.svg"
import desktopBottomLine from "/pattern-squiggly-line-bottom-desktop.svg"
import Logo from "./components/Logo."
import Ticket from "./components/Ticket"
import { useState } from "react"
import { Route, Routes } from "react-router"
import Home from "./Home"

function App() {
  const [userArray, setUserArray] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        avatar: null,
        fullName: "",
        email: "",
        githubUserName: "",
    })

  return (
    <div className=" font-inconsolatao  overflow-hidden  text-white w-full bg-mobile md:bg-tablet xl:bg-tablet bg-cover relative">
      <div className="  w-full max-w-[1440px] mx-auto  min-h-screen bg-lines py-12 md:pt-8">
        <img src={topLine} alt="" className=" absolute w-28 top-5 md:top-20 right-0 md:w-96" />
        <img src={mobileBottomLine} alt="" className="xl:hidden absolute bottom-0 left-0" />
        <img src={desktopBottomLine} alt="" className="hidden xl:block absolute bottom-0 left-0 "/>
        <Logo />
        <Routes >
          <Route index element={<Home formData ={formData} setFormData={setFormData} setIsSubmitted ={setIsSubmitted} userArray={userArray} setUserArray={setUserArray} />} />
          <Route path="/ticket/:email" element={<Ticket userArray={userArray} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
