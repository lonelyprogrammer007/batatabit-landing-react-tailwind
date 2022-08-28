import Logo from '../../assets/components/Logo';
import BitcoinSvg from '../../assets/components/BitcoinSvg';
import TrendingDownSvg from '../../assets/components/TrendingDownSvg';
import TrendingUpSvg from '../../assets/components/TrendingUpSvg';
import './style.css';
import { BiDownArrow } from 'react-icons/bi';

const Main = () => {
  const cryptos = [
    {
      id: 1,
      crypto: 'Bitcoin',
      exchangePrice: '$ 1.96',
      state: 'up',
    },
    {
      id: 2,
      crypto: 'Ethereum',
      exchangePrice: '$ 0.07',
      state: 'down',
    },
    {
      id: 3,
      crypto: 'Ripple',
      exchangePrice: '$ 2.15',
      state: 'up',
    },
    {
      id: 4,
      crypto: 'Stellar',
      exchangePrice: '$ 4.96',
      state: 'down',
    },
  ];
  return (
    <main>
      <section
        style={{
          background: 'linear-gradient(207.8deg, #201e1c 16.69%, #f7931a 100%)',
        }}
        className="main__section-1"
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
      </section>
      <section className="flex flex-col items-center gap-4 bg-off-white p-4 text-center">
        <BitcoinSvg />
        <h2 className="main__title-2">
          Visibilizamos todas las tasas de cambio.
        </h2>
        <p className="main__subtitle-2">
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
        <div className="flex w-full max-w-xs flex-col gap-2 px-6">
          <h3 className="main__title-3 text-left">Monedas</h3>
          <div className="main__crypto-exchange-prices">
            {cryptos.map(({ id, crypto, exchangePrice, state }) => (
              <div key={id} className="flex p-2">
                <span className="flex-1 text-left font-medium text-grey-3">
                  {crypto}
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{exchangePrice}</span>
                  {state === 'up' ? <TrendingUpSvg /> : <TrendingDownSvg />}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-max gap-1 self-center rounded-lg bg-soft-orange px-2 py-1">
            <span className="font-bold">Actualizado:</span>
            <span>19 julio 23:45</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
