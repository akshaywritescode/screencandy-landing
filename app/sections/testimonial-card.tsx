import { Card, CardContent, CardFooter } from "@/components/ui/card"

type TestimonialCardProps = {
  description: string
  testimonialName: string
  testimonialUserHandle: string
  testimonialInitials: string
}

export default function TestimonialCard({
  description,
  testimonialName,
  testimonialUserHandle,
  testimonialInitials,
}: TestimonialCardProps) {
  return (
    <Card className="flex w-[320px] shrink-0 flex-col rounded-3xl border border-black/6 bg-card/95 pt-3 text-sm shadow-lg shadow-black/5 ring-0">
      <CardContent className="pb-4">
        <p className="leading-7 text-foreground/80">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-3 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700/10 text-sm font-semibold text-blue-700">
          {testimonialInitials}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold">{testimonialName}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {testimonialUserHandle}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
