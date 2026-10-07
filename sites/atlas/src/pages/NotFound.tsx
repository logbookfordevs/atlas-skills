import { AtlasLink } from '@/components/AtlasLink';

export function NotFound() {
  return <section className="intro"><h1>Page not found.</h1><p className="lead">There’s still plenty to explore.</p><AtlasLink className="text-link" to="/#skills">Browse the skill reference</AtlasLink></section>;
}
