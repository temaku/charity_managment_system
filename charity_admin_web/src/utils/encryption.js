
import CryptoJS from "crypto-js";
let key = "dsgdfg3465hfdfjgdsjfgdafbbfgdsfgdsjybhrththt465"
const encryption = {
    encrypt(data) {
        // Encrypt
        let ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            `${key}`
        );
        return ciphertext
    },
    decrypt(data) {
        //Decrypt
        try {
            let bytes = CryptoJS.AES.decrypt(data, `${key}`);
            let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decryptedData)
        } catch (error) {
            console.log(error)
        }
    }
}

export default encryption