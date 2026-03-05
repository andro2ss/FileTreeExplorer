import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ExpandedStore = {
  expandedPaths: string[]
  toggle: (path: string) => void
  clear: () => void
}

export const useExpandedStore = create<ExpandedStore>()(
  persist(
    (set, get) => ({
      expandedPaths: [],
      toggle: (path) => {
        const current = get().expandedPaths
        set({
          expandedPaths: current.includes(path)
            ? current.filter((p) => p !== path)
            : [...current, path],
        })
      },
      clear: () => set({ expandedPaths: [] }),
    }),
    {
      name: 'filetree-expanded',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
