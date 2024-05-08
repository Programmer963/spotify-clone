import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {loginApi} from '../services/login';
import {homeApi} from "../services/home";
import {userPlaylistsApi} from "../services/playlists";
import {profileApi} from "../services/profile";
import playlistsReducer from './slices/bodyPlaylists.slice'
import {currentTrackApi} from "@/src/services/currentTrack";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [loginApi.reducerPath]: loginApi.reducer,
      [homeApi.reducerPath]: homeApi.reducer,
      [userPlaylistsApi.reducerPath]: userPlaylistsApi.reducer,
      [profileApi.reducerPath]: profileApi.reducer,
      [currentTrackApi.reducerPath]: currentTrackApi.reducer,
      playlists: playlistsReducer,
    },
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat(loginApi.middleware, homeApi.middleware,
          userPlaylistsApi.middleware, profileApi.middleware, currentTrackApi.middleware
          ),
  });
};
const lister = makeStore();
setupListeners(lister.dispatch);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
