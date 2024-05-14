import CreateForm from '@/components/create-form'
import React from 'react'

type Props = {}

const CreteContactPage = (props: Props) => {
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>Add New Contact</h1>
        <CreateForm/>
    </div>
  )
}

export default CreteContactPage