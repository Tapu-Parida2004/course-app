import { createSlice } from "@reduxjs/toolkit";
// Initial State
const initialState = {
  completedCourses: [],
};

const studentProgressSlice = createSlice({
  name: "studentProgress",
  initialState,
  reducers: {
    markAsCompleted: (state, action) => {
      if (!state.completedCourses.includes(action.payload)) {
        state.completedCourses.push(action.payload);
      }
    },
    markAsIncomplete: (state, action) => {
      state.completedCourses = state.completedCourses.filter(
        (courseId) => courseId !== action.payload
      );
    },
  },
});

export const { markAsCompleted, markAsIncomplete } =
  studentProgressSlice.actions;
export default studentProgressSlice.reducer;
