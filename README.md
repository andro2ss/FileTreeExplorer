# FileTree Explorer

An internal developer tool for visualising directory structures from JSON input.

## Quick start

```bash
npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm test        # run unit + component tests (39 tests)
npm run build   # production build
npm run lint    # ESLint check
```

---

## Features

- Paste or upload a JSON file representing a directory structure
- **Insert example** button — fills the textarea with a comprehensive sample tree
- **Windows Explorer–style Details view** — address bar breadcrumbs, sortable table (name / type / size), status bar with item count and total size
- Click any folder row to navigate into it; click any file row to see its details
- Expandable/collapsible tree in the sidebar
- Full-tree search with results surviving page refresh (via URL `?q=`)
- Polish / English language switcher — error messages and all UI strings update instantly
- Responsive layout — on mobile the sidebar is replaced by a compact top bar with search, language switcher and reset

---

## Architectural decisions

### State management — Zustand + sessionStorage

Global state (the parsed JSON tree) lives in a Zustand store persisted to `sessionStorage`. This means the tree survives navigation between routes but is cleared when the browser tab is closed — an appropriate trade-off for an internal developer tool where stale data is undesirable.

### Search persistence — URL query params

The search query is stored in `?q=` so it survives page refresh and can be bookmarked/shared. `useSearchParams` from React Router drives both reading and writing.

### Routing — React Router v7 nested routes with splat

`/tree` is a layout route (sidebar + `<Outlet />`). `/tree/*` is a splat route that passes the full path to `ExplorerPage`, which resolves the node via `findNode` and renders `ExplorerPane`. A guard in `TreePage` redirects to `/` if no tree is loaded. After a successful JSON submit the app immediately navigates to `/tree/<rootName>` so the root is always shown by default.

### Explorer view — ExplorerPane organism

`ExplorerPane` receives a resolved `TreeNode` and its `pathSegments`. For folders it renders an address bar (clickable breadcrumbs), a details table with each child's name, type badge and subtree size, and a status bar. For files it renders a centred card with metadata. Navigation between nodes is handled via `useNavigate`.

### i18n reactivity fix

All error states store the i18n **key** rather than the already-translated string. This means React re-evaluates `t(errorKey)` on every render, so switching the language updates the visible error text without any additional logic.

### Project structure — Atomic Design

```
atoms/       — Button, TextArea, SearchInput, Chevron, TreeIcons, LanguageSwitcher
molecules/   — TreeNodeRow, JsonPasteInput, JsonFileUpload, SearchResultItem
organisms/   — TreeView, JsonInputForm, SearchPanel, ExplorerPane
templates/   — TreeLayout (sidebar + mobile top bar + <Outlet />)
pages/       — HomePage, TreePage, ExplorerPage
```

### TypeScript — discriminated unions

`TreeNode = FileNode | FolderNode` — the `type` field acts as a discriminant, making exhaustive checks straightforward without needing `any` or assertions.

---

## Testing

Vitest + React Testing Library. Run with `npm test`.

| File | Tests | Coverage |
|---|---|---|
| `utils/formatSize.test.ts` | 4 | B / KB / MB formatting |
| `utils/pathUtils.test.ts` | 6 | encode, decode, round-trip |
| `utils/treeUtils.test.ts` | 21 | `isTreeNode`, `findNode`, `calcSubtreeSize`, `searchTree` |
| `molecules/JsonPasteInput.test.tsx` | 8 | render, validation, submit, i18n reactivity |

---

## What would be done with more time

- **Virtual scrolling** — for very large trees (e.g. `react-window`)
- **Keyboard navigation** — arrow keys to traverse the tree
- **Drag-and-drop JSON** — drop a file anywhere on the page
- **Persist expand/collapse state** — tree collapses on refresh; could be stored in `sessionStorage`
- **Column sorting** — click table headers in the Details view to sort by name / size / type

---

## Known limitations

- Folder or file names containing `/` would break URL-based navigation (the path separator is `/`)
- No pagination for search results — very large trees with broad queries can produce a long list
- `sessionStorage` is cleared when the tab is closed — the user must re-upload the JSON on each session

