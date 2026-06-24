import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    else if (form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters';

    if (!form.email) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';

    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';

    if (!form.confirmPassword) errs.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';

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
      await register(form.name, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setServerError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6) return { label: 'Too short', color: '#ba1a1a', width: '20%' };
    if (p.length < 8) return { label: 'Weak', color: '#c98f00', width: '40%' };
    if (p.match(/[A-Z]/) && p.match(/[0-9]/)) return { label: 'Strong', color: '#096c38', width: '100%' };
    return { label: 'Good', color: '#ab3500', width: '70%' };
  };

  const pwStrength = getPasswordStrength();

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
            Start Your
            <span>Culinary Journey</span>
          </h1>
          <p className="auth-hero-subtitle">
            Join thousands of food lovers who use Food Genie to discover, create, and share amazing recipes powered by AI.
          </p>
          <div className="auth-features">
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🆓</span>
              <span className="auth-feature-text">Free to get started, no credit card needed</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🎯</span>
              <span className="auth-feature-text">Recipes matched to your taste profile</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">📱</span>
              <span className="auth-feature-text">Access your recipes anywhere, anytime</span>
            </div>
            <div className="auth-feature-item">
              <span className="auth-feature-icon">🌍</span>
              <span className="auth-feature-text">Explore cuisines from around the world</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <p className="auth-form-greeting">Get started</p>
            <h2 className="auth-form-title">Create your account</h2>
            <p className="auth-form-subtitle">
              It's free and only takes a minute to set up.
            </p>
          </div>

          {serverError && (
            <div className="auth-alert auth-alert-error" style={{ marginBottom: '20px' }}>
              ⚠️ {serverError}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="signup-name">Full Name</label>
              <div className="form-input-wrapper">
                <input
                  id="signup-name"
                  type="text"
                  name="name"
                  className={`form-input${errors.name ? ' has-error' : ''}`}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <span className="form-input-icon">👤</span>
              </div>
              {errors.name && <span className="form-error">⚠ {errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="signup-email">Email Address</label>
              <div className="form-input-wrapper">
                <input
                  id="signup-email"
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
              <label className="form-label" htmlFor="signup-password">Password</label>
              <div className="form-input-wrapper">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className={`form-input${errors.password ? ' has-error' : ''}`}
                  placeholder="Minimum 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <span className="form-input-icon">🔒</span>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {pwStrength && (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ height: '4px', background: '#e0e0fc', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: pwStrength.width, background: pwStrength.color, borderRadius: '99px', transition: 'all 0.3s ease' }} />
                  </div>
                  <span style={{ fontSize: '11px', color: pwStrength.color, fontWeight: 600, marginTop: '4px', display: 'block' }}>
                    {pwStrength.label}
                  </span>
                </div>
              )}
              {errors.password && <span className="form-error">⚠ {errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="signup-confirm-password">Confirm Password</label>
              <div className="form-input-wrapper">
                <input
                  id="signup-confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  className={`form-input${errors.confirmPassword ? ' has-error' : ''}`}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <span className="form-input-icon">🔑</span>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <span className="form-error">⚠ {errors.confirmPassword}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary"
              id="signup-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="btn-spinner" />
                  Creating account...
                </>
              ) : (
                <>Create Account 🎉</>
              )}
            </button>

            {/* Divider */}
            <div className="auth-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">or sign up with</span>
              <div className="auth-divider-line" />
            </div>

            {/* Google */}
            <button type="button" className="btn-google" id="google-signup-btn">
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
          </form>

          <p className="auth-switch" style={{ marginTop: '24px' }}>
            Already have an account?{' '}
            <Link to="/login">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
