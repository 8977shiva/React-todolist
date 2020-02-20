import React from 'react'

 const TodoInput=({ todo ,handleChange ,handleSubmit})=> {
    return (
        <div className='Todo'>
            <form onSubmit={handleSubmit}>
                <input  type='text' value={todo} onChange={handleChange}/>
                <button type="submit" >Add to list</button>
            </form>
            
        </div>
    )
}
export default TodoInput
