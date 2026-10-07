import { pageMetadata, site } from '@/data';

function setMeta(attribute: 'name' | 'property', key: string, value: string | undefined) {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (value === undefined) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement('meta');
  element.setAttribute(attribute, key);
  element.content = value;
  if (!existing) document.head.append(element);
}

export function updatePageMetadata(pathname: string) {
  const page = pageMetadata(pathname);
  const title = `${page.title} · ${site.name}`;
  const shareTitle = page.path === '/' ? site.siteName : title;
  const url = page.path ? new URL(page.path, site.origin).href : undefined;
  const image = page.usesSiteImage ? new URL(site.socialImage.path, site.origin).href : undefined;

  document.title = title;
  const names = {
    description: page.description,
    robots: page.path ? undefined : 'noindex',
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:title': shareTitle,
    'twitter:description': page.description,
    'twitter:image': image,
    'twitter:image:alt': image ? site.socialImage.alt : undefined,
  };
  const properties = {
    'og:type': 'website',
    'og:site_name': site.siteName,
    'og:locale': site.locale,
    'og:title': shareTitle,
    'og:description': page.description,
    'og:url': url,
    'og:image': image,
    'og:image:type': image ? 'image/png' : undefined,
    'og:image:width': image ? String(site.socialImage.width) : undefined,
    'og:image:height': image ? String(site.socialImage.height) : undefined,
    'og:image:alt': image ? site.socialImage.alt : undefined,
  };

  for (const [key, value] of Object.entries(names)) setMeta('name', key, value);
  for (const [key, value] of Object.entries(properties)) setMeta('property', key, value);

  const existingCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!url) {
    existingCanonical?.remove();
    return;
  }

  const canonical = existingCanonical ?? document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = url;
  if (!existingCanonical) document.head.append(canonical);
}
