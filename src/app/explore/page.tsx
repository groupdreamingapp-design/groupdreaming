
'use client';

import { useMemo, useState } from "react";
import { initialGroups } from "@/lib/data";
import { GroupCard } from "@/components/app/group-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Group } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";

const capitalOptions = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];
const plazoOptions = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
const cuotaRanges = [
  { label: "$0 - $200", min: 0, max: 200 },
  { label: "$201 - $400", min: 201, max: 400 },
  { label: "$401 - $600", min: 401, max: 600 },
  { label: "$601 - $800", min: 601, max: 800 },
  { label: "$801 - $1000", min: 801, max: 1000 },
];

export default function ExplorePage() {
  const [filters, setFilters] = useState({
    capital: [] as number[],
    plazo: [] as number[],
    cuota: [] as { min: number; max: number }[],
  });

  const handleFilterChange = (type: 'capital' | 'plazo', value: number) => {
    setFilters(prev => {
      const current = prev[type] as number[];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const handleCuotaChange = (range: { min: number; max: number }) => {
    setFilters(prev => {
      const current = prev.cuota;
      const isSelected = current.some(r => r.min === range.min && r.max === range.max);
      const updated = isSelected
        ? current.filter(r => r.min !== range.min || r.max !== range.max)
        : [...current, range];
      return { ...prev, cuota: updated };
    });
  };

  const filteredGroups: Group[] = useMemo(() => {
    let availableGroups = initialGroups.filter(g => g.status === 'Abierto');

    if (filters.capital.length > 0) {
      availableGroups = availableGroups.filter(g => filters.capital.includes(g.capital));
    }
    if (filters.plazo.length > 0) {
      availableGroups = availableGroups.filter(g => filters.plazo.includes(g.plazo));
    }
    if (filters.cuota.length > 0) {
      availableGroups = availableGroups.filter(g => 
        filters.cuota.some(range => g.cuotaPromedio >= range.min && g.cuotaPromedio <= range.max)
      );
    }
    return availableGroups;
  }, [filters]);

  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between border-b sticky top-0 bg-background/95 z-10">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Group Dreaming</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Ingresar</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Comenzar Ahora</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <div className="container mx-auto p-4 lg:p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-headline">Explorar Grupos Disponibles</h1>
            <p className="text-muted-foreground">Encuentra el plan perfecto que se adapte a tus sueños.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[60vh]">
                  <div className="space-y-6 p-1">
                    <div>
                      <h3 className="font-semibold mb-2">Capital (USD)</h3>
                      <div className="space-y-2">
                        {capitalOptions.map(option => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`capital-${option}`} 
                              onCheckedChange={() => handleFilterChange('capital', option)}
                              checked={filters.capital.includes(option)}
                            />
                            <Label htmlFor={`capital-${option}`} className="font-normal">{formatCurrency(option)}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-2">Plazo (Meses)</h3>
                      <div className="space-y-2">
                        {plazoOptions.map(option => (
                          <div key={option} className="flex items-center space-x-2">
                             <Checkbox 
                              id={`plazo-${option}`} 
                              onCheckedChange={() => handleFilterChange('plazo', option)}
                              checked={filters.plazo.includes(option)}
                            />
                            <Label htmlFor={`plazo-${option}`} className="font-normal">{option} meses</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                     <Separator />
                    <div>
                      <h3 className="font-semibold mb-2">Cuota Promedio</h3>
                      <div className="space-y-2">
                        {cuotaRanges.map(range => (
                          <div key={range.label} className="flex items-center space-x-2">
                             <Checkbox 
                              id={`cuota-${range.label}`} 
                              onCheckedChange={() => handleCuotaChange(range)}
                              checked={filters.cuota.some(r => r.min === range.min && r.max === range.max)}
                            />
                            <Label htmlFor={`cuota-${range.label}`} className="font-normal">{range.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </aside>

            {/* Groups Grid */}
            <section className="md:col-span-3">
              {filteredGroups.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredGroups.map(group => (
                    <GroupCard 
                      key={group.id} 
                      group={group} 
                      showJoinButton={true} 
                      isPublic={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground col-span-full">
                    <p>No se encontraron grupos con los filtros seleccionados.</p>
                    <p>Intenta modificar tu búsqueda.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-secondary/80 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Group Dreaming (Group Dreaming S.A.S.). Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
