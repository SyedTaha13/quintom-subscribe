import React from 'react'
import {Button} from 'antd'

const QuintomButton = (props) =>{

    return(
        <Button {...props} >{props.text}</Button>
    )
}

export default QuintomButton