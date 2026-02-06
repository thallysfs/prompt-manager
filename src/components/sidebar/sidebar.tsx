import { prisma } from '@/lib/prisma';
import React from 'react';
import { SidebarContent } from './sidebar-content';

export const Sidebar = async () => {
  const prompts = await prisma.prompt.findMany();

  return <SidebarContent />;
};
