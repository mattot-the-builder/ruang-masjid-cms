import React from 'react'

import './styles.css'
import getAuthenticatedUser from '@/helpers/auth/get-authenticated-user'
import { Button } from '@/components/ui/button';

function Hero() {
    return <div className="w-full h-[36rem] bg-red-100"></div>
}

export default async function HomePage() {

    const user = await getAuthenticatedUser();

    return (
        <div className="home">
            <Hero />
            <Button>test button</Button>
            test
            {user?.email}
        </div>
    )
}
