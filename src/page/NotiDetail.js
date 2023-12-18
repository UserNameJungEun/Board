import { useParams,Link,useNavigate } from "react-router-dom";

const NotiDetail = ({notiData,notiRemove}) => {
    const navigate =useNavigate();
    const {idx} = useParams();
    
    const removeFunc=() =>{
        notiRemove(notiData[idx].notiId);
        navigate('/list');

    }
   
  
    return ( 
        <div className="NotiDetail">
            <h1>NotiDetail</h1>
             <h4>{notiData[idx].notiId}</h4>
             <p>{notiData[idx].title}</p>
            <p>{notiData[idx].userName}</p>
            <p>{notiData[idx].content}</p>
            <div>
                <button><Link to={`/edit/${idx}`}>수정</Link></button>
                <button onClick={removeFunc}>삭제</button>
            </div>
        </div>
     );
}
 
export default NotiDetail;