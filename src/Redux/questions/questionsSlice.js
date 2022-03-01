import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    update_products: (state, action) => {
        console.log("kkkk");
        console.log(action.payload.questions);
      state.questions = action.payload.questions;
    },
  },
});

export const { update_questions } = questionsSlice.actions;

export default questionsSlice.reducer; //creating reducer of color slice