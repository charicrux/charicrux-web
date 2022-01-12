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

const PrivacyPolicy = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <h1 className={ classes.header }>
                Privacy Policy 
            </h1>
            <SubHeader>Introduction</SubHeader>
           <Paragraph>
                <>
                    This privacy policy denotes the information upon that may be collected and what ways it may be used. Charicrux Technology(“Company”, “we”, “us”, or “our”) are committed to preserving our users privacy and the safety of their information. 
                    If you have any questions or concerns please contact us at <a target="_blank" rel="noopener noreferrer" className={classes.link} href="mailto:charicrux@mahitm.com">charicrux@mahitm.com</a>.
                </>
            </Paragraph>
            <br />
            <Paragraph>
                    In this privacy notice if we refer to "App" we are refering to any application
                    of ours that references or links to this policy, including any listed above. 
            </Paragraph>
            <Paragraph>
                The purpose of this privacy notice is to explain to you in the clearest way 
                possible what information we collect, how we use it, and what rights you have in relatiom to it.
            </Paragraph>
            <SubHeader>
                What Information do we Collect?
            </SubHeader>
            <Paragraph>
                The information collected by this application is mainly only the information you disclose through it. Examples include but are not limited to, emails, organization names and descriptions, the names and descriptions of any fundraisers you may create.
            </Paragraph>
           <SubHeader>
           How do we use your Information?
           </SubHeader>
           <Paragraph>
           We use this collected information to allow access to the application, display fundraisers and organizations, and create clarity for users of the application.

           </Paragraph>
           <SubHeader>
           Will your information be shared with anyone?
           </SubHeader>
           <Paragraph>
           We only share information with your consent, to comply with laws, to provide you with services, to protect your rights,
                        or to fulfill business obligations.
           </Paragraph>
           <SubHeader>
           How long do we keep your information?
           </SubHeader>
           <Paragraph>
           We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
                        notice unless otherwise required by laws.
           </Paragraph>
           <SubHeader>
           How do we keep your information safe?
           </SubHeader>
            <Paragraph>
            We aim to protect your personal information through a system of organizational and technical security measures.
                       We have implemented appropriate technical and organizational security measures designed to protect the security 
                       of any personal information we process. However, despite our safeguards and efforts to secure your information,
                       no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot
                       promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly 
                       collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to 
                       and from our App is at your own risk. You should only access the App within a secure environment.
            </Paragraph>
            <SubHeader>
            Do we make updates to this Notice?
            </SubHeader>
            <Paragraph>
            We may make updates to this notice in the future to keep up with relevant laws and policies. As such, you are encouraged to repeatedly visit this page to see how your information may be being collected or used.

            </Paragraph>
            <SubHeader>
            How can you review, update, or delete the data we collect from you?
            </SubHeader>
            <Paragraph>
            <>
            Based on the applicable law of your country, you may have the right to request access to 
                        your personal information we collect from you, change that information, or delete it in some
                        circumstances. To request to review, update, or delete your personal information, please submit 
                        a request form by contacting us at <a target="_blank" rel="noopener noreferrer" className={classes.link} href="mailto:charicrux@mahitm.com">charicrux@mahitm.com</a>.
            </>
            </Paragraph>
        </section>
    )
}

export default PrivacyPolicy; 