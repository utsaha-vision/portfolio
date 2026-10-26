import {
  Bot, Boxes, BrainCircuit, Building2, ChartColumn, Cloud, Code2, Eye, GraduationCap, HeartPulse, Landmark,
  Layers, LayoutDashboard, Megaphone, MessagesSquare, PenTool, Plane, Plug, ShoppingBag, ShoppingCart,
  Smartphone, Sparkles, Sprout, TrendingUp, Truck, Users, Wallet, Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/content/site";

const map: Record<IconKey, LucideIcon> = {
  brain: BrainCircuit, sparkles: Sparkles, code: Code2, mobile: Smartphone, cloud: Cloud,
  chart: ChartColumn, design: PenTool, megaphone: Megaphone, bank: Landmark, health: HeartPulse,
  education: GraduationCap, retail: ShoppingBag, logistics: Truck, agri: Sprout, travel: Plane,
  gov: Building2, eye: Eye, message: MessagesSquare, trend: TrendingUp, bot: Bot,
  boxes: Boxes, users: Users, layers: Layers, dashboard: LayoutDashboard, workflow: Workflow,
  cart: ShoppingCart, wallet: Wallet, plug: Plug,
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const C = map[name];
  return <C className={className} strokeWidth={1.75} aria-hidden />;
}
