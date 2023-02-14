import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleClick = () => {
    gtag("event", "click", {
      event_category: "Button",
      event_label: "Let's Go"
    });
  };
  
  return (
    <>
      <Head>
        <title>Testing Google Analytics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-[15%]'>
        <h1 className={`${inter} flex text-4xl justify-center font-bold`}>
          Testing Google Analytics in<span className='text-[#0070F3]'>&nbsp;Next JS.</span>
        </h1>
        <div className='flex justify-center'>
          <Link id="letsgo" href="/form">
            <button onClick={handleClick()} className='px-10 py-3 bg-blue-400 border-2 border-b-[6px] border-solid border-black rounded-lg mt-10 active:border-b-[2px] active:mt-[44px]'
            >
              Let&#39;s Go
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
