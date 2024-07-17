import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full item-center justify-center py-10'>
        <SignUp/>
    </main>
  )
}

export default SignUpPage