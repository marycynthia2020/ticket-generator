import { useNavigate, Link } from "react-router"
const Users = ({userArray}) => {
  const navigate = useNavigate()
    const userDisplay = userArray.map(user => (
       <Link to={`/ticket/${user.email}`}  key={user.email} className='flex flex-col gap-3 border-2 p-4 rounded-lg border-gray-600 justify-center items-center'  >
            <img src={user.avatar} alt={user.name} className='w-1/2 aspect-square rounded-lg'  />
            <p>Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>GitHub Username: {user.githubUserName}</p>
       </Link>
    ))

  return (
    <div className='px-5 grid grid-cols-4 gap-4  mt-20 relative z-[999]'>{userDisplay}</div>
  )
}

export default Users