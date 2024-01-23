import ContactForm from './ContactForm'
import CallToAction from './CallToAction'
import Nav from './nav.jsx'

function Home() {
  return (
    <div>
      <Nav />
        <ContactForm />
        <CallToAction />
    </div>
  );
}

export default Home;