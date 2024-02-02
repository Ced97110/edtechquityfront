'use client'

import React from 'react'
import { useSession,signIn, signOut } from 'next-auth/react'



 const Login = () => {

  const {data:session} = useSession()

   if (session) {
     return (
       <div>
         Welcome, {session.user?.email}
         <button onClick={()=> signOut()}>Sign In</button>
       </div>
     )
   } else {
     return (
       <div className='mt-[90px]'>
           <p>You are not Sign in</p>
          <button className='px-4 py-4 bg-ciel text-white' onClick={()=> signIn()}>Sign In</button>
       </div>
      
     )
   }


}

export default Login