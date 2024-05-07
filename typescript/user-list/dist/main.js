"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://reqres.in/api/users?page=2';
    const res = yield fetch(url);
    const data = yield res.json();
    return data.data;
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield getData();
    response.forEach(user => {
        const { first_name, last_name, email } = user;
        console.log('Nombre: ' + first_name + ' ' + last_name);
        console.log('Correo: ' + email);
        console.log('---');
    });
}))();
