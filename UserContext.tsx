import { FC, ReactNode, createContext, useContext, useState } from "react";

export type Provider = "google" | "facebook";

export type User = {
  username: string;
  email: string;
  provider: Provider | null;
};

export interface UserContextState {
  user: User | null;
  setUser: (username: string, email: string, provider: Provider | null) => void;
}

const UserContext = createContext<UserContextState | null>(null);

export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (ctx === null) {
    throw new Error("Attemping to use UserContext outside of provider");
  }

  return ctx;
};

export const UserContextProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: (username, email, provider) => {
          setUser({ username, email, provider });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
