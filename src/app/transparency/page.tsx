
'use client';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/firebase";
import { useEffect } from "react";
import { TransparencyContent } from "@/components/app/transparency-content";


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
                <h1 className="text-3xl font-bold font-headline">Transparencia Financiera y Operativa</h1>
                <p className="text-muted-foreground">
                    Entiende el destino de tu cuota y el ciclo de vida de tu grupo.
                </p>
            </div>
            
            <TransparencyContent />
        </>
    );
}
