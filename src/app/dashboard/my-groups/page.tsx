import { groups } from "@/lib/data";
import { GroupCard } from "@/components/app/group-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MyGroupsPage() {
  const myGroups = groups.filter(g => g.userIsMember);
  const activeGroups = myGroups.filter(g => g.status === 'Activo' || g.status === 'Abierto' || g.status === 'Pendiente');
  const closedGroups = myGroups.filter(g => g.status === 'Cerrado');

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Mis Grupos</h1>
        <p className="text-muted-foreground">Un resumen de todos tus planes de ahorro colectivo.</p>
      </div>

      <Tabs defaultValue="activos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="activos">Activos</TabsTrigger>
          <TabsTrigger value="finalizados">Finalizados</TabsTrigger>
        </TabsList>
        <TabsContent value="activos">
            {activeGroups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
                    {activeGroups.map(group => (
                        <GroupCard key={group.id} group={group} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-muted-foreground">
                    <p>Aún no te has unido a ningún grupo.</p>
                    <p>¡Explora los grupos disponibles y empieza a cumplir tus sueños!</p>
                </div>
            )}
        </TabsContent>
        <TabsContent value="finalizados">
            {closedGroups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
                    {closedGroups.map(group => (
                        <GroupCard key={group.id} group={group} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-muted-foreground">
                    <p>No tienes grupos finalizados.</p>
                </div>
            )}
        </TabsContent>
      </Tabs>
    </>
  );
}
