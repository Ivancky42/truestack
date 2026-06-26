import Image from "next/image";
import {
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  Layers,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
      {children}
    </div>
  );
}

function SidePill({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-border/60 bg-background/90 px-4 py-2.5 text-sm font-medium text-foreground">
      <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
      {children}
    </div>
  );
}

function HubPill({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-primary-foreground/15 px-4 py-2.5 text-sm font-medium text-primary-foreground">
      <Icon className="h-5 w-5 shrink-0 text-primary-foreground" aria-hidden />
      {children}
    </div>
  );
}

const FLOW = {
  left: 183,
  mid: 600,
  right: 1017,
  r: 8,
} as const;

function FlowDiagram({ variant }: { variant: "top" | "bottom" }) {
  const id = `p2p-process-arrow-${variant}`;
  const isTop = variant === "top";
  const { left, mid, right, r } = FLOW;
  const stroke = "currentColor";
  const dash = "5 5";
  const yt = 54;
  const yb = 40;

  return (
    <svg
      viewBox={isTop ? "0 0 1200 112" : "0 0 1200 96"}
      className={
        isTop
          ? "h-28 w-full text-muted-foreground/55"
          : "h-23 w-full text-muted-foreground/55"
      }
      aria-hidden
    >
      <defs>
        <marker
          id={id}
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M 0 0 L 7 3.5 L 0 7 Z" className="fill-current" />
        </marker>
      </defs>
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="1.25"
        strokeDasharray={dash}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={`url(#${id})`}
      >
        {isTop ? (
          <>
            <path
              d={`M ${left} 112 L ${left} ${yt + r} Q ${left} ${yt} ${left + r} ${yt} L ${mid - r} ${yt} Q ${mid} ${yt} ${mid} ${yt + r} L ${mid} 112`}
            />
            <path
              d={`M ${mid} 112 L ${mid} ${yt + r} Q ${mid} ${yt} ${mid + r} ${yt} L ${right - r} ${yt} Q ${right} ${yt} ${right} ${yt + r} L ${right} 112`}
            />
          </>
        ) : (
          <>
            <path
              d={`M ${right} 0 L ${right} ${yb - r} Q ${right} ${yb} ${right - r} ${yb} L ${mid + r} ${yb} Q ${mid} ${yb} ${mid} ${yb - r} L ${mid} 0`}
            />
            <path
              d={`M ${mid} 0 L ${mid} ${yb - r} Q ${mid} ${yb} ${mid - r} ${yb} L ${left + r} ${yb} Q ${left} ${yb} ${left} ${yb - r} L ${left} 0`}
            />
          </>
        )}
      </g>
      <g className="text-[11px] font-semibold">
        {isTop ? (
          <>
            <rect
              x="350"
              y="38"
              width="84"
              height="24"
              rx="5"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="392" y="54" textAnchor="middle" className="fill-foreground">
              Investment
            </text>
            <rect
              x="770"
              y="38"
              width="76"
              height="24"
              rx="5"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="808" y="54" textAnchor="middle" className="fill-foreground">
              Funding
            </text>
          </>
        ) : (
          <>
            <rect
              x="773"
              y="46"
              width="70"
              height="24"
              rx="5"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="808" y="62" textAnchor="middle" className="fill-foreground">
              Repayment
            </text>
            <rect
              x="365"
              y="46"
              width="54"
              height="24"
              rx="5"
              className="fill-background stroke-border"
              strokeWidth="1"
            />
            <text x="392" y="62" textAnchor="middle" className="fill-foreground">
              Yield
            </text>
          </>
        )}
      </g>
    </svg>
  );
}

export function P2PPlatformDiagram() {
  return (
    <section className="border-t bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            How TrueP2P™ works
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">
            What we engineer for you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            A regulated peer-to-peer platform connects investors directly with issuers. We
            build every layer in between — onboarding, listings, escrow, repayments and
            reporting — so the experience feels like a single, trusted product.
          </p>
        </header>

        <div className="mt-12 lg:mt-14">
          <div className="mb-1 hidden lg:block">
            <FlowDiagram variant="top" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8">
            <article className="flex h-full min-h-0 flex-col rounded-2xl border bg-muted/35 p-6 md:p-8 lg:min-h-100">
              <div className="flex items-start gap-4">
                <IconBadge>
                  <User className="h-6 w-6" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Investors</h3>
                  <p className="mt-2 text-base text-muted-foreground md:text-lg">
                    Retail, accredited, and institutional investors looking for transparent,
                    asset-backed yield.
                  </p>
                </div>
              </div>
              <ul className="mt-8 flex flex-col gap-3" role="list">
                <li>
                  <SidePill icon={CircleDollarSign}>Deposit & invest in notes</SidePill>
                </li>
                <li>
                  <SidePill icon={Layers}>Diversify across issuers</SidePill>
                </li>
                <li>
                  <SidePill icon={BarChart3}>Track returns in real time</SidePill>
                </li>
              </ul>
            </article>

            <div className="relative lg:z-10">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[min(40rem,135%)] w-[min(28rem,100%)] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-primary/35 blur-3xl lg:block"
                aria-hidden
              />
              <article className="relative flex h-full min-h-0 flex-col rounded-2xl border border-primary/30 bg-primary p-6 text-primary-foreground shadow-[0_24px_55px_-18px_rgba(124,58,237,0.55)] md:p-8 lg:min-h-144 lg:px-10 lg:py-12">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/truestack-logo-transparent-dark.png"
                      alt="Truestack"
                      width={160}
                      height={40}
                      className="h-9 w-auto brightness-0 invert"
                      style={{ width: "auto" }}
                    />
                  </div>
                  <p className="mt-5 text-xl font-bold tracking-tight md:text-2xl">
                    TrueP2P™ — engineered by Truestack
                  </p>
                  <p className="mt-4 max-w-md text-base leading-7 text-primary-foreground/90 md:text-lg md:leading-8">
                    SC-aligned investor onboarding, listings, escrow, payments, e-signing
                    and reporting — delivered as a production-ready platform for your operator.
                  </p>
                </div>
                <ul className="mt-10 flex flex-col gap-3.5 md:gap-4" role="list">
                  <li>
                    <HubPill icon={CheckCircle2}>Investor accreditation & limits</HubPill>
                  </li>
                  <li>
                    <HubPill icon={ShieldCheck}>Escrow & trust account integration</HubPill>
                  </li>
                  <li>
                    <HubPill icon={FileCheck2}>SC-aligned reporting & audit trail</HubPill>
                  </li>
                </ul>
              </article>
            </div>

            <article className="flex h-full min-h-0 flex-col rounded-2xl border bg-muted/35 p-6 md:p-8 lg:min-h-100">
              <div className="flex items-start gap-4">
                <IconBadge>
                  <Building2 className="h-6 w-6" aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Issuers</h3>
                  <p className="mt-2 text-base text-muted-foreground md:text-lg">
                    SMEs, project sponsors, and originators that need fast, structured access
                    to growth capital.
                  </p>
                </div>
              </div>
              <ul className="mt-8 flex flex-col gap-3" role="list">
                <li>
                  <SidePill icon={Banknote}>Apply for funding</SidePill>
                </li>
                <li>
                  <SidePill icon={FileCheck2}>Submit documents & KYC</SidePill>
                </li>
                <li>
                  <SidePill icon={Wallet}>Receive disbursement</SidePill>
                </li>
              </ul>
            </article>
          </div>

          <div className="mt-1 hidden lg:block">
            <FlowDiagram variant="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
