import { auctions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Tag, TrendingUp } from "lucide-react";

export default function AuctionsPage() {
  const formatCurrency = (amount: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(amount);
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Subastas (Mercado Secundario)</h1>
        <p className="text-muted-foreground">Adquiere planes avanzados y acorta tu camino a la adjudicación.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {auctions.map(auction => (
          <Card key={auction.id} className="flex flex-col">
            <CardHeader>
              <CardDescription>Plan del {auction.groupId}</CardDescription>
              <CardTitle className="text-2xl">{formatCurrency(auction.capital)} en {auction.plazo} meses</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Puja Actual</p>
                  <p className="text-xl font-bold text-primary">{formatCurrency(auction.highestBid)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Precio Mínimo</p>
                  <p className="text-lg font-semibold">{formatCurrency(auction.precioMinimo)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span>{auction.cuotasPagadas} cuotas pagadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span>{(auction.cuotasPagadas/auction.plazo * 100).toFixed(0)}% de avance</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-2">
              <Button>Hacer una oferta</Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Termina en 2 días</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
