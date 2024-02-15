'use client'


import { currentUser, useAuth, useUser } from '@clerk/nextjs'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'



const url = process.env.NEXT_PUBLIC_BACKEND_URL;

function NewUser() {

  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const createNewUser = async () => {

      if (isLoaded && isSignedIn && user) {
        try {
          const token = await getToken();
          const clerkId = user.id;
          const email = user.emailAddresses[0].emailAddress;
          const username = user.username;
          

          const response = await fetch(`${url}user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              clerkId,
              email,
              username,
              
            })
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    createNewUser();

   

  }, [isLoaded, isSignedIn, user, getToken]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>Welcome, user created successfully!</div>
  );
}

export default NewUser;
