import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currentTrackApi = createApi({
    reducerPath: 'currentTrackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/me/player/currently-playing',
    }),
    endpoints: (builder) => ({
        getCurrentTrack: builder.query<any, void>({
            query: () => ({
                url: ``,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    "Content-Type" : "application/json",
                },
            }),
        }),
    }),
});
export const {
    useGetCurrentTrackQuery
} = currentTrackApi;