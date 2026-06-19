import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel"
import { FaqSection } from "@/components/FaqSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotCarousel />
      <FaqSection />
    </>
  )
}