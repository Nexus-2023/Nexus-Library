import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import SkeletonLoader from "nexus-loader"
import { CenterDecorator } from "./Decorators/Center"

/* Component Structure and prop types */
const meta: Meta<typeof SkeletonLoader> = {
  title: "Nexus Library/SkeletonLoader",
  component: SkeletonLoader,
  decorators: [CenterDecorator],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",

      options: ["text", "rounded"],
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    LoaderBgColor: {
      control: "color",
    },

    ContainerBgColor: {
      control: "color",
    },
    LoaderForegroundColor: {
      control: "color",
    },
    borderRadius: {
      control: "select",

      options: [
        "0rem",
        "0.1rem",
        "0.2rem",
        "0.3rem",
        "0.4rem",
        "0.5rem",
        "0.6rem",
        "0.7rem",
        "0.8rem",
        "0.9rem",
        "1rem",
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof SkeletonLoader>

/* Default State of the SkeletonLoader */
export const Default: Story = {
  args: {
    variant: "rounded",
    width: 500,
    height: 100,
    LoaderBgColor: "#1d272e",
    borderRadius: "1rem",
    ContainerBgColor: "#000a11",
    LoaderForegroundColor: "#050f16",
  },
}
