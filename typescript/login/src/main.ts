type User = {
  email: string,
  password: string | number
}

const db: User = {
  email: 'yovanymorales.contact@gmail.com',
  password: '12345678',
}

const login = (data: User): boolean => {
  const {email, password} = data;
  let status: boolean;

  if (email == db.email && password == db.password) {
    status = true;
  } else {
    status = false;
  }
  return status;
}

const res: boolean = login({
  email: 'yovanymorales.priv@gmail.com',
  password: 12345678,
});

if (res) {
  console.log('Welcome');
} else {
  console.log('Gmail or password incorrect!');
}
