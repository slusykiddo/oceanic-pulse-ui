import { BarChart3, Fish, Waves, TrendingUp, Database, Eye, Activity, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import marineHero from "@/assets/marine-hero.jpg";

const Dashboard = () => {
  const kpiData = [
    {
      title: "Species Identified",
      value: "2,847",
      change: "+12.5%",
      icon: Fish,
      color: "accent",
      trend: "up"
    },
    {
      title: "Ocean Samples",
      value: "15,432",
      change: "+8.3%", 
      icon: Waves,
      color: "primary",
      trend: "up"
    },
    {
      title: "AI Accuracy",
      value: "94.2%",
      change: "+2.1%",
      icon: Eye,
      color: "success",
      trend: "up"
    },
    {
      title: "Active Stations",
      value: "127",
      change: "+5.4%",
      icon: Activity,
      color: "warning",
      trend: "up"
    }
  ];

  const recentAnalysis = [
    { species: "Clownfish (A. ocellaris)", confidence: 97.8, location: "Great Barrier Reef", time: "2h ago" },
    { species: "Blue Tang (P. hepatus)", confidence: 94.2, location: "Coral Triangle", time: "3h ago" },
    { species: "Moorish Idol (Z. cornutus)", confidence: 89.6, location: "Red Sea", time: "5h ago" },
    { species: "Mandarin Fish (S. splendidus)", confidence: 92.4, location: "South Pacific", time: "7h ago" },
  ];

  const systemMetrics = [
    { label: "Data Processing", value: 87, status: "optimal" },
    { label: "AI Model Performance", value: 94, status: "excellent" },
    { label: "Storage Capacity", value: 67, status: "good" },
    { label: "Network Latency", value: 23, status: "low", inverted: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-depth p-6">
      {/* Hero Section */}
      <div className="relative mb-8 rounded-2xl overflow-hidden shadow-elevated">
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${marineHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
          <div className="relative z-10 h-full flex items-center px-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/20 shadow-glow-accent animate-float">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Marine Biodiversity Platform</h1>
                  <p className="text-lg text-muted-foreground">AI-Powered Species Identification & Ocean Analytics</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/20 animate-glow-pulse">
                  <Zap className="h-3 w-3 mr-1" />
                  Real-time Analysis
                </Badge>
                <Badge variant="secondary" className="bg-success/20 text-success border-success/20">
                  System Online
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <Card key={kpi.title} className="bg-card border-border shadow-ocean hover:shadow-elevated transition-all duration-300 animate-fade-in group hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground/70">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${kpi.color}/20 shadow-glow-${kpi.color} group-hover:animate-glow-pulse`}>
                <kpi.icon className={`h-4 w-4 text-${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{kpi.value}</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {kpi.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent AI Analysis */}
        <Card className="bg-card border-border shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <Eye className="h-5 w-5 text-accent" />
              Recent AI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAnalysis.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface/50 border border-border/50 hover:bg-surface transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{item.species}</h4>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {item.confidence}%
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Performance */}
        <Card className="bg-card border-border shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <BarChart3 className="h-5 w-5 text-primary" />
              System Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {systemMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{metric.label}</span>
                  <span className={`font-bold ${
                    metric.status === 'excellent' ? 'text-success' :
                    metric.status === 'optimal' || metric.status === 'good' ? 'text-accent' :
                    'text-primary'
                  }`}>
                    {metric.value}%
                  </span>
                </div>
                <Progress 
                  value={metric.inverted ? 100 - metric.value : metric.value} 
                  className="h-2 bg-surface"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Live Data Stream Simulation */}
      <Card className="mt-8 bg-card border-border shadow-ocean">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Activity className="h-5 w-5 text-accent animate-glow-pulse" />
            Live Data Stream
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium text-foreground">Pacific Station #127</span>
              </div>
              <p className="text-xs text-muted-foreground">Collecting eDNA samples...</p>
              <div className="mt-2 h-1 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-accent animate-data-stream rounded-full"></div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium text-foreground">Atlantic Station #89</span>
              </div>
              <p className="text-xs text-muted-foreground">Processing otolith data...</p>
              <div className="mt-2 h-1 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-data-stream rounded-full" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium text-foreground">Indian Ocean #45</span>
              </div>
              <p className="text-xs text-muted-foreground">AI analysis complete</p>
              <div className="mt-2 h-1 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-success animate-data-stream rounded-full" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;