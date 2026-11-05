import type { JsonLdObject } from "@/lib/seo";

type JsonLdProps = {
  data: JsonLdObject | JsonLdObject[];
};

/** Renders schema.org structured data. `<` is escaped to prevent script injection. */
const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
