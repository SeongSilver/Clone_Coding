import React from 'react'
import MyParagraph from './MyParagraph'
const DemoOutout = (props) => {

    console.log('DemoOutput RUNNING')

    return (
        <MyParagraph>{props.show ? 'this is new!' : ''}</MyParagraph>
    )
}

export default React.memo(DemoOutout);