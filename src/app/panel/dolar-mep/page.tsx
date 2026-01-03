
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, DollarSign, Clock, TrendingUp, TrendingDown, Loader2, AlertTriangle } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

interface MepRate {
    moneda: string;
    casa: string;
    nombre: string;
    compra: number;
    venta: number;
    fechaActualizacion: string;
}

export default function DolarMepPage() {
    const [mepRate, setMepRate] = useState<MepRate | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMepRate = async () => {
            try {
                const response = await fetch('https://dolarapi.com/v1/dolares/mep');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMepRate(data);
            } catch (e: any) {
                setError(e.message || 'Error al obtener la cotización.');
            } finally {
                setLoading(false);
            }
        };

        fetchMepRate();
    }, []);
    
    const formatCurrency = (amount: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);

    return (
        <>
            <div className="mb-6">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/panel">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-primary" />
                    Cotización Dólar MEP
                </h1>
                <p className="text-muted-foreground">
                    Este es el tipo de cambio de referencia utilizado en la plataforma, según lo establecido en el Contrato de Adhesión.
                </p>
            </div>

            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Dólar MEP (Bolsa)</CardTitle>
                    <CardDescription>Valores de referencia para operaciones.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {loading && (
                        <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Cargando cotización...</span>
                        </div>
                    )}
                    {error && (
                        <div className="flex items-center justify-center gap-2 py-8 text-red-600">
                            <AlertTriangle className="h-5 w-5" />
                            <span>Error: {error}</span>
                        </div>
                    )}
                    {mepRate && (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                                <div className='flex items-center gap-2 text-muted-foreground'>
                                    <TrendingDown className="h-4 w-4"/>
                                    <span className="text-sm font-medium">COMPRA</span>
                                </div>
                                <p className="text-3xl font-bold">{formatCurrency(mepRate.compra)}</p>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                                <div className='flex items-center gap-2 text-muted-foreground'>
                                    <TrendingUp className="h-4 w-4"/>
                                    <span className="text-sm font-medium">VENTA</span>
                                </div>
                                <p className="text-3xl font-bold">{formatCurrency(mepRate.venta)}</p>
                            </div>
                        </div>
                    )}
                </CardContent>
                {mepRate && (
                    <CardFooter className="text-xs text-muted-foreground justify-center">
                        <Clock className="mr-2 h-4 w-4" />
                        Última actualización: {format(parseISO(mepRate.fechaActualizacion), "dd/MM/yyyy HH:mm 'hs'", { locale: es })}
                    </CardFooter>
                )}
            </Card>
        </>
    );
}
