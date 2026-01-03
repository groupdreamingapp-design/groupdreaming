
'use client' 

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <div className="mx-auto bg-destructive/10 p-3 rounded-full w-fit">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="mt-4">¡Ups! Algo salió mal</CardTitle>
                <CardDescription>
                    Ocurrió un error inesperado en esta sección de la aplicación.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Puedes intentar recargar la página o volver más tarde.
                </p>
                 {error?.message && (
                    <details className="mt-4 text-xs text-left bg-muted p-2 rounded-md">
                        <summary className="cursor-pointer">Detalles del error</summary>
                        <pre className="mt-2 whitespace-pre-wrap font-mono text-muted-foreground">
                            {error.message}
                        </pre>
                    </details>
                )}
            </CardContent>
            <CardFooter>
                 <Button
                    onClick={() => reset()}
                    className="w-full"
                >
                    Reintentar
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
