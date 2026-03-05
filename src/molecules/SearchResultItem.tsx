import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { encodePath } from '../utils/pathUtils'
import type { TreeNode } from '../types/tree'

type Props = {
  node: TreeNode
  path: string
}

export function SearchResultItem({ node, path }: Props) {
  const segments = path.split('/')
  const encodedPath = encodePath(segments)

  return (
    <Item>
      <ResultLink to={`/tree/${encodedPath}`}>
        <Name>{node.name}</Name>
        <Path>{path}</Path>
      </ResultLink>
    </Item>
  )
}

const Item = styled.li`
  list-style: none;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`

const ResultLink = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: rgba(25, 118, 210, 0.06);
  }
`

const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
`

const Path = styled.div`
  font-size: 11px;
  color: #888;
  margin-top: 2px;
`
