import { transactions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Banknote, Download, Upload, Wallet as WalletIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function WalletPage() {
  const formatCurrency = (amount: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(amount);
  const formatCurrencyNoDecimals = (amount: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  const availableBalance = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Billetera</h1>
        <p className="text-muted-foreground">Tu centro de control financiero en Group Dreaming.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Saldo Disponible</CardTitle>
            <CardDescription>Dinero disponible para usar en la plataforma.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{formatCurrency(availableBalance)}</p>
            <p className="text-sm text-muted-foreground">USDC</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Depositar
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" /> Retirar
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Débito Automático</CardTitle>
            <CardDescription>Actívalo para no atrasarte nunca con tus pagos.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="automatic-debit" className="flex flex-col space-y-1">
                <span>Activar débito automático de cuotas</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Asegúrate de tener fondos en la fecha de vencimiento.
                </span>
              </Label>
              <Switch id="automatic-debit" defaultChecked />
            </div>
            <RadioGroup defaultValue="wallet" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="wallet" id="r1" className="peer sr-only" />
                <Label htmlFor="r1" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                  <WalletIcon className="mb-3 h-6 w-6" />
                  Pagar con Wallet
                </Label>
              </div>
              <div>
                <RadioGroupItem value="bank" id="r2" className="peer sr-only" />
                <Label htmlFor="r2" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                  <Banknote className="mb-3 h-6 w-6" />
                  Cuenta Bancaria
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Movimientos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead className="text-center">Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{tx.type}</Badge>
                  </TableCell>
                  <TableCell>{tx.description}</TableCell>
                  <TableCell className={cn("text-right font-mono", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
                    {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant={tx.status === "Completado" ? "default" : "secondary"} className={cn(tx.status === "Completado" ? "bg-green-500/20 text-green-700 border-green-500/30" : "")}>{tx.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
