import styles from "@/styles/Home.module.css"

export default function Home() {
  let name = "Update 중입니다.💪"
  return (
    <>
      <div>
        <h2 className={styles.title}>홈화면🏡</h2>
        <p className={styles.titleSub}>
          {" "}
          <del>{name}</del>
        </p>
      </div>
    </>
  )
}
