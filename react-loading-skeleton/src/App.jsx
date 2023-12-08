import { useEffect, useState } from 'react';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/Error/Error';
import { Card } from './components/Card/Card';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(data => data.data)
      .then(users => {
        setUsers(users);
      })
      .catch((error) => {
        setError(error);
      });

      setLoading(false);
    }, 5000);
  },[]);

  return (
    <div className="card-container">
      {loading && <Loading />}
      {error && <Error type={error} />}
      {users.map(user => (
        <Card
          key={user.id}
          urlPhoto={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default App;
