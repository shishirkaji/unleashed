const CryptoJs = require("crypto-js");
const secret = "Add your secret here";

// change the query string to what ever you need to do not include ? if
// the uri is .com/products?productCode=P12
// in this case the query = "productCode=P12"
let query = "";
let signature = CryptoJs.HmacSHA256(query, secret);

let base64Signature = CryptoJs.enc.Base64.stringify(signature);
console.log("here is your signature-  "+base64Signature);