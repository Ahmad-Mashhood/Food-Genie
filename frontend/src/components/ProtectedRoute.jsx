import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fbf8ff',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <span style={{ fontSize: '48px', animation: 'bounce 1.5s ease infinite' }}>🧞</span>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#8d7168', fontSize: '14px' }}>
          Loading Food Genie...
        </p>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}
