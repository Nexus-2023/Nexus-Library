import { Meta, StoryObj } from "@storybook/react"
import CircleShadow from "nexus-shadow/dist/index"
import { CenterDecorator } from "./Decorators/Center"

const meta: Meta<typeof CircleShadow> = {
  title: "Nexus Library/CircleShadow",
  component: CircleShadow,
  tags: ["autodocs"],
  decorators: [CenterDecorator],
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    height: {
      control: "select",
      options: ["20rem", "30rem", "38rem", "50rem", "60rem"],
    },
    width: {
      control: "select",
      options: ["20rem", "30rem", "40rem", "50rem", "60rem"],
    },
    opacity: {
      control: { type: "number", min: 0, max: 100, step: 10 },
    },
    blur: {
      control: "select",
      options: ["0.5rem", "1rem", "1.5rem", "2rem", "3rem"],
    },
    rounded: {
      control: "select",
      options: ["0%", "5%", "10%", "20%", "50%"],
    },
  },
}

export default meta
type Story = StoryObj<typeof CircleShadow>

export const Default: Story = {
  args: {
    color: "var(--circle-shadow)",
    height: "38rem",
    width: "40rem",
    opacity: 40,
    blur: "2rem",
    rounded: "50%",
  },
}
