import { describe, expect, it } from "vitest";
import { heritageImages, servicePackages } from "@/lib/heritageMedia";

describe("Heritage RV site content", () => {
  it("uses in-house Heritage media for the homepage hero", () => {
    expect(heritageImages.heroBackground).toBe("/heritage-media/images/mckinley-trailer-side-profile.webp");
    expect(heritageImages.heroBackgroundJpg).toBe("/heritage-media/images/mckinley-trailer-side-profile.jpg");
  });

  it("publishes the expected service package set", () => {
    expect(servicePackages.map((service) => service.title)).toEqual([
      "Signature Exterior Renewal",
      "Ultimate Fiberglass Restoration",
      "Luxe Roof Rejuvenation",
      "Essential Maintenance Wash",
    ]);
  });
});
