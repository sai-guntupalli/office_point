const CryptoJS = require("crypto-js");

const secret_key = "ea0fdcc4655953a0ca2f9ca736c86780de25c90e599d8e45";

function encryptObj(obj) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(obj),
    secret_key
  ).toString();

  return ciphertext;
}

function decryptObj(obj) {
  let decryptedData = null;
  try {
    const bytes = CryptoJS.AES.decrypt(obj, secret_key);
    decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log("error while trying to decrypt : ", error);
  }

  return decryptedData;
}

function encryptData(data) {
  const ciphertext = CryptoJS.AES.encrypt(data, secret_key).toString();
  return ciphertext;
}

function decryptData(data) {
  const bytes = CryptoJS.AES.decrypt(data, secret_key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
export { encryptObj, decryptObj, encryptData, decryptData };
