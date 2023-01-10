import * as React from 'react'

import { Provider } from 'react-redux'
import { ReduxProviderType } from '../types'
import { store } from 'stores'

export const Redux = ({ children }: ReduxProviderType) => <Provider store={store}>{children}</Provider>
