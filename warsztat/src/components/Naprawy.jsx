import Nav from './nav.jsx'
import Content from './content.jsx';

function Naprawy() {
  return (
    <div>
      <Nav />
      <Content title="Profesjonalne Naprawy Samochodów">
      <p className="mb-6">Witaj w naszym warsztacie naprawczym, gdzie dbamy o sprawność i bezpieczeństwo Twojego pojazdu jak o nasz własny. Nasz zespół doświadczonych mechaników specjalizuje się w szerokim zakresie usług naprawczych, od drobnych napraw po kompleksowe naprawy mechaniczne i diagnostykę.</p>

<div className="space-y-6">
  <div>
    <h2 className="text-xl font-semibold mb-2">Nasza oferta obejmuje:</h2>
    <ul className="list-disc pl-6">
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Diagnostykę Komputerową</h3>
        <p>Dzięki zaawansowanym narzędziom diagnostycznym jesteśmy w stanie szybko zlokalizować i rozwiązać wszelkie problemy związane z elektroniką i mechaniką pojazdu.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Naprawy Mechaniczne</h3>
        <p>Nasi wykwalifikowani mechanicy zajmują się naprawami silników, układów zawieszenia, hamulców, skrzyń biegów i wielu innych elementów mechanicznych.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Naprawy Blacharsko-Lakiernicze</h3>
        <p>Oferujemy kompleksowe usługi blacharsko-lakiernicze, od usuwania drobnych rys i wgnieceń po kompleksowe naprawy po wypadkach.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Konserwacja i Serwisowanie</h3>
        <p>Regularne serwisowanie jest kluczowe dla utrzymania samochodu w doskonałej kondycji. Oferujemy pełen zakres usług konserwacyjnych, aby Twój pojazd pozostał bezawaryjny i bezpieczny na drodze.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Naprawy Elektryczne</h3>
        <p>Nasi specjaliści elektryki samochodowej zajmują się diagnozowaniem i naprawą wszelkich problemów związanych z instalacją elektryczną w Twoim pojeździe.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Wymiana Opon i Naprawa Układu Klimatyzacji</h3>
        <p>Zapewniamy szybką i fachową wymianę opon oraz serwis i naprawę układu klimatyzacji, abyś mógł cieszyć się komfortową jazdą przez cały rok.</p>
      </li>
    </ul>
  </div>
</div>

<p className="mt-8">Niezależnie od tego, czy potrzebujesz drobnej naprawy, przeglądu technicznego czy kompleksowej naprawy po wypadku, możesz polegać na naszej wiedzy, doświadczeniu i zaangażowaniu w zapewnienie pełnej satysfakcji klienta. Skontaktuj się z nami już dziś, aby umówić się na wizytę w naszym warsztacie naprawczym!</p>
      </Content>
    </div>
  );
}

export default Naprawy;