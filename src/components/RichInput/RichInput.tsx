'use client'
import clsx from 'clsx'
import { FC, useCallback, useMemo } from 'react'
import { LuBold, LuItalic, LuStrikethrough, LuUnderline } from 'react-icons/lu'
import { Descendant, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import { EditableProps, RenderElementProps, RenderLeafProps } from 'slate-react/dist/components/editable'
import RichInputElement from './RichInputElement'
import RichInputLeaf from './RichInputLeaf'
import RichMarkButton from './RichMarkButton'

type RichInputProps = Omit<EditableProps, 'onChange'> & {
  onChange?: ((value: Descendant[]) => void) | undefined
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const RichInput: FC<RichInputProps> = (props) => {
  const { className, onChange, ...otherProps } = props

  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const renderElement = useCallback((props: RenderElementProps) => <RichInputElement {...props} />, [])
  const renderLeaf: (props: RenderLeafProps) => JSX.Element = useCallback(
    (props: RenderLeafProps) => <RichInputLeaf {...props} />,
    []
  )

  return (
    <Slate initialValue={initialValue} editor={editor} onChange={onChange}>
      <div className='focus-within:ring-2 ring-yellow-500 rounded-xl'>
        <div className='flex gap-4 flex-wrap bg-neutral-100 p-2 border-[1px] border-b-0 rounded-t-xl border-neutral-200'>
          <div className='flex gap-1'>
            <RichMarkButton format='bold'>
              <LuBold className={clsx('text-xl')} />
            </RichMarkButton>
            <RichMarkButton format='italic'>
              <LuItalic className={clsx('text-xl')} />
            </RichMarkButton>
            <RichMarkButton format='underline'>
              <LuUnderline className={clsx('text-xl')} />
            </RichMarkButton>
            <RichMarkButton format='strikethrough'>
              <LuStrikethrough className={clsx('text-xl')} />
            </RichMarkButton>
          </div>
          <div className='flex gap-1'>
            {/* <RichBlockButton>
              <LuCode className={clsx('text-xl')} />
            </RichBlockButton> */}
          </div>
          <div className='flex gap-1'>
            {/* <RichInputButton>
              <LuListOrdered className={clsx('text-xl')} />
            </RichInputButton>
            <RichInputButton>
              <LuList className={clsx('text-xl')} />
            </RichInputButton> */}
          </div>
          {/* <div className='flex gap-1'>
            <RichInputButton>
              <LuAlignLeft className={clsx('text-xl')} />
            </RichInputButton>
            <RichInputButton>
              <LuAlignCenter className={clsx('text-xl')} />
            </RichInputButton>
            <RichInputButton>
              <LuAlignRight className={clsx('text-xl')} />
            </RichInputButton>
            <RichInputButton>
              <LuAlignJustify className={clsx('text-xl')} />
            </RichInputButton>
          </div> */}
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className={clsx('bg-white p-4 outline-none border-[1px] border-neutral-200 rounded-b-xl', className)}
          {...otherProps}
        />
      </div>
    </Slate>
  )
}

export default RichInput
