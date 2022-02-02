export type LinkTags = "h1" | "h2" | "h3" | "h4" | "span" | "div";

export interface LinkProps {
  to: string;
  tag?: LinkTags;
  className?: string;
  innerClassName?: string;
}
