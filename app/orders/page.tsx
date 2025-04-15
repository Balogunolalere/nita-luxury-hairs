"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PackageOpen, Truck, Clock, Check, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  // This would typically come from your backend
  const mockOrders = [
    {
      id: "ORD-001",
      date: "2025-04-15",
      status: "Delivered",
      total: "$259.99",
      estimatedDelivery: "2025-04-20",
      trackingNumber: "1Z999AA1234567890",
      items: [
        { name: "Brazilian Wavy Hair 18\"", quantity: 1, price: "$199.99", image: "/placeholder.jpg" },
        { name: "Hair Care Kit", quantity: 1, price: "$60.00", image: "/placeholder.jpg" }
      ]
    },
    {
      id: "ORD-002",
      date: "2025-04-10",
      status: "Processing",
      total: "$349.99",
      estimatedDelivery: "2025-04-25",
      trackingNumber: "1Z999AA1234567891",
      items: [
        { name: "Peruvian Straight Hair 24\"", quantity: 1, price: "$349.99", image: "/placeholder.jpg" }
      ]
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return <Clock className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "delivered":
        return <Check className="h-4 w-4" />
      default:
        return <PackageOpen className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "shipped":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const toggleOrder = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container max-w-4xl py-10"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full space-y-8"
      >
        <div className="sticky top-16 z-10 backdrop-blur-xl bg-background/80 pb-4">
          <TabsList className="grid w-full grid-cols-3 p-1">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All Orders
            </TabsTrigger>
            <TabsTrigger 
              value="processing"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Processing
            </TabsTrigger>
            <TabsTrigger 
              value="completed"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          <TabsContent value={activeTab} className="space-y-6">
            {mockOrders
              .filter(order => {
                if (activeTab === "processing") return order.status.toLowerCase() === "processing"
                if (activeTab === "completed") return order.status.toLowerCase() === "delivered"
                return true
              })
              .map((order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden backdrop-blur-3xl bg-card/50">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleOrder(order.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <motion.div
                            initial={false}
                            animate={{ rotate: expandedOrder === order.id ? 90 : 0 }}
                          >
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(order.status)}
                            {order.status}
                          </span>
                        </Badge>
                      </div>

                      <AnimatePresence>
                        {expandedOrder === order.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t pt-4"
                          >
                            <div className="space-y-4">
                              {order.items.map((item, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Quantity: {item.quantity}
                                    </p>
                                  </div>
                                  <p className="font-medium">{item.price}</p>
                                </motion.div>
                              ))}

                              <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between items-center mb-2">
                                  <p className="text-sm text-muted-foreground">Tracking Number:</p>
                                  <p className="font-mono">{order.trackingNumber}</p>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                  <p className="text-sm text-muted-foreground">Estimated Delivery:</p>
                                  <p>{order.estimatedDelivery}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <p className="font-medium">Total</p>
                                  <p className="font-semibold text-lg">{order.total}</p>
                                </div>
                              </div>

                              <div className="flex justify-end gap-3 mt-4">
                                <Button variant="outline">Track Order</Button>
                                <Button
                                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}