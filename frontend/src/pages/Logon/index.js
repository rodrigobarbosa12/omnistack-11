import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import heroImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

const Logon = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const { data: { name } } = await api.post('session', { id });
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', name);
        history.push('/profile');
      } catch (error) {
        alert('Falha no login, tente novamente');
      }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>

            <input
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
            </Link>
        </form>
      </section>

        <img src={heroImage} alt="Heroes" />
    </div>
  );
}

export default Logon;
