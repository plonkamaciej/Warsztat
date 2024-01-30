import React, { useState, useEffect, useContext } from 'react';
import Nav from './nav.jsx'
import { AuthContext } from './AuthProvider.jsx';
import Content from './content.jsx';
import axios from 'axios';

function Wypozyczalnia() {
  const [items, setItems] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  

useEffect(() => {
  axios.get('http://localhost:8080/carForRents')
        .then(response => setItems(response.data))
        .catch(error => console.error('Error:', error));
}, []);

  return (
    <div>
      <Nav />
      
      {isLoggedIn ? (
        
        
        <Content title="WYPOŻYCZALNIA SAMOCHODÓW">
        <p className="mb-6">Zapraszamy do naszej wypożyczalni samochodów, gdzie znajdziesz szeroki wybór pojazdów, od ekonomicznych modeli miejskich po luksusowe SUV-y. Oferujemy elastyczne warunki wynajmu, konkurencyjne ceny i profesjonalną obsługę, abyś mógł cieszyć się swobodą podróżowania.</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Nasza oferta wypożyczalni obejmuje:</h2>
            <ul className="list-disc pl-6">
              <li className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Szeroki Wybór Pojazdów</h3>
                <p>Posiadamy różnorodne modele samochodów, które spełnią Twoje potrzeby podróżne, niezależnie od celu podróży czy liczby pasażerów.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Elastyczne Warunki Wynajmu</h3>
                <p>Dostosujemy warunki wynajmu do Twoich indywidualnych potrzeb, oferując krótkoterminowe i długoterminowe umowy oraz różne opcje ubezpieczenia.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Profesjonalna Obsługa Klienta</h3>
                <p>Nasi pracownicy są gotowi pomóc Ci w wyborze odpowiedniego pojazdu i udzielić wszelkich niezbędnych informacji dotyczących wynajmu.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Bezpieczne i Wygodne Samochody</h3>
                <p>Dbamy o regularną konserwację i przeglądy techniczne naszych pojazdów, aby zapewnić Ci bezpieczną i komfortową podróż.</p>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Nasze samochody:</h3>
        <div>
                    {Array.isArray(items) && items.map((item, index) => (
                        <div key={index} className=' flex gap-5'>
                            <p>{item.mark}</p>
                            <p>{item.model}</p>
                            <p>{item.color}</p>
                            <p>ROCZNIK: {item.dateOfProduction}</p>
                            
                        </div>
                    ))}
                </div>

        <p className="mt-8">Nie czekaj dłużej! Skontaktuj się z nami i zarezerwuj swój samochód już dziś, aby rozpocząć niezapomnianą podróż!</p>
        </ Content>

      ) : (
        <p>You must be logged in to view this content.</p>
      )}

    </div>
  );
}

export default Wypozyczalnia;