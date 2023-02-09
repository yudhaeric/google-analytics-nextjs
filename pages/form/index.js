import React from 'react';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Form() {
  return (
    <div className='mt-[15%]'>
        <h1 className={`flex text-4xl justify-center font-bold`}>
          Fill This Form & Check in Your <span className='text-[#E1A010]'>&nbsp;Google Analytics.</span>
        </h1>
        <div className='flex justify-center gap-5'>
          <Link href="/">
            <button className='px-10 py-3 border-2 border-b-[6px] border-solid border-[#183153] rounded-lg mt-10 active:border-b-[2px] active:mt-[44px]'>
              Back to Home
            </button>
          </Link>
          <button className='px-10 py-3 bg-blue-400 border-2 border-b-[6px] border-solid border-[#183153] rounded-lg mt-10 active:border-b-[2px] active:mt-[44px]'>
            Fill This Form
          </button>
        </div>
    </div>
  )
}
