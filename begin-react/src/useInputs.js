import { useState, useCallback } from "react";

function useInputs(initialFrom){
    const [form, setForm] = useState(initialFrom);
    //change
    const onChange = useCallback( e => {
        const { name, value } = e.target;
        setForm(form => ({...form,[name]:value})); 
    },[]);
    const onReset = useCallback(()=> setForm(initialFrom),[initialFrom]);
    return[form, onChange, onReset];
}

export default useInputs;