import Logo from '../../assets/components/Logo';
import './style.css';
import { BiDownArrow } from 'react-icons/bi';

const Main = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(207.8deg, #201e1c 16.69%, #f7931a 100%)',
      }}
      className="main"
    >
      <Logo />
      <h1 className="main__title">
        La próxima revolución en el intercambio de criptomonedas.
      </h1>
      <p className="main__subtitle">
        Batabit te ayuda a navegar entre los diferentes precios y tendencias.
      </p>
      <a className="main__call-to-action" href="#plans">
        <span className="main__action-text">Conoce Nuestros Planes</span>
        <BiDownArrow />
      </a>
    </div>
  );
};

export default Main;
