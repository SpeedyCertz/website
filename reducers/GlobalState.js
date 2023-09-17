import {createSlice} from '@reduxjs/toolkit'


export const GlobalState = createSlice({
    name: "GlobalState",
    initialState: { value: null },
    reducers: {
        SetNumber: (state , action) =>{
            state.value = action.payload;
        },
    }
});

export const {SetNumber} = GlobalState.actions;
export default GlobalState.reducer ; 