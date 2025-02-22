import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";
type IFormInput=z.infer<typeof formSchema>

const formSchema = z.object({
  name:z.string().min(3),
  email:z.string().email(),
  password:z.string().min(6),
  rePassword:z.string().min(6),
  phone: z.string().min(11, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").max(15, "رقم الهاتف طويل جدًا"),
})
const About = () => {

 const { register, handleSubmit,formState: {isSubmitting ,errors} } = useForm<IFormInput>({resolver: zodResolver(formSchema)})
const submitData = async (data : IFormInput) => {
  try {
    console.log(isSubmitting)
    const sending = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
      method:'POST',
      headers: {
        "Content-Type": "application/json", 
      },
      body:JSON.stringify(data)
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await sending.json(); 

    console.log(sending)
    console.log(isSubmitting)

  } catch (error) {
    console.log(error)
  }
}; 

  return (
    <div className='bg-emerald-800 min-h-screen '>
  <div className=" bg-emerald-800 flex justify-center items-center min-h-screen ">
      <form onSubmit={handleSubmit(submitData)} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">User Form</h2>
        <label className="block mb-2 text-gray-700">Name</label>
        <input 
          {...register('name')}
          type="text" 
          placeholder="Amir Mohammed" 
          className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <label className="block mb-2 text-gray-700">Email</label>
        <input 
          type="email" 
          {...register('email')}
          placeholder="amir6@senior.com" 
          className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        <label className="block mb-2 text-gray-700">Password</label>
        <input 
          type="password" 
          {...register('password')}
          placeholder="******" 
          className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

<label htmlFor='rePassword' className="block mb-2 text-gray-700">RePassword</label>
        <input 
          type="password" 
          id="rePassword"
          {...register('rePassword')}
          placeholder="******" 
          className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
                   {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}

        <label className="block mb-2 text-gray-700">Phone</label>
        <input 
          type="tel" 
          {...register('phone')}
          placeholder="010103056" 
          className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
                           {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

        <button className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition">
          {isSubmitting ? "Loading..." : "Send"}
        </button>
      </form>
    </div>


  </div>
  )
}


export default About