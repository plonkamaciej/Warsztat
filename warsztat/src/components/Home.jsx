import ContactForm from './ContactForm'
import CallToAction from './CallToAction'
import Nav from './nav.jsx'

function Home() {
  return (
    <div>
      <Nav />
        <ContactForm />
        <CallToAction />
        <footer className=' bg-black text-white fixed w-full text-center bottom-0'>FRONTEND: MACIEJ PŁONKA, MATEUSZ JOSZKO, KACPER KURWOSKI BACKEND: MICHAŁ KULESA, KATARZYNA RAKOCZYN, MARTYNA ŻUR, JOANNA WIEKERIA</footer>
    </div>
  );
}

export default Home;