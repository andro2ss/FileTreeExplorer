import styled from 'styled-components'

type Props = {
  expanded: boolean
}

export function Chevron({ expanded }: Props) {
  return (
    <Wrapper expanded={expanded} aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <polyline points="9,6 15,12 9,18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Wrapper>
  )
}

const Wrapper = styled.svg<{ expanded: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`
