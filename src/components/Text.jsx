import React from 'react'

const Text = (props) =>{
    const {textVal,className} = props
    const CustomTag = props.tag ? `${props.tag}` : 'p'

    return(
        <>
            <CustomTag className={className}>
                {textVal}
            </CustomTag>
        </>
    )
}

export default Text;