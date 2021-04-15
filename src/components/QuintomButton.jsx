import React from 'react'
import {Button} from 'antd'

const QuintomButton = (props) =>{

    return(
        <Button {...props} >{props.text || 'Subscribe'}</Button>
    )
}

export default QuintomButton