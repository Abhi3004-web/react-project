import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("Products", async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
})

const initialState = {
    items: [],
    status: undefined,
    error: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = "fulfilled",
                state.items = action.payload;
        })
    }
})
export default productSlice.reducer;