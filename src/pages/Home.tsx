
import { Link } from 'react-router-dom'
import ProductCard from '../components/Product-card'


const Home = () => {

  const addToCartHandler = () => {

  }
  return (
    <div className='home'>
      <section>
      </section>
      <h1>Latest Products 
        <Link to={"/more"} className='findmore'> More</Link>
      </h1>
      <main >
        <ProductCard productId='gdhgfhfd' name='gggg' photo='https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg' price={46544}  stock={784} handler={addToCartHandler}/>
      </main>
    </div>
  )
}

export default Home
