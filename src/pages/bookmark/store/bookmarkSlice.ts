import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IBookmark {
    value: any
}

const initialState: IBookmark = {
    value: JSON.parse(localStorage.getItem('bookmark') || '[]') || []
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addToBookmark: (state, actions: PayloadAction<any>) => {
            const index = state.value.findIndex((movie: any) => movie.id == actions.payload.id)

            if (index < 0) {
                state.value.push(actions.payload)
            } else {
                state.value.splice(index, 1)
            }

            localStorage.setItem('bookmark', state.value)
        }
    }
})

export const { addToBookmark } = bookmarkSlice.actions
export default bookmarkSlice.reducer