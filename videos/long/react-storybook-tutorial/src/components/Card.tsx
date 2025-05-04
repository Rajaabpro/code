import { CSSProperties, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
  description: string;
  imageUrl?: string;
}>;

export const Card = ({ title, description, imageUrl, children }: CardProps) => {
  const cardStyles: CSSProperties = {
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: '1rem',
    maxWidth: 300,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    borderRadius: 8,
    marginBottom: '1rem',
  };

  return (
    <div style={cardStyles}>
      {imageUrl && <img src={imageUrl} alt={title} style={imageStyles} />}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};
