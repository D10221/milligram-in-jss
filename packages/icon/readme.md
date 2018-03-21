TODO:
default to "material-icons" instead of ...;

usage:

    /** typeface */
    import * as webFont from "webfontloader";
    /** load the font */
    webFont.load({
        google: {
            families: [
                "Material Icons"],
        },
    });

    import { Icon } from "@d10221/icon";

    const MyIcon = () => (
        <Icon
            className={"myOtherClassName"} // will-be-appended,  can be an array
            {...otherProps}
            >menu</Icon>
    );
