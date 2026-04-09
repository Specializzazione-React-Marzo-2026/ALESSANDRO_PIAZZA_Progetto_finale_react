import { createContext, useEffect, useState } from "react";
import supabase from "../database/supabase";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const getUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { user } = session;
      setUser(user ?? null);
      const { data: profile } = await supabase
        .from("profiles")
        .select()
        .eq("id", user.id);
      setProfile(profile[0] ?? null);
    } else {
      setUser(null);
      setProfile(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  const signUp = async (newUser) => {
    const { data, error } = await supabase.auth.signUp(newUser);
    if (error) {
      console.error("SignUp error:", error.message);
      return { error };
    }
    if (data?.user) {
      setUser(data.user);
    }
    if (data?.session) {
      await getUser();
    }
    return { data };
  };

  const login = async (loggedUser) => {
    const { data, error } = await supabase.auth.signInWithPassword(loggedUser);
    if (error) {
      console.error("Login error:", error.message);
      return { error };
    }
    if (data?.user) {
      setUser(data.user);
    }
    if (data?.session) {
      await getUser();
    }
    return { data };
  };

  return (
    <UserContext.Provider value={{ user, profile, signOut, signUp, login }}>
      {children}
    </UserContext.Provider>
  );
}