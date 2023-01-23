import { Person } from "../../reducers/userReducer";
import { userReducerList } from "../../reducers/userReducer";
import { useState } from "react";
import RemoveLogo from '../../assets/trash-bin.png'
import * as C from './style'
type Props = {
    item: Person
    onClickRemove: () => void
}

export const ListAdded = ({ item, onClickRemove }: Props) => {

    const [isChecked, setIsChecked] = useState(item.DoOrNot)

    const [state, dispatch] = userReducerList();

    return (
        <C.Container DoOrNot={isChecked} >
            <C.Input >
                <input
                    type="checkbox"
                    checked={isChecked}
                    id="checkbox"
                    onChange={() => {
                        if (item.DoOrNot === false) {
                            setIsChecked(!isChecked)
                            return item.DoOrNot = true
                        }
                        else {
                            setIsChecked(!isChecked)
                            return item.DoOrNot = false
                        }
                    }}
                />
                <label htmlFor="checkbox" >{item.task}</label>
            </C.Input>
            {isChecked &&
                <C.Button>
                    <button onClick={onClickRemove}><img src={RemoveLogo} alt="" /></button>
                </C.Button>
            }

        </C.Container>
    )
}