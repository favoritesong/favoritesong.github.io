import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId });
  }, [gtmId]);

  return <React.Fragment></React.Fragment>; // Empty fragment since this component doesn't render anything
};

export default GoogleTagManager;
