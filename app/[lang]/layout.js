import { getDictionary } from "../../lib/dictionary";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://raymercastaneda.dev/${params.lang}`,
      languages: {
        es: "https://raymercastaneda.dev/es",
        en: "https://raymercastaneda.dev/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default function LangLayout({ children, params }) {
  return <div lang={params.lang}>{children}</div>;
}
