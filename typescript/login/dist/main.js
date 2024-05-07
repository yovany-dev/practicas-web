"use strict";
const db = {
    email: 'yovanymorales.contact@gmail.com',
    password: '12345678',
};
const login = (data) => {
    const { email, password } = data;
    let status;
    if (email == db.email && password == db.password) {
        status = true;
    }
    else {
        status = false;
    }
    return status;
};
const res = login({
    email: 'yovanymorales.priv@gmail.com',
    password: 12345678,
});
if (res) {
    console.log('Welcome');
}
else {
    console.log('Gmail or password incorrect!');
}
