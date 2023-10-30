import ProfileHeader from './ProfileHeader';
import UserInfo from './UserInfo';
import UserPlaylists from './UserPlaylists';
import SignOut from './Signout';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import MenuBar from '../components/MenuBar';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }
  return (
    <div className='bg-white'>
      <ProfileHeader />
      <UserInfo />
      <UserPlaylists />
      <SignOut />
      <MenuBar />
    </div>
  );
}
