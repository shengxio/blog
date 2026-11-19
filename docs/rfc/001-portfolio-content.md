# RFC 001: Make the portfolio shorter and easier to substantiate

**Status:** Implemented. The single-page site leads with the founder's current work on MiMinions, followed by the project archive, skills, and contact.

## Assessment

The public samples support a clear story: hands-on Python scripting and practical frontend development, alongside an industrial and electrical engineering background described in the portfolio. They do not establish an overall proficiency level, production-scale backend ownership, or broad cloud expertise. This is an assessment of what the portfolio can show, not a ceiling on what you can do. Private work can support a specific claim if you can describe your contribution without disclosing sensitive details.

| Area | What the reviewed material supports | How to present it |
| --- | --- | --- |
| Python and pandas | [Directory Scan source](https://github.com/shengxio/Directory_Scan/blob/248dfbf45b0a4e9eb4fc5f261fb69ee7d46d2c27/main.py) walks directory trees, processes file metadata with pandas, and writes Excel reports. The [algorithm exercises](https://github.com/shengxio/leet_code_samples/blob/1e29489e17a55e0ce42cdb023ccb6b0b2fc76792/longest_substring.py) show practice, not expert-level data structures. | Lead with Python scripting, data handling, and reporting. Drop `Python 10/10` and `Data Structure 10/10`. |
| Frontend | This [portfolio](../../app/page.tsx) shows typed React components, JSON-backed content, and responsive layouts. The [Lanterns Chrome repository](https://github.com/lanterns-fun/lanterns-chrome) contains browser extension source code, but does not establish a public release or verify feature claims. | List React, Next.js, TypeScript, and Tailwind CSS as tools used to build this site. Describe Lanterns as an experiment without claiming it shipped. |
| Applied ML and language tools | The owner's project experience supports sensor-data analysis, predictive modeling, and prototyping tools that summarize text, extract information, or answer natural-language questions. It doesn't establish model performance or production deployment. | Name the work, not the unverified stack, metrics, or deployment claims. |
| Cloud, databases, and tooling | The [Amplify config](../../amplify.yml) shows how the portfolio is configured to build on AWS Amplify, not proof of a live deployment or wider AWS, Azure, or GCP experience. The reviewed samples don't substantiate the scored claims for SQL or R or the cloud service inventory. | Keep cloud off the main list; mention Amplify in the site entry if useful. Keep SQL, R, Docker, and other tools off the main list until tied to concrete work. |
| Industrial and electrical engineering | The owner's project experience supports work with sensors and feedback controls, electrical analysis and design, and product prototyping, testing, and quality checks. It doesn't establish sole ownership, field performance, or compliance outcomes. | Keep these competencies separate from software skills and describe the kinds of work rather than publishing specifications or implying sign-off. |

## Home and Skills

**Home / About Me**

Lead with the founder role and the coordination problem behind MiMinions. The featured section distinguishes the autonomous-organization vision from what is available in the public Python framework today. The concept sketch illustrates the idea; it is not a screenshot or a claim that the full workflow is available.

**Skills** (rename “Skills & Expertise”)

- **Software and data:** Python scripting and data handling, frontend development, data analysis and predictive modeling, and AI and language prototyping.
- **Industrial and electrical engineering:** Industrial automation and controls, electrical analysis and design, and prototyping and testing.

Use short statements that describe the work instead of scores, bars, or cloud inventories. Link to public examples where appropriate; summarize other project experience as transferable skills without naming clients or exposing project details. Don't replace `/10` with labels like “Advanced” that make the same unsupported claim.

## Projects section

Use one category per project: **Web & AI**, **Data & ML**, or **Industrial & Electrical**. Separately label the kind of work: **Personal project**, **Experiment**, **Demo**, **Competition**, or **Engineering work**. A kind describes what the work was, not whether it shipped. Use “Concept,” “Prototype,” or “Released” only if that stage matters and is confirmed; don't carry forward stale “in progress” wording.

Each card has a short title, category and kind, and at most one public link. The summary explains what was built, studied, or demonstrated in one sentence of up to 25 words. Use one compact list of tags for the project type, its key tools or methods, and any distinct output. If the project itself is the deliverable, don't add a second tag for that same artifact. Keep client names, operational details, and implementation internals off the cards.

Feature MiMinions first, then group the other 13 projects by category in the archive. Keep the current wording in [projects.json](../../content/projects.json) and link only to verified public repositories. Archive descriptions omit implementation details, release or deployment claims, performance figures, and compliance outcomes.

## Design references

- [Brittany Chiang](https://brittanychiang.com/) distinguishes her professional introduction, selected projects, and full archive. Here, the founder headline and quiet table of contents give the current work a clear entry point.
- [Thomas Pan](https://tuostmm.com/) gives selected engineering work more space and visual context than the rest. Here, the featured MiMinions section uses a labeled concept sketch and a public repository link rather than a mock product screenshot.
- [Simon Willison](https://simonwillison.net/projects/) keeps a large collection scannable with brief, linked entries. Here, grouped archive rows preserve all past work without making every project compete with MiMinions.

## Implementation and follow-up

- Edit the bio and Contact footer in [home.json](../../content/home.json), and the shared profile, navigation, and metadata in [site.json](../../content/site.json). The [portrait](../../content/images/portrait.png) lives alongside the site content.
- Edit project cards in [projects.json](../../content/projects.json) and skill groups and examples in [skills.json](../../content/skills.json). The source content is bundled at build time; a production update requires a rebuild and redeploy.
- The [project archive](../../app/components/ProjectsSection.tsx) shows 13 compact entries organized by category, with their original project tags and available source links.
- The [single page](../../app/page.tsx) links About, MiMinions, Projects, Skills, and the Contact footer from its table of contents. The [former Projects and Skills routes](../../next.config.mjs) redirect to their sections.

The revision is ready when each card has a short, readable summary and useful tags without redundant output labels; every named skill can be traced to project work without requiring public details; and every public role or outcome claim has been confirmed.
