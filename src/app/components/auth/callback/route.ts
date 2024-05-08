import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

// esto es una opcion de Next.js para evitar que cachee de forma
// estatica la ruta
export const dynamic = 'force-dynamic'

export async function GET (request:NextRequest) {
    // creo una instancia de la URL
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code !== null){
        const supabase = createRouteHandlerClient({ cookies })
        // usa el codigo pasado por la URL y devuelve la session del usuario
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}