import { useRouter } from 'next/router'

function ProductDetail () {
    const router = useRouter()
    const productId = router.query.productId
    return (
      <h1> Cele mai bune produse pentru  {productId} </h1>
    )
}
export default ProductDetail