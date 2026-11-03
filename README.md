# CaseLens: AI-Powered Indian Legal Precedent Search & Case Duration Analysis Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework: Next.js 15](https://img.shields.io/badge/Framework-Next.js%2015-black)](https://nextjs.org/)
[![UI: Tailwind CSS & Lucide](https://img.shields.io/badge/UI-Tailwind%20CSS-blue)](https://tailwindcss.com/)

> **Tagline:** Discover Precedents. Understand Judgments. Make Informed Decisions.

**CaseLens** is a legal intelligence and precedent discovery SaaS platform designed for Indian advocates, legal researchers, corporate counsels and judicial clerks. It enables legal professionals to search through court judgments, identify precedents sharing similar legal questions and factual contexts, analyze historical case resolution durations, and conduct multi-case comparative analyses.

---

## 🌟 Key Capabilities & Modules

### 1. Executive Analytics Dashboard
- **Bench Statistics:** 25,480 total judgments, 3,250 Supreme Court cases, 12,850 High Court cases, 9,380 District Court cases, 18,420 resolved cases, and 7,060 pending adjudications.
- **Database Overview:** Interactive donut visualization of case proportions across Supreme Court (12.8%), High Courts (50.5%), and District Courts (36.7%).
- **Duration Trends:** Annual disposition timeline from 2019 to 2023 highlighting procedural acceleration across commercial divisions.
- **Recent Searches & Quick Actions:** 1-click re-execution of queries such as *"Property ownership dispute"*, *"Contract breach compensation"*, and *"Land acquisition compensation"*.

### 2. Natural Language Precedent Search
- Large conversational search input supporting complex factual narratives (e.g., *"A property ownership dispute involving ancestral land, possession rights and disputed registration documents"*).
- Instant search suggestion pills for Property Disputes, Civil Litigation, Criminal Law, Contract Disputes, Family Law, Consumer Protection, Employment Law, and Land Acquisition.
- Transparent distinction between exact phrase matching, tokenized lexical weighting across statutory sections, and simulated vector similarity.

### 3. Multi-Faceted Advanced Filters
- **Category:** 12 Indian law categories (Property, Civil, Criminal, Family, Contract, Consumer, Employment, Constitutional, Taxation, IP, Land Acquisition, Banking & Finance).
- **Courts:** Supreme Court of India, Delhi HC, Bombay HC, Rajasthan HC, Allahabad HC, Madras HC, Karnataka HC, Calcutta HC, Punjab & Haryana HC, and District Courts.
- **Status:** Disposed, Resolved, Allowed, Partially Allowed, Dismissed, Pending.
- **Duration Span:** Under 1 Year, 1–3 Years, 3–5 Years, 5–10 Years, Above 10 Years.
- **Year Range & Outcome:** Dynamic year filtering from 2015 to 2024.

### 4. Case Duration Analysis Engine
- **Formula:** $\text{Case Duration} = \text{Disposal Date} - \text{Filing Date}$ (computed strictly from reliable dates in days, months, and years).
- **Comparative Metrics:** Dynamic visual chart calculating Shortest, Median, Average, and Longest resolution duration across filtered benchmarks.
- **Historically Shorter-Resolution Precedents:** Automated spotlighting of precedents with faster historical adjudications.
- **Statutory Guardrail:** Prominent advisory noting that historical durations reflect past administrative conditions and do not predict future timelines.

### 5. Multi-Case Comparison Matrix (2–4 Cases)
- Side-by-side comparison grid detailing Case Facts, Formulated Legal Issues, Final Outcomes, Durations, Statutory Provisions, and Legal Principles.
- Real-time **Key Insight Banner** identifying the precedent resolved in the shortest duration.
- Embedded mini duration visualization bar chart.

### 6. In-Depth Judgment Details View
- Comprehensive structured breakdown: Background, Facts of the Case, Arguments of Petitioner, Arguments of Respondent, Court Observations, and Operative Orders.
- Tabbed navigation across Case Summary, Legal Provisions & Sections, Principles Established, and Related Precedents.
- One-click actions to Save Case, Add to Comparison, Copy Case Summary to Clipboard, and Print Judgment Brief.

### 7. Demonstration Dataset (122+ Cases)
- Includes over 122 richly crafted, fictional Indian legal precedents with realistic citations, statutory provisions (CPC, CrPC, TPA, Indian Contract Act, Hindu Marriage Act, RFCTLARR Act, SARFAESI, etc.), authentic judge names, and exact calculated date differences.
- All records carry explicit `isDemo: true` and `sourceType: "Demo Data"` badges.

---

## 🎨 Design System & Visual Palette

CaseLens is styled according to the specified legal-tech SaaS palette:

| Color Token | Hex Code | Usage |
|---|---|---|
| **Primary Navy** | `#101C2C` | Brand identity, primary sidebar, headers |
| **Secondary Navy** | `#1D3046` | Active navigation pills, contrast borders |
| **Accent Gold** | `#C9A45C` | CTA buttons, active accents, scales iconography |
| **Background** | `#F5F7FA` | Clean canvas background |
| **Surface White** | `#FFFFFF` | Content cards and data tables |
| **Text Primary** | `#263445` | High-contrast body copy |
| **Muted Text** | `#778397` | Metadata, citations, dates |
| **Success Green** | `#16856B` | Short duration badges, positive outcomes |
| **Warning Amber** | `#D99A38` | Pending status, advisory notes |
| **Borders** | `#E5E9EF` | Card outlines and subtle dividers |

---

## 🏗️ Technical Architecture

CaseLens follows a modern, scalable full-stack architecture:

```
CaseLens Web UI (Next.js 15 App Router + Tailwind CSS + Lucide + Recharts)
   │
   ├── Context State Store (CaseLensContext + LocalStorage persistence)
   │
   └── Backend REST API Layer
         ├── /api/cases           (Paginated repository & category filtering)
         ├── /api/cases/[id]      (Detailed judgment retrieval & related cases)
         ├── /api/search          (Multi-parameter precedent search & scoring)
         ├── /api/analytics       (Duration benchmarks & court volume aggregations)
         └── /api/compare         (Multi-case side-by-side comparison engine)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher

### Installation & Run

1. Clone or open the workspace:
   ```bash
   cd CaseLens
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Launch the application:
   ```bash
   npm run start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚖️ Legal Disclaimer

> **CaseLens is a legal research and precedent discovery tool.** Search results, summaries and duration analytics are intended to support legal research and are not a substitute for professional legal advice. Historical case resolution durations do not predict future case timelines. Users should verify all judgments, citations and legal provisions against their original official sources. All demonstration records are simulated demonstration data.

