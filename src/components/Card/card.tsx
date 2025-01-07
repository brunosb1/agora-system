import React from 'react';
import { CardTopic } from '@ama-pt/agora-design-system';

interface CardTopicListProps {
  data: Array<{
    status?: string
    statusLabel: string;
    title: string;
    description: string;
    pillLabel?: string;
    mainAnchor: {
      children: string;
      href: string;
      target?: string;
    };
  }>;
}

const CardTopicList: React.FC<CardTopicListProps> = ({ data }) => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex items-center justify-between gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white p-16 rounded-lg shadow-lg p-6 flex flex-col items-center h-full"
            style={{
              width: '300px', 
              minHeight: '400px', 
              display: 'flex', 
              justifyContent: 'space-between',
            }}
          >
            <CardTopic
              variant="default"
              statusLabel={item.statusLabel}
              title={item.title}
              description={item.description}
              pillLabel={item.pillLabel}
              mainAnchor={item.mainAnchor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTopicList;