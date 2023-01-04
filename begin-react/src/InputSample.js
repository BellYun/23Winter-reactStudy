import React,{useState, useRef} from "react";

function InputSample(){

    const [inputs,setInputs] = useState({
        name: '',
        nickname:''
    });

    const nameInput = useRef();// nameInput = Ref객체 

    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

    const onChange = e => {
        const {value, name} = e.target; // e.target에서 name과 value를 추출
        setInputs({
            ...inputs,//기존의 input 객체를 복사한 뒤
            [name]: value// name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        });
        nameInput.current.focus(); 
        //DOM의 current에  focus를 해준다. 그런데 nameInput은 Ref 객체로 다른 컴포넌트에서 활용을 해야하기에 Ref로 지정한다.
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>
                    값: 
                </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
//리액트에서 객체를 수정해야 할 때는, input[name] = value;
//setInputs({
//    ...inputs,
//    [name]:value
//});
export default InputSample;