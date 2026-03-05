import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import { SearchInput } from '../atoms/SearchInput'
import { SearchResultItem } from '../molecules/SearchResultItem'
import { searchTree } from '../utils/treeUtils'
import { useTreeStore } from '../store/treeStore'

export function SearchPanel() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const tree = useTreeStore((s) => s.tree)

  const query = searchParams.get('q') ?? ''

  function handleChange(value: string) {
    setSearchParams(value ? { q: value } : {}, { replace: true })
  }

  const results = query && tree ? searchTree(tree, query) : []

  return (
    <Panel>
      <SearchInput value={query} onChange={handleChange} />
      {query && (
        <ResultsContainer>
          {results.length === 0 ? (
            <Typography variant="caption" color="text.secondary" sx={{ px: 1.5, py: 1, display: 'block' }}>
              {t('search_no_results')}
            </Typography>
          ) : (
            <>
              <ResultsCount variant="caption">
                {t('search_results_count', { count: results.length })}
              </ResultsCount>
              <ResultsList>
                {results.map(({ node, path }) => (
                  <SearchResultItem key={path} node={node} path={path} />
                ))}
              </ResultsList>
            </>
          )}
        </ResultsContainer>
      )}
    </Panel>
  )
}

const Panel = styled.div`
  padding: 8px 12px 0;
  border-bottom: 1px solid #e0e0e0;
`

const ResultsContainer = styled.div`
  margin-top: 8px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #fff;
`

const ResultsCount = styled(Typography)`
  display: block;
  padding: 6px 12px 4px;
  color: #888;
` as typeof Typography

const ResultsList = styled.ul`
  margin: 0;
  padding: 0;
`
