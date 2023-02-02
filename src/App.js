import './App.scss';
import {useEffect, useState} from "react"
import Details from './Components/Details';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'

function App() {
    const [list,setList]=useState([1,2,3,4]);
    const [spiner,setSpiner]=useState(false)
    const [paging,setPaging]=useState(0)
    const [data, setData] = useState([]);
    const [index, setIndex] = useState();
    const [check,setCheck]=useState(false);
    async function featchdata() {
        const info = await fetch("https://jsonplaceholder.typicode.com/users");
        const responce = await info.json();
        setData(responce);
        setSpiner(false)

    }

    useEffect(() => {
      setSpiner(true)
        featchdata()
    }, [])
    
function passdata(ind){
console.log(ind)
setIndex(ind)
setCheck(true)
}

function delet(ifo){
  setCheck(ifo)
}
function callingdata(){
  return data.slice(paging*3,paging*3 + 3);
}

    return (
        <div className="App">
        
            <header className="header"></header>
{
  spiner? <div className="loader-container">
  <div className="spinner"></div>
</div>:

            <section className="section">
            <Details passing={data[index]} check={check} delet={delet}/>
                {callingdata().map((item, i) => {
                    return (
                        <div key={i} className="card">
                            <div className="child">{item.id}){item.name}</div>
                            <div className="child">
                                <h3>Contact</h3>
                                <p>{item.email}</p>
                            </div>
                            <div className="child">
                                <h3>City</h3>
                                <p>{item.address.city}</p>
                            </div>
                            <div className="child">
                                <h3>Street</h3>
                                <p>{item.address.street}</p>
                            </div>
                            <div className="child">
                                <button className="button" onClick={()=>passdata(i)}>View details</button>
                            </div>
                        </div>
                    )
                })
}
             <div className="pagging-container">
              <div className="box"> <FontAwesomeIcon icon={faAngleLeft} onClick={()=>{paging<=0?setPaging(3):setPaging(paging-1)} }/></div>
              <div className="box">
                 {
                  list.map(
                    (no,i)=>{
                      return(
                        <span onClick={()=>setPaging(i)} className={paging===i?`list-nomber`:null} key={i}>{no}</span>
                      )
                    }
                  )}   
              
              </div>
              <div className="box"> <FontAwesomeIcon icon={faAngleRight}  onClick={()=>{paging>=3?setPaging(0):setPaging(paging+1)}}/></div>
             </div>
            </section>
          }
        </div>
    );
}

export default App;
