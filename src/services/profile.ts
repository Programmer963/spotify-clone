import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/me',
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<any, void>({
            query: () => ({
                url: ``,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    // "Content-Type" : "application/json",
                },
            }),
        }),
    }),
});
export const {useGetProfileQuery} = profileApi;