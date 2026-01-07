
'use client';

import { PaymentMethods } from '@/components/app/payment-methods';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    Mi Perfil y Pagos
                </h1>
                <p className="text-muted-foreground">Gestiona tu información personal y tus métodos de pago.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Métodos de Pago</CardTitle>
                    <CardDescription>
                        Configura el método de pago principal para el débito automático de tus cuotas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <PaymentMethods />
                </CardContent>
            </Card>

            {/* TODO: Add other profile sections like personal information, password change, etc. */}
        </div>
    )
}
