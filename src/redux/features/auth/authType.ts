
export type TUser = {
    email: string;
    role: string;
    iat: number;
    exp: number;
  };
  
  export type TInitialState = {
    user: TUser ;
    token: TUser | null;
  };
  