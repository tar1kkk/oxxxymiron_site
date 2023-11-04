import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/common";
import {newsItemCollectionQuery, trackCollectionQuery} from "../utils/queries";


const initialState ={
    items : [],
    isLoading : 'loading',
};

export const getNewsItem = createAsyncThunk('newsItem/getNewsItem',async(_,thunkAPI)=>{
    try {
        const data = await request(newsItemCollectionQuery);

        const {items} = data.newsItemCollection;

        console.log(items);
        return items;
    }catch (err){
        return thunkAPI.rejectWithValue(err);
    }
})

const NewsItemSlice = createSlice({
    name : 'tracksItems',
    initialState,

    extraReducers: {
        [getNewsItem.pending]: (state) => {
            state.isLoading = 'loading';
            state.items = [];
        },
        [getNewsItem.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = 'success';
        },
        [getNewsItem.rejected]: (state) => {
            state.isLoading = 'error';
            state.items = [];
        }
    }
});

export default NewsItemSlice.reducer;