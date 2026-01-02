'use client';

import React, { useMemo, type ReactNode, useEffect } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';
import { UserProvider } from '@/firebase/auth/use-user';
import { getAuth, signOut } from 'firebase/auth';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const firebaseServices = useMemo(() => {
    // Initialize Firebase on the client side, once per component mount.
    return initializeFirebase();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Automatically sign out on app start in development mode.
    // This ensures a clean state for testing without affecting production.
    if (process.env.NODE_ENV === 'development') {
      const auth = getAuth(firebaseServices.firebaseApp);
      signOut(auth);
    }
  }, [firebaseServices.firebaseApp]);

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      <UserProvider>
        {children}
      </UserProvider>
    </FirebaseProvider>
  );
}
