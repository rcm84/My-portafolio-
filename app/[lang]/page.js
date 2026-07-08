import { getDictionary } from "../../lib/dictionary";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Proof from "../../components/Proof";
import Projects from "../../components/Projects";
import HowIBuild from "../../components/HowIBuild";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export default function LangHome({ params }) {
  const lang = params.lang === "en" ? "en" : "es";
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="max-w-content mx-auto px-6">
        <Hero lang={lang} dict={dict} />
        <Proof lang={lang} dict={dict} />
        <Projects lang={lang} dict={dict} />
        <HowIBuild lang={lang} dict={dict} />
        <CTA lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
