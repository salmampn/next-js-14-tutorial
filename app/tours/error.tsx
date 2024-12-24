'use client';

import React from 'react'

function error({error}:{error:Error}) {
    console.log(error);
    
  return (
    <span>there was an error...</span>
  )
}

export default error