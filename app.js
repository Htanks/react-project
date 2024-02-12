import "./styles.css";
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import FooterSection from './FooterSection'

export default function App() {
  return (
    <div className="App">
      <h1>Freemote React is Here!</h1>
      <HeroSection />
      <ServicesSection />
      <FooterSection /> 
    </div>
  );
}
