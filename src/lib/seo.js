const DEFAULT_TITLE = 'Md. Safwan | MERN Stack Developer & Next.js Freelancer'
const DEFAULT_DESCRIPTION =
  'Md. Safwan builds fast, conversion-focused MERN stack websites and web apps for e-commerce, restaurants, and EdTech brands.'
const SITE_NAME = 'Safwan Portfolio'
const OG_IMAGE_PATH = '/og-image.svg'

const SOCIAL_LINKS = [
  'https://github.com/dhdfhsa',
  'https://www.linkedin.com/in/safwan-mern/',
  'https://www.facebook.com/profile.php?id=100069315034225',
]

function getSiteUrl() {
  const raw =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : '')

  if (!raw) {
    return 'http://localhost:5173'
  }

  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/+$/, '')
  }

  return `https://${raw.replace(/\/+$/, '')}`
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`)

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.seoId = id
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export function applySeo() {
  if (typeof document === 'undefined') {
    return
  }

  const siteUrl = getSiteUrl()
  const pageUrl = new URL('/', siteUrl).toString()
  const imageUrl = new URL(OG_IMAGE_PATH, siteUrl).toString()

  document.title = DEFAULT_TITLE
  document.documentElement.lang = 'en'

  upsertMeta('meta[name="description"]', { name: 'description', content: DEFAULT_DESCRIPTION })
  upsertMeta('meta[name="author"]', { name: 'author', content: 'Md. Safwan' })
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  })
  upsertMeta('meta[name="googlebot"]', {
    name: 'googlebot',
    content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  })
  upsertMeta('meta[name="bingbot"]', {
    name: 'bingbot',
    content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  })
  upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#020512' })

  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: DEFAULT_TITLE })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: DEFAULT_DESCRIPTION,
  })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: pageUrl })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
  upsertMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: 'image/svg+xml' })
  upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
  upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
  upsertMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: 'Safwan Portfolio preview card',
  })

  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: DEFAULT_TITLE })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: DEFAULT_DESCRIPTION,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
  upsertMeta('meta[name="twitter:image:alt"]', {
    name: 'twitter:image:alt',
    content: 'Safwan Portfolio preview card',
  })

  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: pageUrl })
  upsertLink('link[rel="alternate"]', { rel: 'alternate', hreflang: 'en', href: pageUrl })

  upsertJsonLd('person', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Md. Safwan',
    jobTitle: 'MERN Stack Developer',
    url: pageUrl,
    image: imageUrl,
    sameAs: SOCIAL_LINKS,
  })

  upsertJsonLd('website', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: pageUrl,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en',
  })
}
