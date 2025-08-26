import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import MovieView from '../../shared/components/movie-view/MovieView'

const Bookmark = () => {
    const bookmark = useSelector((state: RootState) => state.bookmark.value)
    return (
        <div>
            <MovieView data={bookmark} />
        </div>
    )
}

export default React.memo(Bookmark)