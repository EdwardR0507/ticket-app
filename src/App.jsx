import { UIProvider } from "./context/UIContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <UIProvider>
      <AppRouter />
    </UIProvider>
  );
}

export default App;
