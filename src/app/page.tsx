import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

import { AuthButton } from './components/auth-button-client';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from('posts').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButton/>
      <pre>
        {
          JSON.stringify(post, null, 2)
        }
      </pre>
    </main>
  );
}
