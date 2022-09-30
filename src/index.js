import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { App } from "App";

const mockDatoCMSPlugin = (parameters = { global: {} }) => {
  const fieldPath = "fieldPath";
  const noop = (...args) => {};
  window.DatoCmsPlugin.init = async () => {
    return {
      getFieldValue: window.sessionStorage.getItem.bind(sessionStorage),
      setFieldValue: window.sessionStorage.setItem.bind(sessionStorage),
      startAutoResizer: (...args) => {},
      parameters: { global: {} },
      fieldPath,
    };
  };
};

//if (process.env.NODE_ENV === "development") mockDatoCMSPlugin()

window.DatoCmsPlugin.init().then((plugin) => {
  plugin.startAutoResizer();

  ReactDOM.render(<App plugin={plugin} />, document.getElementById("root"));
});
