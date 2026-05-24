import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WarpBackground from "../components/visuals/WarpBackground";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import { useLanguage } from "../hooks/useLanguage";

export default function ImprintPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      <ErrorBoundary>
        <WarpBackground />
      </ErrorBoundary>
      <Navbar scrollToSection={scrollToSection} />

      <main className="pt-32 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-mono uppercase tracking-wider text-white dark:text-white"
        >
          <ArrowLeft className="w-4 h-4" />{" "}
          {language === "en" ? "Back" : "Zurück"}
        </button>

        <div className="prose dark:prose-invert max-w-none bg-white/80 dark:bg-black/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-xl text-slate-600 dark:text-slate-300 shadow-xl">
          {language === "de" ? (
            <>
              <h1 className="text-slate-900 dark:text-white">Impressum</h1>
              <h2 className="text-slate-800 dark:text-slate-200">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Ludwig Engelhardt
                <br />
                Berlin
                <br />
                Deutschland
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">Kontakt</h2>
              <p>E-Mail: ludwig.engelhardt@gmail.com</p>

              <h2 className="text-slate-800 dark:text-slate-200">
                Redaktionell verantwortlich
              </h2>
              <p>
                Ludwig Engelhardt
                <br />
                Berlin
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-slate-900 dark:text-white">Imprint</h1>
              <h2 className="text-slate-800 dark:text-slate-200">
                Information according to § 5 TMG
              </h2>
              <p>
                Ludwig Engelhardt
                <br />
                Berlin
                <br />
                Germany
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">Contact</h2>
              <p>Email: ludwig.engelhardt@gmail.com</p>

              <h2 className="text-slate-800 dark:text-slate-200">
                Person responsible for editorial
              </h2>
              <p>
                Ludwig Engelhardt
                <br />
                Berlin
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">
                EU Dispute Resolution
              </h2>
              <p>
                The European Commission provides a platform for online dispute
                resolution (ODR):
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Our e-mail address can be found above in the site notice.
              </p>

              <h2 className="text-slate-800 dark:text-slate-200">
                Dispute Resolution Proceedings in front of a Consumer
                Arbitration Board
              </h2>
              <p>
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
