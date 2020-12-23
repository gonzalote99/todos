import { useRef } from "react";

export const Usere =() => {
    const rend = useRef(0);
    console.log("ren: ", rend.current++);
}