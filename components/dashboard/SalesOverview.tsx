"use-client";
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesOverview() {
  return (
    <Card
      className="border-b rounded-none border-0 bg-theme-blue flex flex-row
        justify-between pr-6"
    >
      <CardHeader className="max-w-1/2">
        <div className="flex flex-col gap-3">
          <CardTitle className="text-foreground">Sales Activity</CardTitle>
          <div className="flex flex-row gap-5 grow">
            <div
              className="flex flex-col bg-accent items-center gap-1 min-w-40 p-3
                py-4 shadow-md rounded-md border-gray-300 border hover:border-slate-600"
            >
              <span className="text-infofont-medium text-2xl">0</span>
              <span className="text-xs text-muted-foreground">Qty</span>
              <span className="text-muted-foreground text-sm mt-0.5">
                To be packed
              </span>
            </div>
            <div
              className="flex flex-col bg-accent items-center gap-1 min-w-40 p-3
                py-4 shadow-md rounded-md border-gray-300 border hover:border-slate-600"
            >
              <span className="text font-medium text-2xl">0</span>
              <span className="text-xs text-muted-foreground">Pkgs</span>
              <span className="text-muted-foreground text-sm mt-0.5">
                To be Shipped
              </span>
            </div>
            <div
              className="flex flex-col bg-accent items-center gap-1 min-w-40 p-3
                py-4 shadow-md rounded-md border-gray-300 border hover:border-slate-600"
            >
              <span className="text-success font-medium text-2xl">0</span>
              <span className="text-xs text-muted">Pkgs</span>
              <span className="text-muted-foreground text-sm mt-0.5">
                To be Delivered
              </span>
            </div>
            <div
              className="flex flex-col bg-accent items-center gap-1 min-w-40 p-3
                py-4 shadow-md rounded-md border-gray-300 border hover:border-slate-600"
            >
              <span className="text-blue-500 font-medium text-2xl">0</span>
              <span className="text-xs text-muted-foreground">Qty</span>
              <span className="text-muted-foreground text-sm mt-0.5">
                To be Invoiced
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="w-1/4">
        <div className="flex flex-col gap-3">
          <CardTitle>Inventory Summary</CardTitle>
          <div
            className="flex justify-between items-center p-2 bg-muted shadow
              rounded-md border-gray-300 border"
          >
            <span className="text-muted-foreground text-sm">
              QUANTITY IN HAND
            </span>
            <span className="font-medium">0</span>
          </div>
          <div
            className="flex justify-between items-center p-2 bg-muted shadow
              rounded-md border-gray-300 border"
          >
            <span className="text-muted-foreground text-sm">
              QUANTITY TO BE RECEIVED
            </span>
            <span className="font-medium">0</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
