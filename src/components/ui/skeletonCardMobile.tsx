import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCardMobileProps {
  className?: string;
}

export function SkeletonCardMobile({ className }: SkeletonCardMobileProps) {
  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <Skeleton className="flex items-center justify-center h-[300px] w-[300px] rounded-xl" />
    </div>
  )
}