import styles from "@/styles/Cart.module.css"

interface productInfo {
  name: string
  price: number
  count: number
}

interface CartItemProps {
  product: productInfo
  index: number
}

const Cart = () => {
  const productInfo: productInfo[] = [
    { name: "토마토", price: 7, count: 10 },
    { name: "파스타", price: 12, count: 5 },
    { name: "코코넛", price: 5, count: 2 },
  ]

  const { totalPrice, totalCount } = productInfo.reduce(
    (acc, cur) => {
      return {
        totalPrice: acc.totalPrice + cur.price * cur.count,
        totalCount: acc.totalCount + cur.count,
      }
    },
    { totalPrice: 0, totalCount: 0 },
  )

  return (
    <div>
      <h2 className={styles.title}>장바구니</h2>
      {productInfo.map((product, index) => {
        return <CartItem product={product} key={index} index={index} />
      })}
      <div className={styles.cartItem}>
        <p>합계 : </p>
        <p>${totalPrice}</p>
        <p>{totalCount}개</p>
      </div>
    </div>
  )
}

export default Cart

const CartItem = ({ product, index }: CartItemProps) => {
  return (
    <div className={styles.cartItem} key={index}>
      <p>{product.name}</p>
      <p>${product.price * product.count}</p>
      <p>{product.count}개</p>
    </div>
  )
}
