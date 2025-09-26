import React from 'react'

import './styles.css'
import getAuthenticatedUser from '@/helpers/auth/get-authenticated-user'
import { Button } from '@/components/ui/button';

export default async function HomePage() {

  const user = await getAuthenticatedUser();


  return (
    <div className="home">
      <Button>test button</Button>
      test
      {user?.email}
    </div>
  )
}
