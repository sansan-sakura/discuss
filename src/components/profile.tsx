"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session?.data?.user) {
    return <div>User is signed in{JSON.stringify(session?.data?.user)}</div>;
  } else {
    return <div>user is Not signed in </div>;
  }
}
