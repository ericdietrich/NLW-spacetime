import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto  = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree  = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'  })

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Uma cápsula do tempo construída com React, Next.js, Tailwind e Typescript',
}
 
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">  
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
