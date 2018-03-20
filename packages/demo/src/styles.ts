import { global } from "milligram-in-js";
import { StylesCallback } from "react-jss";
const styles :StylesCallback = (theme)=>{
    return {
        ...global,
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        header: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        logo: {
            height: "6rem"
        },
        title: {
            flex: "1"
        }
    }
}
export default styles;