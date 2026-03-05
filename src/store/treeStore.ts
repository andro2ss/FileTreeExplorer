import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { TreeNode } from '../types/tree'

type TreeStore = {
  tree: TreeNode | null
  setTree: (tree: TreeNode) => void
  clearTree: () => void
}

export const useTreeStore = create<TreeStore>()(
  persist(
    (set) => ({
      tree: null,
      setTree: (tree) => set({ tree }),
      clearTree: () => set({ tree: null }),
    }),
    {
      name: 'filetree-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
