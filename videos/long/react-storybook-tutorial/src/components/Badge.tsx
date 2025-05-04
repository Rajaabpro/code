import React from 'react';

type BadgeProps = {
  label: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
};

export default function Badge({
  label,
  color = '#eee',
  textColor = '#000',
  onClick,
  size = 'md',
}: BadgeProps) {
  const sizeStyles = {
    sm: { fontSize: '10px', padding: '2px 8px' },
    md: { fontSize: '12px', padding: '4px 12px' },
    lg: { fontSize: '14px', padding: '6px 16px' },
  };

  const { fontSize, padding } = sizeStyles[size];

  return (
    <button
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-block',
        padding,
        fontSize,
        fontWeight: 600,
        borderRadius: '12px',
        backgroundColor: color,
        color: textColor,
        border: 'none',
      }}
    >
      {label}
    </button>
  );
}
