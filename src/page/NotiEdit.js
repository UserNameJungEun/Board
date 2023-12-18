import{useParams, useNavigate} from 'react-router-dom';
import{useState} from 'react';

const NotiEdit = ({notiData,notiEdit}) => {
   const navigate = useNavigate();
   const {idx} =useParams();
   const [localData,setLocalData] =useState(notiData[idx]);
   console.log(localData)
   // const [editData,setEditData]=useState();
 
 const editCh = (e)=>{
      setLocalData({
         ...localData,
         [e.target.name] : e.target.value
      })
   
   }
   const editFunc = ()=>{
      notiEdit(localData)
      navigate('/list')
   }
   return (
      <div className="NotiEdit">
         <h1>NotiEdit</h1>
         <input type='text' name='title' value={localData.title} onChange={editCh} />
         <textarea name='content' value={localData.content} onChange={editCh}/>
         <button onClick={editFunc}>수정</button>
      </div>
   );
}


export default NotiEdit;