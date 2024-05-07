interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

const getData = async (): Promise<User[]> => {
  const url: string = 'https://reqres.in/api/users?page=2';
  const res = await fetch(url);
  const data = await res.json();

  return data.data;
}

( async () => {
  const response = await getData();
  response.forEach(user => {
    const {first_name, last_name, email} = user;
    console.log('Nombre: ' + first_name + ' ' + last_name);
    console.log('Correo: ' + email);
    console.log('---')
  });
})();
