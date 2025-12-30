import { user, savingsGoal, transactions } from "@/lib/data"
import { StatCard } from "@/components/app/stat-card"
import { DollarSign, Repeat, Users, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { DailyEncouragement } from "@/components/app/daily-encouragement"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const progress = (savingsGoal.currentAmount / savingsGoal.targetAmount) * 100;

  return (
    <>
      <h1 className="text-3xl font-bold font-headline">Hola, {user.name.split(' ')[0]}!</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Saldo Disponible" value={formatCurrency(4835)} icon={Wallet} description="+20% que el mes pasado" />
        <StatCard title="Próxima Cuota" value={formatCurrency(615)} icon={Repeat} description="Vence en 15 días" />
        <StatCard title="Grupos Activos" value="3" icon={Users} description="1 adjudicado" />
        <StatCard title="Total Ahorrado" value={formatCurrency(savingsGoal.currentAmount)} icon={DollarSign} description="Hacia tu meta" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
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
        <div className="lg:col-span-3 space-y-4">
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image
                        src={savingsGoal.imageUrl}
                        alt={savingsGoal.name}
                        fill
                        className="object-cover"
                        data-ai-hint={savingsGoal.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                        <CardTitle className="text-2xl font-bold text-white">{savingsGoal.name}</CardTitle>
                        <CardDescription className="text-sm text-white/90">Tu Meta Principal</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-muted-foreground text-sm">Progreso</span>
                    <span className="font-bold text-lg">{formatCurrency(savingsGoal.currentAmount)} <span className="text-sm font-normal text-muted-foreground">de {formatCurrency(savingsGoal.targetAmount)}</span></span>
                </div>
                <Progress value={progress} aria-label={`${progress.toFixed(0)}% completado`} />
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">{progress.toFixed(0)}% del camino recorrido. ¡Sigue así!</p>
            </CardFooter>
          </Card>
          <DailyEncouragement goal={savingsGoal} />
        </div>
      </div>
    </>
  )
}
