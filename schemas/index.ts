import * as z from 'zod'

export const LoginSchema = z.object({
    email: z
        .string({
            invalid_type_error: 'Must be a string',
        })
        .email({
            message: 'Please enter a valid email address.',
        }),
    password: z.string().min(6, {
        message: 'Password is required',
    }),
})
