import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/common";
import {tourItemCollectionQuery} from "../utils/queries";


const initialState ={
    items : [],
    isLoading : 'loading',
};

export const getTourItems = createAsyncThunk('tourItems/getTourItems',async(_,thunkAPI)=>{
    try {
        const data = await request(tourItemCollectionQuery);

        const {items} = data.tourItemCollection;
        console.log(items);
        return items;
    }catch (err){
        return thunkAPI.rejectWithValue(err);
    }
})

const tourItemsSlice = createSlice({
    name : 'tourItems',
    initialState,

    extraReducers: {
    	[getTourItems.pending]: (state) => {
    		state.isLoading = 'loading';
    		state.items = [];
    	},
    	[getTourItems.fulfilled]: (state, action) => {
    		state.items = action.payload;
    		state.isLoading = 'success';
    	},
    	[getTourItems.rejected]: (state) => {
    		state.isLoading = 'error';
    		state.items = [];
    	}
    }
});

export default tourItemsSlice.reducer;