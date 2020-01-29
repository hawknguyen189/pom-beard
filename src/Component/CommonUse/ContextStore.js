import React, {useState} from "react";

const warningObject = {
  get throwWarning() {
    throw new Error("You probably forgot to put <MyProvider>.");
  }
};
export const ContextStore = React.createContext(warningObject);