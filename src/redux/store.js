import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice'; 
import studentProgressReducer from './studentProgressSlice';

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        studentProgress: studentProgressReducer,
    },
})
export default store;