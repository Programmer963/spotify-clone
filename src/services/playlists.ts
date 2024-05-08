import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPlaylistsApi = createApi({
    reducerPath: 'userPlaylistsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1',
    }),
    endpoints: (builder) => ({
        getUserPlaylists: builder.query<any, void>({
            query: () => ({
                url: `/users/smedjan/playlists`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    "Content-Type" : "application/json",
                },
            }),
        }),
        getPlaylist: builder.query<any, void>({
            query: () => ({
                url: `/playlists/3cEYpjA9oz9GiPac4AsH4n`,
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
    useGetUserPlaylistsQuery,
    useGetPlaylistQuery
} = userPlaylistsApi;