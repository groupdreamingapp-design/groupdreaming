
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TransparencyContent } from "@/components/app/transparency-content";

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
                <h1 className="text-3xl font-bold font-headline">Transparencia Financiera y Operativa</h1>
                <p className="text-muted-foreground">
                    Tu cuota se divide de forma transparente para asegurar el funcionamiento, la sostenibilidad y la equidad del sistema.
                </p>
            </div>

            <TransparencyContent />
        </>
    );
}
