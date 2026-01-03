
'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, Clock, FileText, Gift, Home, LayoutDashboard, PieChart, PiggyBank, Users, DollarSign, Megaphone, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/firebase';

const goals = [
  PlaceHolderImages.find(img => img.id === 'goal-car'),
  PlaceHolderImages.find(img => img.id === 'goal-travel'),
  PlaceHolderImages.find(img => img.id === 'goal-house'),
].filter(Boolean) as any[];

const collageImages = [
    PlaceHolderImages.find(img => img.id === 'collage-travel'),
    PlaceHolderImages.find(img => img.id === 'collage-house-keys'),
    PlaceHolderImages.find(img => img.id === 'collage-car-keys'),
    PlaceHolderImages.find(img => img.id === 'collage-cafe'),
].filter(Boolean) as any[];

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


export default function LandingPageClient() {
  const { user, loading } = useUser();

  const renderAuthButtons = () => {
    // Wait until the auth state is fully resolved
    if (loading) {
      return (
        <div className="h-10 w-[210px]"></div> // Placeholder to prevent layout shift
      );
    }

    if (user) {
      return (
        <Button asChild>
          <Link href="/panel">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Ir a Mi Panel
          </Link>
        </Button>
      );
    }

    return (
      <>
        <Button variant="ghost" asChild>
          <Link href="/login">Ingresar</Link>
        </Button>
        <Button asChild>
          <Link href="/register">Comenzar Ahora</Link>
        </Button>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm fixed top-0 w-full z-50">
        <Link href="/" className="flex items-center justify-center">
          <Logo className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">Group Dreaming</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <div className="flex gap-2">
            {renderAuthButtons()}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10"></div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                  {collageImages.map((image, index) => (
                      <div key={image.id} className="relative w-full h-full">
                          <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                              priority={index < 4}
                          />
                      </div>
                  ))}
              </div>
          </div>
           <div className="container px-4 md:px-6 z-20 relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
                  El poder de la comunidad para construir tus sueños.
                </h1>
              </div>
              <div className="space-x-4 pt-4">
                <Button size="lg" asChild className="shadow-lg">
                   <Link href="/transparency">
                      <PieChart className="mr-2 h-4 w-4" />
                      Ver Transparencia
                    </Link>
                </Button>
                <Button size="lg" asChild className="shadow-lg">
                   <Link href="/rules">
                      <FileText className="mr-2 h-4 w-4" />
                      Reglamento
                    </Link>
                </Button>
                <Button size="lg" asChild className="shadow-lg">
                   <Link href="/benefits">
                      <Gift className="mr-2 h-4 w-4" />
                      Beneficios
                    </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="shadow-lg">
                   <Link href="/explore">Explorar Grupos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
            <div className="container px-4 md:px-6">
                <p className="mx-auto max-w-[700px] text-center text-foreground md:text-xl">
                  Group Dreaming es una plataforma de ahorro colectivo basada en la confianza y la ayuda mutua. Representamos la alternativa solidaria a los sistemas financieros tradicionales, brindando una solución transparente y accesible para que puedas alcanzar tus metas económicas, desde tu primer auto hasta tu propia casa, impulsado por la fuerza del grupo.
                </p>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Desde un auto nuevo hasta el viaje de tus sueños</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestros grupos flexibles se adaptan a cualquier meta que tengas. El capital que necesitas, en el plazo que te conviene.
              </p>
               <ul className="grid gap-2 py-4">
                <li>
                  <CheckCircle className="mr-2 inline-block h-4 w-4 text-primary" />
                  Planes desde 12 hasta 84 meses.
                </li>
                <li>
                  <CheckCircle className="mr-2 inline-block h-4 w-4 text-primary" />
                  Capitales que se ajustan a tus necesidades.
                </li>
                <li>
                  <CheckCircle className="mr-2 inline-block h-4 w-4 text-primary" />
                  Adjudicación mensual por sorteo y licitación.
                </li>
                <li>
                  <CheckCircle className="mr-2 inline-block h-4 w-4 text-primary" />
                  Libre disponibilidad del capital una vez adjudicado.
                </li>
              </ul>
               <Button asChild size="lg">
                  <Link href="/explore">
                    Ver Grupos Disponibles
                  </Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                    <div key={goal.id} className={`rounded-xl overflow-hidden shadow-lg ${index === 2 ? 'col-span-2' : ''}`}>
                      <Image
                        src={goal.imageUrl}
                        alt={goal.description}
                        width={goal.width}
                        height={goal.height}
                        className="aspect-video object-cover"
                        data-ai-hint={goal.imageHint}
                      />
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
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
            </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Group Dreaming. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/faq" className="text-xs hover:underline underline-offset-4">Preguntas Frecuentes</Link>
          <Link href="/#" className="text-xs hover:underline underline-offset-4">Privacidad</Link>
        </nav>
      </footer>
    </div>
  )
}

    