import React from 'react'
import { User2 } from 'lucide-react';

const SignIn = () => {
  return (
    <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
    <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
      <User2 className='text-gray-500 w-5 h-5' />
    </div>
    <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
  </a>
  )
}

export default SignIn