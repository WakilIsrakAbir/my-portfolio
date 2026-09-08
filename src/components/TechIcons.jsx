export function TechIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38bdf8" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#38bdf8" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="#38bdf8" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path d="M7 17V7h2l6.5 10H17V7" stroke="#090d16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#facc15" />
          <path d="M7 16c.5.8 1.4 1.2 2.3 1.2 1.3 0 2.2-.7 2.2-2.1V9h-2v6c0 .5-.3.8-.8.8-.4 0-.7-.2-.9-.5L7 16zm7.2-.2c.6.9 1.6 1.4 2.8 1.4 1.8 0 3-1 3-2.5 0-1.4-.9-2.1-2.4-2.7l-.5-.2c-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1.1 1.3-1.1.7 0 1.2.3 1.6.9l1.4-1c-.8-1.2-1.8-1.6-3-1.6-1.7 0-2.8 1.1-2.8 2.5 0 1.3.8 2 2.2 2.5l.6.2c1 .4 1.5.8 1.5 1.5 0 .7-.6 1.2-1.5 1.2-.9 0-1.5-.4-2-1.1l-1.3 1.2z" fill="#000000" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#22d3ee">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "framer":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#e879f9">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "html5":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f97316">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.4 5.4H5.1l.4 4.5h11.9l-.5 5.5-4.9 1.4-4.9-1.4-.3-3.2H4.4l.6 5.5 7 2 7-2 1-11.8z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#4ade80">
          <path d="M12 2l10 5.8v11.5L12 25.1 2 19.3V7.8L12 2zm0 2.3L4 8.9v9.3l8 4.6 8-4.6V8.9L12 4.3z" />
        </svg>
      );
    case "express":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 12l9.5-9.5 9.5 9.5-9.5 9.5L2.5 12zm7.5-2.5h4v1h-4v-1zm0 4h4v1h-4v-1z" />
        </svg>
      );
    case "rest":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <path d="M8 12h8M12 8l4 4-4 4" />
        </svg>
      );
    case "c":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
          <path d="M15.5 8.5A5 5 0 0 0 8.5 12a5 5 0 0 0 7 3.5" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "cpp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="2" />
          <path d="M13 8.5A4.5 4.5 0 0 0 7 12a4.5 4.5 0 0 0 6 3.5M15.5 12h3M17 10.5v3M19.5 12h3M21 10.5v3" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "php":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#a78bfa">
          <ellipse cx="12" cy="12" rx="10" ry="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M8 9v6M8 9h3a2 2 0 1 1 0 4H8M16 9v6M16 9h3a2 2 0 1 1 0 4h-3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#34d399">
          <path d="M12 1.5c-.4 2.5-4 5.3-4 10.5 0 4.2 3.1 8 4 9.5.9-1.5 4-5.3 4-9.5 0-5.2-3.6-8-4-10.5zm0 18.5c-.2-.7-2.8-4-2.8-8 0-3.3 1.9-5.5 2.8-7.3.9 1.8 2.8 4 2.8 7.3 0 4-2.6 7.3-2.8 8z" />
        </svg>
      );
    case "mongoose":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f43f5e">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 15l4-6 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12 3c-4.97 0-9 2.01-9 4.5v9c0 2.49 4.03 4.5 9 4.5s9-2.01 9-4.5v-9c0-2.49-4.03-4.5-9-4.5zm0 2c4.01 0 7 1.42 7 2.5s-2.99 2.5-7 2.5-7-1.42-7-2.5 2.99-2.5 7-2.5zm0 6c4.01 0 7 1.42 7 2.5v2c0 1.08-2.99 2.5-7 2.5s-7-1.42-7-2.5v-2c0-1.08 2.99-2.5 7-2.5z" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#fb923c">
          <path d="M21.7 10.3L13.7 2.3c-.4-.4-1-.4-1.4 0L9.8 4.8l2.9 2.9c.4-.1.8 0 1.1.3.5.5.5 1.3 0 1.8-.3.3-.7.4-1.1.3l-2.7 2.7v5.2c.4.2.8.5 1 .9.5.9.2 2-7 2.5-.9.5-2 .2-2.5-.7-.5-.9-.2-2 .7-2.5.4-.2.8-.2 1.2-.1v-5.2c-.4-.2-.8-.5-1-.9-.4-.8-.2-1.8.5-2.3L6.3 6.6 2.3 10.6c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0l10-10c.4-.4.4-1 0-1.4z" />
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#60a5fa">
          <path d="M17.5 1.5L6.5 10l-4-3.5L1 7.8v8.4l1.5 1.3 4-3.5 11 8.5 4.5-2.2V3.7l-4.5-2.2zm0 4.8v11.4L9.8 12 17.5 6.3z" />
        </svg>
      );
    case "office":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ea580c">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "word":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#2b579a" />
          <path d="M6 7.5L8.2 16.5H10.1L12 10.2L13.9 16.5H15.8L18 7.5H16.2L14.8 13.8L12.9 7.5H11.1L9.2 13.8L7.8 7.5H6Z" fill="#ffffff" />
        </svg>
      );
    case "excel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#217346" />
          <path d="M7 7.5L10.5 12L7 16.5H9.2L11.8 13.2L14.4 16.5H16.6L13.1 12L16.6 7.5H14.4L11.8 10.8L9.2 7.5H7Z" fill="#ffffff" />
        </svg>
      );
    case "powerpoint":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#d24726" />
          <path d="M8 7.5H12.5C14.4 7.5 15.5 8.5 15.5 10.2C15.5 11.9 14.4 12.9 12.5 12.9H9.8V16.5H8V7.5ZM9.8 11.4H12.2C13.2 11.4 13.7 10.9 13.7 10.2C13.7 9.5 13.2 9 12.2 9H9.8V11.4Z" fill="#ffffff" />
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ff6c37">
          <circle cx="12" cy="12" r="10" fill="#ff6c37" />
          <path d="M7 13l3.5-3.5 1.5 1.5-3.5 3.5zm4-2l4-4 2 2-4 4z" fill="#ffffff" />
        </svg>
      );
    case "css3":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0284c7">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.4H5.3l.3 3.6h12.8l-.4 4.2-5.9 1.6-6-1.6-.2-2.4H2.4l.4 4.8 9.2 2.6 9.3-2.6 1.4-15.6z" />
        </svg>
      );
    case "daisyui":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3.5" fill="#facc15" />
          <circle cx="12" cy="4.5" r="3" fill="#1ad1a5" />
          <circle cx="12" cy="19.5" r="3" fill="#1ad1a5" />
          <circle cx="4.5" cy="12" r="3" fill="#1ad1a5" />
          <circle cx="19.5" cy="12" r="3" fill="#1ad1a5" />
          <circle cx="6.5" cy="6.5" r="2.5" fill="#1ad1a5" />
          <circle cx="17.5" cy="17.5" r="2.5" fill="#1ad1a5" />
          <circle cx="17.5" cy="6.5" r="2.5" fill="#1ad1a5" />
          <circle cx="6.5" cy="17.5" r="2.5" fill="#1ad1a5" />
        </svg>
      );
    case "heroui":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#ec4899" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 22V12M12 12L3 7M12 12l9-5" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 24a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4z" fill="#0acf83" />
          <path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#a259ff" />
          <path d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#f24e1e" />
          <path d="M12 0h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V0z" fill="#ff7262" />
          <path d="M20 12a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4 4z" fill="#1abcfe" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
}
