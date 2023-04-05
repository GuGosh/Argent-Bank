import { configureStore } from '@reduxjs/toolkit'
import userTokenReducer from './features/userToken'

export default configureStore({
    reducer: {
        userToken: userTokenReducer,
    },
})