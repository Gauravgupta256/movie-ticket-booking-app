import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({dateTime, id}) => {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(null)

    const onBookHandler = ()=>{
        if(!selected) {
            return toast('Please select a date')
        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0,0)
    }
  return (
   <div id='dateSelect' className='pt-30'>
  <div className='relative flex flex-col gap-6 p-8 bg-primary/10 border border-primary/20 rounded-lg'>
    <BlurCircle top='-100px' left='-100px' />
    <BlurCircle top='100px' right='0px' />

    <p className='text-lg font-semibold'>Choose Date</p>

    <div className='flex items-center gap-6 text-sm mt-5'>
      <ChevronLeftIcon width={28} />
      <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
        {Object.keys(dateTime).map((date) => (
          <button
            onClick={() => setSelected(date)}
            key={date}
            className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
              selected === date ? 'bg-primary text-white' : 'border border-primary/70'
            }`}
          >
            <span>{new Date(date).getDate()}</span>
            <span>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
          </button>
        ))}
      </span>
      <ChevronRightIcon width={28} />
    </div>

    {/* Right Center Book Now Button */}
    <button
      onClick={onBookHandler}
      className='absolute right-8 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-all cursor-pointer'
    >
      Book Now
    </button>
  </div>
</div>
  )
}

export default DateSelect