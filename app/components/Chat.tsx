"use client";

import { use, useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "123d3747a8b47c829fe6c36f377b2539a",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }, []);

  return null;
};

export default Chat;
