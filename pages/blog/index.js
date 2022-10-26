import Navbar from '../../components/navbar'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function Blog() {
    return (

        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.title}> Lifestyle </h1>
            <div className={styles.grid}>
                <h2> Ce spun astrele despre relatia dintre Kate Middleton si Meghan Markle: se vor intelege vreodata?</h2>
                <Image
                    src={"/lif.jpg"}
                    alt="life"
                    width={800}
                    height={500}
                />
            </div>
        </div>

    )
}
export default Blog