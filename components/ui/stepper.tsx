import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep?: number;
  className?: string;
}

export function Stepper({ steps, currentStep = steps.length, className }: StepperProps) {
  return (
    <nav aria-label="Progress" className={cn("w-full", className)}>
      <ol className="flex items-start">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.title}
              className={cn("relative flex flex-col items-center text-center", !isLast && "flex-1")}
            >
              <div className="flex w-full items-center">
                {/* Connector before */}
                {index > 0 && (
                  <div
                    className={cn(
                      "h-0.5 flex-1",
                      isCompleted || isCurrent ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
                {/* Circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                    isCompleted
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCurrent
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-foreground/30 bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
                </div>
                {/* Connector after */}
                {!isLast && (
                  <div
                    className={cn(
                      "h-0.5 flex-1",
                      index < currentStep - 1 || (isCompleted && !isLast) ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
              <div className="mt-2 max-w-[120px] px-1">
                <span
                  className={cn(
                    "text-xs font-medium leading-tight",
                    isCompleted || isCurrent ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
                {step.description && (
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
