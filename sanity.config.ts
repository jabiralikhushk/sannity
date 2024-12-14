import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'tsc.js',

  projectId: '3845jvfo',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
   
  },
})
