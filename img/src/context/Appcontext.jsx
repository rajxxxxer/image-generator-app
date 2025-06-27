import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

export const AppcontextProvider = ({ children }) => {
 const navigate= useNavigate()
  const [credit, setCredit] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [showlogin, setShowlogin] = useState(false);
  const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(`${backendurl}/api/user/credits`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (data?.success) {
        setCredit(data.credits);
        if (data.user) setUser(data.user);
      } else {
        toast.error(data?.message || 'Failed to load credits');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  const generateImage = async (prompt) => {
  try {
    const tokenToSend = localStorage.getItem('token');

    const { data } = await axios.post(
      `${backendurl}/api/image/generate-image`,
      { prompt },
      {
        headers: {
          Authorization: `Bearer ${tokenToSend}`
        }
      }
    );

    if (data.success) {
      loadCreditData();
      return data.image;
    } else {
      toast.error(data.message);
      if (data.remainingCredits === 0) {
        navigate('/buy');
      }
      return null;
    }
  } catch (err) {
    if (err.response?.status === 401) {
      toast.error("Session expired. Please login again.");
      setToken('');
      setUser(null);
      setShowlogin(true);
    } else {
      toast.error(err.response?.data?.message || err.message);
    }
    return null;
  }
};


  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  return (
    <Appcontext.Provider
      value={{
        user,
        setUser,
        showlogin,
        setShowlogin,
        backendurl,
        token,
        setToken,
        credit,
        setCredit,
        logout,
        generateImage, // ✅ added here
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
