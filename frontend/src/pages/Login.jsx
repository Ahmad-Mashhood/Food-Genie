import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setServerError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* LEFT PANEL */}
      <div className="auth-left">
        <div className="auth-left-blob auth-left-blob-1" />
        <div className="auth-left-blob auth-left-blob-2" />
        <div className="auth-left-content">
          <div className="auth-logo">
            <div className="auth-logo-icon">🧞</div>
            <span className="auth-logo-text">Food Genie</span>
          </div>
          <h1 className="auth-hero-title">
            Your Personal
            <span>AI Chef</span>
          </h1>
          <p className="auth-hero-subtitle">
            Discover thousands of recipes tailored to your taste, ingredients, and dietary preferences — powered by AI.
          </p>
          <div className="auth-features">
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🍽️</span>
              <span className="auth-feature-text">Personalized recipe recommendations</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🤖</span>
              <span className="auth-feature-text">AI-powered ingredient substitutions</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">⏱️</span>
              <span className="auth-feature-text">Quick meals for any occasion</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🥗</span>
              <span className="auth-feature-text">Dietary & allergy-friendly filtering</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <p className="auth-form-greeting">Welcome back</p>
            <h2 className="auth-form-title">Sign in to your account</h2>
            <p className="auth-form-subtitle">
              Enter your credentials to continue your culinary journey.
            </p>
          </div>

          {serverError && (
            <div className="auth-alert auth-alert-error" style={{ marginBottom: '20px' }}>
              ⚠️ {serverError}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">Email Address</label>
              <div className="form-input-wrapper">
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  className={`form-input${errors.email ? ' has-error' : ''}`}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <span className="form-input-icon">✉️</span>
              </div>
              {errors.email && <span className="form-error">⚠ {errors.email}</span>}
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="login-password">Password</label>
              <div className="form-input-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className={`form-input${errors.password ? ' has-error' : ''}`}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <span className="form-input-icon">🔒</span>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <span className="form-error">⚠ {errors.password}</span>}
            </div>

            {/* Remember Me / Forgot */}
            <div className="form-options">
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  id="remember-me"
                />
                Remember me
              </label>
              <span className="form-link">Forgot password?</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary"
              id="login-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="btn-spinner" />
                  Signing in...
                </>
              ) : (
                <>Sign In 🧞</>
              )}
            </button>

            {/* Divider */}
            <div className="auth-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">or continue with</span>
              <div className="auth-divider-line" />
            </div>

            {/* Google Button */}
            <button type="button" className="btn-google" id="google-login-btn">
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Switch to Signup */}
          <p className="auth-switch" style={{ marginTop: '24px' }}>
            Don&apos;t have an account?{' '}
            <Link to="/signup">Create one for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
