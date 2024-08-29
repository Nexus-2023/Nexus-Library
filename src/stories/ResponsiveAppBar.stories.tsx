import React from "react"
import { StoryFn, Meta, StoryObj } from "@storybook/react"
import ResponsiveAppBar from "nexusnavbar"

import logo from "/public/nexus/nexusLogoUncompressed.svg"
const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
]

const ConnectButton = () => (
  <button className=" bg-[#068ef3] rounded-xl px-4 py-2  font-semibold">
    Connect Wallet
  </button>
)

const CustomButton = () => (
  <button className=" bg-[#15586d] rounded-xl px-4 py-2  font-semibold">
    Custom Wallet
  </button>
)

/* Component Structure and prop types */
const meta: Meta<typeof ResponsiveAppBar> = {
  title: "Nexus Library/ResponsiveAppBar",
  component: ResponsiveAppBar,
  tags: ["autodocs"],
  argTypes: {
    list: { control: "object" },
    endComponent: { control: "object" },
    copyright: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof ResponsiveAppBar>

/* Variation of Component States with different props */
export const Default: Story = {
  args: {
    list: navLinks,
    logo: logo,
    endComponent: <ConnectButton />,
    copyright: "© 2024 Nexus Network, Inc.",
  },
}

export const CustomStyle1: Story = {
  args: {
    ...Default.args,
    endComponent: <CustomButton />,
  },
}
