import { configureStore } from '@reduxjs/toolkit'
import {authSlice} from './userAuth'


const store = configureStore({
    reducer: {
        userAuth: authSlice.reducer 
    }
  })
  
  export default store