import React from 'react'

import CardWrapper from './cardWrapper'

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel={'Welcome back!'}
            backButtonLabel={"Don't have an account?"}
            backButtonHref={'/auth/register'}
            showSocial
        >
            Login!
        </CardWrapper>
    )
}

export default LoginForm
