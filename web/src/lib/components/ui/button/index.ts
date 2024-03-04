import type { Button as ButtonPrimitive } from "bits-ui";
import { tv, type VariantProps } from "tailwind-variants";
import Root from "./button.svelte";

const buttonVariants = tv({
	base: "inline-flex items-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	variants: {
		variant: {
			default: "justify-center bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive:
				"justify-center bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline:
				"justify-center border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "justify-center bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "justify-center hover:bg-accent hover:text-accent-foreground",
			link: "justify-center text-primary underline-offset-4 hover:underline",
			icon: "justify-left px-5 bg-secondary text-secondary-foreground shadow hover:bg-primary/90 hover:text-secondary",
			active: "justify-center bg-primary text-primary-undergoned rounded-md text-sm",
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			full: "w-full h-12"
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};