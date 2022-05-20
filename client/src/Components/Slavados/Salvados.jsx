import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSalvados } from '../../redux/actions/Actions.js'




const Salvados = () => {
    const { salvados } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSalvados())
    }, [])
    
    return (
        <div>
            {
                 salvados?.map(e => {
                     return(
                         <div>
                             <h1>{e.nombre}</h1>
                             <h3>{e.edad}</h3>
                         </div>
                     )
                 })
            }
        </div>
    )
}

export default Salvados