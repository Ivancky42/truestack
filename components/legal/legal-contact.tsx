import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";
import {
  legalName,
  orgAddressLines,
  orgEmail,
  orgRegistrationNumber,
} from "@/lib/seo-defaults";

export function LegalContactCard() {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Mail className="h-5 w-5 text-primary" aria-hidden />
        </div>
        <div className="space-y-1">
          <p className="type-subhead text-foreground">{legalName}</p>
          <p className="type-ui text-muted-foreground">
            Registration No. {orgRegistrationNumber}
          </p>
          <Link
            href={`mailto:${orgEmail}`}
            className="inline-block type-ui font-medium text-primary hover:underline"
          >
            {orgEmail}
          </Link>
        </div>
      </div>
      <div className="mt-5 flex items-start gap-3 border-t pt-5">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
        <address className="type-ui not-italic text-muted-foreground">
          {orgAddressLines[0]}
          <br />
          {orgAddressLines[1]}
          <br />
          {orgAddressLines[2]}
        </address>
      </div>
    </div>
  );
}
