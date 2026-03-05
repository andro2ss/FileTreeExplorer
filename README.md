# FileTree Explorer

Wewnętrzne narzędzie developerskie do wizualizacji struktury katalogów z pliku JSON.

## Uruchomienie

```bash
npm install && npm run dev
```

Otwórz [http://localhost:5173](http://localhost:5173).

```bash
npm test        # testy jednostkowe i komponentowe (39 testów)
npm run build   # produkcyjny build
npm run lint    # sprawdzenie ESLint
```

---

## Funkcjonalności

- Wklejenie lub wgranie pliku JSON reprezentującego strukturę katalogów
- Przycisk „Wstaw przykład" — wypełnia textarea wyczerpującym przykładem obsługiwanego formatu
- Widok szczegółów w stylu Eksploratora Windows — pasek adresu (breadcrumbs), tabela z nazwą / typem / rozmiarem, pasek statusu z liczbą elementów i łącznym rozmiarem
- Kliknięcie wiersza folderu wchodzi do niego; kliknięcie pliku pokazuje jego szczegóły
- Rozwijane/zwijane drzewo w panelu bocznym
- Wyszukiwanie po całym drzewie z zachowaniem zapytania po odświeżeniu strony (URL `?q=`)
- Przełącznik języka PL/EN — komunikaty błędów i cały interfejs aktualizują się natychmiast
- Responsywny layout — na mobile panel boczny jest ukryty, zamiast niego pojawia się górny pasek z wyszukiwarką, przełącznikiem języka i resetem

---

## Decyzje architektoniczne

### Zarządzanie stanem — Zustand + sessionStorage

Globalny stan (sparsowane drzewo JSON) przechowywany jest w storze Zustand z persistencją do `sessionStorage`. Drzewo przeżywa nawigację między trasami, ale jest kasowane po zamknięciu karty — odpowiedni kompromis dla narzędzia wewnętrznego, gdzie nieaktualne dane są niepożądane.

### Persystencja wyszukiwania — parametry URL

Zapytanie wyszukiwania zapisywane jest w `?q=`, dzięki czemu przeżywa odświeżenie strony. `useSearchParams` z React Router odpowiada za odczyt i zapis.

### Routing — React Router v6, zagnieżdżone trasy ze splatem

`/tree` to trasa-layout (sidebar + `<Outlet />`). `/tree/*` to trasa splat przekazująca pełną ścieżkę do `ExplorerPage`, która rozwiązuje węzeł przez `findNode` i renderuje `ExplorerPane`. Guard w `TreePage` przekierowuje do `/` gdy brak drzewa w storze. Po poprawnym załadowaniu JSON aplikacja od razu nawiguje do `/tree/<root>`, żeby root był zawsze domyślnie widoczny.

### Widok eksploratora — organism ExplorerPane

`ExplorerPane` otrzymuje rozwiązany `TreeNode` i jego `pathSegments`. Dla folderów renderuje pasek adresu z klikalnym breadcrumbem, tabelę dzieci (nazwa, badge typu, rozmiar poddrzewa) i pasek statusu. Dla plików renderuje wycentrowaną kartę z metadanymi. Nawigacja między węzłami odbywa się przez `useNavigate`.

### Reaktywność i18n

Stany błędów przechowują **klucz** i18n zamiast przetłumaczonego stringa. Dzięki temu React przelicza `t(errorKey)` przy każdym renderze — zmiana języka aktualizuje widoczny komunikat bez żadnej dodatkowej logiki.

### Struktura projektu — Atomic Design

```
atoms/       — Button, TextArea, SearchInput, Chevron, TreeIcons, LanguageSwitcher
molecules/   — TreeNodeRow, JsonPasteInput, JsonFileUpload, SearchResultItem
organisms/   — TreeView, JsonInputForm, SearchPanel, ExplorerPane
templates/   — TreeLayout (sidebar + mobilny top bar + <Outlet />)
pages/       — HomePage, TreePage, ExplorerPage
```

### TypeScript — unie dyskryminowane

`TreeNode = FileNode | FolderNode` — pole `type` pełni rolę dyskryminantu, co pozwala na wyczerpujące sprawdzenia bez użycia `any` ani asercji.

---

## Testy

Vitest + React Testing Library. Uruchomienie: `npm test`.

| Plik | Testy | Zakres |
|---|---|---|
| `utils/formatSize.test.ts` | 4 | formatowanie B / KB / MB |
| `utils/pathUtils.test.ts` | 6 | encode, decode, round-trip ze znakami specjalnymi |
| `utils/treeUtils.test.ts` | 21 | `isTreeNode`, `findNode`, `calcSubtreeSize`, `searchTree` |
| `molecules/JsonPasteInput.test.tsx` | 8 | render, walidacja, submit, reaktywność i18n |

---

## Co zostałoby zrobione przy większej ilości czasu

- **Testy E2E (Playwright)** — scenariusze end-to-end: wklejenie JSON → nawigacja do folderu → wyszukiwanie → przełączenie języka; weryfikacja całego flow w prawdziwej przeglądarce niezależnie od implementacji komponentów
- **Wirtualny scrolling** — dla bardzo dużych drzew (np. `react-window`)
- **Nawigacja klawiaturą** — strzałki do poruszania się po drzewie
- **Drag-and-drop JSON** — upuszczenie pliku w dowolnym miejscu strony
- **Persystencja stanu rozwinięcia** — drzewo zwija się po odświeżeniu; można by zapisywać stan w `sessionStorage`
- **Sortowanie kolumn** — kliknięcie nagłówka tabeli w widoku szczegółów sortuje po nazwie / rozmiarze / typie

---

## Znane ograniczenia

- Nazwy plików i folderów zawierające `/` psują nawigację opartą na URL (separator ścieżki to `/`)
- Brak paginacji wyników wyszukiwania — bardzo duże drzewa z szerokim zapytaniem mogą zwrócić długą listę
- `sessionStorage` jest czyszczony po zamknięciu karty — użytkownik musi ponownie wgrać JSON przy każdej sesji


