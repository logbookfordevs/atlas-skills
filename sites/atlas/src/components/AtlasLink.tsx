import { Link, useLocation, useNavigate } from 'react-router';
import type { LinkProps } from 'react-router';

export function AtlasLink({ to, onClick, ...props }: LinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = typeof to === 'string' ? to.split(/[?#]/)[0] : to.pathname;
  const changesPage = Boolean(pathname && pathname !== location.pathname);
  const supportsTransitions = typeof document.startViewTransition === 'function';
  const reducesMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const animatesNavigation = changesPage && supportsTransitions && !reducesMotion;

  return <Link {...props} to={to} viewTransition={animatesNavigation} onClick={(event) => {
    onClick?.(event);
    const opensHere = !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey && (!props.target || props.target === '_self');
    if (!opensHere) return;

    const usesKeyboard = event.detail === 0;
    document.documentElement.dataset.navigation = usesKeyboard ? 'keyboard' : 'pointer';
    document.documentElement.dataset.direction = pathname === '/' ? 'back' : 'forward';
    if (usesKeyboard) {
      event.preventDefault();
      void navigate(to, { viewTransition: false, preventScrollReset: !changesPage });
    }
  }} />;
}
