
import { GoogleOAuthProvider } from "@react-oauth/google";
//components

import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = "385762924656-j9l152jitaaf9s4a57oao1h1dd3h263b.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
