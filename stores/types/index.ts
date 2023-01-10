import { store } from 'stores'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface ClothesTypes {
    test: string
}
