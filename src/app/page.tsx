"use client"
import Image from "next/image"

import MoveFundsButton from "nexus-button/dist/index"
import { AddressAccordian } from "nexus-token-input-field/dist/AddressAccordian"
import AddressInput from "nexus-token-input-field/dist/index"
import CircleShadow from "nexus-shadow/dist/index"
import MainFooter from "nexusfooter"
import ResponsiveAppBar from "nexusnavbar"
import SkeletonLoader from "nexus-loader"
import TokenInputMax from "nexus-token-input"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AddressAccordian
        label="berachain"
        address="0x"
        handleAddress={() => {}}
      /> */}
      {/* <TokenInputMax/> */}
      <SkeletonLoader />

      <MoveFundsButton
        isConnected={true}
        onClick={() => {}}
        transferring={false}
        mode="Deposit"
        destinationChain={"berachain"}
      />
    </main>
  )
}
