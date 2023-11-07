import PlaylistCards from './PlaylistCards';
import Header from './Header';
// import { useCookies } from 'next-client-cookies';
// import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import MenuBar from '../components/MenuBar';

export default async function Dashboard() {
  // const cookies = useCookies();
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  if (session && !session.error) {
    return (
      <div className='bg-white'>
        <Header />
        <PlaylistCards></PlaylistCards>
        <MenuBar />
      </div>
    );
  } else {
    return redirect('/login');
  }
}
