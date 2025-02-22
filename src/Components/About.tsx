// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import CustomInput from "./CustomInput";

// type IFormInput = z.infer<typeof formSchema>;

// const formSchema = z.object({
//   name: z.string().min(3, "يجب أن يحتوي الاسم على 3 أحرف على الأقل"),
//   email: z.string().email("البريد الإلكتروني غير صحيح"),
//   password: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
//   rePassword: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
//   phone: z.string().min(11, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").max(15, "رقم الهاتف طويل جدًا"),
// });

// const About = () => {
//   const { register, handleSubmit, formState: { isSubmitting, errors }, watch } = useForm<IFormInput>({
//     resolver: zodResolver(formSchema),
//   });

//   const [validFields, setValidFields] = useState<Record<string, boolean>>({});

//   const handleValidation = (field: keyof IFormInput) => {
//     const value = watch(field);
//     const result = formSchema.shape[field].safeParse(value);
//     setValidFields((prev) => ({ ...prev, [field]: result.success }));
//   };

//   const submitData = async (data: IFormInput) => {
//     try {
//       console.log(isSubmitting);
//       const sending = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await sending.json();
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-emerald-800 min-h-screen flex justify-center items-center">
//       <form onSubmit={handleSubmit(submitData)} className="bg-white p-6 rounded-2xl shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4 text-center">User Form</h2>

//         {/** Name Input */}
//         <div className="relative">
//           <input 
//             {...register("name", { onBlur: () => handleValidation("name") })}
//             type="text" 
//             placeholder="Amir Mohammed" 
//             className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {validFields.name && <span className="absolute right-2 top-3 text-green-500">✅</span>}
//           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//         </div>

//         {/** Email Input */}
//         <div className="relative">
//           <input 
//             {...register("email", { onBlur: () => handleValidation("email") })}
//             type="email" 
//             placeholder="amir6@senior.com" 
//             className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {validFields.email && <span className="absolute right-2 top-3 text-green-500">✅</span>}
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//         </div>

//         {/** Password Input */}
//         <div className="relative">
//           <input 
//             {...register("password", { onBlur: () => handleValidation("password") })}
//             type="password" 
//             placeholder="******" 
//             className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {validFields.password && <span className="absolute right-2 top-3 text-green-500">✅</span>}
//           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//         </div>

//         {/** RePassword Input */}
//         <div className="relative">
//           <input 
//             {...register("rePassword", { onBlur: () => handleValidation("rePassword") })}
//             type="password" 
//             placeholder="******" 
//             className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {validFields.rePassword && <span className="absolute right-2 top-3 text-green-500">✅</span>}
//           {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}
//         </div>

//         {/** Phone Input */}
//         <div className="relative">
//           <input 
//             {...register("phone", { onBlur: () => handleValidation("phone") })}
//             type="tel" 
//             placeholder="010103056" 
//             className="w-full p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {validFields.phone && <span className="absolute right-2 top-3 text-green-500">✅</span>}
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
//         </div>

//         {/** Submit Button */}
//         <button className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition">
//           {isSubmitting ? "Loading..." : "Send"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default About;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import CustomInput from "./CustomInput";

// type IFormInput = z.infer<typeof formSchema>;

// const formSchema = z.object({
//   name: z.string().min(3, "يجب أن يحتوي الاسم على 3 أحرف على الأقل"),
//   email: z.string().email("البريد الإلكتروني غير صحيح"),
//   password: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
//   rePassword: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
//   phone: z.string().min(11, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").max(15, "رقم الهاتف طويل جدًا"),
// });

// const About = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting, errors },
//   } = useForm<IFormInput>({ resolver: zodResolver(formSchema) });

//   const submitData = async (data: IFormInput) => {
//     try {
//       console.log(isSubmitting);
//       const sending = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const result = await sending.json();
//       console.log(sending);
//       console.log(isSubmitting);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-emerald-800 min-h-screen flex justify-center items-center">
//       <form onSubmit={handleSubmit(submitData)} className="bg-white p-6 rounded-2xl shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4 text-center">User Form</h2>

//         <CustomInput label="Name" placeholder="Amir Mohammed" {...register("name")} error={errors.name?.message} />
//         <CustomInput label="Email" type="email" placeholder="amir6@senior.com" {...register("email")} error={errors.email?.message} />
//         <CustomInput label="Password" type="password" placeholder="******" {...register("password")} error={errors.password?.message} />
//         <CustomInput label="RePassword" type="password" placeholder="******" {...register("rePassword")} error={errors.rePassword?.message} />
//         <CustomInput label="Phone" type="tel" placeholder="010103056" {...register("phone")} error={errors.phone?.message} />

//         <button className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition">
//           {isSubmitting ? "Loading..." : "Send"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default About;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./CustomInput";

type IFormInput = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(3, "يجب أن يحتوي الاسم على 3 أحرف على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  password: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
  rePassword: z.string().min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل"),
  phone: z.string().min(11, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").max(15, "رقم الهاتف طويل جدًا"),
});

const About = () => {
  const {
    register,
    handleSubmit,
    watch, 
    formState: { isSubmitting, errors },
  } = useForm<IFormInput>({ resolver: zodResolver(formSchema) });

  const submitData = async (data: IFormInput) => {
    try {
      console.log(isSubmitting);
      const sending = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await sending.json();
      console.log(sending);
      console.log(isSubmitting);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-emerald-800 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(submitData)} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">User Form</h2>

        <CustomInput label="Name" placeholder="Amir Mohammed" {...register("name")} error={errors.name?.message} value={watch("name")} />
        <CustomInput label="Email" type="email" placeholder="amir6@senior.com" {...register("email")} error={errors.email?.message} value={watch("email")} />
        <CustomInput label="Password" type="password" placeholder="******" {...register("password")} error={errors.password?.message} value={watch("password")} />
        <CustomInput label="RePassword" type="password" placeholder="******" {...register("rePassword")} error={errors.rePassword?.message} value={watch("rePassword")} />
        <CustomInput label="Phone" type="tel" placeholder="010103056" {...register("phone")} error={errors.phone?.message} value={watch("phone")} />

        <button className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition">
          {isSubmitting ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default About;
