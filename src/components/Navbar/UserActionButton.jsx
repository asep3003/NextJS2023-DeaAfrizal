import Link from 'next/link';
import { authUserSession } from '@/libs/auth-libs';

const UserActionButton = async() => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "signout" : "signin";

  return (
    <div className="flex justify-between gap-2">
      {
        user && (<Link href="/users/dashboard" className="py-1">Dashboard</Link>)
      }
      <Link href={`/api/auth/${actionURL}`} className="bg-color-dark text-color-accent py-1 px-12 inline-block">{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton