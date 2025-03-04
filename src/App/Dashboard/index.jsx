import DashboardCard from '../Components/DashboardCard/DashboardCard';
import './styles.css';
import personalCard from '../Images/tiles/personalcard.svg';
import excercises from '../Images/excercises.svg';
import book from '../Images/book-saved.svg';
import faq from '../Images/faq.svg';
import code from '../Images/code.svg';
import { useState } from 'react';
import wave from '../Images/wave.svg';
import Cookies from '../Components/Cookies/Cookies';

export const Dashboard = () => {
  const [availableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={excercises} alt="excercises" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={book} alt="blog" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={code} alt="code" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={faq} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);
  return (
    <div className="dashboard">
     
      <header className="dash-head">
        {' '}
        <img src={wave} alt="" /> <h3>Hej, tu Michał</h3>
        <p className="subtitle">
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności{' '}
        </p>
      </header>

      <div className="links">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
      <aside className='about-me'>
        testowy profile
      </aside>
    </div>
  );
};
