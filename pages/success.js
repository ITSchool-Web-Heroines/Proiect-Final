import Layout from '../components/Layout'
import Check from '../components/Check'
import css from '../styles/Home.module.css'

export default function Success () {
   return (
    <Layout>

    <div className={css.container}>
        <main>
            <Check/>
        </main>
    </div>

    </Layout>
    )
}

