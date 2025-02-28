import { ErrorProps } from "./components/Error.types"

export interface IRenderProps extends ErrorProps {
  path: string
  statusCode?: number
}