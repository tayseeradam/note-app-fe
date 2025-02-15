
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader2, Save, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import ErrorAlert from '../components/ErrorAlert';
import { getAuthHeaders } from '../utils/index';

const EditNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Fetch note data
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`${apiUrl}/v1/notes/${id}`, {
          headers: getAuthHeaders(),
        });
        const data = await response.json();

        if (data.ok) {
          setTitle(data.data.title);
          setContent(data.data.content);
        } else {
          throw new Error('Failed to fetch note');
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch note details');
        toast.error('Failed to fetch note details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id, apiUrl]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/v1/notes/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
        }),
      });

      const data = await response.json();

      if (data.ok) {
        toast.success('Note updated successfully');
        navigate('/notes');
      } else {
        throw new Error(data.message || 'Failed to update note');
      }
    } catch (err) {
      setError(err.message || 'Failed to update note');
      toast.error(err.message || 'Failed to update note');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main className='min-h-screen p-6 md:p-10 bg-primary flex items-center justify-center'>
        <Loader2 className='animate-spin w-8 h-8 text-white/60' />
      </main>
    );
  }
  return (
    <div className="bg-white">
   <main className="min-h-screen p-6 md:p-10 md:items-center md:justify-center md:flex md:flex-col w-full mx-auto ">
    <div className="  max-w-md px-4 py-2 bg-slate-800 flex md:flex-col gap-4 rounded-lg ">
      <div className='flex items-center justify-between mb-8'>
      <button
            onClick={() => navigate('/notes')}
            className='text-white/60 hover:text-white transition-colors inline-flex items-center gap-2'
          >
            <ArrowLeft size={20} />
            Back to Notes
          </button>
      <h1 className="text-center md:text-4xl text-white font-bold font-serif">My Note</h1>
      </div>

       <form 
       onSubmit={handleSubmit}
       className='bg-secondary p-6 rounded-2xl border border-tertiary transition-all hover:shadow-md'>
         <ErrorAlert message={error} />
      <input 
        type="text" 
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full bg-slate-400 px-4 py-2 border border-slate-200 outline-none 
        md:rounded-md md:shadow-lg text-white text font-bold font-serif"
        />
        <textarea 
        placeholder='Start typing your note...'
        required
        value={content}
        type="Content"
        onChange={e => setContent(e.target.value)}
        rows={8}
        className=" w-full bg-slate-400 px-4 py-2 border border-slate-200 outline-none md:rounded-md
         md:shadow-lg text-white text-2xl font-serif font-bold">
        </textarea>

        <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-primary py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isSubmitting ? <Loader2 className='animate-spin' size={20} /> : <Save size={20} className='stroke-[3]' />}
            <span>{isSubmitting ? 'Saving Changes...' : 'Save Changes'}</span>
          </button>
          </form>
    </div>
   </main>
   </div>
  )
}

export default EditNote
