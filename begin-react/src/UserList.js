import React, { useEffect } from "react";

function User({user,onRemove,onToggle}){//User 컴포넌트에서 삭제를 할 수 있게 
    useEffect(()=>{
        console.log(user);
    });
    //useEffect 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)을 넣는다
    //useEffect에서는 함수를 반환 할 수 있는데 이를 cleanup함수라고 부릅니다.
    //useEffect에 대한 뒷정리를 해준다고 이해하면됨. deps가 비어있는 경우에는 컴포넌트가 사라질때
    return(
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color : user.active ? 'green' : 'black'
                }}//<b>컴포넌트에 있을떄 cursor가 'pointer'이고 user.active의 값에 따라 색도 정해진다.
                onClick={()=> onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick = {() => onRemove(user.id)} >삭제</button>
        </div>
    );
}

function UserList({users,onRemove,onToggle}){//User 컴포넌트에서 삭제를 할 수 있게
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove ={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);