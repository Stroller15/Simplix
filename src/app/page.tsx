import Image from 'next/image'
import {ModeToggle} from '@/components/DarkMode'
export default function Home() {
  return (
    <main className='text-black' >
     hi my name is jack
    <ModeToggle/>
    </main>
  )
}
