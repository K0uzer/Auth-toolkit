'use client'

import React from 'react'
import Link from 'next/link'

import { Button } from '@components/ui/button'

interface BackButtonProps {
    href: string
    label: string
}

const backButton: React.FC<BackButtonProps> = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button size="sm" variant="link" className="font-normal w-full">
            <Link href={href}>{label}</Link>
        </Button>
    )
}

export default backButton
