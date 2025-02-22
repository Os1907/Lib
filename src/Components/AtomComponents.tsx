// import { useRecoilState } from "recoil"
// import { counterState } from "../AtomSlice/Info"
import { useEffect, useRef } from "react"

const AtomComponents = () => {
    // const [count, setCount] = useRecoilState(counterState)
    // console.log(useRecoilState(counterState) , count)
  const o8Ref=useRef<HTMLDivElement>(null)
  // console.log(o8Ref.current?.dataset.value)
  useEffect(()=>{
    if(o8Ref.current?.dataset.value){
      console.log("Don't run function") 
    } else if (!o8Ref.current?.dataset.value){
        console.log("first run")
    }
  })
  return (
    <>
   <div className="bg-rose-900 p-8 min-h-screen " >
   <div className="bg-rose-700 shadow-2xl min-h-96 p-8  rounded-xl">
   <div className="grid place-items-center">
    <h2 ref={o8Ref} data-value="true" data-name='o8' className="text-white font-semibold  text-3xl uppercase">
      o8
    </h2>
    <button onClick={() => {
      // o8Ref.current?.setAttribute('data-value' , 'false') 
      // console.log(o8Ref.current?.innerHTML='23' )
        o8Ref.current.innerHTML='o8'
    }  } className="mx-auto w-32 bg-rose-950 text-white px-4  rounded-lg shadow-2xl py-5">
      Run Function
    </button>
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button> */}
    </div>
</div>
   </div>






    </>
  )
}

export default AtomComponents