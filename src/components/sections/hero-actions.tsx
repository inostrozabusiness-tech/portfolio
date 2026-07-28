import { ButtonLink } from "@/components/ui/button-link";
import type { HeroAction } from "@/data/portfolio";

type HeroActionsProps = {
  actions: HeroAction[];
};

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {actions.map((action) => (
        <ButtonLink
          key={action.label}
          href={action.href}
          variant={action.variant}
          aria-label={action.ariaLabel ?? action.label}
          download={action.download}
          className="w-full sm:w-auto"
        >
          {action.label}
        </ButtonLink>
      ))}
    </div>
  );
}
