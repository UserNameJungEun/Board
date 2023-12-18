import{Link} from "react-router-dom"
import{useState,useRef} from 'react'

const NotiList = ({ notiData }) => {

const [count,setCount] =useState(5);
const btn = useRef();
const moreBTN=()=>{
    if(count<= notiData.length){
     setCount(count + 3)   
    }else{
        console.log(btn.current)
        // btn.current.style.display='none';
        btn.current.style.setProperty('display','none');
    }
    
}    
return (
        <div className="NotiList">
            <h1>NotiList</h1>
            <ul>
            {notiData.slice(0,count).map((notiD)=>
                <li key={notiD.notiId}>{notiD.notiId} 번 <Link to={`/list/${notiD.notiId}`}>{notiD.title}</Link></li>

            )}

                {/* <li>
                    {notiData.title}
                </li> */}
            </ul>
            <button ref={btn} onClick={moreBTN}>더보기(+5)</button>
        </div>
    );
}
NotiList.defaultProps={
    notiData:[]
}

export default NotiList;

