
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, Megaphone, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

const comparisonPoints = [
    {
        icon: DollarSign,
        title: "Libre Disponibilidad",
        description: "En un plan tradicional, estás atado a un modelo y marca. Con Group Dreaming, recibes el capital y lo usas donde quieras, como un comprador con efectivo.",
    },
    {
        icon: Megaphone,
        title: "Poder de Negociación",
        description: "Con el capital líquido, negocias el precio de contado, bonificaciones y entrega inmediata. Dejas de ser un cliente cautivo y pasas a tener el control.",
    },
    {
        icon: FileText,
        title: "Sin Costos de Prenda",
        description: "Te ahorras el Derecho de Adjudicación, costos de inscripción de prenda y sellados (entre un 3% y 7% del valor del bien) ya que no se prenda el objeto.",
    },
    {
        icon: ShieldCheck,
        title: "Seguro a tu Elección",
        description: "Eliges tu propia compañía de seguros, ahorrando hasta un 40% mensual. No más primas infladas por seguros prendarios obligatorios.",
    }
];

export default function ComparisonsPage() {
    return (
        <>
            <div className="mb-6">
                <Button asChild variant="ghost" className="mb-2 -ml-4">
                  <Link href="/panel">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold font-headline">Comparativas</h1>
                <p className="text-muted-foreground">Entiende las ventajas clave de nuestro sistema.</p>
            </div>

            <section className="w-full py-12">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Group Dreaming vs. Plan de Ahorro Tradicional</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        El plan de ahorro te ata a un objeto y a una estructura de costos; Group Dreaming te da el poder del efectivo.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {comparisonPoints.map((point, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                <point.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                            <p className="text-sm text-muted-foreground">{point.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
