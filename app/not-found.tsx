import Image from 'next/image'
import Link from 'next/link'
import StoicLogo from '@/public/stoicWhite.webp'

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center gap-3 max-w-7xl mx-auto text-center p-4'>
      <Image alt='Stoic Logo' src={StoicLogo} placeholder='blur' className='w-16 h-20 mb-2'/>
      <h2 className='text-7xl font-medium leading-[3rem]'>404</h2>
      <h3 className='text-2xl font-medium'>Page not found</h3>
      <Link href="/">
        <button className="border-neutral-500 border-2 active:scale-95 p-2 rounded-lg hover:bg-neutral-700 transition duration-200 font-medium" >Take me back to the homepage</button>
      </Link>
    </div>
  )
}