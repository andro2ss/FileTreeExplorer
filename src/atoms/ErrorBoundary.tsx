import { Component } from 'react'
import type { ReactNode } from 'react'
import { Alert, Button, Container } from '@mui/material'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  message: string
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: unknown): State {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return { hasError: true, message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm" sx={{ py: 6 }}>
          <Alert
            severity="error"
            action={
              <Button color="inherit" size="small" onClick={() => this.setState({ hasError: false, message: '' })}>
                Retry
              </Button>
            }
          >
            {this.state.message}
          </Alert>
        </Container>
      )
    }
    return this.props.children
  }
}
