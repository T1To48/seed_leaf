
const  fontSizes = {
    small: {
        mobile: "1.2rem",
        tablet: "1.3rem",
        desktop: "1.4rem",
    },
    normal: {
        mobile: "1.3rem",
        tablet: "1.4rem",
        desktop: "1.6rem",
    },
    medium: {
        mobile: "1.5rem",
        tablet: "1.6rem",
        desktop: "1.8rem",
    },
    large: {
        mobile: "2rem",
        tablet: "2.2rem",
        desktop: "2.4rem",
    },
    xLarge: {
        mobile: "2.6rem",
        tablet: "2.9rem",
        desktop: "3.2rem",
    },
    xxLarge: {
        mobile: "3rem",
        tablet: "3.4rem",
        desktop: "3.7rem",
    },
    giant:"5rem"
}



const theme = {
    color: {
        primary: "#4CAF50",
        secondary: "#FFFFFF",
        background: "#FFFFFF",
        text:"#4A4A4A",
        accent:"#A9A9A9",
        hover:"#E0E0E0",
        // border:"#E0E0E0",
        error:"#FF5252",
    },
    fontWeight:{
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        maxBold:800
    },
    borderRadius:{
        small: "8px",
        medium: "30px",
        circle: "50%",
    },
    siteMaxWidth:{
        desktop:"1300px",
        tablet:"1024px",
        mobile:"768px",
    },
    fontSize: fontSizes,
    navbar:{
        mainNavHeight:{
            mobile:"120px",
            desktop:"70px"
        },

        //* pages Nav is desktop only
        pagesNavHeight:"50px"
    }

};

export default theme