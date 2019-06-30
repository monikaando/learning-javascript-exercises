function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Wrong password! You have no access to the top secret file!";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}
var superSecretFile = {
    level: "top secret",
    opened: 0,
    password: 2,
    contents: "The next meeting with dr. X will take place in Paris."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "The next meeting with dr. X will take plase in London.");
secret = getSecret(superSecretFile, 2);
console.log(secret);