import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
	list: [],
	loading: false,
	errorMsg: "",
};

const slice = createSlice({
	name: "smurfs",
	initialState,
	reducers: {
		setLoading: (smurfs) => {
			smurfs.loading = !smurfs.loading;
		},
		setSmurfs: (smurfs, action) => {
			smurfs.list = action.payload;
		},
		addSmurf: (smurfs, action) => {
			smurfs.list.push(action.payload);
			smurfs.errorMsg = "";
		},
		setError: (smurfs, action) => {
			smurfs.errorMsg = action.payload;
		},
	},
});

export const fetchSmurfs = () => async (dispatch) => {
	dispatch(setLoading());
	await axios
		.get("http://localhost:3333/smurfs")
		.then((res) => {
			dispatch(setSmurfs(res.data));
			dispatch(setLoading());
		})
		.catch((err) => {
			dispatch(setError("Unable to fetch smurfs."));
			dispatch(setLoading());
		});
};

export const { setLoading, setSmurfs, addSmurf, setError } = slice.actions;

export const smurfReducer = slice.reducer;
