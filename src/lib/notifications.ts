
import type { Notification } from './types';
import { addDays, subDays, subHours } from 'date-fns';
import { Users, AlertTriangle, BadgePercent, CheckCircle, ShieldCheck, ShieldX, Trophy, CalendarCheck } from 'lucide-react';

const now = new Date();

export const initialNotifications: Notification[] = [
    {
        id: 'notif-1',
        title: '¡Ganaste la adjudicación por sorteo!',
        description: 'Felicitaciones, tu número de orden salió sorteado en el grupo ID-20250501-AWRD. Tienes 48hs para aceptarla.',
        date: subHours(now, 2).toISOString(),
        read: false,
        type: 'success',
        icon: Trophy
    },
    {
        id: 'notif-8',
        title: 'Tu cuota está próxima a vencer',
        description: 'La cuota #5 del grupo ID-20250806-TEST vence en 3 días. Asegúrate de tener saldo disponible.',
        date: subHours(now, 8).toISOString(),
        read: false,
        type: 'warning',
        icon: AlertTriangle
    },
    {
        id: 'notif-2',
        title: 'Tu garantía fue aprobada',
        description: 'La documentación para el grupo ID-20250501-AWRD ha sido aprobada. El capital se acreditará en tu wallet en 24hs.',
        date: subHours(now, 18).toISOString(),
        read: false,
        type: 'success',
        icon: ShieldCheck
    },
    {
        id: 'notif-3',
        title: 'Tu grupo se está por activar',
        description: 'El grupo ID-20250602-1001 está a punto de activarse. Asegúrate de tener saldo para el débito de la primer cuota.',
        date: subDays(now, 1).toISOString(),
        read: true,
        type: 'warning',
        icon: Users
    },
     {
        id: 'notif-4',
        title: 'Pago de cuota exitoso',
        description: 'Se debitó exitosamente la cuota #4 de tu plan ID-20250806-TEST.',
        date: subDays(now, 2).toISOString(),
        read: true,
        type: 'success',
        icon: CheckCircle
    },
    {
        id: 'notif-5',
        title: 'Recordatorio: Acto de Adjudicación',
        description: 'Mañana es el acto de adjudicación para el grupo ID-20250806-TEST. ¡Mucha suerte!',
        date: subDays(now, 4).toISOString(),
        read: true,
        type: 'info',
        icon: CalendarCheck
    },
    {
        id: 'notif-6',
        title: 'Nueva promoción disponible',
        description: '¡Ahora puedes unirte a planes de capital más alto con un 50% de descuento en el derecho de suscripción!',
        date: subDays(now, 7).toISOString(),
        read: true,
        type: 'info',
        icon: BadgePercent
    },
     {
        id: 'notif-7',
        title: 'Tu garantía fue rechazada',
        description: 'Hubo un problema con la documentación del grupo ID-20241101-ABCD. Por favor, revisa y vuelve a enviarla.',
        date: subDays(now, 10).toISOString(),
        read: true,
        type: 'error',
        icon: ShieldX
    },
];
