import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    palette: {
        type: 'dark',
        primary: {
            main: '#CF112D',
            contrastText: '#ffffff',
        },
        //secondary: {
        //    main: '#4D4D4D',
        //    contrastText: '#ffffff',
        //},
    },
};

export default createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.palette.type = action.payload;
        },
    },
});
