import Layout from "components/Layout";
import { loadGetInitialProps } from "next/dist/shared/lib/utils"


const MyTest = (props) => {
    return (
        <>
            <h1>My test Component</h1>
            {props.children}
        </>
    )
}

function About() {
    return (
        <>
        <Layout>
            <h1>I am bout page</h1>
        </Layout>
        </>
    )
}

export default About