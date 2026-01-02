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
}: LogoCloudProps) => {
  const isClients = variant === 'clients'
  const items = logos || (isClients ? clientLogos : technologyPartners)
  // Default to large for clients, default for partners
  const logoSize = size || (isClients ? 'large' : 'default')
  
  const defaultTitle = isClients 
    ? 'Trusted by Industry Leaders' 
    : 'Integrated with Industry Leaders'
  
  const defaultSubtitle = isClients
    ? 'We partner with leading companies across fintech, lending, and enterprise sectors.'
    : 'We work with trusted partners to deliver comprehensive fintech solutions with credit intelligence, compliance, payments, and cloud infrastructure.'
  
  const defaultBadge = isClients ? 'Our Clients' : 'Partner Ecosystem'
  const Icon = isClients ? Users : Handshake

  return (
    <section className={cn('relative w-full py-12 md:py-16', className)}>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mx-auto max-w-5xl'>
          {/* Header */}
          <div className='mb-12 space-y-4 text-center'>
            <div className='flex items-center justify-center gap-2'>
              <Icon className='text-primary size-5' />
              <span className='text-primary text-sm font-medium'>{badge || defaultBadge}</span>
            </div>
            <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
              {title || defaultTitle}
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              {subtitle || defaultSubtitle}
            </p>
          </div>

          {/* Logo Grid */}
          <div className='relative overflow-hidden'>
            <div className={cn(
              'flex flex-wrap items-center justify-center',
              logoSize === 'large' ? 'gap-x-12 gap-y-8 md:gap-x-16' : 'gap-x-10 gap-y-8 md:gap-x-14'
            )}>
              {items.map(item => (
                <div 
                  key={item.name} 
                  className='group flex flex-col items-center gap-2 transition-all hover:scale-105'
                >
                  <div className={cn(
                    'flex items-center justify-center',
                    logoSize === 'large' ? 'h-16 w-36 p-2' : 'h-12 w-28 p-2'
                  )}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={logoSize === 'large' ? 140 : 100}
                      height={logoSize === 'large' ? 56 : 40}
                      className={cn(
                        'w-auto object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0',
                        logoSize === 'large' ? 'h-12' : 'h-8'
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
          {bottomText !== '' && (
            <div className='mt-10 text-center'>
              <p className='text-muted-foreground text-sm'>
                {bottomText || (isClients ? 'And many more across Malaysia' : '+ more integrations tailored to your specific requirements')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LogoCloud1
