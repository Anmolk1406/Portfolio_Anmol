import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Experience from '../Experience';
import Footer from '../Footer';
import Realm from '../Realm';

function Home() {
    return(
        <>
            <HeroSection />
            <Realm />
            <Cards />
            <Experience />
            <Footer />
        </>
    )
}


export default Home;