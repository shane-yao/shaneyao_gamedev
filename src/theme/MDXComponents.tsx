// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  BilibiliEmbedRenderer,
};