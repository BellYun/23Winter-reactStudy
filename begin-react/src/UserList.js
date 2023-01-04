import React from "react";

function User({user,onRemove}){//User 컴포넌트에서 삭제를 할 수 있게 
    return(
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color : user.active ? 'green' : 'black'
                }}//<b>컴포넌트에 있을떄 cursor가 'pointer'이고 user.active의 값에 따라 색도 정해진다.
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick = {() => onRemove(user.id)} >삭제</button>
        </div>
    );
}

function UserList({users,onRemove}){//User 컴포넌트에서 삭제를 할 수 있게
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove ={onRemove}/>
            ))}
        </div>
    );
}

export default UserList;