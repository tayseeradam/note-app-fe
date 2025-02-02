
const Signup = () => {
    return (
    <div className=" bg-white">
      <main className=" h-screen max-w-md  md:items-center md:justify-center md:flex md:flex-col
       w-full mx-auto ">
        <div className=" px-4 py-2 bg-slate-800 flex md:flex-col gap-4 rounded-lg">
         <h1 className="text-white text-center font-bold font-serif">Signup</h1>
         <input 
         type="first"
         placeholder="First Name "
         required 
         className="bg-slate-400 text-white text-xl font-serif border
          border-white outline-none rounded-md"
         />
         <input 
         type="last" 
         placeholder="Last Name"
         required
         className="bg-slate-400 text-white text-xl font-serif border
          border-white outline-none rounded-md"
         />
           <input 
         type="age" 
         placeholder="Age"
         required
         className="bg-slate-400 text-white text-xl font-serif border
          border-white outline-none rounded-md"
         />
           <input 
         type="email" 
         placeholder="Email"
         required
         className="bg-slate-400 text-white text-xl font-serif border
          border-white outline-none rounded-md"
         />
           <input 
         type="password" 
         placeholder="Password"
         required
         className=" bg-slate-400 text-white text-xl font-serif border
          border-white outline-none rounded-md "
         />
         <button 
         type=""
         className=" bg-slate-800 hover:bg-slate-600 text-white text-xl font-serif border
          border-white outline-none rounded-md "
         >Submit</button>
      </div>
     </main>
    </div>
    )
  }
  
  export default Signup
  