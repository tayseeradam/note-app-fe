
const Note = () => {
  return (
    <div className="bg-white">
   <main className="h-screen max-w-md  md:items-center md:justify-center md:flex md:flex-col w-full mx-auto ">
    <div className=" px-4 py-2 bg-slate-800 flex md:flex-col gap-4 rounded-lg ">

      <h1 className="text-center md:text-4xl text-white font-bold font-serif">My Note</h1>

      <input type="title" 
        placeholder="Title"
        required
        className="w-full bg-slate-400 px-4 py-2 border border-slate-200 outline-none 
        md:rounded-md md:shadow-lg text-white text font-bold font-serif"
        />
        <textarea 
        placeholder="Content"
        required
        id="start typing your note "
        type="Content"
        className=" w-full bg-slate-400 px-4 py-2 border border-slate-200 outline-none md:rounded-md
         md:shadow-lg text-white text-2xl font-serif font-bold">
        </textarea>

        <a href="note" className="w-full bg-slate-700 hover:bg-slate-500 text-white px-4 font-serif
         py-2 md:text-center text-4xl rounded-lg shadow-lg border border-slate-200 outline-none">Add Note</a>

    </div>
   </main>
   </div>
  )
}

export default Note
