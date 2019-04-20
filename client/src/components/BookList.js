import React from "react";

export const List = ({ children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

export function ListBook({ children }) {
    return <li className="list-group-item">{children}</li>;
};