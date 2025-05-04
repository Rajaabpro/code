import { useState } from 'react';

type LikeButtonProps = {
  liked?: boolean;
  onToggle?: (newState: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
};

export const LikeButton = ({
  liked = false,
  onToggle,
  size = 'md',
}: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleClick = () => {
    const newState = !isLiked;
    setIsLiked(newState);
    onToggle?.(newState);
  };

  const sizeStyles = {
    sm: { fontSize: '12px', padding: '0.25rem 0.5rem' },
    md: { fontSize: '16px', padding: '0.5rem 1rem' },
    lg: { fontSize: '20px', padding: '0.75rem 1.25rem' },
  };

  return (
    <button
      onClick={handleClick}
      style={{
        ...sizeStyles[size],
        background: isLiked ? '#0d6efd' : '#e0e0e0',
        color: isLiked ? '#fff' : '#000',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {isLiked ? 'Liked ❤️' : 'Like 👀'}
    </button>
  );
};
