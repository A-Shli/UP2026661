import {createSlice} from '@reduxjs/toolkit'
export const resultReducer = createSlice({
    name : 'results',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        setUserId : (state,action) =>{
            state.userId = action.payload
        }
    }
}
)

export const setUserId  = resultReducer.action;

export default resultReducer.reducer;