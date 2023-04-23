import styles from "@/styles/List.module.css"
import Image, { StaticImageData } from "next/image"
import coconut from "/public/coconut.png"
import pasta from "/public/pasta.png"
import tomato from "/public/tomato.png"

const List = () => {
  interface Product {
    name: string
    price: number
    src: string | StaticImageData
    alt: string
  }

  const products: Product[] = [
    { name: "토마토", price: 7, src: "/tomato.png", alt: "토마토" },
    { name: "파스타", price: 12, src: "/pasta.png", alt: "파스타" },
    { name: "코코넛", price: 5, src: coconut, alt: "코코넛" },
  ]

  return (
    <div>
      <h2 className={styles.title}>상품목록</h2>

      {products.map((product, index) => {
        return (
          <div className={styles.product} key={index}>
            <Image width="200" height="200" src={product.src} alt="" />
            <h4 className={styles.productName}>{product.name}</h4>
            <p className={styles.productPrice}>${product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List
