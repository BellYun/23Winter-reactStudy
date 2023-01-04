import React from 'react';

function CreateUser({ username, email, onChange, onCreate}){
    return(
        <div>
            <input
                name='username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
            />
            <input
                name='email'
                placeholder='이메일'
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;//여기서 상태관리를 CreateUser에서 하지 않고 부모 컴포넌트인 App에서 하게 하고,
//input의 값 및 이벤트로 등록할 함수들을 prop로 넘겨서 받아서 사용하게 함