import React from "react"

export const Todo = ({ todo }) => {
  return (
            // eslint-disable-next-line react/jsx-key
            <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">
                ({todo.category})
              </p>
              <div>
                <button>Completar</button>
                <button>X</button>      
              </div>
            </div>
          </div>
  )
}

