export const checkValidateData = (email:any, password:any) => {
    
    console.log("inside check validate data");
    console.log(email);
    console.log(password);
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    //if this email is valid it will return true or false inside it
    console.log("Is Email Valid:", isEmailValid);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    console.log("Is Password Valid:", isPasswordValid);

    // const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    // console.log("is name valid: ", isNameValid);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    // if(!isNameValid) return "Name is not valid";

    return null;
};