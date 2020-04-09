import * as React from "react";

import styles from "./DocumentDirectory.module.scss";
export interface ITileProps {
    url: string;
    color: string;
    text: string;
    hoverText: string;
}
export const Tile = function (props: ITileProps): JSX.Element {

    const [isHovered, setIsHovered] = React.useState(false);
    const Navbar = ({ visible }) => {
        console.log(visible);
        let myClass = styles.navbar + " ";
        if (visible) { myClass += styles.slideIn } else { myClass += styles.slideOut };
        return (
            <div className={myClass}>
                {props.hoverText}
            </div>);
    };
    return (
        <a href="https://www.google.com" >
            <div className={styles.tile} style={{ backgroundColor: props.color }}
                onMouseOver={(e) => { setIsHovered(true); }}
                onMouseOut={(e) => { setIsHovered(false); }} >
                <Navbar visible={isHovered} />
                <span className={styles.tileLabel}> {props.text} </span>

            </div>
        </a>
    );
};