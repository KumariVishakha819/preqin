import {useState, useEffect } from "react";
import {Link} from "react-router-dom"
function InvestorsTable(){

    const[investorList,setInvestorList ]=useState([])
    const [loading, setLoading] = useState(true);
    async function fetchData(){
        const response = await fetch('http://127.0.0.1:8000/api/investors');
        const data= await response.json()
        console.log(data)
        setLoading(false)
        setInvestorList(data);
        
    }
  
    
    function tableData(){
       return investorList.map((investor,index)=> (<tr key={investor.firm_id}>
     <th scope="row">{index}</th> 
     <Link to={`/${investor.firm_id}`} > <td>{investor.firm_id}</td> </Link>
      <td>{investor.firm_name}</td>
      <td>{investor.firm_type}</td>
      <td>{investor.date_added}</td>
      <td>{investor.address}</td>
     
    </tr>
     ))
    }
    useEffect(()=>{
      fetchData()
      
    },[loading])
    if (loading) {
        return <div>Loading...</div>;
      }
    else{
    return(<div>
    
<table className="table">
  <thead className="table-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirmId</th>
      <th scope="col">FirmName</th>
      <th scope="col">Type</th>
      <th scope="col">DateAdded</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {tableData()}
  </tbody>
</table>
</div>);
}
}
export default InvestorsTable