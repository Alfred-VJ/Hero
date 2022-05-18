import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../redux/actions/Actions.js'



export const ShowHeroes = () => {
    const { superHeroes } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHeroes());
    }, [])
    return (
        <div>
            <h1>Heroes</h1>
            {
                superHeroes?.map(e => {
                    return (
                        <h1 key={e._id.$oid}>{e.nombre_heroe}</h1>
                    )
                })
            }
        </div>
    )
}
