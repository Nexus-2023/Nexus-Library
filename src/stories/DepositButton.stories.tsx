import { Meta, StoryObj } from "@storybook/react"
import MoveFundsButton from "nexus-button"
import { CenterDecorator } from "./Decorators/Center"
const meta: Meta<typeof MoveFundsButton> = {
  title: "Nexus Library/MoveFundsButton",
  component: MoveFundsButton,
  tags: ["autodocs"],

  decorators: [CenterDecorator],
  argTypes: {
    isConnected: { control: "boolean" },
    destinationChain: { control: "text" },
    textColor: { control: "color" },
    bgConnected: { control: "color" },
    bgDisabled: { control: "color" },
    rounded: {
      control: "select",
      options: ["0px", "5px", "10px", "15px", "20px"],
    },
    mode: {
      control: "select",
      options: ["Deposit", "Withdraw"],
    },
    transferring: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof MoveFundsButton>

// Default Story
export const Default: Story = {
  args: {
    isConnected: true,
    destinationChain: "berachain",
    textColor: "white",
    bgConnected: "var(--secondary)",
    bgDisabled: "var(--depositButtonDisabled)",
    rounded: "20px",
    mode: "Deposit",
    transferring: false,
  },
}

// Story for the disconnected state
export const Disconnected: Story = {
  args: {
    isConnected: false,
    destinationChain: "berachain",
    textColor: "white",
    bgConnected: "var(--secondary)",
    bgDisabled: "var(--depositButtonDisabled)",
    rounded: "20px",
    mode: "Deposit",
    transferring: false,
  },
}

export const Transferring: Story = {
  args: {
    isConnected: true,
    destinationChain: "berachain",
    textColor: "white",
    bgConnected: "var(--secondary)",
    bgDisabled: "var(--depositButtonDisabled)",
    rounded: "20px",
    mode: "Deposit",
    transferring: true,
  },
}

export const Withdrawal: Story = {
  args: {
    isConnected: true,
    destinationChain: "berachain",
    textColor: "white",
    bgConnected: "var(--secondary)",
    bgDisabled: "var(--depositButtonDisabled)",
    rounded: "20px",
    mode: "Withdraw",
    transferring: false,
  },
}

// // Story with custom colors
// export const CustomColors: Story = {
//   args: {
//     isConnected: true,
//     destinationChain: "customChain",
//     textColor: "black",
//     bgConnected: "#4caf50",
//     bgDisabled: "#e0e0e0",
//     rounded: "10px",
//   },
// }
