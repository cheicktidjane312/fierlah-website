import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  // Si l'utilisateur est sur l'adresse vercel.app
  if (hostname && hostname.includes('vercel.app')) {
    // On force la redirection vers ton vrai domaine
    const newUrl = new URL(request.nextUrl.pathname, 'https://www.fierlah-agency.com');
    return NextResponse.redirect(newUrl, 301); // 301 = Déménagement permanent
  }

  return NextResponse.next();
}

// Configuration pour ne pas ralentir les images ou fichiers statiques
export const config = {
  matcher: [
    /*
     * Applique le middleware sur toutes les pages SAUF :
     * - api (routes API)
     * - _next/static (fichiers statiques)
     * - _next/image (images optimisées)
     * - favicon.ico (icône)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}