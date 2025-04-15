"use client"

import { useState } from "react"
import Link from "next/link"
import { Users, Package, ShoppingBag, MessageSquare, BarChart2, Settings, LogOut, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent } from "@/components/ui/sheet"

// Mock data
const stats = [
  { name: "Total Sales", value: "$12,426.78", change: "+12.5%" },
  { name: "Orders", value: "356", change: "+8.2%" },
  { name: "Customers", value: "1,245", change: "+15.3%" },
  { name: "Conversion Rate", value: "3.2%", change: "+2.1%" },
]

const recentOrders = [
  { id: "ORD-1234", customer: "Sarah Johnson", date: "2023-06-15", status: "Delivered", total: "$219.98" },
  { id: "ORD-5678", customer: "Michelle Davis", date: "2023-06-14", status: "Processing", total: "$249.99" },
  { id: "ORD-9012", customer: "Jessica Williams", date: "2023-06-13", status: "Shipped", total: "$179.99" },
  { id: "ORD-3456", customer: "Robert Brown", date: "2023-06-12", status: "Pending", total: "$349.97" },
  { id: "ORD-7890", customer: "Emily Wilson", date: "2023-06-11", status: "Delivered", total: "$129.99" },
]

const lowStockProducts = [
  { id: "PRD-1234", name: "Brazilian Body Wave", stock: 3, category: "Extensions" },
  { id: "PRD-5678", name: "Lace Front Wig", stock: 2, category: "Wigs" },
  { id: "PRD-9012", name: "Hair Styling Tools Set", stock: 5, category: "Accessories" },
]

const recentMessages = [
  {
    id: "MSG-1234",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Order Inquiry",
    date: "2023-06-15",
    read: false,
  },
  {
    id: "MSG-5678",
    name: "Michelle Davis",
    email: "michelle@example.com",
    subject: "Return Request",
    date: "2023-06-14",
    read: true,
  },
  {
    id: "MSG-9012",
    name: "Jessica Williams",
    email: "jessica@example.com",
    subject: "Product Question",
    date: "2023-06-13",
    read: false,
  },
]

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: BarChart2 },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-[240px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Admin Dashboard</h2>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {sidebarItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center p-2 rounded-md hover:bg-muted"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <Button variant="outline" className="w-full justify-start" onClick={() => setIsSidebarOpen(false)}>
                <LogOut className="h-5 w-5 mr-3" />
                Log Out
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 bg-background border-r">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center p-2 rounded-md hover:bg-muted">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start">
              <LogOut className="h-5 w-5 mr-3" />
              Log Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Header */}
        <header className="bg-background border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open sidebar</span>
              </Button>
              <h1 className="text-xl font-semibold ml-2 md:ml-0">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-[200px] pl-8" />
              </div>
              <Button variant="outline" size="sm">
                Help
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="orders">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="inventory">Low Stock</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="p-4 border rounded-md mt-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Order ID</th>
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Total</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "Shipped"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{order.total}</td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <Button asChild variant="outline">
                  <Link href="/admin/orders">View All Orders</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="p-4 border rounded-md mt-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Product ID</th>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Stock</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lowStockProducts.map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-3 px-4">{product.id}</td>
                        <td className="py-3 px-4">{product.name}</td>
                        <td className="py-3 px-4">{product.category}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                            {product.stock} left
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm">
                            Restock
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <Button asChild variant="outline">
                  <Link href="/admin/products">View All Products</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="border p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-medium">{message.name}</span>
                        {!message.read && <span className="ml-2 bg-primary w-2 h-2 rounded-full"></span>}
                      </div>
                      <span className="text-sm text-muted-foreground">{message.date}</span>
                    </div>
                    <p className="text-sm font-medium mb-1">{message.subject}</p>
                    <p className="text-sm text-muted-foreground mb-2">{message.email}</p>
                    <Button variant="ghost" size="sm">
                      View Message
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Button asChild variant="outline">
                  <Link href="/admin/messages">View All Messages</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
