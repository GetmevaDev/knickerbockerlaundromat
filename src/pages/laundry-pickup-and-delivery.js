import React from "react"
import Layout from "../components/layout"
import SectionHeaderLaundry from "../components/homePageComponents/sectionHeaderLaundry"
import EquipmentSection from "../components/homePageComponents/equipmentSection/EquipmentSection"
import SimpleTodo from "../components/SimpleTodo"
import Offer from "../components/OfferLaundry"
import { Description } from "../components/Description/Description"

export default function PickUp() {
  return (
    <Layout>
      <SectionHeaderLaundry />
      <Description />
      <SimpleTodo />
      <Offer />
      <EquipmentSection />
    </Layout>
  )
}
