import { cn } from "@/app/(utils)/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        blue: "bg-blue-light text-blue-dark",
        yellow: "bg-yellow-light text-yellow-dark",
        purple: "bg-purple-light text-purple-dark",
        green: "bg-green-light text-green-dark",
        red: "bg-red-light text-red-dark",
        brown: "bg-brown-light text-brown-dark",
      },
      size: {
        xl: "px-3 py-2 sm:px-7 sm:py-4 text-sm sm:text-[1.75rem]",
        l: "px-5 py-3 text-[1.5rem]",
        m: "px-3 sm:px-4 py-2 text-sm sm:text-[1.25rem]",
        s: "px-3 sm:px-4 py-2 text-sm sm:text-lg",
      },
      outline: {
        true: "border border-gray-dark bg-background",
      },
    },
    defaultVariants: {
      variant: "planning",
    },
  }
);

function Badge({
  className,
  variant,
  size = "m",
  outline = false,
  nodot = false,
  children,
  ...props
}) {
  const dotColors = {
    blue: "bg-blue",
    yellow: "bg-yellow",
    purple: "bg-purple",
    green: "bg-green",
    red: "bg-red",
    brown: "bg-brown",
  };

  return (
    <div
      className={cn(badgeVariants({ variant, size, outline }), className)}
      {...props}
    >
      {!nodot && (
        <span
          className={cn(
            "h-[0.4em] w-[0.4em] rounded-full",
            variant && dotColors[variant]
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
