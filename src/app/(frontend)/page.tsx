import React from 'react'

import './styles.css'
import getAuthenticatedUser from '@/helpers/auth/get-authenticated-user'

export default async function HomePage() {

  const user = await getAuthenticatedUser();


  return (
    <div className="home">
      test
      {user?.email}
    </div>
  )
}
