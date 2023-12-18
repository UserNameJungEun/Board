import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const NotiWrite = ({ notiCreate }) => {
    const navigate = useNavigate();
    const notiTitle = useRef();
    const notiName = useRef();
    const notiContent = useRef();
    const [notiValue, setNotiValue] = useState({
        title: '',
        userName: '',
        content: ''
    })
    const { title, userName, content } = notiValue;


    // <input type='text' name="title" value={title} onChange={ } placeholder="제목입력" />
    const changeValue = (e) => {
        setNotiValue({
            ...notiValue,
            [e.target.name]: e.target.value
        })

    }
    const notiSave = () => {
        if (title.length < 3) {
            // 제목의 길이가 2보다 작으면 실행되라
            alert('제목을 더 작성하세요');
            notiTitle.current.focu();
            return;

        }
        if (userName.length < 3) {
            // 제목의 길이가 2보다 작으면 실행되라
            alert('제목을 더 작성하세요');
            notiName.current.focu();
            return;

        }
        if (content.length < 3) {
            // 제목의 길이가 2보다 작으면 실행되라
            alert('내용을 확인하세요');
            notiContent.current.focu();
            return;

        }
        notiCreate(title, userName, content);
        alert('저장완료')
        navigate('/list')

    }

    const notiReturn = () => {
        navigate('/list')

    }

    return (
        <div className="NotiWrite">
            <h1>NotiWrite</h1>
            <input ref={notiTitle} type='text' name='title' value={title} onChange={changeValue} placeholder="제목입력" />
            <input ref={notiName} type='text' name='userName' value={userName} onChange={changeValue} placeholder="이름입력" />
            <textarea ref={notiContent} name="content" value={content} onChange={changeValue} placeholder="내용을 입력하세요"></textarea>
            <button onClick={notiSave}>저장</button>
            <button onClick={notiReturn}>취소</button>
        </div>
    );
}






export default NotiWrite;