import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

const HomePage = () => {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.introduction}>
                <div className={clsx(classes.introductionSegment, classes.logoContainer)}>
                    <picture>
                        <img className={classes.logo} src={"assets/icon.png"} alt="Charicrux Logo" />
                    </picture>
                </div>
                <div className={clsx(classes.introductionSegment, classes.contentContainer)}>
                    <h1 className={classes.header}>Charicrux</h1>
                    <h2 className={classes.subHeader}>Unveiling Crypto Fundraising.</h2>
                    <div className={classes.introNav}>
                        <a className={classes.navItem} target="_blank" rel="noopener noreferrer" href="mailto:charicrux@mahitm.com">Contact</a>
                        <a className={classes.navItem} target="_blank" href="/privacy">Privacy Policy</a>
                        <a className={classes.navItem} target="_blank" href="/terms-of-service">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;