import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {SignInProps} from "@/types/types";

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://accounts.spotify.com/api/token',
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation<
        {access_token: string, expires_in: string, token_type: string}
        , void>(
      {
        query: () => ({
          url: '',
          method: 'POST',
          headers: {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization" : "Basic " + Buffer.from('658eb78568f643f590e4b4e8c4776b4c:f29fa6c5b87146eaa68e200863ddc38c').toString('base64')
          },
          body: 'grant_type=client_credentials'
        }),
      }
    ),
  }),
});
export const {usePostLoginMutation} = loginApi;
