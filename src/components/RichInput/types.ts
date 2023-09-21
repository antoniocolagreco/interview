import { BaseEditor } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

export type Formats = 'bold' | 'italic' | 'underline' | 'strikethrough'
export type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}
export type RichInputElement<S = string> = { type: S; children: CustomText[] }
export type ParagraphElement = RichInputElement<'paragraph'>
export type CodeElement = RichInputElement<'code'>

export type CustomElement = ParagraphElement | CodeElement
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}
