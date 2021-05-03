import http from '@http';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAll = createAsyncThunk('consents/fetchAll', async () => {
  try {
    const res = await http.get('/consents');

    // TODO: You can use adapter here

    return res;
  } catch (e) {
    console.error(e);
  }
});
export const add = createAsyncThunk('consents/add', async (body) => {
  // TODO: You can use adapter here

  try {
    const res = await http.post('/consents', {
      name: body.name,
      email: body.email,
      agreeTo: body.agreeTo
    });

    // TODO: You can use adapter here

    return res;
  } catch (e) {
    // We can extend console.error functionalyty to log errors in Rolbar for ex.
    console.error(e);
  }
});

export const consentsSlice = createSlice({
  name: 'consents',
  initialState: {
    data: []
  },
  extraReducers: {
    [fetchAll.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [add.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    }
  }
});

export default consentsSlice.reducer;
