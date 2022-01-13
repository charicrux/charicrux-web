import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    introduction: {
        display: 'flex',
        justifyContent: 'space-around',
        width: "100%",
        height: "100vh",
        minHeight: 350,
        alignItems: 'center',
        "@media (max-width: 1150px)": {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }
    },
    header: {
        color: "#fff",
        fontWeight: 500,
        fontSize: "clamp(50px, 7.5vw, 7.5vw)",
        marginBottom: "12.5px",
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 1150px)": {
            alignItems: "center",
        }
    },
    introductionSegment: {
        flex: 1,
    },
    logo: {
        width: "40vw",
        minWidth: 350,
    },
    subHeader: {
        color: "#fff",
        fontWeight: 400,
        fontSize: "clamp(25px, 3vw, 3vw)"
    },
    navItem: {
        color: "#fff",
        textDecoration: "none",
        marginRight: 15,
    },
    introNav:{
        display: 'flex',
        marginTop: 25,
    },
    contentContainer: {
        display: "flex",
        flexDirection:"column",
        "@media (max-width: 1150px)": {
            justifyContent: "center",
        }
    }
}))