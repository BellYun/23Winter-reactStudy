import React, { useReducer, useMemo, } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';
//import useInputs from './hooks/useInputs';
import produce from 'immer';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {//초기상태
  users : [
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
  ]
};

function reducer(state, action){//새로운 상태를 만드는 로직이다.
  switch (action.type) {//action의 타입을 확인하여서 실행
    case 'CREATE_USER':
      return produce(state, draft=> {
        draft.users.push(action.user);
      })
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);
//UserDispatch라는 이름으로 내보내준다.

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer의 활용법으로
  //state = 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 된다.
  //dispath는 액션을 발생 시키는 함수 => dispatch{{type: 'typename'}}
  //useReducer는 reducer와 초기상태인 initialState를 매개변수로 받는다 
  const { users } = state;
  //const {username,email} = state.inputs;

  /*const onChange = useCallback(e => {//useCallback을 활용해서 특정 함수를 새로 만들지 않고 재사용
    //useCallback의 첫번째 매개변수로 어떻게 연산을 정의할지 정의하는 함수
    const {name, value}  = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  },[]);
  //useCallback의 두번째 매개변수로 배열 값이 바뀌게되면 우리가 등록한 함수를 호출해서 연산을 해주고
  //배열의 값이 바뀌지 않으면 이전에 연산한 값을 재사용하게 된다.*/

  const count = useMemo(() => countActiveUsers(users),[users]);
  //첫번째 파라미터는 어떻게 연산할지 정의하는 함수이고 , 두번째 파라미터는 deps배열이 들어간다.
  //내용이 바뀌면 연산을하고 바뀌지않으면, 이전 연산값 deps를 사용한다.

  return(
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users = {users}/>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  )
}

export default App;