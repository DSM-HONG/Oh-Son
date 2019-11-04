import React from 'react';
import './writing.css';

const Writing = () => {
    return(
        <React.Fragment>
            <div className="writing-main-container">
                <div className="writing-top-wrapper">
                    <input id="Post" placeholder="글 내용을 입력하세요"></input>
                </div>
                <div className="writing-bottom-wrapper">
                    <div className="add-photo">사진/동영상 추가</div>
                    <div className="write-post">글 쓰기</div>
                </div>
            </div>
        </React.Fragment>  
    );
}

export default Writing;