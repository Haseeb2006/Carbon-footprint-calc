import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <BookOpen size={32} />
          <h1 className="text-2xl font-bold ml-2">SummarEase</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-200">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
            {user ? (
              <>
                <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
                <li>
                  <button onClick={logout} className="hover:text-blue-200">Logout</button>
                </li>
                <li>
                  <Link to="/profile" className="flex items-center hover:text-blue-200">
                    <User size={24} className="mr-1" />
                    {user.name}
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/auth" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;