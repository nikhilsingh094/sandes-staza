// src/components/sandesweb/ConverseChat.jsx
import React, { useEffect } from "react";



export default function ConverseChat() {
  useEffect(() => {
    // Initialize Converse.js once on mount
    converse.initialize({
      bosh_service_url: "http://localhost:5443/http-bind/",
      // Do not show the “control box” (login form) because we are auto‐logging in
      show_controlbox_by_default: false,
      // Immediately log in as user1@localhost
      auto_login: true,
      authentication: "login",
      jid: "tom@localhost",
      password: "123456",

      // Keep the connection alive
      keepalive: true,
      // Always archive messages on the server (requires ejabberd’s mod_mam enabled)
      message_archiving: "always",
      auto_reconnect: true,
      // We do not open any chat here; we’ll open it on demand when Sidebar is clicked
      connected() {
        console.log("✅ Converse.js connected as user1@localhost");
      },
      disconnected() {
        console.log("🔴 Converse.js disconnected");
      },
      authentication_failed() {
        console.error("❌ Converse.js login failed — check credentials or BOSH URL");
      },
    });
  }, []);

  return (
    <div
      id="conversejs"
      style={{
        flexGrow: 1,
        border: "1px solid #ccc",
        minHeight: "0", // so that flexbox sizing works
      }}
    />
  );
}
