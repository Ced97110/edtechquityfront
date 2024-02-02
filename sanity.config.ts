import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'edquityblog',
  title: 'edtechquityblog',

  projectId: 'kzybqhqb',
  dataset: 'production',
  basePath:"/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
