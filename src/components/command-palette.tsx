// Search palette, opened with `/`. Opened empty it is a jump list, not a blank
// box — and there is no recent-searches section, because nothing is remembered
// between visits.

import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { BookText, GraduationCap, Layers, Library } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { search } from '@/lib/search'

const KIND_ICON = { term: BookText, lesson: Layers, course: GraduationCap }
const KIND_HEADING = { term: 'Terms', lesson: 'Lessons', course: 'Courses' }

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const results = useMemo(() => search(query), [query])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  const go = (to: string) => {
    onOpenChange(false)
    navigate({ to })
  }

  const grouped = { term: [] as typeof results, lesson: [] as typeof results, course: [] as typeof results }
  for (const r of results) grouped[r.kind].push(r)

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search"
      description="Search terms, lessons and courses"
      // Results are pre-ranked by src/lib/search.ts; cmdk must not re-sort them.
      shouldFilter={false}
    >
      <CommandInput
        placeholder="Search terms, lessons and courses…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {query.trim() === '' ? (
          <CommandGroup heading="Jump to">
            <CommandItem onSelect={() => go('/glossary')}>
              <Library className="size-4" /> Glossary
            </CommandItem>
            <CommandItem onSelect={() => go('/practice')}>
              <Layers className="size-4" /> Practice
            </CommandItem>
            <CommandItem onSelect={() => go('/')}>
              <GraduationCap className="size-4" /> All courses
            </CommandItem>
          </CommandGroup>
        ) : (
          <>
            <CommandEmpty>No matches.</CommandEmpty>
            {(['term', 'lesson', 'course'] as const).map((kind) =>
              grouped[kind].length ? (
                <CommandGroup key={kind} heading={KIND_HEADING[kind]}>
                  {grouped[kind].map((r) => {
                    const Icon = KIND_ICON[r.kind]
                    return (
                      <CommandItem key={`${r.kind}-${r.to}`} value={r.to} onSelect={() => go(r.to)}>
                        <Icon className="size-4 shrink-0" />
                        <span className="flex-1 truncate">{r.label}</span>
                        <span className="text-muted-foreground shrink-0 text-xs">{r.hint}</span>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              ) : null,
            )}
          </>
        )}
      </CommandList>

      <div className="text-muted-foreground flex items-center gap-4 border-t px-3 py-2 text-[11px]">
        <span className="flex items-center gap-1.5">
          <Key>Enter</Key> open
        </span>
        <span className="flex items-center gap-1.5">
          <Key>↑</Key>
          <Key>↓</Key> navigate
        </span>
        <span className="flex items-center gap-1.5">
          <Key>Esc</Key> close
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <Key>/</Key> anywhere
        </span>
      </div>
    </CommandDialog>
  )
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="border-border bg-muted rounded border px-1.5 py-0.5 font-mono text-[10px]">
      {children}
    </kbd>
  )
}

/** `/` is a printable character, so it must never steal a real keystroke. */
function isTyping(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null
  if (!el?.tagName) return false
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.tagName === 'SELECT' ||
    el.isContentEditable
  )
}

/**
 * `/` opens search from anywhere, the way it does in vim — except while typing,
 * where it stays an ordinary slash. Ctrl-K is kept as an unadvertised fallback
 * precisely for that case: it is the only one that works from inside a field.
 */
export function useCommandPalette() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
        return
      }
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !isTyping(e.target)) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  return { open, setOpen }
}
