import styles from "@/styles/List.module.css"
import Image, { StaticImageData } from "next/image"
import coconut from "/public/coconut.png"
import pasta from "/public/pasta.png"
import tomato from "/public/tomato.png"
import { FC, useState } from "react"
interface Product {
  name: string
  price: number
  src: string | StaticImageData
  alt: string
  quantity: number
  count: number
}

const List = () => {
  const products: Product[] = [
    {
      name: "토마토",
      price: 7,
      src: "/tomato.png",
      alt: "토마토",
      quantity: 100,
      count: 0,
    },
    {
      name: "파스타",
      price: 12,
      src: "/pasta.png",
      alt: "파스타",
      quantity: 100,
      count: 0,
    },
    {
      name: "코코넛",
      price: 5,
      src: coconut,
      alt: "코코넛",
      quantity: 100,
      count: 0,
    },
  ]

  const [장바구니수량, 장바구니수량변경] = useState(0)
  const [담긴수량, 담긴수량변경] = useState([0, 0, 0])

  console.log(담긴수량)

  return (
    <div>
      <h2 className={styles.title}>상품목록</h2>

      {products.map((product, index) => {
        return (
          <div className={styles.product} key={index}>
            <Image width="200" height="200" src={product.src} alt="" />
            <h4 className={styles.productName}>{product.name}</h4>
            <p className={styles.productPrice}>${product.price}</p>
            <div className={styles.counter}>
              <Counter
                index={index}
                담긴수량={담긴수량}
                담긴수량변경={담긴수량변경}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List

interface ICounter {
  index: number
  담긴수량: number[]
  담긴수량변경: (담긴수량: number[]) => void
}

export const Counter: FC<ICounter> = ({ index, 담긴수량, 담긴수량변경 }) => {
  const plus = (index: number) => {
    const copy담긴수량 = [...담긴수량]
    copy담긴수량[index]++
    담긴수량변경(copy담긴수량)
  }
  const minus = (index: number) => {
    if (담긴수량[index] < 1) {
      return
    }
    const new담긴수량 = [...담긴수량]
    new담긴수량[index]--
    담긴수량변경(new담긴수량)
  }

  return (
    <>
      <button onClick={() => minus(index)}>-</button>
      <span>{담긴수량[index]}</span>
      <button onClick={() => plus(index)}>+</button>
    </>
  )
}
