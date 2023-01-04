import React, { useRef, useState } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email: ''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users,setUsers] = useState([
    {
      id : 1,
      username: 'velopert',
      email : 'public.velopert@gmail.com',
      active : true
    },
    {
      id : 2,
      username: 'tester',
      email : 'tester@examezzple.com',
      active : false
    },
    {
      id : 3,
      username: 'liz',
      email : 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4); //useRef()를 사용할때 파라미터를 넣어주면, 이 값이 .current 값이 기본값이 됩니다.
  //이 값을 수정할때에는 .current값을 수정하면 되고 조회를 할떄는 .current를 조회하면됩니다.


  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    //배열에 값을 추가하는 두가지 방식
    //setUsers([...users,user]); spread방식
    setUsers(users.concat(user));//concat방식

    setInputs({
      username: '',
      email : '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));//filter를 활용하여 제거
  };

  const onToggle = id => {
    setUsers(
      users.map( user =>//map함수란 반복되는 컴포넌트를 렌더링하기 위해서 
        //자바스크립트 배열의 내장함수인 map을 활용
        user.id === id ? { ...user, active: !user.active} : user
        //user.id === id 가 true이면  {...user, active: !user.active} false이면 user
        //user 
      )
    );
  };
  
  return(
    <>
      <CreateUser
        username={username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users={users} onRemove = {onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;