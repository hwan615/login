import { useRouter } from 'next/router';

export default function userPage () {
  const router = useRouter();
  console.log(router.query.id);

  return <>
    helllo
  </>
}
