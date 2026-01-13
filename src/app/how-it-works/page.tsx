
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Award, Shield, Check, Info, FileText, Repeat, FileX, Megaphone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/firebase";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";

const steps = [
    {
        title: "Nuestro Propósito: El Poder de Ahorrar en Grupo",
        icon: Target,
        content: "En Group Dreaming, fusionamos la disciplina de un plan de ahorro con la colaboración de un círculo de confianza. Nuestro propósito es simple: brindarte un sistema robusto, transparente y legal para que alcances tus metas y sueños, respetando los tiempos y la fuerza que el sistema colaborativo representa."
    },
    {
        title: "Las Ventajas Clave de Group Dreaming",
        icon: Award,
        points: [
            { title: "Libre Disponibilidad", description: "Recibes el capital, no un bien específico. Tú decides cómo y dónde usar tu dinero, dándote un poder de negociación total." },
            { title: "Seguridad y Respaldo Legal", description: "Operamos bajo un contrato de mandato claro, con fondos protegidos por seguros de caución y de vida, y un fondo de reserva para cubrir imprevistos." },
            { title: "Sistema Robusto y Transparente", description: "Cada grupo tiene su plan de cuotas detallado desde el inicio. Los sorteos se basan en la Lotería Pública, garantizando imparcialidad." },
            { title: "Alcance Global", description: "Conecta con personas con tus mismas metas más allá de tu círculo cercano, en un entorno seguro y validado (KYC)." },
        ]
    },
    {
        title: "El Funcionamiento del Sistema: Paso a Paso",
        icon: Megaphone,
        steps: [
            "Identifica tu grupo ideal: Busca por capital, plazo y valor de cuota.",
            "Únete y activa el grupo: Los grupos son cerrados y se activan al completarse el número de miembros (Plazo x 2 Adjudicaciones Mensuales).",
            "Participa en las adjudicaciones: A partir del segundo mes, se entregan dos capitales: uno por sorteo (azar puro) y otro por licitación (la mejor oferta de adelanto de cuotas).",
            "Adjudicación y garantías: Al ser adjudicado, aceptas y presentas tus avales (recibo de sueldo, garantía propietaria o seguro de caución).",
            "Recibe tu capital y continúa: Una vez aprobadas las garantías, recibes el 100% del capital y continúas pagando tu cuota mensual hasta el final del plan."
        ]
    },
    {
        title: "Detalles a Tener en Cuenta",
        icon: Info,
        content: "La transparencia es total: cada grupo muestra su plan de cuotas completo. Sin embargo, tu plan puede variar según tus acciones: si licitas y ganas, si adelantas cuotas para acortar el plazo, si decides vender tu plan en una subasta o si incurres en mora. El sistema se adapta a tu camino."
    },
    {
        title: "Subastas (Mercado Secundario)",
        icon: Repeat,
        content: "A partir de la 3ra cuota paga, si necesitas una salida anticipada, puedes vender tu plan en nuestro Mercado Secundario. Otros miembros pujan por él, permitiéndote recuperar tu inversión de forma ágil y segura. La plataforma garantiza la operación, transfiriendo los derechos y obligaciones al comprador."
    },
    {
        title: "Bajas y Subastas Forzosas",
        icon: FileX,
        content: "Si un miembro incumple el pago de dos o más cuotas, el sistema inicia una 'Subasta Forzosa' de su plan para proteger al grupo. El monto recaudado se usa para saldar la deuda, y cualquier excedente se devuelve al miembro. Esto asegura que el fondo común nunca se vea afectado y las adjudicaciones continúen sin interrupciones."
    }
];


export default function HowItWorksPage() {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.replace('/panel/how-it-works');
        }
    }, [user, loading, router]);
    
    if (loading || user) {
        return <div className="flex justify-center items-center h-full">Cargando...</div>;
    }

    return (
        <>
            <div className="mb-8">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Inicio
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline">Cómo Funciona Group Dreaming</h1>
                <p className="text-muted-foreground">
                    La fusión inteligente entre un plan y un círculo de ahorro.
                </p>
            </div>
            
            <div className="space-y-8">
                {steps.map((step, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <step.icon className="h-6 w-6 text-primary" />
                                </div>
                                {step.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {step.content && <p className="text-muted-foreground">{step.content}</p>}
                            {step.points && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {step.points.map((point, pIndex) => (
                                        <div key={pIndex} className="space-y-1">
                                            <h4 className="font-semibold">{point.title}</h4>
                                            <p className="text-sm text-muted-foreground">{point.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {step.steps && (
                                <ul className="space-y-4">
                                    {step.steps.map((s, sIndex) => (
                                        <li key={sIndex} className="flex items-start gap-4">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0 mt-1">
                                                {sIndex + 1}
                                            </div>
                                            <p className="text-muted-foreground">{s}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
