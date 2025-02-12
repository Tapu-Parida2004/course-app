import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./coursesThunks";

// Initial state
const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        // Pending
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        // Fulfilled
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        // Rejected
        state.loading = false;
        state.error = action.payload;
      });
  },
});
// export
export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
