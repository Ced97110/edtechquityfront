'use client'

import { useAuth, useUser } from "@clerk/nextjs";
import { getDefaultResultOrder } from "dns/promises";
import { useEffect, useState } from "react";


const url = process.env.NEXT_PUBLIC_BACKEND_URL;

function DashBoard() {

  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const getUser = async () => {

      if (isLoaded && isSignedIn && user) {
        try {
          const token = await getToken();
          const clerkId = user.id;
          const email = user.emailAddresses[0].emailAddress;
          const username = user.username;
          const userId = "430de2ae-f975-4146-a9d6-6c4ebc32d7f2";
          

          const response = await fetch(`${url}user/${userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();

          console.log(result.data)
          console.log(result);
        } catch (error) {
          console.error(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    getUser();

   

  }, [isLoaded, isSignedIn, user, getToken]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>hello</div>
  );
}

export default DashBoard;
