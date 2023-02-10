import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'stores/types'
import { sampleSlice } from 'stores'

export default function Index() {
    const sample = useSelector((state: RootState) => state.sampleStore.sample)
    const dispatch = useDispatch()
    return (
        <div className="flex w-screen flex-col items-center justify-center">
            <div>{sample}</div>
            <div onClick={() => dispatch(sampleSlice.actions.setSample('Test2'))}>change test</div>
        </div>
    )
}
