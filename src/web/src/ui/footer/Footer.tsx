interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className="footer bg-grey-100/70 min-h-[400px]">
      <div className="max-w-[880px] m-auto py-[40px] text-sm">
        <div className="attention  text-black-500 flex flex-col gap-[5px]">
          <p>Ay is the collective name for our development team.</p>
          <p>
            "Ay" is the name we use to refer to our development team as a whole.
            It represents the entire group rather than any individual,
            symbolizing our collective effort in building and supporting all the
            projects we work on. Each team member brings their expertise and
            creativity to the table, and this name reflects our joint commitment
            to creating innovative solutions.
          </p>

          <p>Almost all of the products we create have "Ay" as a prefix.</p>
          <p>
            Nearly every product we develop carries "Ay" as a prefix. Whether
            it's a development tool, software, or service, this consistent
            naming convention helps identify our work and connects it back to
            our team. It serves as a simple and recognizable brand marker,
            making it easier for users to associate our products with our team.
          </p>

          <p>
            "Ay" doesn’t have a deep meaning; it’s simply easy to pronounce.
          </p>
          <p>
            The name "Ay" doesn’t have any profound or specific meaning behind
            it. We chose it because it's short, simple, and easy to pronounce in
            various languages. Our primary goal was to pick a name that would be
            memorable and accessible to a global audience, making it easier for
            people everywhere to recognize and refer to our team and products.
          </p>

          <p>
            We develop various products such as AyEngine, AyStudio, and more.
          </p>
          <p>
            Our team is involved in creating a wide range of products. For
            instance, we have developed tools like "AyEngine" for developers and
            "AyStudio" for designers. These are just a couple of examples, but
            they represent the diverse types of projects we work on. Each
            product reflects our technical expertise and creativity, designed to
            deliver real value to users.
          </p>

          <p>
            Our creations are stored in the github/nerzgit repository, though
            most of them are private, so they are not publicly available.
          </p>
          <p>
            The software and tools we develop are stored in the "github/nerzgit"
            repository. However, most of these are private repositories, meaning
            they are not publicly accessible. While much of our work is kept
            private for internal use or further development, we do consider
            open-sourcing some of our projects in the future as they mature and
            meet certain release criteria.
          </p>
        </div>
        <div className="border-1 border-t border-grey-110 py-[20px] my-[20px] text-black-500">
          <p>Copyright © 2024 Ay. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
