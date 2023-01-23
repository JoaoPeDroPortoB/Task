import { Person, userReducer, userReducerList } from "../../reducers/userReducer"
import * as C from './style'
import RemoveLogo from '../../assets/trash-bin.png'
import React, { useState } from "react"
type Props = {
    OnEnter: (task: string) => void
}



export const ListAdd = ({ OnEnter }: Props) => {


    const [state, dispatch] = userReducerList();

    const [inputText, setInputText] = useState('')


    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            OnEnter(inputText)
            setInputText('')
        }

    }


    return (
        <div className="pt-10 flex justify-center   items-center">
            <input type="text" value={inputText} placeholder="Add a new task" className="flex w-[1280px] m-auto h-10 p-5 rounded-xl outline-none" onChange={e => setInputText(e.target.value)} onKeyUp={handleEnter} />
        </div>
    )
}


