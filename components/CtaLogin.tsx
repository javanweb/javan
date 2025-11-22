
import React, { useState } from 'react';
import { JavanWebiLogo, ArrowUturnLeftIcon } from './Icons';

interface CtaLoginProps {
  onBack: () => void;
  onGoToRegister: () => void;
  onLoginSuccess: () => void;
}

const CtaLogin: React.FC<CtaLoginProps> = ({ onBack, onGoToRegister, onLoginSuccess }) => {
  const [nationalId, setNationalId] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const validateMobile = (mobile: string) => {
    return /^09\d{9}$/.test(mobile);
  };

  const validateNationalId = (id: string) => {
    return /^\d{10}$/.test(id);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateNationalId(nationalId)) {
        setError('کد ملی باید ۱۰ رقم باشد.');
        return;
    }

    if (!validateMobile(mobile)) {
      setError('شماره موبایل وارد شده صحیح نیست. (مثال: 09123456789)');
      return;
    }

    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    let user = users.find((u: any) => u.mobile === mobile);

    if (!user) {
        // Implicitly register the user for demo purposes
        user = {
            mobile: mobile,
            password: nationalId,
            firstName: 'کاربر',
            lastName: 'جدید'
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    localStorage.setItem('isLoggedIn', 'true');
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
            ورود به سیستم
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            کد ملی و شماره موبایل خود را وارد کنید
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-right" style={{ color: 'var(--color-text-secondary)' }}>
              کد ملی
            </label>
            <input
              id="nationalId"
              name="nationalId"
              type="text"
              maxLength={10}
              required
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value.replace(/\D/g, ''))}
              className="mt-1 appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 sm:text-sm text-left transition-all duration-200"
              style={{ direction: 'ltr', borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)', color: 'var(--color-text-primary)'}}
            />
          </div>
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
              style={{color: 'var(--color-text-on-primary)'}}
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

export default CtaLogin;
