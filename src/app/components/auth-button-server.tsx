import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { AuthButton } from './auth-button-client';

export async function AuthButtonServer () {
    const supabase = createServerComponentClient({ cookies })
    const { data: {session } } = await supabase.auth.getSession()
    
    // renderizar el componente del cliente y le pasamos la session del user
    return <AuthButton session={session} />
}