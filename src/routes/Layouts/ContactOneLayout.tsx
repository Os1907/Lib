import { Link, Outlet } from "react-router-dom"

const ContactOneLayout = () => {
  return (
    <> <div className="bg-slate-950 text-white ">
<div className="flex justify-center items-center w-3/5 mx-auto rounded-full gap-x-5 text-white bg-slate-700 my-5 ">
       <p><Link to={''}>
        Video one
       </Link>
       </p>
        <p><Link to={'/contact/videoTwo'}>
        Video Two
       </Link>
       </p>
       
       </div>
       <div className="bg-slate-950 ">
        <Outlet/>
       </div>
    </div>
    </>
  )
}

export default ContactOneLayout