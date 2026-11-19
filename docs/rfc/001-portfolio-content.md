# RFC 001: Make the portfolio shorter and easier to substantiate

**Status:** Approved. Home, Skills, and the initial Projects page are implemented. The owner confirmed doing the prior projects; the Skills page reflects that work without publishing additional project details.

## Assessment

The public samples support a clear story: hands-on Python scripting and practical frontend development, alongside an industrial and electrical engineering background described in the portfolio. They do not establish an overall proficiency level, production-scale backend ownership, or broad cloud expertise. This is an assessment of what the portfolio can show, not a ceiling on what you can do. Private work can support a specific claim if you can describe your contribution without disclosing sensitive details.

| Area | What the reviewed material supports | How to present it |
| --- | --- | --- |
| Python and pandas | [Directory Scan source](https://github.com/shengxio/Directory_Scan/blob/248dfbf45b0a4e9eb4fc5f261fb69ee7d46d2c27/main.py) walks directory trees, processes file metadata with pandas, and writes Excel reports. The [algorithm exercises](https://github.com/shengxio/leet_code_samples/blob/1e29489e17a55e0ce42cdb023ccb6b0b2fc76792/longest_substring.py) show practice, not expert-level data structures. | Lead with Python scripting, data handling, and reporting. Drop `Python 10/10` and `Data Structure 10/10`. |
| Frontend | This [portfolio](../../app/projects/page.tsx) shows typed React components, JSON-backed pages, and [responsive layouts](../../app/page.tsx). The [Chrome extension README](https://github.com/shengxio/chrome_react_test/blob/3bfceef3d148dd3b205b97f2a898356456a98b8d/Readme.md) describes a starter and is not evidence that Lanterns shipped or that its features work. | List React, Next.js, TypeScript, and Tailwind CSS as tools used to build this site. Don't infer full-stack or extension expertise from this evidence. |
| Applied ML and language tools | The owner's project experience supports sensor-data analysis, predictive modeling, and prototyping tools that summarize text, extract information, or answer natural-language questions. It doesn't establish model performance or production deployment. | Name the work, not the unverified stack, metrics, or deployment claims. |
| Cloud, databases, and tooling | The [Amplify config](../../amplify.yml) shows how the portfolio is configured to build on AWS Amplify, not proof of a live deployment or wider AWS, Azure, or GCP experience. The reviewed samples don't substantiate the scored claims for SQL or R or the cloud service inventory. | Keep cloud off the main list; mention Amplify in the site entry if useful. Keep SQL, R, Docker, and other tools off the main list until tied to concrete work. |
| Industrial and electrical engineering | The owner's project experience supports work with sensors and feedback controls, electrical analysis and design, and product prototyping, testing, and quality checks. It doesn't establish sole ownership, field performance, or compliance outcomes. | Keep these competencies separate from software skills and describe the kinds of work rather than publishing specifications or implying sign-off. |

## Proposed Home and Skills copy

**Home / About Me**

> I build Python tools for data and reporting and web projects with React and Next.js. My background is in industrial automation and electrical engineering.

Replace the current specialist titles, broad expertise statements, and repeated tool lists with this short introduction.

**Skills** (rename “Skills & Expertise”)

- **Software and data:** Python scripting and data handling, frontend development, data analysis and predictive modeling, and AI and language prototyping.
- **Industrial and electrical engineering:** Industrial automation and controls, electrical analysis and design, and prototyping and testing.

Use short statements that describe the work instead of scores, bars, or cloud inventories. Link to public examples where appropriate; summarize other project experience as transferable skills without naming clients or exposing project details. Don't replace `/10` with labels like “Advanced” that make the same unsupported claim.

## Proposed Projects page

Use one category per project: **Web & AI**, **Data & ML**, or **Industrial & Electrical**. Separately label the kind of work: **Personal project**, **Experiment**, **Demo**, **Competition**, or **Engineering work**. A kind describes what the work was, not whether it shipped. Use “Concept,” “Prototype,” or “Released” only if that stage matters and is confirmed; don't carry forward stale “in progress” wording.

Each card gets a short title, one sentence of up to 25 words, category and kind, and at most one public link. Omit stack tags by default; show at most two when they help explain the work. The summary should name what was built, studied, or demonstrated, without revealing clients, operational details, or implementation internals. Include a result only when measurable, attributable, and approved for public use.

Start with the portfolio and Directory Scan. Once confirmed, add Cold Chain Temperature Prediction and one representative engineering project (the electrical study is a good candidate). Keep the rest off the default view; add a “More projects” section only if there are enough distinct, confirmed entries to justify it.

### Ready to feature

| Title | Category / kind | Proposed card copy |
| --- | --- | --- |
| [Personal Portfolio](../../app/page.tsx) | Web & AI / Personal project | A responsive site showcasing selected projects and the skills behind them. |
| [Directory Scan](https://github.com/shengxio/Directory_Scan) | Data & ML / Personal project | A Python utility that inventories files and folders and exports Excel reports. |

### Decisions and copy for the existing catalogue

The owner's involvement is confirmed. The copy below remains an option only if the owner wants it shown and the stated scope can be shared. “Hold” means leave the entry off the site for now, not that the work lacks value.

| Proposed title | Category / kind | Editorial decision | Proposed card copy |
| --- | --- | --- | --- |
| MiMinions | Web & AI / Experiment | Hold until the scope of the experiment is confirmed. Drop marketplace, monetization, and launch language. | An experiment in letting users create and customize AI agents. |
| Lanterns | Web & AI / Experiment | Hold until the extension and your contribution are confirmed. Don't present fact-checking or bias detection as working features without evidence. | A browser extension project exploring chat-based help for reading articles. |
| Lamp | Data & ML / Experiment | Hold, or combine with Lanterns if they are iterations of the same work. Don't claim that it determines truthfulness. | An experiment in using machine learning to analyze online articles. |
| Cold Chain Temperature Prediction | Data & ML / Engineering work | Feature after confirming your role and permission to discuss it. Drop spoilage reduction, real-time monitoring, and alerting claims unless supported. | A project exploring how sensor readings can help predict product temperatures in refrigerated transport. |
| Transportation Copilot | Web & AI / Demo | Optional after confirmation. Drop continuous learning and claims of better recommendations. | A demo exploring natural-language access to trip and weather information. |
| Algae Incubation Controls | Industrial & Electrical / Engineering work | Optional after confirmation. Drop yield improvements and the detailed process description. | A controls project for monitoring and regulating an algae incubation system. |
| Meeting Stickers | Data & ML / Experiment | Optional after confirmation. Use one name; don't claim adoption or improved transparency. | An experiment in summarizing public meeting notes and surfacing action items. |
| Kaggle Attribution Challenge | Data & ML / Competition | Hold unless your own submission or contribution can be identified. A public fork alone is not evidence of an original solution or a high score. | A Kaggle competition project focused on an attribution task. |
| Electrical Load & Arc Flash Study | Industrial & Electrical / Engineering work | Feature after confirming your role and what can be shared. Don't claim compliance or safety outcomes. | Electrical load analysis and an arc flash study for residential and industrial facilities. |
| Pipeline Heat Tracing | Industrial & Electrical / Engineering work | Optional after confirmation. Drop the end-to-end ownership and efficiency claims. | Electrical heat tracing work for pipeline temperature maintenance. |
| Switchgear Design | Industrial & Electrical / Engineering work | Optional after confirmation. Drop performance, cost, and delivery claims. | Design work on low- and medium-voltage switchgear. |
| Solar & LED Street Lighting | Industrial & Electrical / Engineering work | Optional after confirmation. Drop installation and sustainability claims unless relevant and supportable. | Product design and delivery work for solar and LED street lighting. |

## Implementation and follow-up

- Edit the bio and contact details in [home.json](../../content/home.json), and the shared profile, navigation, and metadata in [site.json](../../content/site.json). The [portrait](../../content/images/portrait.png) lives alongside the site content.
- Edit project cards in [projects.json](../../content/projects.json) and skill groups and examples in [skills.json](../../content/skills.json). The source content is bundled at build time; a production update requires a rebuild and redeploy.
- The [Projects page](../../app/projects/page.tsx) features the two verified entries with category and kind, without a filter sidebar. If the project collection grows, filter by category rather than reintroducing a long stack-tag list.
- The blog was removed to keep the site focused on Home, Projects, and Skills.
- For each remaining candidate, confirm what you personally did, whether it was a concept, a demo, or a deployment, and what can be shared. Private work does not need a public repository; a short approved role statement is enough.

The revision is ready when every published project fits in one readable sentence without truncation, every named skill can be traced to project work without requiring public details, and every public role or outcome claim has been confirmed.
