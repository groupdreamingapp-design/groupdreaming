
'use client';

import { useGroups } from '@/hooks/use-groups';
import { installments as allInstallments } from '@/lib/data';
import { GroupDetailClient } from './group-detail-client';
import { useParams } from 'next/navigation';

export default function GroupDetailPage() {
  const params = useParams();
  const { groups } = useGroups();
  
  const groupId = typeof params.id === 'string' ? params.id : '';
  const group = groups.find(g => g.id === groupId);
  
  // In a real app, this would be filtered by group, here we pass all of them for simplicity
  const groupInstallments = allInstallments;

  return <GroupDetailClient group={group} installments={groupInstallments} />;
}
