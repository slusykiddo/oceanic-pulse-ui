import { Box, RotateCcw, ZoomIn, Download, Eye, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import organism3D from "@/assets/3d-organism.jpg";

const Models3D = () => {
  const [rotationX, setRotationX] = useState([0]);
  const [rotationY, setRotationY] = useState([0]);
  const [rotationZ, setRotationZ] = useState([0]);
  const [zoom, setZoom] = useState([100]);

  const models = [
    {
      id: 1,
      name: "Jellyfish - Aurelia aurita",
      category: "Cnidaria",
      polygons: "47,293",
      texture: "4K",
      status: "Complete",
      accuracy: "97.8%"
    },
    {
      id: 2,
      name: "Sea Turtle - Chelonia mydas",
      category: "Reptilia",
      polygons: "89,472",
      texture: "8K",
      status: "Processing",
      accuracy: "94.2%"
    },
    {
      id: 3,
      name: "Octopus - Octopus vulgaris",
      category: "Mollusca",
      polygons: "156,847",
      texture: "4K",
      status: "Complete",
      accuracy: "91.6%"
    },
    {
      id: 4,
      name: "Shark - Carcharodon carcharias",
      category: "Chondrichthyes",
      polygons: "234,156",
      texture: "8K",
      status: "Complete",
      accuracy: "98.4%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete": return "bg-success/20 text-success border-success/30";
      case "Processing": return "bg-warning/20 text-warning border-warning/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-depth p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-accent/20 shadow-glow-accent animate-float">
            <Box className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">3D Marine Organism Models</h1>
            <p className="text-muted-foreground">Interactive 3D visualization and morphometric analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 3D Viewer */}
        <div className="xl:col-span-2">
          <Card className="bg-card border-border shadow-elevated h-fit">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Interactive 3D Viewer
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-card border-border hover:bg-surface">
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-card border-border hover:bg-surface">
                    <ZoomIn className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-card border-border hover:bg-surface">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 3D Model Display Area */}
              <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-surface/50 to-muted/20 border border-border flex items-center justify-center">
                <div 
                  className="w-80 h-80 bg-cover bg-center rounded-xl shadow-glow-accent animate-float"
                  style={{ 
                    backgroundImage: `url(${organism3D})`,
                    transform: `rotateX(${rotationX[0]}deg) rotateY(${rotationY[0]}deg) rotateZ(${rotationZ[0]}deg) scale(${zoom[0]/100})`
                  }}
                >
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    <Layers className="h-3 w-3 mr-1" />
                    Jellyfish Model
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                  Click and drag to rotate
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground mb-3">Rotation Controls</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">X-Axis: {rotationX[0]}°</label>
                    <Slider
                      value={rotationX}
                      onValueChange={setRotationX}
                      max={360}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Y-Axis: {rotationY[0]}°</label>
                    <Slider
                      value={rotationY}
                      onValueChange={setRotationY}
                      max={360}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Z-Axis: {rotationZ[0]}°</label>
                    <Slider
                      value={rotationZ}
                      onValueChange={setRotationZ}
                      max={360}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-foreground mb-3">View Settings</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Zoom: {zoom[0]}%</label>
                    <Slider
                      value={zoom}
                      onValueChange={setZoom}
                      min={50}
                      max={200}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30">
                      Export Model
                    </Button>
                    <Button variant="outline" className="w-full bg-card border-border hover:bg-surface">
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Model Library */}
        <div className="space-y-6">
          <Card className="bg-card border-border shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Layers className="h-5 w-5 text-primary" />
                Model Library
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {models.map((model) => (
                <div key={model.id} className="p-4 rounded-lg bg-surface/50 border border-border/50 hover:bg-surface transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">{model.name}</h4>
                    <Badge className={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{model.category}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div>Polygons: {model.polygons}</div>
                    <div>Texture: {model.texture}</div>
                    <div>Accuracy: {model.accuracy}</div>
                    <div className="text-accent">Load Model</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-ocean">
            <CardHeader>
              <CardTitle className="text-card-foreground">Model Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">47</div>
                <div className="text-sm text-muted-foreground">Available Models</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-2xl font-bold text-accent mb-1">12.4TB</div>
                <div className="text-sm text-muted-foreground">Total Data Size</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="text-2xl font-bold text-success mb-1">94.7%</div>
                <div className="text-sm text-muted-foreground">Avg. Accuracy</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Models3D;