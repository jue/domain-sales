interface Domain {
  name: string
  meaning: string
  price: string
  featured: boolean
}

export function generateDomainStructuredData(
  domain: Domain,
  language: 'en' | 'zh'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: domain.name,
    description: domain.meaning,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Nipao.com',
        url: 'https://nipao.com',
      },
    },
    brand: {
      '@type': 'Brand',
      name: 'Nipao.com',
    },
  }
}

export function generateWebsiteStructuredData(language: 'en' | 'zh') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://nipao.com',
    name:
      language === 'en'
        ? 'Nipao.com - Premium Domain Names'
        : 'Nipao.com - 优质域名交易平台',
    description:
      language === 'en'
        ? 'Browse our collection of premium domain names for sale. Find the perfect domain for your business or project.'
        : '浏览我们的优质域名出售列表。为您的企业或项目找到完美的域名。',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://nipao.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://nipao.com',
    name: 'Nipao.com',
    logo: 'https://nipao.com/logo.png',
    sameAs: [
      'https://twitter.com/nipaocom',
      'https://www.linkedin.com/company/nipaocom',
    ],
  }
}
