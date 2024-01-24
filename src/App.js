import { useState, createContext } from "react";
import Layout from "./layout/Layout";
// rtl
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl",
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create the context
export const MyContext = createContext();

// Create the provider component
const MyContextProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([
    {
      title: "ایجاد پروژه ریکت",
      date: "1402-12-1",
      statusId: 3,
    },
    {
      title: "نصب نیازمندی های پروژه ریکت",
      date: "1402-12-2",
      statusId: 1,
    },
    {
      title: "تمام کردن طراحی پروژه بلاگ",
      date: "1402-12-1",
      statusId: 2,
    },
    {
      title: "جلسه صبحگاهی",
      date: "1402-12-2",
      statusId: 1,
    },
    {
      title: "نوشتن گزارشکار",
      date: "1402-12-2",
      statusId: 2,
    },
  ]);

  const updateDataArray = (updatedArray) => {
    setDataArray(updatedArray);
  };

  const contextValue = {
    dataArray,
    updateDataArray,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

function App() {
  return (
    <MyContextProvider>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </CacheProvider>
    </MyContextProvider>
  );
}

export default App;
