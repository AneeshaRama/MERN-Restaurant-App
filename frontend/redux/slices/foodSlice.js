import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default foodSlice.reducer;

export const fetchFoods = createAsyncThunk("Food/fetch", async () => {
  const res = await fetch(`http://localhost:5000/api/foods`);
  const res2 = await res.json();
  return res2.foods;
});
