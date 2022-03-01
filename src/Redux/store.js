import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questions/questionsSlice";
import statusSlice from "./status/statusSilce";

export default configureStore({
  reducer: {
    status: statusSlice,
    questions: questionsSlice,
  },
});
