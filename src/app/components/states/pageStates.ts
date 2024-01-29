import {create} from 'zustand';

interface PageState {
    page : String
    setPage : (page: String) => void
}

export const usePageState = create <PageState>()((set) => ({
    page: "home",
    setPage: (page: String) => set({page})
}))