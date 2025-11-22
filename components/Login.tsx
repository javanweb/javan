
import React, { useState } from 'react';
import { JavanWebiLogo, ArrowUturnLeftIcon } from './Icons';

interface LoginProps {
  onLoginSuccess: () => void;
  onBack: () => void;
  onGoToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onBack, onGoToRegister }) => {
  const [mobile, setMobile] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!mobile.trim()) {
      setError('شماره موبایل نمی‌تواند خالی باشد.');
      return;
    }

    if (!nationalId) {
      setError('کد ملی نمی‌تواند خالی باشد.');
      return;
    }

    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    let user = users.find((u: any) => u.mobile === mobile);

    if (!user) {
        // Create a temporary user if not found
        user = {
            mobile: mobile,
            password: nationalId,
            firstName: 'کاربر',
            lastName: 'جدید'
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    console.log(`Login successful for ${user.firstName}`);
    localStorage.setItem('currentUser', JSON.stringify({
        mobile: user.mobile,
        firstName: user.firstName,
        lastName: user.lastName
    }));
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-primary)'}}>
      <div className="max-w-md w-full rounded-2xl shadow-2xl shadow-gray-500/10 p-8 space-y-6 border relative" style={{ backgroundColor: 'var(--color-card-background)', borderColor: 'var(--color-border)'}}>
        <button
          onClick={onBack}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Back to homepage"
        >
          <ArrowUturnLeftIcon className="w-6 h-6" />
        </button>
        <div className="text-center">
          <JavanWebiLogo className="w-16 h-16 mx-auto text-[var(--color-primary)]" />
          <h2 className="mt-4 text-3xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
            ورود به حساب کاربری
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            شماره موبایل و کد ملی خود را وارد کنید
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-right" style={{ color: 'var(--color-text-secondary)' }}>
              شماره موبایل
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              autoComplete="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 sm:text-sm transition-all duration-200"
              style={{ direction: 'ltr', borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)', color: 'var(--color-text-primary)'}}
            />
          </div>
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-right" style={{ color: 'var(--color-text-secondary)' }}>
              کد ملی (به عنوان رمز عبور)
            </label>
            <input
              id="nationalId"
              name="nationalId"
              type="password"
              autoComplete="current-password"
              required
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 sm:text-sm text-left transition-all duration-200"
              style={{ direction: 'ltr', borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)', color: 'var(--color-text-primary)'}}
            />
          </div>

          {error && (
            <p className="text-center text-sm text-red-600">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ color: 'var(--color-text-on-primary)'}}
            >
              ورود
            </button>
          </div>
          <div className="text-center mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)'}}>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              حساب کاربری ندارید؟{' '}
              <button
                type="button"
                onClick={onGoToRegister}
                className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
              >
                ثبت نام کنید
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
