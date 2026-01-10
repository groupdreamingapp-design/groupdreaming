
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Briefcase, PiggyBank, Plus, ArrowRight, Users, Calendar, Award, CheckCircle, Hand, GanttChartSquare, Repeat } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const financialSteps = [
    {
        icon: GanttChartSquare,
        title: "1. Fondo General del Grupo",
        description: "El motor de las adjudicaciones. Aquí es donde se acumula el capital que recibirán los miembros.",
        items: [
            { text: "Alícuotas Puras", icon: Plus },
            { text: "Capital de Licitaciones", icon: Plus },
            { text: "Adelanto de Cuotas (valor puro)", icon: Plus },
        ],
    },
    {
        icon: PiggyBank,
        title: "2. Fondo de Reserva",
        description: "El seguro del grupo. Garantiza la solvencia y protege a los miembros ante imprevistos.",
        items: [
            { text: "50% de Gastos Administrativos", icon: Plus },
            { text: "50% de Derechos de Suscripción", icon: Plus },
            { text: "Multas e intereses por mora", icon: Plus },
        ],
        footer: "Cubre incumplimientos y garantiza la compra en subastas desiertas. El remanente se transfiere a la plataforma al finalizar el grupo.",
    },
    {
        icon: Briefcase,
        title: "3. Ingresos de la Plataforma",
        description: "Asegura la sostenibilidad, el desarrollo y el soporte del servicio que brindamos.",
        items: [
            { text: "50% de Gastos Administrativos", icon: Plus },
            { text: "50% de Derechos de Suscripción", icon: Plus },
            { text: "Comisiones del Mercado Secundario", icon: Plus },
            { text: "Remanente del Fondo de Reserva", icon: Plus },
        ],
    },
];

const operationalSteps = [
    {
        icon: Users,
        title: "1. Formación del Grupo",
        description: "Ej: 24 miembros, Capital $12.000, Plazo 12 meses. Un grupo se completa y activa, asignando un N° de Orden único a cada miembro para el sorteo.",
    },
    {
        icon: Banknote,
        title: "2. Primer Pago (Capitalización)",
        description: "Los 24 miembros pagan su primera cuota. Aún no hay adjudicaciones, solo se capitalizan los fondos para asegurar la solvencia y el arranque del sistema.",
    },
    {
        icon: Award,
        title: "3. Primer Acto de Adjudicación",
        description: "A partir del mes 2, se entregan los primeros 2 capitales de $12.000: uno por sorteo (azar) y otro por licitación (mejor oferta de adelanto).",
    },
    {
        icon: Repeat,
        title: "4. Ciclo Mensual",
        description: "El proceso se repite mes a mes. A partir de la 3ra cuota, se habilita el Mercado Secundario para que los miembros puedan subastar su plan.",
    },
    {
        icon: Award,
        title: "5. Gran Adjudicación Final",
        description: "En el último mes, se adjudica a todos los miembros restantes (4 en este ejemplo) a través de un sorteo especial para garantizar que todos reciban su capital.",
    },
    {
        icon: CheckCircle,
        title: "6. Cierre del Grupo",
        description: "Una vez que los 24 miembros son adjudicados y todas las cuotas están pagas, el grupo se cierra y se realiza la liquidación final de los fondos.",
    },
];

export function TransparencyContent() {
    return (
        <div className="space-y-12">
            <Card>
                <CardHeader>
                    <CardTitle>Transparencia Financiera: ¿A dónde va tu dinero?</CardTitle>
                    <CardDescription>Usa las flechas para navegar y entender cómo se distribuye cada parte de tu cuota.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent>
                            {financialSteps.map((step, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card className="shadow-none border-dashed h-full">
                                            <CardHeader className="items-center text-center">
                                                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                                                    <step.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle>{step.title}</CardTitle>
                                                <CardDescription className="max-w-md">{step.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="mt-4 space-y-3 text-sm max-w-sm mx-auto">
                                                    {step.items.map((item, i) => (
                                                        <li key={i} className="flex items-center gap-3 p-2 rounded-md bg-muted/50">
                                                            <item.icon className="h-4 w-4 text-green-500 shrink-0" />
                                                            <span>{item.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {step.footer && (
                                                     <p className="text-xs text-muted-foreground text-center mt-4 pt-4 border-t max-w-sm mx-auto">{step.footer}</p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-12" />
                        <CarouselNext className="-right-4 md:-right-12" />
                    </Carousel>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Transparencia Operativa: El Viaje de tu Grupo</CardTitle>
                    <CardDescription>Un ejemplo del ciclo de vida de un grupo de ahorro, paso a paso.</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operationalSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center z-10">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background border-2 border-primary/20 shadow-sm mb-4">
                                     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                                        <step.icon className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                            </div>
                         ))}
                    </div>
                </CardContent>
             </Card>
        </div>
    );
}
