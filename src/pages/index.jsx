// import Main from '../components/Main'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>
        Home here, Go to <Link href="/login">Login</Link>
      </h1>
    </>
  )
}
