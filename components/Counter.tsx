/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
        <p className='text-5xl font-bold'>{count}</p>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 py-2 px-4 mt-4 rounded text-white'> increment </button>
    </div>
  )
}

export default Counter;