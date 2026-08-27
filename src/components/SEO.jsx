import { useEffect } from "react";

const SITE_URL = "https://abednegomorara.co.ke";
const DEFAULT_IMAGE = `${SITE_URL}/images/project-tracker.jpeg`;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SERVICE_PROVIDER_ID = `${SITE_URL}/#professional-service`;

const DEFAULTS = {
  title:
    "Abednego Morara | Mechanical Engineer, Fabricator & Digital Systems Builder",
  description:
    "Abednego Morara is a mechanical engineer and builder working across mechanical design, CNC fabrication, machine reliability, production systems and web development in Kenya and internationally.",
  image: DEFAULT_IMAGE,
};

const SOCIALS = [
  "https://www.youtube.com/@abednegomorara3487",
  "https://www.instagram.com/m_kisii2/",
  "https://www.tiktok.com/@m_orara",
  "https://x.com/Orondo12",
  "https://www.linkedin.com/in/abednego-morara-b17a36191/",
];

const PAGE_SEO = {
  home: {
    title:
      "Abednego Morara | Mechanical Engineer, Fabricator & Digital Systems Builder",
    description:
      "Mechanical engineering, fabrication, machine reliability and digital production systems by Abednego Morara. Engineering solutions for practical problems in Kenya and beyond.",
  },

  about: {
    title: "About Abednego Morara | Mechanical Engineer & Builder",
    description:
      "Learn about Abednego Morara's approach to mechanical engineering, machine design, CNC fabrication, maintenance, production processes and digital systems.",
  },

  skills: {
    title: "Engineering & Technical Skills | Abednego Morara",
    description:
      "Explore mechanical design, CAD, CNC laser cutting, welding, fabrication, machine reliability, production systems and web development skills.",
  },

  projects: {
    title: "Engineering & Fabrication Projects | Abednego Morara",
    description:
      "Explore mechanical fabrication, sheet-metal work, machine design, CNC production and real-time production software projects built by Abednego Morara.",
  },

  services: {
    title: "Engineering, Fabrication & Digital Services | Abednego Morara",
    description:
      "Engineering and fabrication services including mechanical design, CNC fabrication, machine reliability and maintenance, and digital production systems.",
  },

  booking: {
    title: "Book an Engineering Consultation | Abednego Morara",
    description:
      "Request an engineering consultation for mechanical design, fabrication, machine reliability, production systems or web and digital projects.",
  },

  contact: {
    title: "Contact Abednego Morara | Engineering & Digital Projects",
    description:
      "Contact Abednego Morara about engineering challenges, fabrication jobs, machine problems, production systems and digital projects in Kenya or internationally.",
  },
};

const SERVICE_DATA = {
  "/services/mechanical-design": {
    name: "Mechanical Design & CAD Services",
    shortName: "Mechanical Design",
    type: "Mechanical Design Service",
  },

  "/services/cnc-fabrication": {
    name: "CNC & Fabrication Services",
    shortName: "CNC & Fabrication",
    type: "CNC Fabrication Service",
  },

  "/services/machine-reliability": {
    name: "Machine Reliability & Maintenance Services",
    shortName: "Machine Reliability",
    type: "Machine Reliability Service",
  },

  "/services/digital-production-systems": {
    name: "Digital Production Systems",
    shortName: "Digital Production Systems",
    type: "Production Management System Service",
  },
};

