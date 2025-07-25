import Link from 'next/link'
import React from 'react'
import { isAuthenticated } from '../../../lib/actions/auth.action'
import { redirect } from 'next/navigation'

const Rootlayout = async ({children}:{children:React.ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated()
  if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="" width={38} height={32}/>
        <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
      </nav>
    {children}
    </div>
  )
}

export default Rootlayout