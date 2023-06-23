import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Files',
  name: 'files',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'filename',
      title: 'File Name',
      type: 'string',
    }),
  ],
})
