"use client";

import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "116f4e18409f064babb4714e5cfb27e28",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/kommunicate-widget-3.0.min.js";

      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);

      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }, []);

  return null;
};

export default Chat;