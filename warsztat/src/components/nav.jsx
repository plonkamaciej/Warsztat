import Header from './Header.jsx'
import Card from './Card.jsx'
import image3 from "../assets/bg-image.jpg"
import image2 from "../assets/imageCard2.webp";
import image1 from "../assets/imageCard1.jpeg";


function Nav() {
  return (
    <div>
      <Header/>
        <div className='flex justify-evenly m-8'>
        <Card title="Naprawy" image={image1} route="Naprawy">Serwis</Card>
        <Card title="Pomoc drogowa" image={image2} route="pomoc">Pomoc drogowa</Card>
        <Card title="Wypożyczalnia" image={image3} route="wypozyczalnia">Wypożyczalnia</Card>
        </div>
    </div>
  );
}

export default Nav;