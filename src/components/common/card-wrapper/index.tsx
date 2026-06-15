import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { CardWrapperProps } from '@/types';

export function CardWrapper({
  children,
  title,
  description,
  className,
  headerClassName,
  contentClassName,
  headerBorder = true,
}: CardWrapperProps) {
  return (
    <Card className={className}>
      <CardHeader
        className={cn(
          headerBorder && 'border-b border-border',
          headerClassName,
        )}
      >
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}
