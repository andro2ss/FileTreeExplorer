import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { SearchInput } from '../atoms/SearchInput'
import { SearchResultItem } from '../molecules/SearchResultItem'
import { searchTree } from '../utils/treeUtils'
import { useTreeStore } from '../store/treeStore'

type Props = {
  variant?: 'sidebar' | 'topbar'
}

export function SearchPanel({ variant = 'sidebar' }: Props) {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const tree = useTreeStore((s) => s.tree)

  const query = searchParams.get('q') ?? ''

  function handleChange(value: string) {
    setSearchParams(value ? { q: value } : {}, { replace: true })
  }

  const results = query && tree ? searchTree(tree, query) : []

  return (
    <Panel $topbar={variant === 'topbar'}>
      <SearchInput value={query} onChange={handleChange} />
      {query && (
        <Dropdown $topbar={variant === 'topbar'}>
          {results.length === 0 ? (
            <EmptyMsg>{t('search_no_results')}</EmptyMsg>
          ) : (
            <>
              <CountRow>{t('search_results_count', { count: results.length })}</CountRow>
              <ResultsList>
                {results.map(({ node, path }) => (
                  <SearchResultItem key={path} node={node} path={path} />
                ))}
              </ResultsList>
            </>
          )}
        </Dropdown>
      )}
    </Panel>
  )
}

const Panel = styled.div<{ $topbar: boolean }>`
  padding: ${({ $topbar }) => ($topbar ? '0' : '10px')};
  flex-shrink: 0;
  flex: ${({ $topbar }) => ($topbar ? '1' : 'unset')};
  position: relative;
`

const Dropdown = styled.div<{ $topbar: boolean }>`
  margin-top: 6px;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  overflow: hidden;
  max-height: 260px;
  overflow-y: auto;
  position: ${({ $topbar }) => ($topbar ? 'absolute' : 'relative')};
  ${({ $topbar }) => $topbar && 'left: 0; right: 0; z-index: 200;'}
`

const CountRow = styled.div`
  font-size: 11px;
  color: #475569;
  padding: 6px 10px 4px;
  letter-spacing: 0.01em;
`

const EmptyMsg = styled.div`
  font-size: 12px;
  color: #475569;
  padding: 14px 10px;
  text-align: center;
`

const ResultsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
