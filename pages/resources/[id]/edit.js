import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm"
import axios from "axios";
import router from "next/router";


const ResourceEdit = ({resource})=>{

  const updateResource = (formData) => {
    // alert(JSON.stringify(formData));
    axios.patch(`/api/resources`, formData)
    .then(res=>{ alert("Data has been updated"); router.push("/") })
    .catch(err=>{alert(err?.response?.data)});
  }

  return(
    <Layout>
      <div className= "container">
        <div className= "columns">
          <div className= "column is-8 is-offset-2">
            <ResourceForm
              initialData= {resource}
              onFormSubmit= {updateResource}
            />
          </div>
        </div>  
      </div>
    </Layout>
  )

}

export async function getServerSideProps({params}) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data
    }
  }
}

export default ResourceEdit;