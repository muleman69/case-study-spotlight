import { Target, Gauge, LineChart, Wrench, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string;
  bullets: string[];
}

export const wildwoodSteps: Step[] = [
  {
    id: 'define',
    title: 'Define',
    icon: Target,
    content: '',
    bullets: [
      `Documented Wildwood's manual spreadsheet processes, identifying rate calculation gaps and route optimization pain points.`,
      `Understood user requirements for both logistics and sales teams.`
    ]
  },
  {
    id: 'measure',
    title: 'Measure',
    icon: Gauge,
    content: '',
    bullets: [
      `Logged the average time to generate quotes (several hours).`,
      `Quantified the error rates and the impact on productivity.`,
      `Tracked reliance on a single logistics specialist.`
    ]
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: LineChart,
    content: '',
    bullets: [
      `Investigated the complexity of multiple railroad integrations (UP, BNSF).`,
      `Evaluated private rate structures and route planning.`,
      `Identified how real-time data could reduce errors and speed up decisions.`
    ]
  },
  {
    id: 'improve',
    title: 'Improve',
    icon: Wrench,
    content: '',
    bullets: [
      `Developed an Automated Freight Rate Engine that integrates data from PDFs, Excel sheets, and APIs.`,
      `Built a Route Optimization Matrix factoring in closures, alternative rail lines, and cost differentials.`,
      `Launched a Self-Serve Web Interface allowing the sales team to create quotes without relying on logistics staff.`,
      `Simplified data ingestion so new rates and changes can be updated instantly.`
    ]
  },
  {
    id: 'control',
    title: 'Control',
    icon: Shield,
    content: '',
    bullets: [
      `Provided ongoing training and support to Wildwood staff.`,
      `Implemented a robust monitoring system for continuous performance checks.`,
      `Ensured the platform can easily scale as Wildwood's market grows.`
    ]
  }
]; 