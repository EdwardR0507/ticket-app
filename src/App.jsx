import { SocketProvider } from "./context/SocketContext";
import { UIProvider } from "./context/UIContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <SocketProvider>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </SocketProvider>
  );
}

export default App;
