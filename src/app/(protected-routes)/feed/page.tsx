"use client"

// components
import Feed from '@/components/ui-components/newsfeed/feed/Feed';
import RightSidebar from '@/components/ui-components/newsfeed/sidebars/RightSidebar';


const page = () => {

    return (
        <div
            className='w-[80vw] min-h-screen flex overflow-x-hidden ml-[20vw]'>
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default page
