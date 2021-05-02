import React from 'react'
import PageLayout from '../../components/page-layout/PageLayout'
import "./home.css"
import NowPlaying from './now-playing/NowPlaying'
import Popular from './popular/Popular'
import Upcoming from './upcoming/Upcoming'

function Home() {

   
    return (
        <PageLayout>
            <NowPlaying/>
             <Upcoming/>
             <Popular/>
        </PageLayout>
    )
}

export default Home
