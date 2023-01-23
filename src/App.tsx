import React, { useState } from "react";
import { userReducerList } from "./reducers/userReducer"
import { ListAdd } from "./compoenents/ListAdd";
import { ListAdded } from "./compoenents/ListAdded";

const App = () => {



  const [state, dispatch] = userReducerList()



  const Add = (task: string) => {
    dispatch({
      type: 'ADD',
      payload: {
        task: task,
        DoOrNot: false
      }
    })
  }

console.log(state)

  return (
    <div className=" w-screen h-screen bg-[#042940]">
      <div className="flex justify-center items-center h-28 text-[white] text-[40px]">
        <h1 >List of tasks</h1>
      </div>
      <div className="mt-10 flex justify-center items-center m-auto max-w-7xl border-b-2 border-b-[#005C53]"></div>
      <ListAdd OnEnter={Add} />
      <div>

      </div>


      {state.map((item, index) => (
        <ListAdded onClickRemove={() => dispatch({
          type: 'REMOVE',
          payload: {
            id: item.id
          }
        })} item={item} key={index} />

      ))}

        



    </div>
  )
}

export default App



