'use client'

import { AuthUser } from '@supabase/supabase-js';
import { FC, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CardDescription } from '@/components/ui/card';
import EmojiPicker from '../global/EmojiPicker';

interface DashboardSetupProps {
  user: AuthUser;
  subscription: {} | null;
}

const DashboardSetup: FC<DashboardSetupProps> = ({subscription, user}) => {
  const [selectedEmoji, setSelectedEmoji] = useState();


  return (
    <Card className='w-[800px]
    h-screen
    sm:h-auto'>
      <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
          <CardDescription>
            Let's create a private workspace to get you started. You can add collborators later from the workspace settings tab.
          </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => {}}>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='text-5xl'>
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>{selectedEmoji}</EmojiPicker>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default DashboardSetup