import React from "react";
type BadgeProps = {
    text: string;
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
    return (
        <span
            className={`inline-block px-2 py-1 rounded text-sm bg-${color}-800 text-white`}
        >
            {text}
        </span>
    );
};

export default Badge;