/**
 * One source of truth for the public domain your short links live on.
 *  • In production set  VITE_PUBLIC_DOMAIN=https://yourdomain.com
 *  • In dev we fall back to window.location.origin  (e.g. http://localhost:5173)
 */
export const BASE_URL = (
    import.meta.env.VITE_PUBLIC_DOMAIN || window.location.origin
).replace(/\/$/, "");
