import React from 'react'
import {LoginForm} from './Form'

const page = () => {
  return (
    <section className='container h-screen flex items-center justify-center'>
        <div className='w-full md:max-w-[600px] border bg-white p-4 md:p-8 text-sm md:text-lg m-auto rounded-xl'>
            <LoginForm />
        </div>
    </section>
  )
}

export default page