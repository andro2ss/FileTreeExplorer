import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useTreeStore } from '../store/treeStore'
import { TreeView } from '../organisms/TreeView'
import { SearchPanel } from '../organisms/SearchPanel'

export default function TreeLayout() {
  const tree = useTreeStore((s) => s.tree)

  return (
    <Layout>
      <Sidebar>
        <SearchPanel />
        {tree && <TreeViewWrapper><TreeView node={tree} /></TreeViewWrapper>}
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`

const Sidebar = styled.aside`
  width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  background: #fafafa;
`

const TreeViewWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
`

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`
