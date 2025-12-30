'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { dailySavingEncouragement } from '@/ai/flows/daily-saving-encouragement';
import type { SavingsGoal } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export function DailyEncouragement({ goal }: { goal: SavingsGoal }) {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEncouragement() {
      try {
        setLoading(true);
        setError(null);
        const result = await dailySavingEncouragement({
          savingsGoal: goal.name,
          currentSavings: goal.currentAmount
        });
        setMessage(result.encouragementMessage);
      } catch (e) {
        console.error(e);
        setError('No se pudo generar el mensaje. Inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    }
    fetchEncouragement();
  }, [goal]);

  return (
    <Card className="bg-gradient-to-br from-accent/50 to-transparent">
        <CardHeader>
            <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary"/>
                <CardTitle className="font-headline">Tu Impulso Diario</CardTitle>
            </div>
            <CardDescription>Un mensaje de nuestra IA para mantenerte motivado.</CardDescription>
        </CardHeader>
        <CardContent>
        {loading && (
            <div className="space-y-2">
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[70%]" />
            </div>
        )}
        {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        {!loading && !error && (
            <p className="text-lg font-medium text-foreground/90 italic">
                &ldquo;{message}&rdquo;
            </p>
        )}
        </CardContent>
    </Card>
  );
}
