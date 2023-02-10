import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'stores/types'
import { clothesSlice } from 'stores'

export default function Index() {
    const test = useSelector((state: RootState) => state.weather.test)
    const dispatch = useDispatch()
    return (
        <div className="flex w-screen flex-col items-center justify-center">
            <div>{test}</div>
            <div onClick={() => dispatch(clothesSlice.actions.setTest('Test2'))}>change test</div>
        </div>
    )
}
