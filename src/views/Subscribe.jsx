import React from 'react'
import {Row,Col,Form} from 'antd'
import Text from '../components/Text'

import QuintomFormInput from '../components/QuintomFormInput'
import QuintomButton from '../components/QuintomButton'
import {ReactComponent as QuintomLogo} from '../assets/QuintumLogo.svg'

const inputFields = [
    {label:'name',placeholder:'name',labelClassName:'input-label',fieldClassName:'input-field',name:'name',
        rules:{
            required:true,
            type:'string',
            min:5,
            message:'Name format is not correct'

        }
    } ,
    {label:'organization',placeholder:'organization',labelClassName:'input-label',fieldClassName:'input-field',name:'organization',
        rules:{
            required:true,
            type:'string',
            min:5,
            message:'Organization format is not correct'
        }
    } ,
    {label:'email address',placeholder:'email',labelClassName:'input-label',fieldClassName:'input-field',name:'email',
        rules:{
            required:true,
            type:'email',
            message: 'Email format is not correct'
            // message:'Organizat'
        }
    } ,   
]

const Subscribe = () =>{
 
    const handleBtnClick = async(form) =>{
        console.log('Form values > ' ,form)
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

    return(
        <div className='main-div'>
            <Row justify='space-around' align='middle' className='content'>
                <Col span={7} sm={20} xs={20} xl={7} xxl={7} lg={7} md={7} className='logo-re'>
                    <QuintomLogo />
                </Col>
                <Col span={9} sm={20} xs={20} xl={9} xxl={9} lg={9} md={9}>
                    <Text tag='h4' textVal='Enterprise Security Delivered' className='main-heading re'/>
                    <Text tag='h5' textVal='Stay updated about our public launch.' className='main-heading-secondary'/>
                    <Form onFinish={handleBtnClick}>
                        {
                            inputFields.map((val,idx)=> 
                                <QuintomFormInput fieldVal={val} key={idx}/>
                            )
                        }
                        <QuintomButton className='subscribe-btn' text='subscribe' htmlType='submit'/>
                    </Form>
                    <Text textVal='We are proud to be 100% Pakistan made, offering military grade cyber security while being affordable.' className='bottom-text'/>
                </Col>
            </Row>
        </div>
    )
}

export default Subscribe;