import React from 'react'
import nlwLogo from '../../assets/nlw-spacetime-logo.svg';
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='space-y-5'>

    <Image src={nlwLogo} alt='NLW SpaceTime' />

    <div className='max-w-[420px] space-y-1'>
      <h1 className='font-bold text-5xl leading-tight text-gray-50'>Sua cápsula do tempo</h1>
      <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
    </div>

    <a className='inline-block rounded-full bg-green-500 uppercase px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600 transition' href="">Cadastrar Lembrança</a>
  </div>
  )
}

export default Hero