'use client'
import React from 'react'

type Props = {
    error: string
}

const UserError = ({error}: Props) => {
	return <div className='h-[90vh] flex items-center justify-center text-4xl uppercase flex-wrap'>{error}</div>
}

export default UserError
