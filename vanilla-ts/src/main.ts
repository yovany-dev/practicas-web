import './style.css'

interface User  {
  id: number,
  first_name: string,
  email: string,
  gender: string,
}

const getData = async (url: string): Promise<User[]> => {
  const res = await fetch(url);
  return await res.json();
}

const createUser = async (url: string, data: Omit<User, "id">): Promise<User> => {
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    return res.json();
}

const updateUser = async (url: string): Promise<void> => {
    const options = {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: 'Pedro',
      email: 'pedro@hotmail.com',
      gender: 'Masculino',
    }),
    };
  fetch(url, options);
}

const deleteUser = async (url: string): Promise<void> => {
  const options = {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    },};
  fetch(url, options);
}

( () => {
  const get = document.querySelector('.get') as Element;
  const post = document.querySelector('.post') as Element;
  const put = document.querySelector('.put') as Element;
  const remove = document.querySelector('.delete') as Element;
  const output = document.getElementById('output') as HTMLElement;

  const clearScreen = (): void => {
    output.innerHTML = '';
  }

  const getUserHandler = async (): Promise<void> => {
    const users = await getData('http://localhost:5000/users');

    output.innerHTML = `<h2 class="title">Lista de usuarios</h2>`;
    users.forEach(user => {
      output.innerHTML += `
      <h3>Nombre: ${user.first_name}</h3>
      <h3>Correo: ${user.email}</h3>
      `;
    })
  }

  const postHandler = async (): Promise<void> => {
    output.innerHTML = `<h2 class="title">Se creo el usuario</h2>`;
    const res = await createUser('http://localhost:5000/users', {
      first_name: 'Yovany',
      email: 'yovanymorales.contact@gmail.com',
      gender: 'Masculino'
    });

    output.innerHTML += `
      <h3>Nombre: ${res.first_name}</h3>
      <h3>Correo: ${res.email}</h3>
      `;
  }

  const putHandler = async () => {
    output.innerHTML = `<h2 class="title">Se actualizo el usuario</h2>`;
    updateUser('http://localhost:5000/users/2');
  }

  const deleteHandler = async () => {
    output.innerHTML = `<h2 class="title">Se elimino el usuario</h2>`;
    deleteUser('http://localhost:5000/users/2')
  }

  get.addEventListener('click', () => {
    clearScreen();
    getUserHandler();
  });

  post.addEventListener('click', () => {
    clearScreen();
    postHandler();
  });

  put.addEventListener('click', () => {
    clearScreen();
    putHandler();
  });

  remove.addEventListener('click', () => {
    clearScreen();
    deleteHandler();
  });
})();
