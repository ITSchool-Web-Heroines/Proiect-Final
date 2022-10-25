import Layout from '../components/Layout'
import Success from '../components/Check'
import css from '../styles/Home.module.css'

export default function Check() {
    return (
      <Layout>
  
         <div className={css.container}>
          <Success/>
      </div>
  
      </Layout>
     
    )
}

