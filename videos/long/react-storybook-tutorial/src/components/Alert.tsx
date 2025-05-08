import React from 'react';

type AlertProps = {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
};

export default function Alert({ message, type = 'info' }: AlertProps) {
  const backgroundColors: Record<string, string> = {
    success: '#D1FAE5',  // green
    error: '#FECACA',    // red
    warning: '#FEF3C7',  // yellow
    info: '#DBEAFE',     // blue
  };

  const textColors: Record<string, string> = {
    success: '#065F46',
    error: '#991B1B',
    warning: '#92400E',
    info: '#1E40AF',
  };

  return (
    <div
      style={{
        padding: '12px 16px',
        borderRadius: '8px',
        backgroundColor: backgroundColors[type],
        color: textColors[type],
        fontWeight: 500,
        fontSize: '14px',
      }}
    >
      {message}
    </div>
  );
}