function setMeta(attribute, value, content) {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let element = document.head.querySelector(
    `script[data-seo-id="${id}"]`
  );

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function SEO({
  page = "home",
  title,
  description,
  path = "/",
  image = DEFAULTS.image,
  noindex = false,
  type = "website",
}) {
  const config = PAGE_SEO[page] || DEFAULTS;

  const finalTitle = title || config.title || DEFAULTS.title;

  const finalDescription =
    description || config.description || DEFAULTS.description;

  const normalizedPath =
    path === "/"
      ? "/"
      : `/${String(path).replace(/^\/+|\/+$/g, "")}`;

  const canonicalUrl =
    normalizedPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedPath}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  const service = SERVICE_DATA[normalizedPath];

  useEffect(() => {
    document.title = finalTitle;

    document.documentElement.lang = "en";

    /*
     * Basic SEO
     */
    setMeta("name", "description", finalDescription);
    setMeta("name", "author", "Abednego Morara");

    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    /*
     * Open Graph
     */
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Abednego Morara");
    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", finalTitle);
    setMeta("property", "og:locale", "en_KE");

    /*
     * Twitter / X
     */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDescription);
    setMeta("name", "twitter:image", imageUrl);

    /*
     * Canonical
     */
    setLink("canonical", canonicalUrl);

    /*
     * Person entity
     */
    const person = {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Abednego Morara",
      url: SITE_URL,
      image: `${SITE_URL}/images/abednego.jpeg`,
      jobTitle: "Mechanical Engineer & Builder",

      description:
        "Mechanical engineer and builder working across mechanical design, fabrication, machine reliability, production systems and web development.",

      sameAs: SOCIALS,

      knowsAbout: [
        "Mechanical Engineering",
        "Mechanical Design",
        "Mechanical CAD",
        "CNC Fabrication",
        "CNC Laser Cutting",
        "Sheet Metal Fabrication",
        "Welding",
        "Machine Reliability",
        "Machine Maintenance",
        "Production Systems",
        "Manufacturing",
        "Web Development",
        "Digital Systems",
      ],

      areaServed: [
  {
    "@type": "Country",
    name: "Kenya",
  },
  {
    "@type": "Place",
    name: "International",
  },
],
nationality: {
  "@type": "Country",
  name: "Kenya",
},
    };

    /*
     * Website entity
     */
    const website = {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Abednego Morara",
      description: DEFAULTS.description,
      publisher: {
        "@id": PERSON_ID,
      },
      inLanguage: "en",
    };

    /*
     * Professional service entity
     */
    const professionalService = {
      "@type": "ProfessionalService",
      "@id": SERVICE_PROVIDER_ID,

      name: "Abednego Morara Engineering & Digital Services",

      url: SITE_URL,

      provider: {
        "@id": PERSON_ID,
      },

      areaServed: [
        {
          "@type": "Country",
          name: "Kenya",
        },
        {
          "@type": "Place",
          name: "International",
        },
      ],

      serviceType: [
        "Mechanical Engineering",
        "Mechanical Design",
        "CNC Fabrication",
        "Sheet Metal Fabrication",
        "Machine Maintenance",
        "Machine Reliability",
        "Production Management Systems",
        "Web Development",
      ],
    };

    const graph = [
      person,
      website,
      professionalService,
    ];

    /*
     * Service-specific structured data
     */
    if (service) {
      graph.push({
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,

        name: service.name,

        alternateName: service.shortName,

        serviceType: service.type,

        url: canonicalUrl,

        description: finalDescription,

        provider: {
          "@id": PERSON_ID,
        },

        areaServed: [
          {
            "@type": "Country",
            name: "Kenya",
          },
          {
            "@type": "Place",
            name: "International",
          },
        ],
      });
    }

    /*
     * Breadcrumb structured data
     */
    if (normalizedPath !== "/") {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
      ];

      if (service) {
        breadcrumbItems.push(
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortName,
            item: canonicalUrl,
          }
        );
      } else {
        breadcrumbItems.push({
          "@type": "ListItem",
          position: 2,
          name: finalTitle.split("|")[0].trim(),
          item: canonicalUrl,
        });
      }

      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      });
    }

    /*
     * Publish structured data
     */
    setJsonLd("structured-data", {
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [
    canonicalUrl,
    finalDescription,
    finalTitle,
    imageUrl,
    noindex,
    normalizedPath,
    service,
    type,
  ]);

  return null;
}

export default SEO;