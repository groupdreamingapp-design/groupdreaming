
'use client';

import { FirebaseError } from "firebase/app";

type ToastFunction = (options: {
  variant?: "default" | "destructive" | null;
  title: string;
  description: string;
}) => void;

export function handleAuthError(error: any, toast: ToastFunction) {
    let title = 'Error de autenticación';
    let description = 'Ocurrió un error inesperado. Por favor, intenta de nuevo.';

    if (error instanceof FirebaseError) {
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                title = 'Credenciales incorrectas';
                description = 'El email o la contraseña no son correctos. Por favor, verifica tus datos.';
                break;
            case 'auth/email-already-in-use':
                title = 'Email en uso';
                description = 'Este email ya está registrado. Intenta iniciar sesión.';
                break;
            case 'auth/weak-password':
                title = 'Contraseña débil';
                description = 'La contraseña debe tener al menos 6 caracteres.';
                break;
            case 'auth/too-many-requests':
                title = 'Demasiados intentos';
                description = 'El acceso a esta cuenta ha sido temporalmente deshabilitado. Intenta más tarde.';
                break;
            case 'auth/popup-closed-by-user':
                title = 'Ventana cerrada';
                description = 'El proceso de inicio de sesión con Google fue cancelado.';
                break;
            default:
                description = error.message;
                break;
        }
    }
    
    toast({
        variant: "destructive",
        title: title,
        description: description,
    });
}
