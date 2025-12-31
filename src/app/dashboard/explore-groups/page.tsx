
import { groups } from "@/lib/data";
import { GroupCard } from "@/components/app/group-card";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function ExploreGroupsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Explorar Grupos</h1>
        <p className="text-muted-foreground">Encuentra el plan perfecto que se adapte a tus sueños.</p>
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="capital" className="text-sm font-medium text-muted-foreground">Capital (USD)</label>
              <Input id="capital" placeholder="Ej: 10000 - 20000" />
            </div>
            <div>
              <label htmlFor="plazo" className="text-sm font-medium text-muted-foreground">Plazo (meses)</label>
              <Input id="plazo" placeholder="Ej: 24 - 60" />
            </div>
            <div>
              <label htmlFor="cuota" className="text-sm font-medium text-muted-foreground">Cuota Promedio</label>
              <Input id="cuota" placeholder="Máx: 500" />
            </div>
            <div>
                <label htmlFor="ordenar" className="text-sm font-medium text-muted-foreground">Ordenar por</label>
                <Select>
                    <SelectTrigger id="ordenar">
                        <SelectValue placeholder="Más cerca de completarse" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="progress">Más cerca de completarse</SelectItem>
                        <SelectItem value="capital-asc">Menor capital</SelectItem>
                        <SelectItem value="capital-desc">Mayor capital</SelectItem>
                        <SelectItem value="plazo-asc">Menor plazo</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {groups.filter(g => g.status === 'Abierto' && !g.userIsMember).map(group => (
          <GroupCard key={group.id} group={group} showJoinButton={true} />
        ))}
      </div>
    </>
  );
}
