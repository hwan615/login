import Link from 'next/link';

export default function Home () {
  return (
    <>
      home page
      <button>
        <Link href="/login">login</Link>
      </button>
    </>
  )
}