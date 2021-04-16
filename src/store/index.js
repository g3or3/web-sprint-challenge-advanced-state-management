import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { initialState } from "./smurfSlice";
import { smurfReducer } from "./smurfSlice";

export const store = configureStore({
	reducer: {
		smurfs: smurfReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

//.concat(logger)
