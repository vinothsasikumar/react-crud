import { Button } from "@mui/material";
import { useReducer, useRef } from "react";

const reducerFunction = (state: number, action: number) => {
    state = action;
    return state;
};

const ReducerExample = () => {
    const [state, action] = useReducer(reducerFunction, 0);

    const inputRef = useRef<any>(null);

    const clickFunction = () => {
        (inputRef.current as HTMLInputElement).value = 'Set data using useRef';
    }

    return (
        <>
            <div className="w-full h-[50%] flex flex-row items-center justify-center gap-10">
                <Button variant="outlined" onClick={() => action(state - 1)}>Minus</Button>
                <span>{state}</span>
                <Button variant="outlined" onClick={() => action(state + 1)}>Plus</Button>
            </div>
            <div className="w-full h-[50%] flex flex-col items-center justify-center gap-10">
                <input type="text" ref={inputRef} className="w-[80%] border border-black p-2 rounded-md" />
                <Button variant="outlined" onClick={clickFunction}>Click to Manipulate</Button>
            </div>
        </>
    )
};


export default ReducerExample;