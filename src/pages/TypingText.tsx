const TypingText = ({ text }: { text: string }) => {
  return (
    <div className="typing-container px-24 py-16 text-2xl">
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="typing-char"
          style={{ 
            animationDelay: `${index * 0.02}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default TypingText;