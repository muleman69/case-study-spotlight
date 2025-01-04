import { Target, Gauge, LineChart, Wrench, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  displayTitle: string;
  icon: LucideIcon;
  content: string;
  bullets: string[];
}

export const steps: Step[] = [
  {
    id: 'sprint1',
    title: 'Sprint 1',
    displayTitle: 'Sprint 1: Discovery & Planning',
    icon: Target,
    content: "During the initial sprint, we engaged with Wildwood's key stakeholders to map out existing workflows and document freight rate calculation bottlenecks. By aligning development goals with operational needs, we ensured the software solution addressed their unique challenges.",
    bullets: [
      'Stakeholder interviews',
      'Workflow mapping',
      'Project backlog creation'
    ]
  },
  {
    id: 'sprint2',
    title: 'Sprint 2',
    displayTitle: 'Sprint 2: Prototyping & Validation',
    icon: Gauge,
    content: 'In the second sprint, the team created a working prototype that automated basic freight rate calculations. This prototype allowed Wildwood to interact with the software early, providing valuable feedback for refinement.',
    bullets: [
      'Prototyping the rate calculation engine',
      'Initial route matrix development',
      'Feedback loop established'
    ]
  },
  {
    id: 'sprint3',
    title: 'Sprint 3',
    displayTitle: 'Sprint 3: Iteration & User Feedback',
    icon: LineChart,
    content: 'After gathering feedback, we refined the core freight rate matrix, improving user experience and integrating more variables, such as rail closures and destination specifics.',
    bullets: [
      'UI/UX adjustments',
      'Enhanced freight rate matrix',
      'Expanded integration for manual and automated data'
    ]
  },
  {
    id: 'sprint4',
    title: 'Sprint 4',
    displayTitle: 'Sprint 4: Refinement & Feature Expansion',
    icon: Wrench,
    content: 'With the foundation in place, the team expanded features to handle more complex route optimizations and integrated rate data directly from PDFs, Excel sheets, and external APIs.',
    bullets: [
      'Advanced route optimization',
      'Full data ingestion engine',
      'Private/public rate adjustments'
    ]
  },
  {
    id: 'sprint5',
    title: 'Sprint 5',
    displayTitle: 'Sprint 5: Deployment & Continuous Improvement',
    icon: Shield,
    content: "In the final sprint, the software was deployed across Wildwood's teams. Continuous feedback loops ensured ongoing feature development and system optimization, enabling Wildwood to scale without bottlenecks.",
    bullets: [
      'Full software rollout',
      'Training and user onboarding',
      'Ongoing monitoring and feature updates'
    ]
  }
]; 