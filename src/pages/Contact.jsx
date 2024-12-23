// import {motion} from 'framer-motion'; import {pageAnimation, titleAnim} from
// '../animation'; import styled from 'styled-components'; const Contact = () =>
// {     return (         // <motion.div         //     variants={pageAnimation}
//         //     initial="hidden"         //     animate="show"         //
// exit="exit">Contact Me</motion.div>     ); } export default Contact;

import React, {useEffect, useState} from 'react';
import * as emailjs from 'emailjs-com';
import * as yup from 'yup';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';


const Cont = styled.div `
    /* width:100vw; */
    /* display: flex; */

    h1,p{
        color:#24bace;
    }

    @media only screen and (min-width: 350px) {
        padding-bottom: 150px;
    }

    @media only screen and (min-width: 768px) {
        padding-bottom: 180px;
    }

    @media only screen and (max-width: 1200px) {
        padding-bottom: 200px;
    }
    
`

const FormContainer = styled.div `
    display:flex;
    width: 10%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom: 20px;
    margin: 40px auto;
    background-color: #2b737c;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    
    Input,TextArea{
        margin: 5px 0;
        padding: 1rem 0;
        width:100%;
    }
    Button{
        margin: 20px 0;
    }

    @media only screen and (min-width: 350px) {
        width:70%;
        padding: 5px;
        justify-content:center;
        position:relative;
        top: 50px;
        h1{
           font-size: 20px;
        }


        Input,TextArea{
            width:70%
        }
    }

    @media only screen and (min-width: 768px) {
        width:25%;
        padding: 5px;
        justify-content:center;
        position:relative;
        top: 50px;
        h1{
           font-size: 30px;
        }
    }

        Input,TextArea{
            width:100%;
        }

        @media only screen and (min-width: 1200){
            width:90%;
            justify-content:center;
            position:relative;
            top: 50px;
            h1{
               font-size: 40px;
            }

            Input,TextArea{
                padding: 10px;
            }
        }
`

const Contact = (props) => {
    const emptyData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }

    const [form,
        setForm] = useState(emptyData)
    const [errors,
        setErrors] = useState(emptyData)
    // const [post,
    //     setPost] = useState([])
    const [serverError] = useState("")
    const [button,
        setButton] = useState(true)

    const formSchema = yup
        .object()
        .shape({
            name: yup
                .string()
                .required("Name is required"),
            email: yup
                .string()
                .email("Must be a valid email")
                .required("Email address is required"),
            phone: yup
                .string()
                .required("Please enter your contact number"),
            subject: yup.string(),
            message: yup
                .string()
                .required("Please enter your message")
        })

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name
                ? e.target.value
                : null)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                console.log(err)
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('gmail', 'template_lvpawd4', e.target, 'user_UQlt4Jxj9BNbgpbwy6C2q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Your message has been sent!")
    }

    const inputChange = (e) => {
        e.persist()
        console.log("new input here", e.target.value)
        const newData = {
            ...form,
            [e.target.name]: e.target.value
        }
        validateChange(e)
        setForm(newData)
    }

    useEffect(() => {
        formSchema
            .isValid(form)
            .then(isValid => {
                setButton(!isValid)
            })
    },[form,formSchema])

    return (
        <Cont>
            <FormContainer>
                <h1>Contact Me!</h1>
                <Form onSubmit={formSubmit}>
                    {serverError
                        ? <p>{serverError}</p>
                        : null}

                    <FormGroup>
                        <Label htmlFor="name">
                            <p>Full Name:</p>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                data-cy="name"
                                placeholder="Your Full Name"
                                value={form.name}
                                onChange={inputChange}/> {errors.name.length > 0
                                ? <p>{errors.name}</p>
                                : null}
                        </Label>
                    </FormGroup>

                    <FormGroup className="emailLabel">
                        <Label htmlFor="email">
                            <p>Email:</p>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                data-cy="email"
                                placeholder="email@gmail.com"
                                value={form.email}
                                onChange={inputChange}/> {errors.email.length > 0
                                ? <p>{errors.email}</p>
                                : null}
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="phone">
                            <p>Phone Number:</p>
                            <Input
                                id="phone"
                                type="phone"
                                name="phone"
                                data-cy="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={inputChange}/> {errors.phone.length > 0
                                ? <p>{errors.phone}</p>
                                : null}
                        </Label>
                    </FormGroup>

                    <FormGroup className="subjectLabel">
                        <Label htmlFor="subject">
                            <p>Subject:</p>
                            <Input
                                id="subject"
                                type="subject"
                                name="subject"
                                data-cy="subject"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={inputChange}/> {errors.subject.length > 0
                                ? <p>{errors.subject}</p>
                                : null}
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="message">
                            <p>Message:</p>
                            <textarea
                                id="message"
                                type="message"
                                name="message"
                                data-cy="message"
                                placeholder="Please be detailed within your message"
                                value={form.message}
                                onChange={inputChange}/> {errors.message.length > 0
                                ? <p>{errors.message}</p>
                                : null}
                        </Label>
                    </FormGroup>

                    <Button type="submit" data-cy="submit" disabled={button}>
                        Submit
                    </Button>
                </Form>
            </FormContainer>
        </Cont>
    )
}

export default Contact;