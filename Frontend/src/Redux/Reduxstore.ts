import { configureStore } from "@reduxjs/toolkit";

import { accesstockenSlice } from "./Reduxslice";

export const store = configureStore({
  reducer: {
    accessTocken: accesstockenSlice,
  },
});
