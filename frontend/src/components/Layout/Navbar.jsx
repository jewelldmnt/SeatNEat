import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { supabase } from "./Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("User Info:", user); // Debugging

      if (user) {
        setUser(user);
      }
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/auth");
  };

  const handleLogoutClick = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[4rem] w-full bg-primary shadow-md">
      <div className="container flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="37"
            viewBox="0 0 100 37"
            fill="none"
          >
            <rect
              x="1"
              y="1"
              width="98"
              height="35"
              fill="#E1E1E1"
              stroke="#55565A"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="106.2"
              y2="-1"
              transform="matrix(0.938633 0.344916 -0.734407 0.678709 0 0.370003)"
              stroke="#55565A"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="106.2"
              y2="-1"
              transform="matrix(-0.938633 0.344916 -0.734407 -0.678709 99.6825 0)"
              stroke="#55565A"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={
                  user?.user_metadata?.avatar_url || "https://placehold.co/400"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <span className="text-black font-medium">
                {user?.user_metadata?.full_name?.split(" ")[0] || user?.email}
              </span>
              <Button variant="filled" size="sm" onClick={handleLogoutClick}>
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="filled" size="sm" onClick={handleLoginClick}>
                Log In
              </Button>
              <Button variant="filled" size="sm" onClick={handleLoginClick}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
