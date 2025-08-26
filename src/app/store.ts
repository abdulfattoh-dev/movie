import { configureStore } from "@reduxjs/toolkit";
import bookmark from "../pages/bookmark/store/bookmarkSlice";

export const store = configureStore({
  reducer: {
    fake: () => "laylo",
    bookmark
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
