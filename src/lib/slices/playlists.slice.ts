import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlaylistItem {
    id: string;
    name: string;
}

interface PlaylistsState {
    playlists: PlaylistItem[];
}

const initialState: PlaylistsState = {
    playlists: [],
};

const playlistsSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        setPlaylists: (state, action: PayloadAction<PlaylistItem[]>) => {
            state.playlists = action.payload;
        },
        clearPlaylists: (state) => {
            state.playlists = [];
        },
        addPlaylistItem: (state, action: PayloadAction<PlaylistItem>) => {
            state.playlists.push(action.payload);
        },
        removePlaylistItem: (state, action: PayloadAction<string>) => {
            state.playlists = state.playlists.filter(item => item.id !== action.payload);
        },
    },
});

export const { setPlaylists, clearPlaylists, addPlaylistItem, removePlaylistItem } = playlistsSlice.actions;

export default playlistsSlice.reducer;
