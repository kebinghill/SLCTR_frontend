import PrivatePlaylists from './PrivatePlaylists';
import Header from '../dashboard/Header';
import SignOut from './Signout';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }
  return (
    <div className='bg-white h-[100vh]'>
      <Header />
      <PrivatePlaylists />
      <SignOut />
    </div>
  );
}
