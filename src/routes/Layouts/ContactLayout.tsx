import { Link, Outlet } from "react-router-dom"

const ContactLayout = () => {
  return (
    <>
    <div className='bg-sky-800 min-h-screen pt-5'>
       <div className="flex justify-center items-center w-3/5 mx-auto rounded-full gap-x-5 text-white bg-slate-700 my-5 ">
       <p><Link to={''}>
        One
       </Link>
       </p>
        <p><Link to={'/contact/contactTwo'}>
        Two
       </Link>
       </p>
       <p><Link to={'/contact/contactThree'}>
        Three
       </Link>
       </p>
       </div>
        <div className="w-4/5 mx-auto rounded-3xl bg-slate-800 min-h-screen ">
        <Outlet/>
        </div>
    </div>
    
    </>
  )
}

export default ContactLayout