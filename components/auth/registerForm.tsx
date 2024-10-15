'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
} from '@components/ui/form'
import { RegisterSchema } from '@schemas/index'
import CardWrapper from '@components/auth/cardWrapper'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import FormError from '@components/formError'
import FormSuccess from '@components/formSuccess'
import { register } from 'actions/register'

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    })
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            register(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <CardWrapper
            headerLabel={'Create an account'}
            backButtonLabel={'Already have an account?'}
            backButtonHref={'/auth/login'}
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="John Doe"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="ivan.doe@yandex.ru"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm
