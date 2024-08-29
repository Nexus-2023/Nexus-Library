import { StoryFn, Meta } from "@storybook/react"

export const CenterDecorator = (StoryFn: StoryFn) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }}
  >
    <StoryFn />
  </div>
)
