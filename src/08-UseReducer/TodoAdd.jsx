import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const{description,onInputChange,onResetForm}=useForm({
        id: '',
        description: '',
        done:false,
    });

    const onFormSubmit= (event)=>{
        event.preventDefault();
        if(description.length <=1 ) return;
        const newTodo={
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);
    }

  return (
    <>
    <form onSubmit={onFormSubmit}>
            <input
              type="text"
              name="description"
              placeholder="¿Que hay que hacer"
              className="form-control"
              value={description}
              onChange={onInputChange}
            />

            <button 
            type="submit" 
            className="btn btn-outline-primary mt">
              Agregar
            </button>
          </form>
    </>
  )
}
