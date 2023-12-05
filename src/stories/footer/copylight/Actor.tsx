import React from "react";
import "src/stories/footer/copylight/Actor.css"

interface ActorProps {
    name: string
    link: string
}

export const Actor = ({
    name,
    link,
    ...props
}: ActorProps) => {
    return(
        <a target="_blank"
           rel="noopener noreferrer"
           href={link}
           className="storybook-actor"
        >{name}</a>
    );
};