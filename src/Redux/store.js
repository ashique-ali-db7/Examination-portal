import { configureStore } from "@reduxjs/toolkit";

import statusSlice from "./status/statusSilce";

export default configureStore({
  reducer: {
    status: statusSlice,
    
  },
});
