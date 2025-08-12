import { cn } from "@/app/_libs/utils";

export function PrimaryButton({
    children,
    className,
    type = "button",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "bg-primary uppercase text-primary-foreground hover:bg-primary/60 ring-offset-background focus-visible:ring-ring inline-flex h-[34px] min-w-[100px] cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                className,
            )}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({
    children,
    className,
    type = "button",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "bg-secondary text-secondary-foreground hover:bg-secondary/60 ring-offset-background focus-visible:ring-ring inline-flex h-[34px] min-w-[100px] cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm text-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                className,
            )}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

export function DestructiveButton({
    children,
    className,
    type = "button",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "bg-secondary text-destructive hover:bg-destructive hover:text-foreground ring-offset-background focus-visible:ring-ring inline-flex h-[34px] min-w-[100px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm text-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                className,
            )}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}