import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TreePine, Droplets, Recycle, Award } from "lucide-react";

export const EnvironmentalImpactWidget = () => {
  const impactData = {
    carbonSaved: 12.5,
    waterSaved: 450,
    wasteReduced: 2.3,
    ecoScore: 85,
  };

  return (
    <Card className="glass shadow-eco">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Award className="w-5 h-5 text-primary" />
          Your Environmental Impact
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{impactData.ecoScore}/100</div>
          <p className="text-sm text-muted-foreground">Overall Eco Score</p>
          <Progress value={impactData.ecoScore} className="mt-2" />
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <TreePine className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Carbon Footprint</p>
              <p className="text-xs text-muted-foreground">
                -{impactData.carbonSaved}kg CO₂ saved
              </p>
            </div>
            <Badge variant="secondary">-{impactData.carbonSaved}kg</Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Droplets className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Water Conservation</p>
              <p className="text-xs text-muted-foreground">
                {impactData.waterSaved}L saved this month
              </p>
            </div>
            <Badge variant="secondary">{impactData.waterSaved}L</Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Recycle className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Waste Reduction</p>
              <p className="text-xs text-muted-foreground">
                {impactData.wasteReduced}kg waste prevented
              </p>
            </div>
            <Badge variant="secondary">-{impactData.wasteReduced}kg</Badge>
          </div>
        </div>
        
        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Keep shopping sustainably to improve your score!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};