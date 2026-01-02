'use client';

import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

/**
 * Initiates Google Sign-In flow using a popup.
 * This is a non-blocking function; it returns a promise but doesn't need to be awaited
 * if the auth state is managed by an onAuthStateChanged listener.
 *
 * @param authInstance The Firebase Auth instance.
 */
export function signInWithGoogle(authInstance: Auth) {
  const provider = new GoogleAuthProvider();
  // The promise will resolve upon successful sign-in or reject on error.
  // The onAuthStateChanged listener will handle the user state change.
  return signInWithPopup(authInstance, provider);
}
