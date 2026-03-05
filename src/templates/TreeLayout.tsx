import { Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@mui/material'
import styled from 'styled-components'
import { useTreeStore } from '../store/treeStore'
import { TreeView } from '../organisms/TreeView'
import { SearchPanel } from '../organisms/SearchPanel'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'

export default function TreeLayout() {
  const tree = useTreeStore((s) => s.tree)
  const clearTree = useTreeStore((s) => s.clearTree)
  const navigate = useNavigate()
  const { t } = useTranslation()

  function handleLoadNew() {
    clearTree()
    navigate('/')
  }

  return (
    <Layout>
      <Sidebar>
        <SidebarHeader>
          <BrandIcon aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </BrandIcon>
          <BrandName>FileTree</BrandName>
          <HeaderSpacer />
          <LanguageSwitcher compact />
          <Tooltip title={t('load_new_tree')} placement="right">
            <NewButton onClick={handleLoadNew} type="button" aria-label={t('load_new_tree')}>
              ↺
            </NewButton>
          </Tooltip>
        </SidebarHeader>
        <SearchPanel />
        {tree && (
          <TreeViewWrapper>
            <TreeView node={tree} />
          </TreeViewWrapper>
        )}
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`

const Sidebar = styled.aside`
  width: 280px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  flex-shrink: 0;
`

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 14px 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
`

const BrandIcon = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

const BrandName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  letter-spacing: -0.01em;
`

const HeaderSpacer = styled.div`
  flex: 1;
`

const NewButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  transition: all 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #e2e8f0;
  }
`

const TreeViewWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
`

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: #f8fafc;
`
