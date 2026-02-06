import {
  FaPython,
  FaMapMarkedAlt,
  FaGoogle,
  FaBalanceScale,
} from "react-icons/fa";
import { SiGoogleearth, SiJson, SiGit } from "react-icons/si";
import landDivisionPic from "./blogs/land-division.png";
import landBeforePic from "./blogs/land-division.png";
import landAfterPic from "./blogs/land-division.png";

export const BLOGS = {
  categories: [
    { name: "Problem Solving", slug: "problem-solving" },
    { name: "GIS & Mapping", slug: "gis" },
    { name: "Family & Law", slug: "family-law" },
    { name: "Automation", slug: "automation" },
  ],

  featured: {
    slug: "islamic-land-division",
    title: "I SOLVE THIS: Dividing Inherited Land Using Code & Islamic Law",
    headline:
      "Solved a 10-person inheritance dispute using geospatial Python — saving $2,000 and preventing family conflict",
    excerpt:
      "When my uncle passed away, 10 family members needed to divide land according to Islamic inheritance rules. I built a precision algorithm that calculated exact shares, generated legal coordinates, and kept the peace.",
    category: "Problem Solving",
    readTime: "5 min read",
    publishedAt: "2024-03-15",
    coverImage: landDivisionPic,
    icons: [FaPython, FaMapMarkedAlt, FaBalanceScale],
  },

  posts: [
    {
      slug: "islamic-land-division",
      title: "I SOLVE THIS: Dividing Inherited Land Using Code & Islamic Law",
      headline:
        "Solved a 10-person inheritance dispute using geospatial Python",
      excerpt:
        "When my uncle passed away, 10 family members needed to divide land according to Islamic inheritance rules. I built a precision algorithm that calculated exact shares, generated legal coordinates, and kept the peace.",
      category: "Problem Solving",
      readTime: "5 min read",
      publishedAt: "2024-03-15",
      featured: true,
      coverImage: landDivisionPic,
      gallery: [landBeforePic, landAfterPic],

      // Card preview data
      cardData: {
        challenge:
          "10 heirs, irregular land shape, Islamic inheritance law (men 2x, women 1x), zero budget",
        solution:
          "Google Earth + Python + Shapely → Precision land division with legal KML output",
        result:
          "$0 cost, 2 days execution, zero disputes, court-approved documentation",
        tech: ["Python", "Shapely", "GeoJSON", "KML", "Google Earth Pro"],
        icons: [FaPython, SiGoogleearth, FaMapMarkedAlt, FaBalanceScale],
      },

      // Full article content (shown on "Read More")
      content: {
        theChallenge: {
          title: "The Challenge",
          body: "My uncle passed away, leaving agricultural land to be divided among 7 men and 3 women according to Islamic inheritance law — where men receive 2 shares and women receive 1 share. The math was simple (17 total shares), but the execution was complex: irregular land shape, potential family disputes, and no budget for professional surveying.",
          stats: {
            heirs: "10 people",
            men: "7 (2 shares each)",
            women: "3 (1 share each)",
            totalShares: "17 parts",
            budget: "$0",
          },
        },

        theSolution: {
          title: "The Solution",
          steps: [
            {
              step: 1,
              title: "Digital Surveying (Free)",
              description:
                "Used Google Earth Pro to drop pins at land corners and export KML boundary file. Accuracy: ±2 meters.",
              icon: SiGoogleearth,
            },
            {
              step: 2,
              title: "Data Transformation",
              description:
                "Converted KML to GeoJSON for programmatic manipulation using ogr2ogr CLI tool.",
              icon: SiJson,
              code: "ogr2ogr -f GeoJSON land.geojson boundary.kml",
            },
            {
              step: 3,
              title: "Algorithmic Division",
              description:
                "Built Python script with Shapely that calculated exact areas per heir, sliced polygon into 17 sections, merged for men, kept single for women.",
              icon: FaPython,
              codeSnippet: `
# Core inheritance logic
male_share = total_area * (2/17)    # 14/17 of land
female_share = total_area * (1/17)  # 3/17 of land

# Division algorithm
base_parts = divide_polygon(land, 17)
for heir in heirs:
    if heir.gender == "M":
        parcel = merge(base_parts[i], base_parts[i+1])
    else:
        parcel = base_parts[i]
              `,
            },
            {
              step: 4,
              title: "Legal Documentation",
              description:
                "Generated border points with HTML popups showing exact lat/long. Exported to KML with color coding (Blue=Men, Red=Women).",
              icon: FaMapMarkedAlt,
            },
          ],
        },

        theResult: {
          title: "The Result",
          metrics: [
            { label: "Cost", value: "$0", compare: "vs $2,000+ traditional" },
            {
              label: "Time",
              value: "2 days",
              compare: "vs 2 weeks traditional",
            },
            { label: "Disputes", value: "Zero", compare: "transparent math" },
            {
              label: "Legal Status",
              value: "Court-approved",
              compare: "for title transfer",
            },
          ],
          testimonial:
            "The women were initially skeptical, but when they saw the precise measurements and visual map, they accepted the religious ruling. The code became a neutral arbiter everyone trusted.",
        },

        keyInsight: {
          title: "Key Insight",
          quote:
            "Technology doesn't replace tradition — it validates it. By making the division process transparent, precise, and visual, I turned a potentially divisive family moment into a celebrated solution.",
        },

        techStack: {
          title: "Technical Stack",
          items: [
            {
              name: "Python + Shapely",
              use: "Geometric calculations & polygon operations",
            },
            {
              name: "GeoJSON/KML",
              use: "Data interoperability with mapping tools",
            },
            {
              name: "Google Earth Pro",
              use: "Free satellite imagery & boundary export",
            },
            {
              name: "HTML Popups",
              use: "Coordinate documentation for legal contracts",
            },
          ],
        },

        resources: {
          title: "Resources",
          links: [
            {
              label: "GitHub Repository",
              url: "https://github.com/yourname/land-division",
              type: "code",
            },
            { label: "Interactive Demo", url: "#demo", type: "demo" },
            {
              label: "Sample KML File",
              url: "/files/sample-division.kml",
              type: "download",
            },
          ],
        },
      },

      // Tags for filtering
      tags: [
        "python",
        "gis",
        "islamic-law",
        "family",
        "automation",
        "problem-solving",
        "geospatial",
      ],
    },

    // Add more blog posts here...
    {
      slug: "another-problem",
      title: "I SOLVE THIS: [Next Problem Title]",
      headline: "Short compelling headline about the solution",
      excerpt: "Brief description of the problem and how you solved it...",
      category: "Automation",
      readTime: "3 min read",
      publishedAt: "2024-02-01",
      featured: false,
      coverImage: null,
      cardData: {
        challenge: "What was the problem?",
        solution: "How did you solve it?",
        result: "What was the outcome?",
        tech: ["Tech1", "Tech2"],
        icons: [],
      },
      content: {},
      tags: [],
    },
  ],
};
