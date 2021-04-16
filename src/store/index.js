import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { initialState } from "./smurfSlice";
import { smurfReducer } from "./smurfSlice";

const smurfs = {};

export const store = configureStore({
	preloadedState: smurfs,
	reducer: {
		smurfs: smurfReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
