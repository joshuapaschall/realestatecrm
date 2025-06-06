"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Building,
  DollarSign,
  Calendar,
  Target,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from "lucide-react"
import MainLayout from "@/components/layout/main-layout"

const stats = [
  {
    title: "Total Revenue",
    value: "$2,847,392",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "This month",
  },
  {
    title: "Active Buyers",
    value: "247",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "Currently engaged",
  },
  {
    title: "Properties Listed",
    value: "156",
    change: "-2.1%",
    trend: "down",
    icon: Building,
    description: "Active listings",
  },
  {
    title: "Deals Closed",
    value: "23",
    change: "+15.3%",
    trend: "up",
    icon: Target,
    description: "This month",
  },
]

const recentDeals = [
  {
    id: 1,
    property: "123 Maple Street",
    buyer: "John & Sarah Smith",
    amount: "$485,000",
    status: "Closed",
    date: "2024-01-15",
    commission: "$14,550",
  },
  {
    id: 2,
    property: "456 Oak Avenue",
    buyer: "Michael Johnson",
    amount: "$320,000",
    status: "Under Contract",
    date: "2024-01-12",
    commission: "$9,600",
  },
  {
    id: 3,
    property: "789 Pine Road",
    buyer: "Emily Davis",
    amount: "$675,000",
    status: "Pending",
    date: "2024-01-10",
    commission: "$20,250",
  },
]

const upcomingTasks = [
  {
    id: 1,
    title: "Property showing - 123 Main St",
    time: "10:00 AM",
    type: "showing",
    priority: "high",
  },
  {
    id: 2,
    title: "Follow up with Sarah Johnson",
    time: "2:00 PM",
    type: "call",
    priority: "medium",
  },
  {
    id: 3,
    title: "Contract review - Oak Avenue",
    time: "4:30 PM",
    type: "document",
    priority: "high",
  },
  {
    id: 4,
    title: "Market analysis for new listing",
    time: "Tomorrow",
    type: "analysis",
    priority: "low",
  },
]

const hotLeads = [
  {
    id: 1,
    name: "David Wilson",
    score: 95,
    budget: "$800K - $1.2M",
    lastContact: "2 hours ago",
    status: "Hot",
  },
  {
    id: 2,
    name: "Lisa Chen",
    score: 88,
    budget: "$400K - $600K",
    lastContact: "1 day ago",
    status: "Warm",
  },
  {
    id: 3,
    name: "Robert Taylor",
    score: 92,
    budget: "$1M+",
    lastContact: "3 hours ago",
    status: "Hot",
  },
]

export default function DashboardPage() {
  return (
    <MainLayout currentPage="Dashboard">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              This Month
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Deals */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Deals</CardTitle>
              <CardDescription>Your latest transactions and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDeals.map((deal) => (
                  <div key={deal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{deal.property}</div>
                      <div className="text-sm text-muted-foreground">{deal.buyer}</div>
                      <div className="text-xs text-muted-foreground">{deal.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{deal.amount}</div>
                      <Badge
                        variant={
                          deal.status === "Closed"
                            ? "default"
                            : deal.status === "Under Contract"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {deal.status}
                      </Badge>
                      <div className="text-xs text-green-600 font-medium">{deal.commission}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hot Leads */}
          <Card>
            <CardHeader>
              <CardTitle>Hot Leads</CardTitle>
              <CardDescription>High-priority prospects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hotLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">{lead.budget}</div>
                      <div className="text-xs text-muted-foreground">{lead.lastContact}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm font-medium">{lead.score}</span>
                      </div>
                      <Badge variant={lead.status === "Hot" ? "destructive" : "secondary"} className="text-xs">
                        {lead.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Tasks</CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.time}
                      </div>
                    </div>
                    <Badge
                      variant={
                        task.priority === "high" ? "destructive" : task.priority === "medium" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Your monthly progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Monthly Goal</span>
                  <span>$3M / $4M</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Deals Closed</span>
                  <span>23 / 30</span>
                </div>
                <Progress value={77} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Lead Conversion</span>
                  <span>18%</span>
                </div>
                <Progress value={18} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Client Satisfaction</span>
                  <span>4.8 / 5.0</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
