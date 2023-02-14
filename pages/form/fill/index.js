import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Fill() {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Fill Form</title>
      </Head>
      <div className='w-[35%] mt-[7%] bg-[#F2F7F5] border-2 border-black border-b-[6px] border-r-[6px] rounded-md'>
        <form className='flex flex-col px-5 py-3'>
          <label className='mb-2' for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Marcus Rashford' className='p-2 ring-1 ring-slate-300 rounded-md ring-solid bg-[#F8FAFC] mb-3 pl-2 focus:outline-yellow-400' />
          <label className='mb-2' for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Marc' className='p-2 ring-1 ring-slate-300 rounded-md ring-solid bg-[#F8FAFC] mb-3 pl-2 focus:outline-yellow-400' />
          <label className='mb-2' for="address">Address:</label>
          <input type="text" id="address" name="address" placeholder='Jl. Lightning Rayden' className='p-2 ring-1 ring-slate-300 rounded-md ring-solid bg-[#F8FAFC] mb-3 pl-2 focus:outline-yellow-400' />
        </form>
      </div>
      <div className='flex gap-3'>
        <Link href="/form">
          <button className='px-10 py-3 border-2 border-b-[6px] border-solid border-[#183153] rounded-lg mt-6 active:border-b-[2px] active:mt-[26px]'>
            Back
          </button>
        </Link>
        <button id='submit-form' className='px-10 py-3 bg-blue-400 border-2 border-b-[6px] border-[#183153] rounded-lg mt-6 active:border-b-[2px] active:mt-[26px]'>
          Submit
        </button>
      </div>
    </div>
  )
}
