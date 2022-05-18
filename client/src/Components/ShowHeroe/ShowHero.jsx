import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeroe } from '../../redux/actions/Actions.js'


export const ShowHero = () => {
    const { Heroe, superHeroes } = useSelector(state => state);
    const dispatch = useDispatch();

    


    return (
        <div>
            <h1>Hero</h1>

            <select onChange={(e) => dispatch(getHeroe(e.target.value))}>
                {
                    superHeroes?.map(e => {
                        return (
                            <option 
                            key={e._id.$oid} 
                            value={e._id.$oid}
                            >{e.nombre_heroe}</option>
                        )
                    })
                }
            </select>
            <div>
              <h3>{Heroe.nombre_heroe}</h3>
            </div>

        </div>
    )
}


