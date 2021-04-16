import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { smurfReducer } from "./smurfSlice";
import { fetchSmurfs } from "./smurfSlice";

export const store = configureStore({
	reducer: {
		smurfs: smurfReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// store.dispatch(fetchSmurfs());
