import Nav from './nav.jsx'
import Content from './content.jsx';

function pomoc() {
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

<p className="mt-8">Nie musisz martwić się, gdy zdarzy Ci się awaria drogowa. Skontaktuj się z nami, a my zajmiemy się resztą, abyś mógł jak najszybciej wrócić na drogę!</p>
      </Content>
    </div>
  );
}

export default pomoc;