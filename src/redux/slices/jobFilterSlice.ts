import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FoodState = {
  jobType: string;
  jobCategory: string;
  jobFreeSearch: string;
};

const initialState: FoodState = {
  jobType: "",
  jobCategory: "",
  jobFreeSearch: "",
  // ... other state properties
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    updatePlace(state, action: PayloadAction<string>) {
      state.jobType = action.payload;
    },
    updateCategory(state, action: PayloadAction<string>) {
      state.jobCategory = action.payload;
    },
    updateFreeSearch(state, action: PayloadAction<string>) {
      state.jobFreeSearch = action.payload;
    },
  },
});

export const { updatePlace, updateCategory, updateFreeSearch } =
  jobSlice.actions;
export default jobSlice.reducer;
