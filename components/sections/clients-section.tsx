"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Add logo filename for clients that have logos
// Upload logos to: public/logos/
// Supported formats: PNG, SVG, JPG (PNG or SVG recommended for transparency)
const clients = [
  { 
    name: "Kapital", 
    abbr: "KP",
    logo: "/logos/kapital.svg", // Upload to: public/logos/opg-capital.png
  },
  { 
    name: "Shoraka Digital", 
    abbr: "SD",
    logo: "/logos/shoraka-digital.png", // Upload to: public/logos/shoraka-digital.png
  },
  { 
    name: "Fundle", 
    abbr: "FDL",
    logo: "/logos/kredit.png", // Upload to: public/logos/fundle.png
  },
  { 
    name: "CreditXpress", 
    abbr: "CX",
    logo: "/logos/creditxpress.svg", // Upload to: public/logos/andas-capital.png
  },
  { 
    name: "AMS OSRAM", 
    abbr: "AMS",
    logo: "/logos/ams-osram.png", // Upload to: public/logos/ams-osram.png
  },
  { 
    name: "OPG Capital Holdings", 
    abbr: "OPG",
    logo: "/logos/opg-capital.png", // Upload to: public/logos/ams-osram.png
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function ClientLogo({ 
  logo, 
  abbr, 
  name 
}: { 
  logo?: string; 
  abbr: string; 
  name: string;
}) {
  // Check if logo file exists by trying to render it with error fallback
  if (logo) {
    return (
      <div className="relative flex h-10 w-24 items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={96}
          height={40}
          className="max-h-10 w-auto object-contain grayscale opacity-60 transition-all group-hover:grayscale-0 group-hover:opacity-100"
          onError={(e) => {
            // Hide image on error, fallback will show
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Fallback abbreviation (hidden by default, shown on image error) */}
        <div className="hidden absolute inset-0 items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-xs font-bold text-primary shadow-sm">
            {abbr}
          </div>
        </div>
      </div>
    );
  }

  // No logo provided, show abbreviation
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-xs font-bold text-primary shadow-sm transition-all group-hover:border-primary/50 group-hover:shadow-md">
      {abbr}
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="border-b bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              variants={itemVariants}
              title={client.name}
            >
              <ClientLogo 
                logo={client.logo} 
                abbr={client.abbr} 
                name={client.name} 
              />
            </motion.div>
          ))}

          {/* And more indicator */}
          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            variants={itemVariants}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed bg-background text-lg font-medium text-primary">
              +
            </div>
            <span className="text-sm font-medium">and more</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
