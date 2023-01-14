import { RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";
import locales from "./const/locales";
import router from "./const/router";
import "./index.css";
import { createContext, useState } from "react";
import { SupportedLanguages } from "./const/locales/types";

export const AppContext = createContext<{
  locale: SupportedLanguages;
  setLocale: React.Dispatch<React.SetStateAction<SupportedLanguages>>;
}>({
  locale: "en",
  setLocale: () => {},
});

function App() {
  const [locale, setLocale] = useState<SupportedLanguages>("en");

  return (
    <IntlProvider
      onError={(error) => console.log(error)}
      locale={locale}
      messages={locales[locale]}
    >
      <AppContext.Provider value={{ locale, setLocale }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </IntlProvider>
  );
}

export default App;
