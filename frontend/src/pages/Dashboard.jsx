import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <span className="dashboard-emoji">🧞</span>
        <h1 className="dashboard-title">Welcome to Food Genie!</h1>
        <p className="dashboard-subtitle">
          Your AI-powered culinary assistant is ready to help you discover amazing recipes.
        </p>
        {user && (
          <div className="dashboard-user-badge">
            👤 {user.name}
          </div>
        )}
        <p style={{ fontSize: '14px', color: '#594139', marginBottom: '32px' }}>
          📧 {user?.email}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="dashboard-explore-btn"
            className="btn-primary"
            style={{ width: 'auto', padding: '12px 28px' }}
          >
            🍽️ Explore Recipes
          </button>
          <button
            id="dashboard-logout-btn"
            className="btn-logout"
            onClick={logout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
