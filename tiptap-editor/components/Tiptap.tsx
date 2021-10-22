import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
