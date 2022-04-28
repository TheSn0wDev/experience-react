import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Notification from "./pages/Notification";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useState} from "react";

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (<>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardApp />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  </>);
}

export default App;