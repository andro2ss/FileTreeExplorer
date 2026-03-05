# FileTree Explorer

An internal developer tool for visualising directory structures from JSON input.

## Quick start

```bash
npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Features

- Paste or upload a JSON file representing a directory structure
- Expandable/collapsible tree view
- File and folder detail pages (name, size, path, children)
- Full-tree search with results surviving page refresh (via URL `?q=`)
- Polish / English language support

---

## Architectural decisions

### State management — Zustand + sessionStorage

Global state (the parsed JSON tree) lives in a Zustand store persisted to `sessionStorage`. This means the tree survives navigation between routes but is cleared when the browser tab is closed — an appropriate trade-off for an internal developer tool where stale data is undesirable.

### Search persistence — URL query params

The search query is stored in `?q=` so it survives page refresh and can be bookmarked/shared. `useSearchParams` from React Router drives both reading and writing.

### Routing — React Router v6 nested routes

`/tree` is a layout route (sidebar + `<Outlet />`). `/tree/:nodePath` is a nested route that renders node details in the main content area. A guard in `TreePage` redirects to `/` if no tree is loaded.

### Project structure — Atomic Design

```
atoms/       — primitive UI: Button, TextArea, SearchInput, Chevron, TreeIcons, ErrorBoundary
molecules/   — composed atoms: TreeNodeRow, FileDetails, FolderDetails, JsonPasteInput, JsonFileUpload, SearchResultItem, FileSizeDisplay
organisms/   — composed molecules: TreeView, JsonInputForm, SearchPanel
templates/   — layout shells: TreeLayout
pages/       — route-level: HomePage, TreePage, NodeDetailsPage
```

### TypeScript — discriminated unions

`TreeNode = FileNode | FolderNode` — the `type` field acts as a discriminant, making exhaustive checks straightforward without needing `any` or assertions.

### i18n — react-i18next

All user-visible strings go through `t('key')`. Two locales: `en` and `pl`. No hardcoded strings in JSX.

---

## What would be done with more time

- **Language switcher** — UI control to toggle between `en` and `pl`
- **Expand all / Collapse all** — buttons in the sidebar header
- **Virtual scrolling** — for very large trees (e.g. `react-window`)
- **Breadcrumb navigation** — path breadcrumbs in the node detail view
- **Keyboard navigation** — arrow keys to traverse the tree
- **Unit tests** — especially `treeUtils` (findNode, calcSubtreeSize, searchTree) and JSON validation
- **Drag-and-drop JSON** — drop a file anywhere on the page

---

## Known limitations

- The `nodePath` URL param uses `/` as a separator so folder or file names containing `/` would break navigation
- No pagination for search results — very large trees with broad queries can produce a long list
- Tree expand/collapse state is not persisted; refreshing will show the tree fully collapsed
- `sessionStorage` is cleared when the tab is closed — the user must re-upload the JSON on each session

