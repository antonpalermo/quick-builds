import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEditor, EditorContent } from '@tiptap/react'

const customDocument = Document.extend({
  content: 'heading block*',
})

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
    extensions: [
      customDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Untitled Document'
          }
          return 'Write something ...'
        },
      }),
    ],
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
