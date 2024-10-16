'use server'

import { z } from 'zod'
import { AuthError } from 'next-auth'

import { LoginSchema } from '@schemas/index'
import { DEFAULT_LOGIN_REDIRECT } from 'routes'
import { signIn } from 'auth'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) return { error: 'Invalid fields!' }

    const { email, password } = validatedFields.data

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSigning':
                    return { error: 'Invalid credentials' }
                default:
                    return { error: 'Something went wrong!' }
            }
        }

        throw error
    }
}
