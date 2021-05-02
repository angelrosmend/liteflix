import React from 'react'
import "./pageLayout.css"

function PageLayout(props) {
    return (
        <div className="page-layout">
            {props.children}
        </div>
    )
}

export default PageLayout
