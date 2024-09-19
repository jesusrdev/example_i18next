import initTranslations from "@/app/i18n";
// import styles from "@/app/[locale]/page.module.css";
import ExampleClientComponent from "@/components/ExampleClientComponent";
import ExampleServerComponent from "@/components/ExampleServerComponent";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["test"];

export default async function Test({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>{t("title")}</h1>
        <ExampleClientComponent />
        <ExampleServerComponent ns={i18nNamespaces} locale={locale} />
      </main>
    </TranslationsProvider>
  );
}
