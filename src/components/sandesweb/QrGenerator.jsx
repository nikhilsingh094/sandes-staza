import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRGenerator = () => {
  const [qrPayload, setQrPayload] = useState("");

  useEffect(() => {
    let isMounted = true;

    const generateKeyPairAndToken = async () => {
      try {
        // Generate key pair
        const keyPair = await window.crypto.subtle.generateKey(
          {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
          },
          true,
          ["encrypt", "decrypt"]
        );

        // get public key
        const getPublicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
        const base64PubKey = btoa(String.fromCharCode(...new Uint8Array(getPublicKey)));
        console.log("public key: - ", base64PubKey);

        // get private key
        const getPrivateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
        const base64PrivKey = btoa(String.fromCharCode(...new Uint8Array(getPrivateKey)));
        console.log("private key: - ", base64PrivKey);

        // Fetch session token
        const res = await fetch("http://localhost:6060/api/get-session-token");
        const { uuidToken } = await res.json();
        const timestamp = Date.now();
        const currentDate = new Date(timestamp);

        console.log(currentDate.toString());

        const payload = {
          uuidToken,
          time: currentDate.toString(),
        };

        if (isMounted) {
          setQrPayload(JSON.stringify(payload));
        }
      } catch (error) {
        console.error("Error generating token:", error);
      }

      // regeneration uuid in every 25 seconds
      if (isMounted) {
        setTimeout(generateKeyPairAndToken, 25000);
      }
    };

    generateKeyPairAndToken();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {qrPayload ? (
        <QRCodeSVG
          className="w-48 h-48 sm:w-60 sm:h-60 mx-auto"
          value={qrPayload}
          size={256}
        />
      ) : (
        <p>Generating QR...</p>
      )}
    </div>
  );
};

export default QRGenerator;
