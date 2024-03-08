import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const pollutionApi = createApi({
    reducerPath: 'pollutionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/events'
    }),
    tagTypes: ['locationData', 'chartData', 'tableData'],
    endpoints: (builder) => ({
        getPollutionData: builder.mutation({
            query: (formData) => ({
                url: '',
                params: formData,
                method: 'GET',
                providesTags: ['locationData', 'chartData', 'tableData'],
            }),
        }),
    }),
})

export const {
    useGetPollutionDataMutation,
} = pollutionApi