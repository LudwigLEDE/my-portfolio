import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WarpBackground from '../components/visuals/WarpBackground';
import { useLanguage } from '../hooks/useLanguage';

export default function ImprintPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen text-white font-sans relative overflow-x-hidden bg-black selection:bg-blue-500 selection:text-white">
      <WarpBackground />
      <Navbar scrollToSection={scrollToSection} />

      <main className="pt-32 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-mono uppercase tracking-wider"
        >
            <ArrowLeft className="w-4 h-4" /> {language === 'en' ? 'Back' : 'Zurück'}
        </button>

        <div className="prose prose-invert max-w-none bg-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
          {language === 'de' ? (
            <>
              <h1>Impressum</h1>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin<br />
                Deutschland
              </p>

              <h2>Kontakt</h2>
              <p>
                E-Mail: ludwig.engelhardt@protonmail.com<br />
                Telefon: +49 (0) 123 456789
              </p>

              <h2>Redaktionell verantwortlich</h2>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin
              </p>

              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h1>Imprint</h1>
              <h2>Information according to § 5 TMG</h2>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin<br />
                Germany
              </p>

              <h2>Contact</h2>
              <p>
                Email: ludwig.engelhardt@protonmail.com<br />
                Phone: +49 (0) 123 456789
              </p>

              <h2>Person responsible for editorial</h2>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin
              </p>

              <h2>EU Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR): 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
                Our e-mail address can be found above in the site notice.
              </p>

              <h2>Dispute Resolution Proceedings in front of a Consumer Arbitration Board</h2>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
