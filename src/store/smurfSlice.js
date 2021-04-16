import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const slice = createSlice({
	name: "smurfs",
	initialState: {
		list: [],
		loading: false,
		errorMsg: "",
	},
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

export const fetchSmurfs = () => (dispatch) => {
	dispatch(setLoading());
	axios
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
