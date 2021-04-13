import React from 'react'
import {Row,Col} from 'antd'
import Text from '../components/Text'

import QuintomInput from '../components/QuintomInput'
import QuintomButton from '../components/QuintomButton'
import {ReactComponent as QuintomLogo} from '../assets/QuintumLogo.svg'

const inputFields = [
    {label:'name',placeholder:'name',labelClassName:'input-label',fieldClassName:'input-field',name:'name'} ,
    {label:'organization',placeholder:'organization',labelClassName:'input-label',fieldClassName:'input-field',name:'organization'} ,
    {label:'email address',placeholder:'email',labelClassName:'input-label',fieldClassName:'input-field',name:'email'} ,   
]

const Subscribe = () =>{
   
    const [formState,setFormState] = React.useState(
        {
            name:'',
            email:'',
            organization:''
        }
    )

    const [btnEnableState,setBtnEnableState] = React.useState(false)
    // const [err,setErr] = React.useState()

    const handleBtnClick = async() =>{
        // let apiCall = await fetch('',{
        //     method: 'POST', 
        //     mode: 'cors', 
        //     credentials: 'same-origin', 
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({...formState}) 
        // })
        // console.log('Response is > ' , apiCall.json())
    }

    const handleChange = (e) =>{
        let newState = {...formState}
        newState[e.target.name]=e.target.value
        setFormState(newState)
    }

    React.useEffect(()=>{
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(emailReg.test(formState.email) && formState.name.length>2 && formState.organization.length>4){
            setBtnEnableState(true)
        }else{
            setBtnEnableState(false)
        }
    },[formState])
    return(
        <div className='main-div'>
            <Row justify='space-around' align='middle' className='content'>
                <Col span={7} sm={20} xs={20} xl={7} xxl={7} lg={7} md={7} className='logo-re'>
                    <QuintomLogo />
                </Col>
                <Col span={9} sm={20} xs={20} xl={9} xxl={9} lg={9} md={9}>
                    <Text tag='h4' textVal='Enterprise Security Delivered' className='main-heading re'/>
                    <Text tag='h5' textVal='Stay updated about our public launch.' className='main-heading-secondary'/>
                    {
                        inputFields.map((val,idx)=> 
                            <QuintomInput fieldVal={val} handleChange={handleChange} formState={formState[val.name]}/>
                        )
                    }
                    <QuintomButton className='subscribe-btn' text='subscribe' onClick={handleBtnClick} disabled={!btnEnableState}/>
                    <Text textVal='We are proud to be 100% Pakistan made, offering military grade cyber security while being affordable.' className='bottom-text'/>
                </Col>
            </Row>
        </div>
    )
}

export default Subscribe;