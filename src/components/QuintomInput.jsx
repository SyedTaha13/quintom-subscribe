import React from 'react'
import {Input} from 'antd'
import Text from './Text'

const QuintomInput = (props) =>{

    const {fieldVal,handleChange,formState} = props
    console.log('Props > ' , formState)
    return(
        <React.Fragment>
            {fieldVal.label && <Text textVal={fieldVal.label} tag={'h4'} className={fieldVal.labelClassName}/>}
            <Input className={fieldVal.fieldClassName} name={fieldVal.name}  value={formState}
                onChange={handleChange}/>
        </React.Fragment>
    )
}

export default QuintomInput;