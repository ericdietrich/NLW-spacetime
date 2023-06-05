import {User2} from 'lucide-react';
import nlwLogo from '../assets/nlw-spacetime-logo.svg';
import Image from 'next/image'

export default function Home() {
  return <main className="grid grid-cols-2 min-h-screen">
    {/*Left*/}
    <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover" >
      {/*Blur */}
       <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-70 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>
       {/*Stripes */}
       <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

      {/**Sign in */}
       <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
            <User2 className='text-gray-500 w-5 h-5' />
          </div>
          <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
       </a> 

      {/*SpaceTime*/}
      <div className='space-y-5'>

        <Image src={nlwLogo} alt='NLW SpaceTime'/>

        <div className='max-w-[420px] space-y-1'>
          <h1 className='font-bold text-5xl leading-tight text-gray-50'>Sua cápsula do tempo</h1>
          <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
        </div>

        <a className='inline-block rounded-full bg-green-500 uppercase px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600 transition' href="">Cadastrar Lembrança</a>
      </div>
    </div>

    {/*Right*/}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover"> 
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a{' '}<a href="" className="underline hover:text-gray-50 transition-colors">criar agora!</a></p>
      </div>
    </div>
  </main>
}
