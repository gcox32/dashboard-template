export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

export interface AuthContextType {
  user: any;
  authStatus: AuthStatus;
}