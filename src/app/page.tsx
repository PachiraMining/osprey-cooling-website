import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProductCategory } from "@/components/ProductCategory";
import { HotSaleProducts } from "@/components/HotSaleProducts";
import { AdvantageSection } from "@/components/AdvantageSection";
import { ProductDisplay } from "@/components/ProductDisplay";
import { OEMService } from "@/components/OEMService";
import { TeamSection } from "@/components/TeamSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <ProductShowcase />
        <ProductCategory />
        <HotSaleProducts />
        <AdvantageSection />
        <ProductDisplay />
        <OEMService />
        <TeamSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
