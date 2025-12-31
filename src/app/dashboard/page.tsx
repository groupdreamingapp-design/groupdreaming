
'use client';

import { user, transactions } from "@/lib/data"
import { StatCard } from "@/components/app/stat-card"
import { Repeat, Users, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function DashboardPage() {

  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const availableBalance = transactions.reduce((acc, tx) => acc + tx.amount, 0);

  return (
    <>
      <h1 className="text-3xl font-bold font-headline">Hola, {user.name.split(' ')[0]}!</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Saldo Disponible" value={formatCurrency(availableBalance)} icon={Wallet} description="+20% que el mes pasado" />
        <StatCard title="Próxima Cuota" value={formatCurrency(615)} icon={Repeat} description="Vence en 15 días" />
        <StatCard title="Grupos Activos" value="3" icon={Users} description="1 adjudicado" />
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Últimos Movimientos</CardTitle>
            <CardDescription>Tus transacciones más recientes en la plataforma.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="hidden sm:table-cell">Tipo</TableHead>
                  <TableHead className="hidden md:table-cell">Fecha</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map(tx => (
                  <TableRow key={tx.id}>
                    <TableCell>
                      <div className="font-medium">{tx.description}</div>
                      <div className="text-sm text-muted-foreground md:hidden">{tx.date}</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant="outline">{tx.type}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{tx.date}</TableCell>
                    <TableCell className={cn("text-right", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
                      {formatCurrency(tx.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
