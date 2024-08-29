import type { Preview } from "@storybook/react"

import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#050f16" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
}

export default preview
