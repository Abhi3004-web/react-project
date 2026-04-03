import { useEffect } from "react";
import { eventEmitter } from "./EventEmitter";

export const useEvent = (eventName, callback) => {

    useEffect(() => {
        if (!eventName || typeof callback !== "function") {
            console.warn("Invalid event subscription");
            return;
        }

        eventEmitter.on(eventName, callback);

        return () => {
            eventEmitter.off(eventName, callback);
        };

    }, [eventName, callback]);
};