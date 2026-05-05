import blogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import SingleBlog from "@/components/Blog/SingleBlog";
import TagButton from "@/components/Blog/TagButton";
import Brands from "@/components/Brands";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import SingleFeature from "@/components/Features/SingleFeature";
import OfferList from "@/components/Pricing/OfferList";
import PricingBox from "@/components/Pricing/PricingBox";
import SingleTestimonial from "@/components/Testimonials/SingleTestimonial";
import Video from "@/components/Video";

function Block({
  label,
  description,
  children,
  gray = false,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
  gray?: boolean;
}) {
  return (
    <div className={`relative ${gray ? "bg-gray-50 dark:bg-dark" : "bg-white dark:bg-bg-color-dark"}`}>
      <div className="sticky top-0 z-20 flex items-center gap-4 border-b border-primary/20 bg-primary/5 px-6 py-3 backdrop-blur-sm dark:bg-primary/10">
        <span className="rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          {label}
        </span>
        {description && (
          <span className="text-sm text-body-color dark:text-body-color-dark">
            {description}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default function UIDemoPage() {
  return (
    <main className="pt-[80px]">
      <div className="bg-black py-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Internal Use Only
        </p>
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          UI Component Catalog
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          All available UI building blocks — for designer review and selection.
        </p>
      </div>

      {/* 1. SECTION TITLE */}
      <Block label="SectionTitle" description="Reusable section heading — centered and left-aligned variants" gray>
        <div className="container py-16 space-y-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-body-color">Centered</p>
            <SectionTitle
              title="Section Title — Centered"
              paragraph="This is the centered variant. Use it at the top of full-width sections to introduce a block of content."
              center
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-body-color">Left-aligned</p>
            <SectionTitle
              title="Section Title — Left Aligned"
              paragraph="This is the left-aligned variant. Use it when content flows in a single column or alongside an image panel."
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-body-color">Wide (800px max)</p>
            <SectionTitle
              title="Section Title — Wide (800px)"
              paragraph="Pass the width prop to control max-width. Useful for longer subtitles that would break too early at the default 570px wide container."
              center
              width="800px"
            />
          </div>
        </div>
      </Block>

      {/* 2. BREADCRUMB */}
      <Block label="Breadcrumb" description="Page header for interior pages — title, description, and Home breadcrumb nav">
        <Breadcrumb
          pageName="Example Page Title"
          description="Used at the top of interior pages such as Blog, Contact, About, Sign In, and product pages."
        />
      </Block>

      {/* 3. TAG BUTTON */}
      <Block label="TagButton" description="Inline category / tag label — hover fills with primary color" gray>
        <div className="container py-12">
          <div className="flex flex-wrap gap-3">
            <TagButton text="Creative" href="#" />
            <TagButton text="Design" href="#" />
            <TagButton text="Clinical" href="#" />
            <TagButton text="3D Printing" href="#" />
            <TagButton text="Workflow" href="#" />
            <TagButton text="Dental Lab" href="#" />
          </div>
        </div>
      </Block>

      {/* 4. SHARE BUTTONS */}
      <Block label="SharePost" description="Social share row — LinkedIn, X/Twitter, Facebook">
        <div className="container py-12">
          <SharePost />
        </div>
      </Block>

      {/* 5. OFFER LIST */}
      <Block label="OfferList" description="Pricing feature row — active (checkmark) and inactive (cross) states" gray>
        <div className="container py-12">
          <div className="max-w-xs space-y-2">
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Priority Support" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
          </div>
        </div>
      </Block>

      {/* 6. RELATED POST */}
      <Block label="RelatedPost" description="Sidebar or bottom-of-article related article link with thumbnail">
        <div className="container py-12">
          <div className="max-w-sm space-y-4">
            <RelatedPost image={blogData[0].image} slug="post-1" title={blogData[0].title} date="May 2025" />
            <RelatedPost image={blogData[1].image} slug="post-2" title={blogData[1].title} date="April 2025" />
            <RelatedPost image={blogData[2].image} slug="post-3" title={blogData[2].title} date="March 2025" />
          </div>
        </div>
      </Block>

      {/* 7. FEATURE CARD */}
      <Block label="Feature Card (SingleFeature)" description="Product / feature card — image-on-top variant and icon-only variant" gray>
        <div className="container py-16 space-y-14">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-body-color">Variant A — Image on top</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <SingleFeature feature={{ id: 1, image: "/images/about/dentpro.webp", title: "ZyloDent", paragraph: "All-in-one, automated, seamless workflow integration. The complete dental 3D printing solution.", href: "/products/zylodent" }} />
              <SingleFeature feature={{ id: 2, image: "/images/about/dentpro.webp", title: "MicroDent", paragraph: "High-precision dental 3D printer designed for accuracy, reliability, and high throughput.", href: "/products/microdent" }} />
              <SingleFeature feature={{ id: 3, image: "/images/about/dentpro.webp", title: "DentCure", paragraph: "High-power post-curing unit for consistent results across all validated materials.", href: "/products/dentcure" }} />
            </div>
          </div>
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-body-color">Variant B — Icon only</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { title: "AI-Powered Design", desc: "Intelligent tools that speed up crown and restoration workflows." },
                { title: "Validated Materials", desc: "Every material profile pre-tested and approved for clinical accuracy." },
                { title: "Remote Updates", desc: "Over-the-air firmware updates keep your hardware always current." },
              ].map((item, i) => (
                <SingleFeature
                  key={i}
                  feature={{
                    id: i + 10,
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 40 40" className="fill-current">
                        <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.82 0-16-7.18-16-16S11.18 4 20 4s16 7.18 16 16-7.18 16-16 16zm-1-23h2v8h-2zm0 10h2v2h-2z" />
                      </svg>
                    ),
                    title: item.title,
                    paragraph: item.desc,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Block>

      {/* 8. BRANDS */}
      <Block label="Brands / Partner Logos" description="Horizontal logo strip for partners or certifications">
        <Brands />
      </Block>

      {/* 9. TESTIMONIAL CARD */}
      <Block label="Testimonial Card (SingleTestimonial)" description="Review card — star rating, quote, author photo, name, and designation" gray>
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <SingleTestimonial testimonial={{ id: 1, name: "Dr. Sarah Mitchell", designation: "Prosthodontist, London Dental Lab", content: "ZyloDent has completely transformed how we operate. Print quality is outstanding and the validated material profiles save us hours every week.", image: "/images/testimonials/auth-01.png", star: 5 }} />
            <SingleTestimonial testimonial={{ id: 2, name: "Dr. Karim Al-Rashid", designation: "Clinical Director, Gulf Smiles", content: "The integrated ecosystem means we never chase compatibility issues. Everything just works.", image: "/images/testimonials/auth-02.png", star: 5 }} />
            <SingleTestimonial testimonial={{ id: 3, name: "Laura Chen", designation: "Lab Manager, Pacific Dental Studio", content: "MicroDent gives us the throughput we need without sacrificing accuracy. The support team is genuinely helpful.", image: "/images/testimonials/auth-03.png", star: 5 }} />
          </div>
        </div>
      </Block>

      {/* 10. PRICING BOX */}
      <Block label="Pricing Box (PricingBox + OfferList)" description="Pricing plan card — price, name, CTA button, and feature list">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <PricingBox price="40" duration="mo" packageName="Starter" subtitle="Perfect for small labs getting started.">
              <OfferList text="1 Printer License" status="active" />
              <OfferList text="ZyloPrep Software" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Priority Support" status="inactive" />
              <OfferList text="Remote Monitoring" status="inactive" />
            </PricingBox>
            <PricingBox price="399" duration="mo" packageName="Professional" subtitle="For growing labs that need full workflow integration.">
              <OfferList text="Up to 3 Printer Licenses" status="active" />
              <OfferList text="ZyloPrep + AI ZyloCAD" status="active" />
              <OfferList text="Priority Support" status="active" />
              <OfferList text="Remote Monitoring" status="active" />
              <OfferList text="Dedicated Account Manager" status="inactive" />
            </PricingBox>
            <PricingBox price="589" duration="mo" packageName="Enterprise" subtitle="Multi-site labs and enterprise dental groups.">
              <OfferList text="Unlimited Printer Licenses" status="active" />
              <OfferList text="Full Software Suite" status="active" />
              <OfferList text="Priority Support" status="active" />
              <OfferList text="Remote Monitoring" status="active" />
              <OfferList text="Dedicated Account Manager" status="active" />
            </PricingBox>
          </div>
        </div>
      </Block>

      {/* 11. BLOG CARD */}
      <Block label="Blog Card (SingleBlog)" description="Article card — featured image, tag badge, title, excerpt, author, and date" gray>
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogData.slice(0, 3).map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </Block>

      {/* 12. VIDEO */}
      <Block label="Video" description="Video thumbnail with play button — opens YouTube modal on click">
        <Video />
      </Block>

      {/* 13. SUPPORT TICKET FORM */}
      <Block label="Contact Form (Support Ticket)" description="Need Help? Open a Ticket form — name, email, message fields" gray>
        <Contact />
      </Block>

      {/* 14. NEWSLETTER BOX */}
      <Block label="NewsLatterBox (Newsletter)" description="Standalone newsletter subscription card — name, email, subscribe button">
        <div className="container py-16">
          <div className="max-w-md">
            <NewsLatterBox />
          </div>
        </div>
      </Block>

      <div className="bg-black py-10 text-center text-sm text-gray-500">
        End of UI component catalog — <span className="text-primary">Zylo3D</span> · Internal design review only
      </div>
    </main>
  );
}
