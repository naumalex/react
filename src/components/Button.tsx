interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

export function Button(props: ButtonProps) {
  const { className, type, onClick, children } = props;
  return (
    <div className="button-wrapper">
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
