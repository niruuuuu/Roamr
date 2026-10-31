"use client"
import Searchbar from "../search-bar/Searchbar"
import Story from "../stories/Story"
import FeedFilter from "../feed-filter/FeedFilter"
import Postbar from "../postbar/Postbar"
import FilterDetails from "../filter-details/FilterDetails"
import Drops from "../drops/Drops"

const Feed = () => {
    return (
        <div className="w-[60vw] flex flex-col items-center py-4">
            <div className="w-[50vw] flex flex-col gap-6">
                <Searchbar />
                <Story />
                <FeedFilter />
                <Postbar />
                <FilterDetails />
                <Drops />
            </div>
        </div>
    )
}

export default Feed
