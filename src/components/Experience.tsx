/**
 * Experience — vertical timeline with reveal-on-scroll milestones.
 * Supports keywords/tags for scannability, and a detailed achievements modal popup.
 * Single-column left-aligned layout on all screen sizes to prevent wrapping.
 */
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const timeline = [
  {
    period: "Oct 2022 – Jan 2024",
    role: "Cash Flow – Credit Assistant",
    company: "Dai Quang Minh Real Estate Investment Corporation",
    location: "Ho Chi Minh, Vietnam",
    tags: ["Cash Flow Planning", "Budget vs Actuals", "Liquidity Management", "Loan Drawdowns"],
    points: [
      "Consolidated cash flow data from 4 subsidiaries and departments into monthly financial planning report for CFO and Group Head Office review and approval. Performed budget vs actuals report of monthly cash flow and loan reports.",
      "Monitored daily cash positions across the group, ensuring uninterrupted funding for operations and 200M AUD construction investments.",
      "Managed end-to-end loan drawdown process for both short- and long-term facilities, maintaining 100% compliance with covenant undertakings.",
    ],
  },
  {
    period: "Dec 2019 – Jan 2021",
    role: "Senior Analyst",
    company: "ASART Deal Advisory",
    location: "Ho Chi Minh, Vietnam",
    tags: ["M&A Valuation", "Financial Modeling", "Diagnostic Report", "Market Research"],
    points: [
      "Participated in M&A valuation including financial modelling for a 50M AUD hospital and healthcare group, and delivered diagnostic reports and fairness opinions across F&B and manufacturing sectors to support client decision-making.",
      "Developed internal knowledge management systems, including a structured target search database, target company profiles and industry research reports that improved research efficiency for deal origination.",
    ],
  },
  {
    period: "Sep 2017 – Nov 2019",
    role: "Audit Assistant – Core Assurance",
    company: "EY Vietnam",
    location: "Ho Chi Minh, Vietnam",
    tags: ["Financial Audit", "Internal Controls", "Risk Assessment", "P&L Examination"],
    points: [
      "Executed 20+ full-cycle audit engagements across diverse sectors (Construction, Manufacturing, Trading, Healthcare), ensuring strict adherence to accounting standards.",
      "Assessed clients’ cash receipt-disbursement, purchase & payable, sales & receivable, payroll processes to identify controls, perform tests and evaluate the operation effectiveness of the controls.",
      "Examined sections of the balance sheet and profit & loss statement to verify data accuracy following audit procedures, identified, and communicated accounting and auditing matters to seniors and managers.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-gradient-soft">
      <SectionHeading
        eyebrow="Experience"
        title="A path shaped by finance & strategy."
        description="From audit engagement to financial valuation and cash flow management."
      />

      <ol className="relative mx-auto max-w-4xl pl-8 md:pl-12">
        {/* Left vertical line */}
        <span
          aria-hidden="true"
          className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
        />
        {timeline.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} />
        ))}
      </ol>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof timeline)[number];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`relative mb-10 md:mb-12 pl-6 md:pl-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } transition-all duration-700`}
    >
      {/* Dot aligned to the left vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-4 md:left-6 top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow"
      />

      <Dialog>
        <div className="glass-card hover-lift rounded-[1.5rem] p-7 flex flex-col justify-between w-full">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <p className="font-mono text-sm uppercase tracking-wider text-primary font-medium">{item.period}</p>
              {item.location && (
                <p className="text-xs uppercase tracking-wider text-muted-foreground/80 font-medium">{item.location}</p>
              )}
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.role}</h3>
            <p className="text-base font-semibold text-foreground/75 mt-0.5">{item.company}</p>
            
            {/* Tags/Keywords for scannability */}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary/90 border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <DialogTrigger asChild>
            <button className="mt-6 self-start inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline transition-all duration-300">
              View detailed achievements
              <ArrowUpRight className="h-4 w-4 transition-transform" />
            </button>
          </DialogTrigger>
        </div>

        <DialogContent className="glass-card backdrop-blur-md border-primary/15 max-w-xl md:max-w-2xl p-8">
          <DialogHeader>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/10 pb-4">
              <div>
                <DialogTitle className="font-display text-3xl font-bold tracking-tight">
                  {item.role}
                </DialogTitle>
                <p className="text-lg font-semibold text-foreground/80 mt-1">{item.company}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-mono text-sm font-semibold text-primary">{item.period}</p>
                {item.location && (
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/80 mt-1 font-medium">
                    {item.location}
                  </p>
                )}
              </div>
            </div>
          </DialogHeader>
          <div className="mt-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary/90 mb-3">
              Key Achievements & Responsibilities
            </h4>
            <ul className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {item.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </li>
  );
};

export default Experience;
