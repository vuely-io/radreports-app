import axios from "axios";

export default async function Patientid(){
  const response = await axios.get(process.env.REACT_APP_API+'/Patient');
 // console.log(response.data.entry[0].resource.name[0].given[0]);
  const data = response.data.entry.map((item)=>({
    id:item?.resource?.id,
    lastname:item?.resource?.name[0]?.family,
    firstname:item?.resource?.name[0]?.given[0],
  }));
 
  return data;
}