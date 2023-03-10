import React, { useContext }  from "react";
import { UserDispatch } from "./App";//dispatch를 활용하기 위해서 useContext라는 Hook을 사용해야함

const User = React.memo(function User({user}){//User 컴포넌트에서 삭제를 할 수 있게 
    const dispatch = useContext(UserDispatch);
    /*useEffect(()=>{
        console.log(user);
    });*/
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
                onClick = {() => {
                    dispatch({type: 'TOGGLE_USER',id : user.id});
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button
                onClick = {() => {
                    dispatch ({type : 'REMOVE_USER', id: user.id});
                }}
            >
                삭제
            </button>
        </div>
    );
});

function UserList({users}){//User 컴포넌트에서 삭제를 할 수 있게
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);//리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는
//React.memo함수이다. 리렌더링이 필요한 경우에만 위의 요소들이 리렌더링이 된다.