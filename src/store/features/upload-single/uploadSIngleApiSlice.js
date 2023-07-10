import { createAsyncThunk } from '@reduxjs/toolkit';
export const uploadFile = createAsyncThunk('api/uploadFile', async (file) => {
  const formdata = new FormData();
  formdata.append('file', file);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  const response = await fetch('https://photostad-api.istad.co/api/v1/files', requestOptions);
  const result = await response.json();
  return result;
});
