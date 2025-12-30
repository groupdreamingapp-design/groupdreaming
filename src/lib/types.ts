export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export type GroupStatus = "Abierto" | "Pendiente" | "Activo" | "Cerrado";

export type Group = {
  id: string;
  capital: number;
  plazo: number;
  cuotaPromedio: number;
  membersCount: number;
  totalMembers: number;
  status: GroupStatus;
  userIsMember: boolean;
  userIsAwarded?: boolean;
  monthsCompleted?: number;
};

export type TransactionType = "Depósito" | "Retiro" | "Pago de Cuota" | "Licitación" | "Subasta" | "Liquidación";

export type Transaction = {
  id: string;
  date: string;
  type: TransactionType;
  description: string;
  amount: number;
  status: "Completado" | "Pendiente";
};

export type Auction = {
  id: string;
  groupId: string;
  capital: number;
  plazo: number;
  cuotasPagadas: number;
  precioMinimo: number;
  highestBid: number;
  endDate: string;
};

export type SavingsGoal = {
  name: string;
  targetAmount: number;
  currentAmount: number;
  imageUrl: string;
  imageHint: string;
}
