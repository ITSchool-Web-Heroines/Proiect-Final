import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
function ProductList () {

   const router = useRouter()
   const handleClick = () => {
      console.log('vezi cumparaturile')
      router.push('/skin')
   }
    return (
    <>
     <Navbar/>
         <h2> 
            <Link href="/product/Riduri">
               <a> Anti-aging </a>
            </Link> 
         </h2>
         <h2>  
            <Link href="/product/Imperfectiuni/">
               <a> Imperfectiuni </a>
            </Link>  
         </h2>
         <h2> 
            <Link href="/product/Pigmentare">
              <a> Pigmentare  </a>
            </Link> 
         </h2>
     <button onClick={handleClick} >
     Descopera noile Produse
     </button>
    </>
    )
}
export default ProductList