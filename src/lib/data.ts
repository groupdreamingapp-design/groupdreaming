import type { Group, User, Transaction, Auction, Installment, Award } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const user: User = {
  id: 'user-1',
  name: 'Juan Perez',
  email: 'juan.perez@example.com',
  avatarUrl: PlaceHolderImages.find(img => img.id === 'user-avatar-1')?.imageUrl || '',
};

export const groups: Group[] = [
  {
    id: "GR-001",
    capital: 20000, // Multiple of 5000, between 5k-50k
    plazo: 60, // Multiple of 12, between 12-120
    cuotaPromedio: 380, // Under 1000
    membersCount: 55,
    totalMembers: 120, // 60 * 2
    status: "Abierto",
    userIsMember: true,
    userIsAwarded: false,
  },
  {
    id: "GR-002",
    capital: 15000, // Changed from 10000 to 15000
    plazo: 48, // OK
    cuotaPromedio: 345, // Recalculated
    membersCount: 90,
    totalMembers: 96, // 48 * 2
    status: "Activo",
    monthsCompleted: 12,
    userIsMember: true,
    userIsAwarded: true,
  },
  {
    id: "GR-003",
    capital: 50000, // OK
    plazo: 120, // OK
    cuotaPromedio: 460, // OK
    membersCount: 112,
    totalMembers: 240, // 120 * 2
    status: "Abierto",
    userIsMember: false,
  },
  {
    id: "GR-004",
    capital: 10000, // Changed from 5000
    plazo: 24, // OK
    cuotaPromedio: 465, // Recalculated
    membersCount: 48,
    totalMembers: 48, // 24 * 2
    status: "Activo",
    monthsCompleted: 22,
    userIsMember: false,
  },
  {
    id: "GR-005",
    capital: 15000, // OK
    plazo: 36, // OK
    cuotaPromedio: 455, // OK
    membersCount: 72,
    totalMembers: 72, // 36 * 2
    status: "Cerrado",
    monthsCompleted: 36,
    userIsMember: true,
  },
  {
    id: "GR-006",
    capital: 25000, // OK
    plazo: 72, // OK
    cuotaPromedio: 385, // OK
    membersCount: 68,
    totalMembers: 144, // 72 * 2
    status: "Abierto",
    userIsMember: false,
  },
];

export const transactions: Transaction[] = [
    { id: "txn-1", date: "2024-07-15", type: "Depósito", description: "Transferencia bancaria", amount: 1000, status: "Completado" },
    { id: "txn-2", date: "2024-07-10", type: "Pago de Cuota", description: "Grupo GR-001, cuota 5/60", amount: -380, status: "Completado" },
    { id: "txn-3", date: "2024-07-10", type: "Pago de Cuota", description: "Grupo GR-002, cuota 12/48", amount: -235, status: "Completado" },
    { id: "txn-4", date: "2024-06-25", type: "Liquidación", description: "Adjudicación GR-002", amount: 10000, status: "Completado" },
    { id: "txn-5", date: "2024-06-15", type: "Retiro", description: "Retiro a cuenta bancaria", amount: -2000, status: "Completado" },
];

export const auctions: Auction[] = [
    { id: "auc-1", groupId: "GR-007", capital: 30000, plazo: 60, cuotasPagadas: 15, precioMinimo: 7000, highestBid: 7250, endDate: "2024-07-28" },
    { id: "auc-2", groupId: "GR-008", capital: 15000, plazo: 36, cuotasPagadas: 20, precioMinimo: 6500, highestBid: 6500, endDate: "2024-07-29" },
]

// Assuming GR-001 is the context for these installments
const capital = 20000;
const plazo = 60;

const alicuotaPura = capital / plazo;
const gastosAdm = alicuotaPura * 0.10; // 10%
const seguroVida = 13.34; // Placeholder fixed value for simplicity
const totalSuscripcion = capital * 0.03;
const mesesFinanciacionSuscripcion = Math.floor(plazo * 0.15);
const cuotaSuscripcion = mesesFinanciacionSuscripcion > 0 ? totalSuscripcion / mesesFinanciacionSuscripcion : 0;

const staticAwards: Award[][] = [
    [{ type: 'sorteo', orderNumber: 23 }, { type: 'licitacion', orderNumber: 45 }],
    [{ type: 'sorteo', orderNumber: 11 }, { type: 'licitacion', orderNumber: 58 }],
    [{ type: 'sorteo', orderNumber: 7 }, { type: 'licitacion', orderNumber: 33 }],
    [{ type: 'sorteo', orderNumber: 54 }, { type: 'licitacion', orderNumber: 19 }],
    [{ type: 'sorteo', orderNumber: 42 }, { type: 'licitacion', orderNumber: 2 }]
];

export const installments: Installment[] = Array.from({ length: 60 }, (_, i) => {
    const derechoSuscripcion = i < mesesFinanciacionSuscripcion ? cuotaSuscripcion : 0;
    const totalCuota = alicuotaPura + gastosAdm + seguroVida + derechoSuscripcion;

    return {
        id: `cuota-${i + 1}`,
        number: i + 1,
        dueDate: `2024-${((i + 7) % 12) + 1}-10`,
        status: i < 5 ? 'Pagado' : i === 5 ? 'Pendiente' : 'Futuro',
        total: totalCuota,
        breakdown: {
            alicuotaPura: alicuotaPura,
            gastosAdm: gastosAdm,
            seguroVida: seguroVida,
            derechoSuscripcion: i < mesesFinanciacionSuscripcion ? derechoSuscripcion : undefined,
        },
        awards: i < 5 ? staticAwards[i] : undefined,
    }
});
