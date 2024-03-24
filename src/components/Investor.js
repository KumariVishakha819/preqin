import { useParams } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import {Link} from 'react-router-dom'
function Investor(){
    const { id } = useParams();
    console.log(id)
    const [data,setData]=useState([])
    const[asset,setAsset]=useState("PD")
    async function fetchData(){
        const response = await fetch('http://127.0.0.1:8000/api/investor/commitment/'+asset.toLowerCase()+"/"+id);
        const data= await response.json()
        console.log(data)
        setData(data)
        
        
    }
  useEffect(()=>{
    fetchData()
    return( setData([]))
  },[asset])

  function handleSelectChange(event){
    setAsset(event.target.value);
  }

  function tableData(){
    return data.map((dataElement,index)=> (<tr key={dataElement.id}>
        <th scope="row">{index}</th> 
         <td>{dataElement.id}</td> 
         <td>{dataElement.asset_class}</td>
         <td>{dataElement.firm_id}</td>
         <td>{dataElement.currency}</td>
         <td>{dataElement.amount}</td>
        
       </tr>
        ))
  }
return(
   
    
<div>
<Link to={"/"} className='float-start'>Home Page</Link>
<label htmlFor="AssetClasses" className='table-primary'>AssetClasses: </label>

<select name="AssetClasses" id="AssetClasses" onChange={handleSelectChange} selected={asset}>
  <option value="PD">PD(Private Debt)</option>
  <option value="RE"> RE(Real Estate)</option>
  <option value="INF">INF(Infrastructure)</option>
  <option value="NR">NR(Natural Resources)</option>
  <option value="HF">HF(Hedge Funds)</option>
</select>

<table className="table">
  <thead className="table-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Asset Class</th>
      <th scope="col">Firm Id</th>
      <th scope="col">Currency</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    {tableData()}
  </tbody>
</table>
</div>
)
}
export default Investor