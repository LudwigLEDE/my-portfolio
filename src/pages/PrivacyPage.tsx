import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WarpBackground from '../components/visuals/WarpBackground';
import { useLanguage } from '../hooks/useLanguage';

export default function PrivacyPage() {
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
    <div className="min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      <WarpBackground />
      <Navbar scrollToSection={scrollToSection} />

      <main className="pt-32 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-mono uppercase tracking-wider text-white dark:text-white"
        >
            <ArrowLeft className="w-4 h-4" /> {language === 'en' ? 'Back' : 'Zurück'}
        </button>

        <div className="prose dark:prose-invert max-w-none bg-white/80 dark:bg-black/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-xl text-slate-600 dark:text-slate-300 shadow-xl">
          {language === 'de' ? (
            <>
              <h1 className="text-slate-900 dark:text-white">Datenschutzerklärung</h1>
              <h2 className="text-slate-800 dark:text-slate-200">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-slate-700 dark:text-slate-300">Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              
              <h2 className="text-slate-800 dark:text-slate-200">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-slate-700 dark:text-slate-300">Datenschutz</h3>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              
              <h3 className="text-slate-700 dark:text-slate-300">Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin
              </p>
              <p>E-Mail: ludwig.engelhardt@protonmail.com</p>

              <h3 className="text-slate-700 dark:text-slate-300">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.</p>

              <h2 className="text-slate-800 dark:text-slate-200">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-slate-700 dark:text-slate-300">Cookies</h3>
              <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.</p>
              
              <h3 className="text-slate-700 dark:text-slate-300">Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.</p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            </>
          ) : (
            <>
              <h1 className="text-slate-900 dark:text-white">Privacy Policy</h1>
              <h2 className="text-slate-800 dark:text-slate-200">1. An Overview of Data Protection</h2>
              <h3 className="text-slate-700 dark:text-slate-300">General Information</h3>
              <p>The following gives a simple overview of what happens to your personal information when you visit our website. Personal information is any data with which you could be personally identified.</p>

              <h2 className="text-slate-800 dark:text-slate-200">2. General Information and Mandatory Information</h2>
              <h3 className="text-slate-700 dark:text-slate-300">Data Protection</h3>
              <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.</p>

              <h3 className="text-slate-700 dark:text-slate-300">Notice Concerning the Party Responsible for this Website</h3>
              <p>The party responsible for processing data on this website is:</p>
              <p>
                Ludwig Engelhardt<br />
                Musterstraße 1<br />
                12345 Berlin
              </p>
              <p>Email: ludwig.engelhardt@protonmail.com</p>

              <h3 className="text-slate-700 dark:text-slate-300">Revocation of your Consent to the Processing of your Data</h3>
              <p>Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect. An informal email making this request is sufficient.</p>

              <h2 className="text-slate-800 dark:text-slate-200">3. Data Collection on our Website</h2>
              <h3 className="text-slate-700 dark:text-slate-300">Cookies</h3>
              <p>Our website uses cookies. Cookies are text files that are stored in a computer system via an Internet browser.</p>

              <h3 className="text-slate-700 dark:text-slate-300">Server Log Files</h3>
              <p>The provider of this website and its pages automatically collects and stores information in so-called server log files, which your browser communicates to us automatically.</p>
              <ul>
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of the server inquiry</li>
                <li>IP address</li>
              </ul>
              <p>This data will not be combined with data from other sources.</p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
