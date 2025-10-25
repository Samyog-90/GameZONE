import React, { useState, useEffect, useCallback, JSX } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";       // ✅ default export
import Games, { Game } from "./components/Games";
import Reviews from "./components/Reviews";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import icons from lucide-react (recommended)
import { X as CloseIcon, User, Mail as EmailIcon, Lock } from "lucide-react";

// ---------------- InputField ----------------
interface InputFieldProps {
  id: string;
  type: string;
  label: string;
  icon: React.ReactNode;
  autoComplete?: string;
}

const InputField = ({ id, type, label, icon, autoComplete }: InputFieldProps) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="absolute -top-2.5 left-3 px-1 bg-dark-secondary text-xs text-gray-400 z-10"
    >
      {label}
    </label>
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pointer-events-none">
      {icon}
    </div>
    <input
      id={id}
      name={id}
      type={type}
      required
      autoComplete={autoComplete}
      className="w-full bg-dark-tertiary border border-gray-700 rounded-md py-3 pl-12 pr-4 
                 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
    />
  </div>
);

// ---------------- AuthModal ----------------
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [formType, setFormType] = useState<"login" | "register">("login");
  const [isRendering, setIsRendering] = useState(false);

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      const timer = setTimeout(() => setIsRendering(true), 10);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleEsc);
      };
    } else {
      setIsRendering(false);
    }
  }, [isOpen, handleEsc]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setFormType("login"), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isRendering) return null;

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login functionality is demo only.");
    onClose();
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Registration functionality is demo only.");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black 
                  transition-opacity duration-300 ${
                    isRendering && isOpen ? "bg-opacity-75" : "bg-opacity-0"
                  }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-dark-secondary rounded-lg shadow-xl w-full max-w-md p-8 text-white 
                    transition-all duration-300 ${
                      isRendering && isOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2
          id="auth-modal-title"
          className="text-3xl font-bold text-center mb-2 
                     bg-gradient-to-r from-brand-purple to-brand-pink text-transparent bg-clip-text"
        >
          {formType === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {formType === "login"
            ? "Sign in to continue"
            : "Get started with a free account"}
        </p>

        {/* Forms */}
        {formType === "login" ? (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <InputField
              id="email"
              type="email"
              label="Email Address"
              icon={<EmailIcon className="w-4 h-4" />}
              autoComplete="email"
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              icon={<Lock className="w-4 h-4" />}
              autoComplete="current-password"
            />
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-brand-pink hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-purple to-brand-pink 
                         text-white font-bold py-3 px-4 rounded-md uppercase tracking-wider 
                         hover:opacity-90 transition-opacity"
            >
              Log In
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <InputField
              id="username"
              type="text"
              label="Username"
              icon={<User className="w-4 h-4" />}
              autoComplete="username"
            />
            <InputField
              id="email-register"
              type="email"
              label="Email Address"
              icon={<EmailIcon className="w-4 h-4" />}
              autoComplete="email"
            />
            <InputField
              id="password-register"
              type="password"
              label="Password"
              icon={<Lock className="w-4 h-4" />}
              autoComplete="new-password"
            />
            <InputField
              id="confirm-password"
              type="password"
              label="Confirm Password"
              icon={<Lock className="w-4 h-4" />}
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-purple to-brand-pink 
                         text-white font-bold py-3 px-4 rounded-md uppercase tracking-wider 
                         hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle */}
        <div className="text-center mt-6">
          <p className="text-gray-400">
            {formType === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() =>
                setFormType(formType === "login" ? "register" : "login")
              }
              className="font-semibold text-brand-pink hover:underline"
            >
              {formType === "login" ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------- App ----------------
export type Page = "Home" | "Games" | "Reviews" | "News" | "Contact";

const App: React.FC = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case "Home":
        return <Hero />;     // 
      case "Games":
        return <Games cartItems={[]} onAddToCart={function (game: Game): void {
            throw new Error("Function not implemented.");
        } } />;
      case "Reviews":
        return <Reviews />;
      case "News":
        return <News />;
      case "Contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-dark-primary font-sans flex flex-col min-h-screen">
      <Header
              currentPage={currentPage}
              onNavigate={setCurrentPage}
              onLoginRegisterClick={() => setAuthModalOpen(true)} cartItemCount={0} onCartClick={function (): void {
                  throw new Error("Function not implemented.");
              } }      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default App;
