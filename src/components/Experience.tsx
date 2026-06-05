/**
 * Experience — vertical timeline with reveal-on-scroll milestones.
 */
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    period: "Oct 2022 – Jan 2024",
    role: "Cash Flow – Credit Assistant",
    company: "Dai Quang Minh Real Estate Investment Corporation",
    location: "Ho Chi Minh, Vietnam",
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
        description="A track record of managing cash flows, executing M&A valuations, and leading audit engagements."
      />

      <ol className="relative mx-auto max-w-3xl pl-6 md:pl-0">
        {/* Center line on md+ */}
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-1/2"
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
  const isRight = index % 2 === 1;

  return (
    <li
      ref={ref}
      className={`relative mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } transition-all duration-700`}
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className="absolute left-[-1.4rem] top-3 h-3 w-3 rounded-full bg-gradient-primary shadow-glow md:left-1/2 md:-translate-x-1/2"
      />

      <div
        className={`glass-card hover-lift rounded-[1.5rem] p-6 ${
          isRight ? "md:col-start-2" : "md:col-start-1"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-1">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">{item.period}</p>
          {item.location && (
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground/80">{item.location}</p>
          )}
        </div>
        <h3 className="mt-2 font-display text-xl font-medium tracking-tight">{item.role}</h3>
        <p className="text-sm font-medium text-foreground/70">{item.company}</p>
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          {item.points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Experience;
