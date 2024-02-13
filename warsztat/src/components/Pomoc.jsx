import React, { useState, useEffect } from 'react';
import Nav from './nav.jsx'
import Content from './content.jsx';
import axios from 'axios';
function pomoc() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/carForReplace')
          .then(response => setItems(response.data))
          .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Nav />
      <Content title="POMOC DROGOWA">
      <p className="mb-6">Nasi profesjonalni kierowcy i mechanicy są gotowi zapewnić Ci szybką i skuteczną pomoc drogową 24 godziny na dobę, 7 dni w tygodniu. Bez względu na to, czy masz problem z awarią silnika, przebitą oponą, zgasłym akumulatorem czy potrzebujesz holowania, jesteśmy tutaj, aby Ci pomóc.</p>

<div className="space-y-6">
  <div>
    <h2 className="text-xl font-semibold mb-2">Nasza pomoc drogowa obejmuje:</h2>
    <ul className="list-disc pl-6">
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Holowanie Pojazdów</h3>
        <p>Nasi doświadczeni kierowcy i specjalistyczny sprzęt zapewnią bezpieczne i skuteczne holowanie Twojego pojazdu do wybranego miejsca.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Naprawy Na Miejscu</h3>
        <p>Jeśli to możliwe, nasz zespół mechaniczny podejmie próbę naprawy Twojego pojazdu na miejscu, abyś mógł kontynuować podróż.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Obsługa Punktów Pomocy Drogowej</h3>
        <p>Posiadamy sieć punktów pomocy drogowej, gdzie możesz uzyskać natychmiastową pomoc w razie potrzeby.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Wymiana Koła</h3>
        <p>Nasi specjaliści szybko i sprawnie wymienią przebitą oponę na koło zapasowe lub nową oponę, abyś mógł kontynuować podróż.</p>
      </li>
    </ul>
  </div>
</div>

<h3 className="text-lg font-semibold mb-2">Nasze samochody:</h3>
        <table className="border-2 border-black border-collapse">
    <thead className="border-2  border-black border-collapse">
        <tr className="border-2  border-black border-collapse">

            <th className="border-2  border-black border-collapse p-2">Mark</th>
            <th className="border-2  border-black border-collapse p-2">Model</th>
            <th className="border-2  border-black border-collapse p-2">Date of Production</th>
            <th className="border-2  border-black border-collapse p-2">Dostępność</th>
        </tr>
    </thead>
    <tbody className="border-2  border-black border-collapse">
        {Array.isArray(items) && items.map((item, index) => (
            <tr className="border-2  border-black border-collapse" key={index}>

                <td className="border-2  border-black border-collapse p-2">{item.mark}</td>
                <td className="border-2  border-black border-collapse p-2">{item.model}</td>
                <p className='p-2 text-center'>{item.dateOfProduction}</p>
                <td className="border-2  border-black border-collapse p-2">{item.location}</td> { /* todo zmienić na nie jeśli potwierdzone przez admina*/ }
                {/* TODO: dodać przycisk/lite z wyborem samochodu do wypożyczania - zapytanie pojawi się w panelu - admin może potwierdzić - wtedy zmieni się dostępność u clienta */}
               
            </tr>
        ))}
    </tbody>
</table>

<p className="mt-8">Nie musisz martwić się, gdy zdarzy Ci się awaria drogowa. Skontaktuj się z nami, a my zajmiemy się resztą, abyś mógł jak najszybciej wrócić na drogę!</p>
      </Content>
    </div>
  );
}

export default pomoc;