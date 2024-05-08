import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {SignInProps} from "@/types/types";

export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/browse/new-releases?limit=20',
    }),
    endpoints: (builder) => ({
        getNewAlbum: builder.query<any, void>({
            query: () => ({
                url: ``,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }),
        }),
        // getNewAlbum: builder.mutation<any, void>(
        //     {
        //         query: () => ({
        //             url: '',
        //             method: 'GET',
        //             headers: {
        //                 "Content-Type" : "application/x-www-form-urlencoded",
        //                 Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        //             },
        //             body: 'grant_type=client_credentials'
        //         }),
        //     }
        // ),
    }),
});
export const {useGetNewAlbumQuery} = homeApi;
