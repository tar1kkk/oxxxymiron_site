import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/common";
import {trackCollectionQuery} from "../utils/queries";


const initialState ={
    items : [],
    isLoading : 'loading',
};

export const getTracksItems = createAsyncThunk('tracksItems/getTracksItems',async(_,thunkAPI)=>{
    try {
        const data = await request(trackCollectionQuery);

        const {items} = data.trackCollection;

        console.log(items);
        return items;
    }catch (err){
        return thunkAPI.rejectWithValue(err);
    }
})

const trackItems = createSlice({
    name : 'tracksItems',
    initialState,

    extraReducers: {
        [getTracksItems.pending]: (state) => {
            state.isLoading = 'loading';
            state.items = [];
        },
        [getTracksItems.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = 'success';
        },
        [getTracksItems.rejected]: (state) => {
            state.isLoading = 'error';
            state.items = [];
        }
    }
});

export default trackItems.reducer;