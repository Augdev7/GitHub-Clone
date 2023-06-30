/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { defaultTheme } from '@/style/themes/default'
import styled from 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
