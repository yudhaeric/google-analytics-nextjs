import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-[15%]'>
        <h1 className={`${inter} flex text-4xl justify-center font-bold`}>
          Testing Google Analytics in<span className='text-[#0070F3]'>&nbsp;Next JS.</span>
        </h1>
        <div className='flex justify-center'>
          <Link href="/form">
            <button className='px-10 py-3 bg-blue-400 border-2 border-b-[6px] border-solid border-black rounded-lg mt-10 active:border-b-[2px] active:mt-[44px]'
            onClick="ga('send', 'event', 'category', 'action', 'label');"
            >
              Let&#39;s Go
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
