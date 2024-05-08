import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Artist {
    id: string;
    name: string;
    // Дополнительные свойства, если необходимо
}

interface Track {
    id: string;
    name: string;
    artists: Artist[];
    image: string;
    duration: string;
    album: string;
    context_uri: string;
    track_number: string;
}

interface Playlist {
    id: string;
    name: string;
    description: string;
    image: string;
    tracks: Track[];
}

interface PlaylistsState {
    playlists: Playlist[];
}
const initialState: PlaylistsState = {
    playlists: [],
};

const playlistsSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        addPlaylist: (state, action: PayloadAction<Playlist>) => {
            state.playlists.push(action.payload);
        },
        removePlaylist: (state, action: PayloadAction<string>) => {
            state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload);
        },
    },
});

export const { addPlaylist, removePlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;