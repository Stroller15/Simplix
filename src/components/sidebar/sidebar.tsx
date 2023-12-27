import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC } from 'react'
import { cookies } from 'next/headers';
import { getFolders, getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';

interface SidebarProps {
  params: {workspaceId: string};
  className?: string;
}

const Sidebar: FC<SidebarProps> = async ({params, className}) => {
    const supabase = createServerComponentClient({cookies});
     // user
    const {
        data: {user},
    } = await supabase.auth.getUser();

    if(!user) return;
    // subscribers
    const {data: subscription, error: subscriptionError} = await getUserSubscriptionStatus(user.id);

    //folders
    const {data: workspaceFolderData, error: folderError} = await getFolders(params.workspaceId);

    //error

    if(subscriptionError || folderError) redirect('/dashboard');
    //get all the diff workspaces private collaborater shared
  return (
    <div>sidebar</div>
  )
}

export default Sidebar