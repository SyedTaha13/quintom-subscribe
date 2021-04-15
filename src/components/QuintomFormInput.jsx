import React from 'react'
import {Input,Form} from 'antd'
import Text from './Text'

const QuintomFormInput = (props) =>{

    const {fieldVal} = props
    return(
        <React.Fragment>
            {fieldVal.label && <Text textVal={fieldVal.label} tag={'h4'} className={fieldVal.labelClassName}/>}
            <Form.Item
                name={fieldVal.name}
                rules={[fieldVal.rules]}
            >
                <Input className={fieldVal.fieldClassName} />
            </Form.Item>
        </React.Fragment>
    )
}

export default QuintomFormInput;