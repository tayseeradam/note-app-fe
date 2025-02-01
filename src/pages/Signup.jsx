
const Signup = () => {
    return (
    <div className=" bg-red-600">
      <main className=" h-screen max-w-md  md:items-center md:justify-center md:flex md:flex-col
       w-full mx-auto ">
        <div className=" px-4 py-2 bg-slate-800 flex md:flex-col gap-4 rounded-lg">
         <h1 className=" ">Signup</h1>
         <input 
         type="first"
         placeholder="First Name "
         required 
         className="bg-slate-400"
         />
         <input 
         type="last" 
         placeholder="Last Name"
         required
         className="bg-slate-400"
         />
           <input 
         type="age" 
         placeholder="Age"
         required
         className="bg-slate-400 "
         />
           <input 
         type="email" 
         placeholder="Email"
         required
         className="bg-slate-400"
         />
           <input 
         type="password" 
         placeholder="Password"
         required
         className=" bg-slate-400"
         />
         <button 
         type=""
         className=" bg-slate-800"
         >Submit</button>
      </div>
     </main>
    </div>
    )
  }
  
  export default Signup
  