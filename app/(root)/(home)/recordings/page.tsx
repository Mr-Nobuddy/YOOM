import CallLists from '@/components/CallLists'
import React from 'react'

const Recordings = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white text-base'>
      <h1 className='text-3xl font-bold'>
        Recordings
      </h1>

      <CallLists type='recordings'/>
    </section>
  )
}

export default Recordings