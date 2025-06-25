import {AuthProvider, useAuth} from './context/AuthContext'
import MainApp from './MainApp'


export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}