
import Hero from '@/components/products/Hero'
import Integration from '@/components/products/Integration'
import Products from '@/components/products/Products'
// import Services, { serviceList } from '@/components/productsNservices/Services'
import { AppLayout } from '@/layouts'
import React from 'react'

export default function ProductsPage() {

  return (
    <AppLayout>
      <Hero/>
      <Products/>
      {/* <Services data={serviceList} /> */}
      <Integration/>
    </AppLayout>
  )
}
