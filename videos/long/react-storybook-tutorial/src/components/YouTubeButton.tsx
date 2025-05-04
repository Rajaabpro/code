import { CSSProperties, useState } from 'react';

type YouTubeButtonProps = {
  subscribed?: boolean;
  onToggle?: (state: boolean) => void;
  size?: 'sm' | 'md';
};

export const YouTubeButton = ({
  subscribed = false,
  onToggle,
  size = 'md',
}: YouTubeButtonProps) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribed);

  const handleClick = () => {
    const newState = !isSubscribed;
    setIsSubscribed(newState);
    onToggle?.(newState);
  };

  const baseStyle: CSSProperties = {
    fontWeight: 600,
    color: isSubscribed ? 'black' : 'white',
    backgroundColor: isSubscribed ? '#e0e0e0' : '#cc0000',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    transition: '0.3s ease',
  };

  const sizeStyles: Record<'sm' | 'md', CSSProperties> = {
    sm: {
      padding: '4px 10px',
      fontSize: '0.8rem',
    },
    md: {
      padding: '8px 16px',
      fontSize: '1rem',
    },
  };

  return (
    <button style={{ ...baseStyle, ...sizeStyles[size] }} onClick={handleClick}>
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  );
};
