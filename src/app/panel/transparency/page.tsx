
import { Button } from "@/components/ui/button";
import { ArrowLeft, Banknote, Briefcase, PiggyBank, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

const financialFlow = [
    {
        title: "Fondo General del Grupo (Para Adjudicaciones)",
        icon: PiggyBank,
        sources: [
            { text: "Alícuotas Puras de todos los miembros", icon: Plus },
            { text: "Capital ofrecido en Licitaciones ganadoras", icon: Plus },
            { text: "Adelanto de cuotas (solo valor puro)", icon: Plus }
        ],
        destination: "Se utiliza íntegramente para adjudicar el capital a los miembros ganadores cada mes."
    },
    {
        title: "Fondo de Reserva del Grupo",
        icon: Briefcase,
        sources: [
            { text: "50% de los Gastos Administrativos de cada cuota", icon: Plus },
            { text: "50% del Derecho de Suscripción", icon: Plus },
            { text: "Multas e intereses por mora", icon: Plus }
        ],
        destination: "Cubre los pagos de miembros que no cumplen, garantiza la compra en subastas desiertas, y su remanente se transfiere a la plataforma al final del grupo."
    },
    {
        title: "Ingresos de la Plataforma",
        icon: Banknote,
        sources: [
            { text: "50% de los Gastos Administrativos", icon: Plus },
            { text: "50% del Derecho de Suscripción", icon: Plus },
            { text: "Comisiones del Mercado Secundario", icon: Plus },
            { text: "Remanente del Fondo de Reserva", icon: Plus },
        ],
        destination: "Sostiene la operación, el soporte y el desarrollo tecnológico de Group Dreaming."
    }
];

export default function Transparency() {
    return (
        <>
            <div className="mb-6">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/panel">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline">Transparencia Financiera</h1>
                <p className="text-muted-foreground">Entiende a dónde va cada parte de tu cuota para asegurar el funcionamiento, la sostenibilidad y la equidad del sistema.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {financialFlow.map((flow, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <div className="text-center p-6 bg-muted/50 rounded-t-lg">
                             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background mb-4">
                                <flow.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold">{flow.title}</h3>
                        </div>
                        <div className="p-6 border border-t-0 rounded-b-lg flex-grow">
                            <h4 className="font-semibold text-sm mb-3">Se compone de:</h4>
                            <ul className="space-y-3 mb-6">
                                {flow.sources.map((source, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <source.icon className="h-4 w-4 text-green-500" />
                                        <span>{source.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t pt-4">
                                <h4 className="font-semibold text-sm mb-2">Destino Final:</h4>
                                <p className="text-sm text-muted-foreground">{flow.destination}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
