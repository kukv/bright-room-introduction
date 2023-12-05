import React from "react";
import "./Copyright.css"
import { Actor } from "@/stories/footer/copylight/Actor";

interface CopyrightProps {
    year: number,
    name: string,
    link: string
}

export const Copyright = ({
    year = new Date().getFullYear(),
    name,
    link,
    ...props
}: CopyrightProps) => {
    return (
        <p className="storybook-copy-light">
            {`© ${year}`}
            <Actor name={name} link={link} />
        </p>
    );
};
