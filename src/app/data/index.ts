import { TransactionType } from "../transactions/types";

export const transactions : TransactionType[] = [
    {
        id: 1,
        description: "Achat d'épicerie",
        type: "Dépense",
        amount: 50.25,
        date: "2024-12-01"
    },
    {
        id: 2,
        description: "Paiement de salaire",
        type: "Revenu",
        amount: 2000.00,
        date: "2024-12-02"
    },
    {
        id: 3,
        description: "Abonnement Netflix",
        type: "Dépense",
        amount: 15.99,
        date: "2024-12-03"
    },
    {
        id: 4,
        description: "Remboursement prêt",
        type: "Dépense",
        amount: 500.00,
        date: "2024-12-04"
    },
    {
        id: 5,
        description: "Vente de produits artisanaux",
        type: "Revenu",
        amount: 150.75,
        date: "2024-12-05"
    }
];
