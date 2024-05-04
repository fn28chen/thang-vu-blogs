import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2 md:block hidden">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
