/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ Map all CSS variables to Tailwind colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // ✅ Sidebar custom variables
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",

        // ✅ Custom colors
        sage: "hsl(var(--sage))",
        "sage-light": "hsl(var(--sage-light))",
        "sage-dark": "hsl(var(--sage-dark))",
        rose: "hsl(var(--rose))",
        "rose-light": "hsl(var(--rose-light))",
        "rose-dark": "hsl(var(--rose-dark))",
        cream: "hsl(var(--cream))",
        "cream-light": "hsl(var(--cream-light))",
        "cream-dark": "hsl(var(--cream-dark))",
        lavender: "hsl(var(--lavender))",
        "lavender-light": "hsl(var(--lavender-light))",
        "lavender-dark": "hsl(var(--lavender-dark))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  animation: {
    'brutal-entrance': 'brutalEntrance 0.6s ease-out forwards',
    'brutal-float': 'brutalFloat 3s ease-in-out infinite',
  },
  keyframes: {
    brutalEntrance: {
      '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
      '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
    },
    brutalFloat: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
    },
  },
    },
  },
  plugins: [],
};
