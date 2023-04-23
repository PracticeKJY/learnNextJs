// import styles from "@/styles/Home.module.css"

import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <Link href="/">Home</Link>
        <Link href="/list">목록</Link>
        <Link href="/cart">장바구니</Link>
      </nav>
    </header>
  )
}
export default Header
