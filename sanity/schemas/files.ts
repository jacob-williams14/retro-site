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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'filename',
      title: 'File Name',
      type: 'string',
    }),
  ],
})
