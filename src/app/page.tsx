'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import to avoid hydration issues with Swiper
const PortfolioTemplate = dynamic(
  () => import('@/components/templates/PortfolioTemplate'),
  { ssr: false }
);

export default function Home() {
  return <PortfolioTemplate />;
}
