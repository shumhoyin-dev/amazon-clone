import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";


export default function Home({products}) {


    // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      {/* Header */}
      <Header/> 
 
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner/>
        {/* Product Feed */}
        <ProductFeed products={products}/>
      </main>
      {/* ---- ---- */}
      <footer className='text-white'>
        <div className='text-center mx-auto py-3 bg-pink-500 cursor-pointer hover:bg-pink-400' onClick={scrollToTop}>
          <span className='block py-3 font-semibold'>Back to top</span>
        </div>

      </footer>
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then((res)=> res.json());

  return {
    props:{
      products
    }
  }
}