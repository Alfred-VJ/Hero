import React from 'react'

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div>
            <input
                type={attribute.type}
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className='regular-style'
            />
        </div>
    )
}

export default Input