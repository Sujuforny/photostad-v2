import { uploadFile } from "./uploadSIngleApiSlice";

const { createSlice } = require("@reduxjs/toolkit");

const uploadSIngleSlice = createSlice({
    name: 'files',
    initialState: {
      uploadStatus: 'idle',
      uploadError: null,
      uploadedData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(uploadFile.pending, (state) => {
          state.uploadStatus = 'loading';
          state.uploadError = null;
        })
        .addCase(uploadFile.fulfilled, (state, action) => {
          state.uploadStatus = 'succeeded';
          state.uploadedData = action.payload;
        })
        .addCase(uploadFile.rejected, (state, action) => {
          state.uploadStatus = 'failed';
          state.uploadError = action.error.message;
        });
    },
  });
export const { actions: apiActions } = uploadSIngleSlice.actions;
export default uploadSIngleSlice.reducer;

  