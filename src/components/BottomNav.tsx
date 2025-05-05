
import { Activity, Flag, Settings, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1"
          onClick={() => navigate("/dashboards")}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span className="text-xs">Dashboards</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1"
          onClick={() => navigate("/workouts")}
        >
          <Activity className="h-5 w-5" />
          <span className="text-xs">Workouts</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1"
          onClick={() => navigate("/goals")}
        >
          <Flag className="h-5 w-5" />
          <span className="text-xs">Goals</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1"
          onClick={() => navigate("/settings")}
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs">Settings</span>
        </Button>
      </div>
    </nav>
  );
};

export default BottomNav;
