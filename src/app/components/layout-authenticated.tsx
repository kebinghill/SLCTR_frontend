// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';

// export default function LayoutAuthenticated(props) {
//   const [profile, setProfile] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   async function fetchProfile() {
//     const res = await fetch(`${process.env.BE_API_URL}/auth/test`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + localStorage.getItem('token'),
//       },
//     });
//   }
// }
