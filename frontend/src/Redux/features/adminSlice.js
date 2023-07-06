/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../API/axiosInstance'
const key = "e2a9b86e-e1cc-4746-8a2d-cdd1630bdf6e";






export const allFlightDetails = createAsyncThunk('/flights-details/data', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/flight-details', data)
        return response
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response)

    }
})



const adminSlice = createSlice({
    name: "udata",
    initialState: {
        blogs: [],
        getintouchhome: [],
        contacts: [],
        onboarding: [],
        getstarted: [],
        subscribed: [],
        subscribemail: [],
        section1: [],
        section2: [],
        section3: [],
        customerReviews: [],
        fleetdata: [],
        flightsdetails: [],
        loading: false,
        error: false,
        message: " let's do something"
    },
    reducers: {


        getAllFlightDetails: (state, action) => (
            state.flightsdetails = action.payload
        )


    },
    extraReducers: (builder) => {
        builder
            .addCase(allFlightDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(allFlightDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.flightsdetails = action.payload?.data?.data;
            })
            .addCase(allFlightDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const { getAllFlightDetails } = adminSlice.actions
export default adminSlice.reducer