import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Handshake, Users } from 'lucide-react'

// Technology partners data (for software development page)
export const technologyPartners = [
  {
    name: "CTOS",
    category: "Credit Intelligence",
    logo: "/logos/ctos.png",
  },
  {
    name: "Regtank",
    category: "Onboarding & AML",
    logo: "/logos/regtank.webp",
  },
  {
    name: "Trustgate",
    category: "e-Signature & e-KYC",
    logo: "/logos/trustgate.png",
  },
  {
    name: "Airwallex",
    category: "Payments",
    logo: "/logos/airwallex.png",
  },
  {
    name: "Meta",
    category: "WhatsApp Notifications",
    logo: "/logos/meta.svg",
  },
  {
    name: "Infomina",
    category: "SSM Reports",
    logo: "/logos/infomina.png",
  },
  {
    name: "AWS",
    category: "Cloud Hosting",
    logo: "/logos/aws.svg",
  },
  {
    name: "RHB Trustees",
    category: "Trust Account",
    logo: "/logos/rhb_trustees.jpg",
  },
  {
    name: "DigitalOcean",
    category: "Cloud Hosting",
    logo: "/logos/digitalocean.svg",
  },
] as const

// Client logos (for homepage)
export const clientLogos = [
  {
    name: "Kapital",
    logo: "/logos/kapital.svg",
  },
  {
    name: "Shoraka Digital",
    logo: "/logos/shoraka-digital.png",
  },
  {
    name: "Kredit",
    logo: "/logos/kredit.png",
  },
  {
    name: "CreditXpress",
    logo: "/logos/creditxpress.svg",
  },
  {
    name: "AMS OSRAM",
    logo: "/logos/ams-osram.png",
  },
  {
    name: "OPG Capital",
    logo: "/logos/opg-capital.png",
  },
  {
    name: "Malcan",
    logo: "/logos/Malcan-3.svg",
  },
  {
    name: "EVIE Bikes",
    logo: "/logos/EVIE LOGO_FA-08.png",
  },
  {
    name: "Terraworld",
    logo: "/logos/terraworld.png",
  },
  {
    name: "Andas Capital",
    logo: "/logos/Andas.svg",
  },
] as const

type LogoItem = {
  name: string
  logo: string
  category?: string
}

interface LogoCloudProps {
  className?: string
  logos?: readonly LogoItem[]
  variant?: 'partners' | 'clients'
  showCategories?: boolean
  title?: string
  subtitle?: string
  badge?: string
  bottomText?: string
  size?: 'default' | 'large'
  compact?: boolean
  /** Use `div` when embedding inside another landmark (e.g. page hero). */
  asContainer?: 'section' | 'div'
  /** Tighter logo grid and padding (e.g. embedded in a hero card). */
  dense?: boolean
}

const LogoCloud1 = ({ 
  className,
  logos,
  variant = 'partners',
  showCategories = true,
  title,
  subtitle,
  badge,
  bottomText,
  size,
  compact = false,
  asContainer = 'section',
  dense = false,
}: LogoCloudProps) => {
  const isClients = variant === 'clients'
  const items = logos || (isClients ? clientLogos : technologyPartners)
  // Default to large for clients, default for partners (but smaller if compact)
  const logoSize = size || (compact ? 'default' : (isClients ? 'large' : 'default'))
  
  const defaultTitle = isClients 
    ? 'Trusted by Industry Leaders' 
    : 'Integrated with Industry Leaders'
  
  const defaultSubtitle = isClients
    ? 'We partner with leading companies across fintech, lending, and enterprise sectors.'
    : 'We work with trusted partners to deliver comprehensive fintech solutions with credit intelligence, compliance, payments, and cloud infrastructure.'
  
  const defaultBadge = isClients ? 'Our Clients' : 'Partner Ecosystem'
  const Icon = isClients ? Users : Handshake
  const Container = asContainer === 'div' ? 'div' : 'section'

  return (
    <Container className={cn(
      'relative w-full',
      compact
        ? dense
          ? 'pt-0 pb-4 md:pb-5'
          : 'pt-0 pb-10 md:pb-12'
        : 'py-12 md:py-16',
      className
    )}>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mx-auto max-w-5xl'>
          {/* Header */}
          <div className={cn('text-center', compact ? (dense ? 'mb-3' : 'mb-5') : 'mb-12 space-y-4')}>
            {!compact && (
              <div className='flex items-center justify-center gap-2'>
                <Icon className='text-primary size-5' />
                <span className='text-primary text-sm font-medium'>{badge || defaultBadge}</span>
              </div>
            )}
            <p className={cn(
              compact ? 'text-sm text-muted-foreground/70 uppercase tracking-wider' : 'font-display font-medium tracking-tight text-4xl md:text-5xl'
            )}>
              {title || defaultTitle}
            </p>
            {!compact && (
              <p className='text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto'>
                {subtitle || defaultSubtitle}
              </p>
            )}
          </div>

          {/* Logo Grid */}
          <div className='relative overflow-hidden'>
            <div className={cn(
              'flex flex-wrap items-center justify-center',
              dense
                ? 'gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-3.5'
                : logoSize === 'large'
                  ? 'gap-x-12 gap-y-8 md:gap-x-16'
                  : 'gap-x-10 gap-y-8 md:gap-x-14'
            )}>
              {items.map(item => (
                <div 
                  key={item.name} 
                  className='group flex flex-col items-center gap-2 transition-all hover:scale-105'
                >
                  <div className={cn(
                    'flex items-center justify-center',
                    dense
                      ? 'h-9 w-[5.5rem] p-1 sm:h-10 sm:w-24 sm:p-1.5'
                      : logoSize === 'large'
                        ? 'h-16 w-36 p-2'
                        : 'h-12 w-28 p-2'
                  )}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={dense ? 88 : logoSize === 'large' ? 140 : 100}
                      height={dense ? 36 : logoSize === 'large' ? 56 : 40}
                      className={cn(
                        'w-auto object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0',
                        dense
                          ? 'h-6 sm:h-7'
                          : logoSize === 'large'
                            ? 'h-12'
                            : 'h-8'
                      )}
                    />
                  </div>
                  {showCategories && 'category' in item && item.category && (
                    <span className='text-xs text-muted-foreground group-hover:text-foreground transition-colors'>
                      {item.category}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          {bottomText !== '' && !compact && (
            <div className='mt-10 text-center'>
              <p className='text-muted-foreground text-sm'>
                {bottomText || (isClients ? 'And many more across Malaysia' : '+ more integrations tailored to your specific requirements')}
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default LogoCloud1
