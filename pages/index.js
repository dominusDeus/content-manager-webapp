// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";

function Home({resources}) {
  return (
    <Layout>
      <ResourceHighlight
        resources={resources.slice(0, 2)}
      />
      <Newsletter />
      <ResourceList
        resources={resources.slice(2)}
      />
      <Footer />
    </Layout>
  )
}

//It's called every time you will visit the page. Executed on the server.
//Data is always freshs
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}


//It's called at build time only once.
// export async function getStaticProps() {
//   // const resData = await fetch("http://localhost:3000/api/resources");
//   // const data = await resData.json();

//   console.log("Calling get static props");

//   return{
//     props: {
//      resources: data
//     }
//   }
// }

export default Home