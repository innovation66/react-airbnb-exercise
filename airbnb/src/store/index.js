

import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer
    }
})

export default store