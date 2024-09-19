import initTranslations from "@/app/i18n";

export default async function ExampleServerComponent({ locale, ns }) {
  const { t } = await initTranslations(locale, ns);

  return <h3>{t("greeting")}</h3>;
}
