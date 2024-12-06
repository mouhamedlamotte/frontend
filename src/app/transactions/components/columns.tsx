"use client";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, Copy, CopyCheck, Edit3, Trash2 } from "lucide-react";
import { useState } from "react";
import { TransactionType } from "../types";
import { RenderTypeBadge } from "./renderTypeBadge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const columns: ColumnDef<TransactionType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          #ID
          {column.getIsSorted() && (
            <ChevronDown
              className={`transition-transform ${
                column.getIsSorted() === "desc" ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p>{row.original.id}</p>;
    },
  },
  {
    accessorKey: "Date",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date de la transaction
          {column.getIsSorted() && (
            <ChevronDown
              className={`transition-transform ${
                column.getIsSorted() === "desc" ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p>{formatDate(row.original.date)}</p>;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type de transaction
          {column.getIsSorted() && (
            <ChevronDown
              className={`transition-transform ${
                column.getIsSorted() === "desc" ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <RenderTypeBadge type={row.original.type} />;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Montant
          {column.getIsSorted() && (
            <ChevronDown
              className={`transition-transform ${
                column.getIsSorted() === "desc" ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p>{row.original.amount} FCFA</p>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <span className="text-xs text-muted-foreground">
          {row.original.description}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Button>
                <span className="sr-only">Modifier</span>
                <Edit3 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Modifier</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="destructive">
                <span className="sr-only">Supprimer</span>
                <Trash2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Supprimer</TooltipContent>
          </Tooltip>
        </div>
      );
    },
  },
];

export const RenderIp = ({ ip }: { ip: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleCopy}
      className="items-center flex justify-center *:hover:block px-0 hover:bg-transparent"
    >
      <span>{ip}</span>

      <div className="hidden ">
        {copied ? (
          <CopyCheck className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </div>
    </Button>
  );
};
