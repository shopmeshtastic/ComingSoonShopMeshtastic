export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div
          className="size-10 rounded-full border-2 border-primary border-t-transparent animate-spin"
          aria-hidden
        />
        <p className="text-sm text-muted-foreground animate-pulse">
          Загрузка...
        </p>
      </div>
    </main>
  )
}
