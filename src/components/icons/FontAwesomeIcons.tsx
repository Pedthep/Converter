import React from "react";

import { IconName, IconPrefix, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(fas, far, fab)

export type iconProps = {
    style: IconPrefix;
    name: IconName;
}

const IconFontAwesome:React.FC<{ icon: iconProps}> = ({icon}) => {
    const sizeIcon = icon.name === "circle" ? 16 : 32;

    return (
        <FontAwesomeIcon icon={[icon.style, icon.name]} size={sizeIcon} />
    )
}

export default IconFontAwesome;