import React, { ReactChild } from 'react';
import { useStyles } from './style';

type SubHeaderProps = {
    children: string | ReactChild
};

const SubHeader : React.FC<SubHeaderProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <h2 className={classes.subHeader}>
            { children }
        </h2>
    )
};

type ParagraphHeaderProps = {
    children: string | ReactChild
};

const ParagraphHeader : React.FC<ParagraphHeaderProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <h2 className={classes.paragraphHeader}>
            { children }
        </h2>
    )
};

type ParagraphProps = {
    children: string | ReactChild
};

const Paragraph : React.FC<ParagraphProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <p className={classes.paragraph}>
            { children }
        </p>
    )
};

const TermsOfService = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <h1 className={ classes.header }>
                Terms of Service
            </h1>
           <Paragraph>
                <>
                Charicrux Technology(“Company”, “we”, “us”, or “our”) provides services to our users via the use of a mobile device. These services include the use of Ethereum for the creation of ERC20 tokens for our user’s organizations which will be present on the Ethereum blockchain, the ability to buy and sell said tokens, the ability to exchange these tokens, the ability to create and manage fundraisers, the ability to use an organization’s token to donate to their fundraiser, the ability to collect the earnings of these fundraisers, and any additional services and functionalities that we at Charicrux Technology may add in the future. You may only use the services of this application if you are not barred by applicable United States law from doing so. These services and the platform from which users may access them is collectively termed the “application”. These terms and conditions will govern the use of any and all versions of the Charicrux Application.
                </>
            </Paragraph>
            <br />
            <Paragraph>
                By clicking “I Agree” or by using the Charicrux Application or any of its services, you are agreeing to be bound by the terms outlined here. If you do not agree to be bound by these terms, you will not be able to access the application in any way.
            </Paragraph>
            <br/>
            <Paragraph>
                <>
                    If users have any questions regarding our terms, conditions or policies, they can send them to <a target="_blank" rel="noopener noreferrer" className={classes.link} href="mailto:charicrux@mahitm.com">charicrux@mahitm.com</a>. We also accept feedback on how to better any and all of the services offered by this application. By submitting feedback to our email address, you are giving us full and utter ownership of the submitted idea and any intellectual property rights you may hold over this idea. You are also agreeing not to exploit this feedback in any way if it were to be implemented.
                </>
            </Paragraph>
            <br />
            <Paragraph>
                <>
                   
        You are agreeing that any disputes between you and Charicrux Technology will be resolved by communication, and you are hereby waiving your right to a trial by jury or to participate in any class action lawsuit against Charicrux Technology.

                </>
            </Paragraph>
            <br/>
            <Paragraph>
            You are also agreeing to not create any fundraisers with potentially offensive or incriminating names or descriptions, and to take down a fundraiser if we ask for you to do so.

            </Paragraph>
            <br />
            <Paragraph>
            By accepting these terms and conditions you are also accepting Charicrux Technology’s Privacy Policy and all of the terms laid out there.

            </Paragraph>
        </section>
    )
}

export default TermsOfService;