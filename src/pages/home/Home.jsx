import React from 'react'
import PageLayout from '../../components/page-layout/PageLayout'
import "./home.css"
import NowPlaying from './now-playing/NowPlaying'
import Upcoming from './upcoming/Upcoming'

function Home() {

   
    return (
        <PageLayout>
            <NowPlaying/>
             <Upcoming/>
        </PageLayout>
    )
}

export default Home
