import React from 'react'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string
}

const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null
    return (
        <div className="flex bg-destructive/15 p-3 items-center gap-x-2 text-sm text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
}

export default FormError
