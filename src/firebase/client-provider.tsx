
'use client';

import { ReactNode, useState, useEffect } from 'react';
import { FirebaseProvider } from './provider';
import { initializeFirebase } from './config';
import type { User } from 'firebase/auth';

type FirebaseClientProviderProps = {
  children: ReactNode;
};

// This component is temporarily simplified to not initialize Firebase
// until we re-enable authentication.
export function FirebaseClientProvider({
  children,
}: FirebaseClientProviderProps) {
  // For now, we are not connecting to Firebase so we just return children.
  // In the future, we will restore the Firebase initialization here.
  return <>{children}</>;
}
