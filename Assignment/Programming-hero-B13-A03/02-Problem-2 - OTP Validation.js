function validOtp(otp) {
    if(typeof otp !== "string"){
    return "Invalid";
    }
    if(otp.startsWith("ph-") && otp.length === 8){
        return true;
    }
    return false;
}

console.log(validOtp("ph-53534"));