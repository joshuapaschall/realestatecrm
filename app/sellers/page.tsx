"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { MoreHorizontal } from "lucide-react"

const mockSellers = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "(555) 987-6543",
    score: 88,
    property: "456 Oak Street, Suburbs, NY",
    askingPrice: "$650,000",
    timeline: "3 months",
    status: "Ready to List",
    tags: ["Motivated", "Relocating"],
  },
  // ... more mock sellers
]

export default function SellersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Same simple nav */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">🏠 Real Estate CRM</h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm">
              Buyers
            </Button>
            <Button variant="ghost" size="sm" className="bg-blue-50 text-blue-700">
              Sellers
            </Button>
            <Button variant="ghost" size="sm">
              Properties
            </Button>
            <Button variant="ghost" size="sm">
              Deals
            </Button>
          </div>
        </div>
      </div>

      {/* Same layout as buyers but for sellers */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">🏡 Sellers</h1>
            <Badge variant="secondary">89 results</Badge>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-1 h-4 w-4" /> Add Seller
          </Button>
        </div>

        {/* Simple table - same style as your buyers */}
        <Card className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Property</th>
                <th className="text-left p-3">Asking Price</th>
                <th className="text-left p-3">Timeline</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockSellers.map((seller) => (
                <tr key={seller.id} className="border-b hover:bg-muted/30">
                  <td className="p-3">
                    <div className="font-medium">{seller.name}</div>
                    <div className="text-sm text-muted-foreground">{seller.email}</div>
                  </td>
                  <td className="p-3">{seller.property}</td>
                  <td className="p-3 font-medium">{seller.askingPrice}</td>
                  <td className="p-3">{seller.timeline}</td>
                  <td className="p-3">
                    <Badge variant="secondary">{seller.status}</Badge>
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
