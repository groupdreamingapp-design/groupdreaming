
'use client';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Banknote, Briefcase, PiggyBank } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/firebase";
import { useEffect } from "react";

const financialFlow = [
    {
        title: "Fondo General del Grupo (Para Adjudicaciones)",
        icon: PiggyBank,
        sources: [
            "Alícuotas Puras de todos los miembros",
            "Capital ofrecido en Licitaciones ganadoras",
            "Adelanto de cuotas (solo valor puro)"
        ],
        destination: "Se utiliza íntegramente para adjudicar el capital a los miembros ganadores cada mes."
    },
    {
        title: "Fondo de Reserva del Grupo",
        icon: Briefcase,
        sources: [
            "50% de los Gastos Administrativos de cada cuota",
            "50% del Derecho de Suscripción",
            "Multas e intereses por mora"
        ],
        destination: "Cubre los pagos de miembros que no cumplen, garantiza la compra en subastas desiertas, y su remanente se transfiere a la plataforma al final del grupo."
    },
    {
        title: "Ingresos de la Plataforma",
        icon: Banknote,
        sources: [
            "50% de los Gastos Administrativos",
            "50% del Derecho de Suscripción",
            "Comisiones del Mercado Secundario",
            "Remanente del Fondo de Reserva"
        ],
        destination: "Sostiene la operación, el soporte y el desarrollo tecnológico de Group Dreaming."
    }
];

export default function Transparency() {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.replace('/panel/transparency');
        }
    }, [user, loading, router]);
    
    if (loading || user) {
        return <div className="flex justify-center items-center h-full">Cargando...</div>;
    }

    return (
        <>
            <div className="mb-6">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Inicio
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline">Transparencia Financiera</h1>
                <p className="text-muted-foreground">
                    Tu cuota se divide de forma transparente para asegurar el funcionamiento, la sostenibilidad y la equidad del sistema.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {financialFlow.map((flow, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <flow.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{flow.title}</h3>
                        <div className="text-sm text-muted-foreground text-left w-full my-4">
                            <strong className="block mb-2 text-center">Se compone de:</strong>
                            <ul className="space-y-2">
                                {flow.sources.map((source, i) => (
                                    <li key={i}>+ {source}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-sm mt-auto pt-4 border-t w-full">
                            <strong className="block mb-2">Destino Final:</strong>
                            <p className="text-muted-foreground">{flow.destination}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
