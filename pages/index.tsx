import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>

        <input type="text" name="username" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        <input type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>

        <button type="submit">Entrar</button>

      </form>
    </main>
  )
}
