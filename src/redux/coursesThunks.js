import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; // database

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(
          collection(db, "courses"),
          (snapshot) => {
            const courses = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            resolve(courses);
          },
          (error) => {
            reject(rejectWithValue(error.message));
          }
        );

        return () => unsubscribe();
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
