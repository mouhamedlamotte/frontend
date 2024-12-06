import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { transactions } from '@/app/data'

export const TransactionTable = () => {
  return (
    <div className="">
    <DataTable columns={columns} data={transactions ?? []} />
  </div>
  )
}

