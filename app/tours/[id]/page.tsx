import React from 'react'
import tourImg from '@/images/tour.jpg';
import Image from 'next/image';
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({params}:{params:{id:string}}) {
  return (
    <div >
      <h1 className='text-4xl'>ID: {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        {/* Local Image */}
        <div>
          <h2>Local Image</h2>
          <Image src={tourImg} alt='tour'priority width={400} height={400}  className='w-48 h-48 object-cover rounded mt-4'/>
        </div>
        {/* Remote Image */}
        <div>
          <h2>Remote Image</h2>
          <Image src={url} alt='tour' priority width={400} height={400} className='w-48 h-48 object-cover rounded'/>
        </div>
      </section>
    </div>
  )
}

export default page