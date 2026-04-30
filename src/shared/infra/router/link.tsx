import type { PropsWithChildren } from "react";
import { Link as RRDLink } from "react-router";

export const Link = ({ children, to, className = '' }: PropsWithChildren<{ to: string, className?: string }>) => (
    <RRDLink to={{ pathname: to }} className={className}>{children}</RRDLink>
)