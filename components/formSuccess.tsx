import React from 'react'

import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
    message?: string
}

const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null
    return (
        <div className="flex bg-emerald-500/15 p-3 items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircledIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
}

export default FormSuccess
