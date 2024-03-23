import { useEffect } from "react";
import { useState } from "react";

export const copyMessage = async (message, setCopied ) => {

    let timeoutId;
    clearTimeout(timeoutId);
    navigator.clipboard.writeText(message);
    setCopied(true);
    timeoutId = setTimeout(() => {
    setCopied(false);
    }, 3000);

};