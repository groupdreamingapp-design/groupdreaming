
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Banknote, Briefcase, PiggyBank, Plus, ArrowRight, Users, PlayCircle, Award, Repeat, Zap, Lock, CheckCircle, Handshake, Gavel, Calendar } from "lucide-react";

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

const operationalFlow = [
    {
        title: "Formación del Grupo",
        icon: Users,
        description: "Los miembros se unen a un grupo abierto hasta que se alcanza el número total requerido. No hay límite de tiempo para esta fase."
    },
    {
        title: "Capitalización Inicial",
        icon: PlayCircle,
        description: "Una vez lleno, el grupo se activa. Se cobra la primera cuota a todos los miembros para capitalizar el fondo general. No hay adjudicaciones en este primer mes."
    },
    {
        title: "Primer Acto de Adjudicación",
        icon: Award,
        description: "A partir del segundo mes, se realizan los actos de adjudicación mensuales, donde se entrega el capital a un miembro por sorteo y a otro por licitación."
    },
    {
        title: "Ciclo Mensual de Operaciones",
        icon: Repeat,
        description: "Cada mes el ciclo se repite: pago de cuotas, acto de adjudicación y la posibilidad de operar en el Mercado Secundario (subastas) para comprar o vender planes."
    },
    {
        title: "Gran Adjudicación Final",
        icon: Gavel,
        description: "En la última cuota, se realiza un 'Sorteo Especial' para adjudicar los cupos que hayan quedado vacantes durante el plan (ej: licitaciones desiertas), garantizando que todos sean adjudicados."
    },
    {
        title: "Cierre y Liquidación del Grupo",
        icon: Lock,
        description: "Una vez que todos los miembros han sido adjudicados y todas las cuotas pagadas, el grupo se cierra. El remanente del Fondo de Reserva se transfiere a la plataforma."
    }
];


export function TransparencyContent() {
    return (
        <div className="space-y-12">
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold tracking-tight">Transparencia Financiera</h2>
                    <p className="text-muted-foreground">El destino de cada peso de tu cuota.</p>
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
                                        <li key={i} className="flex items-center gap-2">
                                            <Plus className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            <span>{source}</span>
                                        </li>
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
            </section>
            
            <Separator />
            
            <section>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold tracking-tight">Transparencia Operativa</h2>
                    <p className="text-muted-foreground">El viaje de tu grupo, paso a paso.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {operationalFlow.map((step, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-grow">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <step.icon className="h-5 w-5 text-primary" />
                                            {step.title}
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
