import { css as emotionCSS } from "@emotion/css"
import { ThemeContext } from "@emotion/react"
import { useContext, useMemo } from "react"
import type { StyledTheme } from "../theme.types"
import { css } from "./css"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"

export const useCSS = (cssObject: CSSObjectOrFunc | CSSUIObject = {}) => {
  const theme = useContext(ThemeContext) as StyledTheme

  return useMemo(() => emotionCSS(css(cssObject)(theme)), [cssObject, theme])
}
