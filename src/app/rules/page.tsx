
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Landmark, ShieldCheck, FileText, BadgePercent, Users, Repeat, Gift, Award as AwardIcon } from "lucide-react";
import Link from "next/link";

const auctionRules = [
    {
        title: "Publicación y Precio Base",
        icon: FileText,
        points: [
            "Un miembro puede poner su plan en subasta a partir de la 3ra cuota paga.",
            "El vendedor publica su plan. El precio base se establece a partir del total de cuotas emitidas, menos un 50%.",
            "Del monto final a liquidar al vendedor, se deduce cualquier deuda pendiente para entregar el plan saneado, más la comisión por venta (2% + IVA)."
        ]
    },
    {
        title: "Proceso de Oferta y Garantía",
        icon: ShieldCheck,
        points: [
            "Los compradores realizan ofertas durante el plazo de la subasta. Al ganar, tienen 24hs para integrar el capital ofertado más la comisión.",
            "Si el comprador no paga su oferta ganadora, será bloqueado y multado (10% + IVA sobre su oferta). El plan se pondrá nuevamente en subasta por 24hs, notificando a los postores anteriores.",
            "Si un plan no recibe ofertas, la plataforma lo absorbe y utilizará sus propios fondos para realizar la oferta de licitación más alta posible en el mes siguiente, adjudicando ese capital y garantizando la liquidación al vendedor."
        ]
    },
    {
        title: "Para el Comprador",
        icon: Users,
        points: [
            "Al ganar y pagar la subasta, el comprador asume los derechos y obligaciones del plan, incluyendo los pagos de cuotas futuras. La comisión de compra (2% + IVA) se descuenta del capital al momento de la adjudicación.",
        ]
    },
    {
        title: "Planes Adquiridos por Subasta",
        icon: Repeat,
        points: [
            "Un plan que fue adquirido en el mercado secundario no puede volver a ser puesto en subasta.",
            "En caso de incumplimiento grave (ej: 2 o más cuotas vencidas), en lugar de una 'Subasta Forzosa', se procederá a una 'Baja Forzosa' del plan.",
            "En caso de 'Baja Voluntaria' o 'Baja Forzosa', la comisión de compra original se descontará de la liquidación final que se efectúe al cierre del grupo."
        ]
    }
];

const benefitRules = [
    {
        title: "Los últimos serán los primeros",
        icon: Gift,
        clauses: [
            {
                title: "Recompensa",
                points: [
                    "Se activa si un miembro es adjudicado por sorteo en el último 20% del plan.",
                    "El miembro recibe la devolución del 50% del 'Derecho de Suscripción' de su plan y un 50% de descuento en la suscripción de su próximo plan.",
                ]
            },
            {
                title: "Condiciones",
                points: [
                    "No registrar cuotas vencidas ni adelantos.",
                    "No haber rechazado una adjudicación previa.",
                    "No aplica a planes de subastas o con bonificaciones previas."
                ]
            }
        ]
    },
    {
        title: "Sorteo Especial",
        icon: AwardIcon,
        clauses: [
            {
                title: "Recompensa",
                points: [
                    "Se otorga a los miembros adjudicados en el sorteo de la última cuota, donde se distribuyen cupos vacantes.",
                    "Además del capital, reciben un Premio Sorpresa como bonificación adicional.",
                ]
            },
            {
                title: "Condiciones",
                points: [
                    "Resultar ganador en uno de los 'Sorteos Especiales' de la última cuota.",
                    "Es el único beneficio que puede acumularse con otros."
                ]
            }
        ]
    }
];

const contractClauses = [
    { title: "OBJETO", content: "Adhesión a un grupo de ahorro para obtener una suma de dinero ('Valor Móvil') mediante cuotas periódicas y adjudicación por sorteo o licitación." },
    { title: "OBLIGACIONES DEL SUSCRIPTOR", content: "Pagar puntualmente las cuotas. En caso de adjudicación, constituir las garantías requeridas y continuar pagando las cuotas restantes." },
    { title: "GARANTÍAS DE ADJUDICACIÓN", content: "Previo a la entrega del capital, el suscriptor deberá constituir una garantía a satisfacción de la administradora (recibos de sueldo, garantía propietaria, seguro de caución, etc.) para asegurar el pago del saldo deudor." },
    { title: "MERCADO SECUNDARIO (SUBASTAS)", content: "El suscriptor puede vender su plan a partir de la 3ra cuota paga. El comprador asume todos los derechos y obligaciones. Un plan comprado en subasta no puede volver a subastarse." },
    { title: "INCUMPLIMIENTO Y BAJA", content: "La falta de pago de 2 o más cuotas faculta a la administradora a rescindir el contrato. La baja voluntaria implica la devolución del capital puro aportado al final del ciclo del grupo, sujeto a penalidades." },
];

export default function RulesPage() {
    return (
        <>
            <div className="mb-6">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Inicio
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline">Reglamento de la Plataforma</h1>
                <p className="text-muted-foreground">Las reglas claras que hacen posible nuestro sistema de confianza y ayuda mutua.</p>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Reglamento de Subastas (Mercado Secundario)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {auctionRules.map((rule, index) => (
                            <Card key={index}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <rule.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle>{rule.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        {rule.points.map((point, pIndex) => (
                                            <li key={pIndex} className="flex items-start gap-3">
                                                <BadgePercent className="h-4 w-4 mt-1 text-primary shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Programa de Beneficios</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {benefitRules.map((benefit, bIndex) => (
                            <Card key={bIndex} className="shadow-lg h-full flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <benefit.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle>{benefit.title}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6 flex-grow">
                                    {benefit.clauses.map((clause, index) => (
                                        <div key={index}>
                                            <h3 className="font-semibold text-lg mb-3 border-b pb-2">{clause.title}</h3>
                                            <ul className="space-y-3 text-sm text-muted-foreground">
                                                {clause.points.map((point, pIndex) => (
                                                    <li key={pIndex} className="flex items-start gap-3">
                                                        <ShieldCheck className="h-4 w-4 mt-1 text-primary shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Puntos Clave del Contrato de Adhesión</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText />
                                Resumen del Contrato
                            </CardTitle>
                            <CardDescription>
                                Estos son los puntos más importantes. El documento completo estará disponible al unirte a un grupo.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {contractClauses.map((clause, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-lg mb-2">{clause.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {clause.content}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </>
    );
}
