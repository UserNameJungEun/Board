import './App.css';
import { useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from "./page/NotFound";
import NotiEdit from "./page/NotiEdit";
import NotiWrite from "./page/NotiWrite";
import NotiList from "./page/NotiList";
import NotiDetail from "./page/NotiDetail";
import MainPage from "./page/MainPage";


function App() {

    const [notiData, setNotiData] = useState([]);
    const dataId = useRef(0);

    const getData = async()=> {
      const res=await fetch('https://jsonplaceholder.typicode.com/comments').then(
        (res)=>res.json()

      )


      const initData = res.slice(0,5).map((data)=>{
        return{
          title : data.name,
          userName : data.email,
          content : data.body,
          createDate : new Date().getTime(),
          notiId:dataId.current++

        }
      })
      setNotiData(initData);
    }


  const notiCreate = (title,userName,content) => {
    const createDate = new Date().getTime();
    const NewItem = {
      title,
      userName,
      content,
      createDate,
      notiId:dataId.current

    }
    dataId.current +=1;
    setNotiData([...notiData,NewItem]);
  }
const notiEdit = (localData)=>{
  console.log(localData)
  setNotiData(notiData.map((data)=>
  data.notiId === localData.notiId ? { ...data, title : localData.title, content : localData.content} : data
  ))
}
const notiRemove = (id) =>{
  setNotiData(notiData.filter((data)=> data.notiId !== id))

}





  return (
    <div className="App">
      <header>
        <h1  className='header_LOGO'>Notice Pages</h1>
        <h5></h5>
        <nav className='header_nav'>
          <ul>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/list">공지사항 리스트</Link></li>
            <li><Link to="/write">공지사항 작성</Link></li>
            {/* <li><Link to="/edit">공지사항 수정</Link></li> */}
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path='/'element={<MainPage />}/>
          <Route path='/list' element={<NotiList notiData={notiData} />}></Route>
          <Route path='/list/:idx' element={<NotiDetail notiData={notiData} notiRemove={notiRemove} />} />
          <Route path='/write' element={<NotiWrite notiCreate={notiCreate} />}></Route>
          <Route path='/edit/:idx' element={<NotiEdit notiData={notiData} notiEdit={notiEdit} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>


    </div>
  );
}

export default App;
