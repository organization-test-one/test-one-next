import { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="bg-green-500" >
      <p>Página index</p>
      <Link href="/admin/users">
        <a className="cursor-pointer">Ir a admin usuarios</a>
      </Link>
    </div>
  )
}

export default Home
