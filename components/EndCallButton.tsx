import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const EndCallButton = () => {
    const call = useCall();
    const router  = useRouter();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipants  = useLocalParticipant();
    const isMeetingOwner = localParticipants && call?.state.createdBy && localParticipants.userId === call.state.createdBy.id;
    if(!isMeetingOwner) return null;
  return (
    <div>
        <Button onClick={async () => {
            await call.endCall();
            router.push('/')
        }} className='bg-red-500'>
            End call for everyone
        </Button>
    </div>
  )
}

export default EndCallButton