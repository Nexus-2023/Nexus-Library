import React from "react"

import { StoryFn, Meta } from "@storybook/react"
import Image from "next/image"
import { CenterDecorator } from "./Decorators/Center"
import MainFooter from "nexusfooter"
import { CustomFooter } from "nexusfooter/dist/Footer"
import XIcon from "@mui/icons-material/X"
import logo from "/public/nexus/nexusLogoUncompressed.svg"
import LanguageIcon from "@mui/icons-material/Language"
import Tippy from "@tippyjs/react"
import "node_modules/tippy.js/animations/scale.css"
import "node_modules/tippy.js/themes/translucent.css"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
export const footerContent = {
  copyright: "© 2024 Nexus Network, Inc.",
  Logo: <Image src={logo} width={120} height={120} alt="nexus Logo" />,
  links: [
    {
      href: "https://www.nexusnetwork.live/terms",
      target: "_blank",
      title: "Terms of Use",
      text: "Terms of Use",
    },
    {
      href: "https://www.nexusnetwork.live/privacy",
      target: "_blank",
      title: "Privacy Policy",
      text: "Privacy Policy",
    },
  ],
  socialLinks: [
    {
      href: "https://twitter.com/BerachainNetwork",
      target: "_blank",
      title: "Twitter",
      icon: (
        <Tippy
          content={"Twitter"}
          placement="top"
          animateFill={true}
          animation={"scale"}
          theme="translucent"
        >
          <XIcon sx={{ fontSize: 25 }} />
        </Tippy>
      ),
    },
    {
      href: "https://nexusnetwork0x.substack.com/",
      target: "_blank",
      title: "Nexus Blog",
      icon: (
        <Tippy
          content={"Nexus Blog"}
          placement="top"
          animateFill={true}
          animation={"scale"}
          theme="translucent"
        >
          <LanguageIcon sx={{ fontSize: 30 }} />
        </Tippy>
      ),
    },

    {
      href: "",
      target: "_blank",
      title: "WhatsAppIcon Server",
      icon: <WhatsAppIcon />,
    },
  ],
  linkColumn: [
    {
      heading: "Socials",
      list: [
        {
          href: "https://twitter.com/BerachainNetwork",
          target: "_blank",
          title: "Twitter",
          text: "Twitter",
        },
        {
          href: "https://www.linkedin.com/company/nexus-network-staking-infra/",
          target: "_blank",
          title: "Linkedin",
          text: "Linkedin",
        },

        {
          href: "https://discord.gg/wnTfyh6T",
          target: "_blank",
          title: "Discord Server",
          text: "Discord",
        },
      ],
    },

    {
      heading: "Links",
      list: [
        {
          href: "https://docs.nexusnetwork.live/",
          target: "_blank",
          title: "Documentation",
          text: "Documentation",
        },
        {
          href: "https://www.nexusnetwork.live/terms",
          target: "_blank",
          title: "Terms of Service",
          text: "Terms of Service",
        },

        {
          href: "https://www.nexusnetwork.live/privacy",
          target: "_blank",
          title: "Privacy Policy",
          text: "Privacy Policy",
        },
      ],
    },
  ],
}

export default {
  title: "Nexus Library/Footer",
  component: MainFooter,
  subcomponents: { CustomFooter },
  decorators: [CenterDecorator],
  tags: ["autodocs"],
  argTypes: {
    no: { control: "number" },
    position: {
      control: { type: "object" },
    },
    list: { control: "object" },
  },
} as Meta<typeof MainFooter>

// MainFooter Story Template
const MainFooterTemplate: StoryFn<typeof MainFooter> = args => (
  <MainFooter {...args} />
)

export const MainFooterStory = MainFooterTemplate.bind({})
MainFooterStory.args = {
  boxCount: 3,
  position: [0, 1, 2],
  list: footerContent,
}

// CustomFooter Story Template
const CustomFooterTemplate: StoryFn<typeof CustomFooter> = args => (
  <CustomFooter {...args} />
)

export const CustomFooterStory = CustomFooterTemplate.bind({})
CustomFooterStory.args = {
  boxCount: 2,
  position: [0, 1],
  list: footerContent,
}
