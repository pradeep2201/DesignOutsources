import React from "react";
import "./LeftImageService.css"; // Import the CSS file for styling
import BeforeAfterWidget from "../../HomePage/BeforeAfterWidget";
import SingleBefore from "../../../assets/images/Single-Before.jpg";
import SingleAfter from "../../../assets/images/Single-After.jpg";
import DayToDustAfter from "../../../assets/images/Day-to-dusk-After.jpg";
import DayToDuskBefore from "../../../assets/images/Day-toDusk-BeforeImg.png";
import HDRAfter from "../../../assets/images/HDR-After.jpg";
import HDRBefore from "../../../assets/images/HDR-Before.jpg";
import StagingBefore from "../../../assets/images/staging-before.jpg";
import StagingAfter from "../../../assets/images/staging-after.jpg";
import TwinglightBefore from "../../../assets/images/Twinglight-before.jpg";
import TwinglightAfter from "../../../assets/images/Twinglight-after.jpg";

const LeftImageService = ({}) => {
  return (
    <>
      {/* First Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>Staging</h1>
          <p>
            A single transaction can have a significant impact in any industry.
            Often, deals are lost when clients struggle to visualize how a space
            will look once furnished. Virtual staging effectively addresses this
            by digitally transforming empty spaces into fully furnished,
            realistic environments. As a leading provider based in India, we
            utilize cutting-edge 3D rendering technologies to create lifelike
            representations of any property. Our team combines expertise and
            innovation to deliver tailored solutions that meet diverse needs.
            This approach helps clients make informed decisions and enhances the
            overall appeal of a space. Our team of experienced professionals
            combines technical expertise, creativity, and innovation to create
            hyper-realistic representations of any space. Whether it’s a modern
            apartment, a luxury villa, or a commercial property, we tailor our
            solutions to meet the diverse needs and preferences of our clients.
          </p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget
            beforeImage={StagingAfter}
            afterImage={StagingBefore}
          />
        </div>
      </div>

      {/* Second Data */}
      <div className="photo-effects-container">
        <div className="image-content">
          <BeforeAfterWidget beforeImage={HDRAfter} afterImage={HDRBefore} />
        </div>
        <div className="text-content">
          <h1>HDR (High Dynamic Range)</h1>
          <p>
            HDR (High Dynamic Range) is a powerful image processing technique
            that enhances details and visual quality by combining multiple
            exposures of the same scene. It ensures balanced lighting, vibrant
            colors, and improved clarity, making images more realistic and
            visually appealing. By merging details from both bright highlights
            and dark shadows, HDR creates a harmonious composition that mimics
            what the human eye perceives. In real estate, HDR is an essential
            tool for showcasing properties in their best light. It captures
            intricate details in interiors and exteriors, even in challenging
            lighting conditions, ensuring that features like textures, finishes,
            and landscapes stand out. This approach produces high-quality,
            eye-catching visuals that grab attention, elevate property listings,
            and provide potential buyers with a clear and attractive
            representation of a space. Its ability to create dynamic and
            engaging images also makes HDR a popular choice for marketing
            campaigns, portfolios, and virtual tours.
          </p>
        </div>
      </div>
      {/* Third Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>Single</h1>
          <p>
            In real estate, deals are often lost when clients can't visualize
            furnished interiors. Virtual staging solves this by digitally
            transforming spaces, offering a realistic preview of their
            potential. This innovative approach enhances empty or outdated
            properties, making them more appealing to potential buyers by
            showcasing functional and aesthetically pleasing designs. As a
            leading provider based in India, we specialize in creating lifelike
            visuals using advanced 3D rendering technologies. Our expertise and
            resources ensure high-quality virtual staging tailored to your
            needs, helping you highlight a property's best features. By
            integrating customized furniture, décor, and layouts, we provide
            cost-effective solutions that increase buyer interest, accelerate
            sales, and add a competitive edge to your listings.
          </p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget
            beforeImage={SingleAfter}
            afterImage={SingleBefore}
          />
        </div>
      </div>
      {/* Fourth Data */}
      <div className="photo-effects-container">
        <div className="image-content">
          <BeforeAfterWidget
            beforeImage={TwinglightAfter}
            afterImage={TwinglightBefore}
          />
        </div>
        <div className="text-content">
          <h1>Twilight Rendering</h1>
          <p>
            To further enhance the appeal of properties, we also offer Twilight
            Rendering services. This technique captures the property at dusk,
            creating stunning visuals with warm, ambient lighting and rich
            colors. Twilight images evoke an inviting atmosphere, helping
            clients imagine the property in a beautiful, serene setting. The
            subtle interplay of natural and artificial light creates a soothing,
            welcoming vibe that enhances the overall appeal of the space.
            Combined with virtual staging, twilight rendering adds an extra
            layer of allure, making listings more captivating and impactful. By
            showcasing the property in its most flattering light, this technique
            not only boosts aesthetic appeal but also helps potential buyers
            emotionally connect with the space. Whether for residential or
            commercial listings, twilight rendering elevates the visual
            experience, increasing engagement and accelerating property sales.
          </p>
        </div>
      </div>
      {/* Fifth Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>Day to Dusk</h1>
          <p>
            Day to Dusk is an advanced image processing technique that
            transforms daytime photos into stunning twilight or evening scenes.
            It enhances visual appeal by adding warm lighting, rich colors,
            natural shadows, and realistic sky replacements. This method not
            only changes the mood of an image but also highlights intricate
            architectural details under a cozy, inviting glow. Widely used in
            real estate and architectural photography, the Day to Dusk technique
            showcases properties with an enchanting evening ambiance, making
            them more appealing to potential buyers. By creating visually
            striking and emotionally engaging images, this approach helps
            elevate marketing campaigns, drive engagement, and set listings
            apart from the competition. Its versatility also makes it ideal for
            promotional materials, portfolios, and online galleries.
          </p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget
            beforeImage={DayToDustAfter}
            afterImage={DayToDuskBefore}
          />
        </div>
      </div>
    </>
  );
};

export default LeftImageService;
