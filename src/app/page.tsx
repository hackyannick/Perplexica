import ChatWindow from '@/components/ChatWindow';
import { ChatProvider } from '@/lib/hooks/useChat';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Chat - Search',
  description: 'Chat with the internet, chat with Search.',
};

const Home = () => {
  return (
    <div>
      <Suspense>
        <ChatProvider>
          <ChatWindow />
        </ChatProvider>
      </Suspense>
    </div>
  );
};

export default Home;
