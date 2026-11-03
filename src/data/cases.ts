// Fictional Demonstration Dataset for CaseLens
// Meets prompt requirement for 100+ realistic, fictional Indian legal precedent cases
import { LegalCase } from "@/types";

export const DEMO_CASES: LegalCase[] = [
  {
    "id": "CL-1001",
    "caseTitle": "Sharma vs State of Rajasthan",
    "caseNumber": "S.B. Civil Writ Petition 1234/2022",
    "court": "Rajasthan High Court",
    "category": "Property Dispute",
    "keywords": [
      "property ownership",
      "land possession",
      "registration",
      "ancestral title",
      "patta"
    ],
    "facts": "The dispute arose over ownership and boundary demarcation of a 2.5-acre agricultural parcel in Sikar district. The petitioner claimed possession under an unprobated ancestral family settlement deed executed in 1994, whereas the respondent state revenue authorities classified the land as pasture land (Charagah).",
    "legalIssues": [
      "Ownership rights",
      "Possession",
      "Property registration",
      "Evidence of title",
      "Charagah land reclassification"
    ],
    "filingDate": "2020-04-15",
    "disposalDate": "2022-01-20",
    "judgmentDate": "2022-01-20",
    "status": "Disposed",
    "outcome": "Partially Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.K. Bishnoi",
      "Hon'ble Mrs. Justice S. Gehlot"
    ],
    "legalSections": [
      "Section 54, Transfer of Property Act 1882",
      "Section 17, Registration Act 1908",
      "Section 34, Specific Relief Act 1963",
      "Rajasthan Tenancy Act 1955"
    ],
    "summary": "A property ownership dispute involving possession rights and disputed land registration documents.",
    "background": "Petitioner approached the High Court challenging the eviction notice issued by the Tehsildar seeking summary dispossession without conducting a proper demarcation survey.",
    "argumentsPetitioner": "Continuous settled physical possession for over 28 years confers protected tenancy rights under Section 15 of Rajasthan Tenancy Act. Revenue records maintained by Patwari acknowledged cultivation.",
    "argumentsRespondent": "Unregistered family partition deed cannot create transferable title under Section 17 of Registration Act. The land remains recorded in Jamabandi as communal pasture land.",
    "courtObservations": "Settled possession cannot be disturbed except by due process of law. While unregistered deeds do not convey legal title, long possession requires an adjudicatory enquiry before summary eviction.",
    "finalJudgment": "Writ petition partially allowed. State restrained from dispossessing the petitioner until the competent Revenue Court adjudicates regular title suit within six months.",
    "legalPrinciples": [
      "Settled possession cannot be evicted by administrative executive fiat without due process.",
      "Unregistered partition deeds may be marked for collateral purpose of demonstrating nature of possession."
    ],
    "referencedPrecedents": [
      "Rame Gowda vs M. Varadappa Naidu (2004) 1 SCC 769",
      "Suraj Lamp & Industries vs State of Haryana (2012) 1 SCC 656"
    ],
    "sourceType": "Demo Data",
    "isDemo": true,
    "durationDays": 645,
    "durationFormatted": "1 Year 9 Months"
  },
  {
    "id": "CL-1002",
    "caseTitle": "Gupta vs State of Punjab",
    "caseNumber": "CWP No. 8921/2019",
    "court": "Punjab & Haryana High Court",
    "category": "Property Dispute",
    "keywords": [
      "land possession",
      "title documents",
      "revenue records",
      "mutation entry",
      "agricultural lease"
    ],
    "facts": "Petitioner challenged cancellation of mutation entry sanctioned in his favor regarding prime agricultural land in Ludhiana. The consolidation officer had cancelled the revenue mutation without issuing prior notice to the occupant.",
    "legalIssues": [
      "Mutation of revenue entries",
      "Principles of natural justice",
      "Title versus possession"
    ],
    "filingDate": "2019-02-10",
    "disposalDate": "2021-03-15",
    "judgmentDate": "2021-03-15",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice G.S. Sandhu"
    ],
    "legalSections": [
      "Section 31, Punjab Land Revenue Act 1887",
      "Article 226, Constitution of India",
      "Section 110, Indian Evidence Act 1872"
    ],
    "summary": "Land possession dispute with title documents and revenue records.",
    "background": "Mutation entered in 2005 was abruptly revoked by the Financial Commissioner on an ex-parte review application filed by third-party contestants.",
    "argumentsPetitioner": "Mutation was acted upon for 14 years. Financial Commissioner had no jurisdiction to reopen settled mutations without formal civil court decree.",
    "argumentsRespondent": "Initial sanction was marred by clerical irregularity in Jamabandi records and lacked sanction from Sub-Divisional Magistrate.",
    "courtObservations": "Mutation entries do not create or extinguish proprietary title; however, cancellation of a decade-old mutation without hearing violates natural justice.",
    "finalJudgment": "Petition allowed. Quashed the cancellation order and directed parties to maintain status quo pending civil title determination.",
    "legalPrinciples": [
      "Revenue mutation is for fiscal purposes and does not conclusively establish ownership.",
      "Administrative recall of long-standing entries without notice is ultra vires."
    ],
    "referencedPrecedents": [
      "Bhimabai Mahadeo Kambekar vs Arthur Import and Export Co. (2019) 3 SCC 191"
    ],
    "sourceType": "Demo Data",
    "isDemo": true,
    "durationDays": 764,
    "durationFormatted": "2 Years 1 Month"
  },
  {
    "id": "CL-1003",
    "caseTitle": "Verma vs State of Delhi",
    "caseNumber": "R.F.A. (OS) 45/2017",
    "court": "Delhi High Court",
    "category": "Property Dispute",
    "keywords": [
      "land ownership",
      "registry",
      "adverse possession",
      "encroachment",
      "DDA"
    ],
    "facts": "Regular first appeal against dismissal of civil suit claiming ownership by adverse possession over 300 square yards of commercial land in South Extension, New Delhi.",
    "legalIssues": [
      "Elements of adverse possession",
      "Animus possidendi",
      "Burden of proof against statutory bodies"
    ],
    "filingDate": "2017-01-18",
    "disposalDate": "2020-05-22",
    "judgmentDate": "2020-05-22",
    "status": "Dismissed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice S. Muralidhar",
      "Hon'ble Mr. Justice I.S. Mehta"
    ],
    "legalSections": [
      "Articles 64 and 65, Limitation Act 1963",
      "Section 9, Code of Civil Procedure 1908",
      "Delhi Development Act 1957"
    ],
    "summary": "Land ownership, registry and adverse possession claims against statutory authority.",
    "background": "Appellant claimed continuous possession since 1982 after taking over a vacant plot and erecting temporary commercial godowns.",
    "argumentsPetitioner": "Possession was open, notorious, continuous and hostile to the true owner for beyond the statutory 30-year limitation period against the Government.",
    "argumentsRespondent": "Permissive possession or repeated trespass does not constitute hostile animus against public land acquired for planned urban development.",
    "courtObservations": "To establish adverse possession, the plaintiff must prove when possession became adverse and hostile. Merely constructing tin sheds without asserting hostile title to the knowledge of the owner fails the test.",
    "finalJudgment": "Appeal dismissed with exemplary costs of Rs. 50,000. DDA permitted to reclaim possession.",
    "legalPrinciples": [
      "Adverse possession against the State requires rigorous proof of hostile possession for 30 years.",
      "A squatter or licensee cannot unilaterally convert permissive possession into adverse title."
    ],
    "referencedPrecedents": [
      "Ravinder Kaur Grewal vs Manjit Kaur (2019) 8 SCC 729",
      "T. Anjanappa vs Somalingappa (2006) 7 SCC 570"
    ],
    "sourceType": "Demo Data",
    "isDemo": true,
    "durationDays": 1220,
    "durationFormatted": "3 Years 4 Months"
  },
  {
    "id": "CL-1004",
    "caseTitle": "Mehta Infotech Solutions vs Global Telecom Ltd",
    "caseNumber": "O.M.P. (COMM) 189/2021",
    "court": "Delhi High Court",
    "category": "Contract Dispute",
    "keywords": [
      "breach of contract",
      "liquidated damages",
      "software licensing",
      "arbitration award",
      "time is of essence"
    ],
    "facts": "Petition under Section 34 of Arbitration Act challenging an arbitral award awarding Rs 4.2 Crores for unilateral termination of a 5-year cloud enterprise software services agreement.",
    "legalIssues": [
      "Section 34 challenge",
      "Patent illegality",
      "Reasonableness of liquidated damages without proof of actual loss"
    ],
    "filingDate": "2021-04-12",
    "disposalDate": "2022-09-18",
    "judgmentDate": "2022-09-18",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice V. Kameswar Rao"
    ],
    "legalSections": [
      "Section 73 and 74, Indian Contract Act 1872",
      "Section 34, Arbitration & Conciliation Act 1996"
    ],
    "summary": "Arbitral challenge regarding liquidated damages and wrongful termination of enterprise software contract.",
    "background": "Sole arbitrator awarded full liquidated damages stipulated in clause 14 without requiring the claimant to prove any genuine pre-estimate of loss incurred.",
    "argumentsPetitioner": "Arbitrator committed patent illegality by dispensing with the fundamental requirement of proving actual loss where damages could be calculated.",
    "argumentsRespondent": "Parties were sophisticated commercial entities who mutually agreed upon a genuine pre-estimate of liquidated damages.",
    "courtObservations": "Stipulation of liquidated damages does not grant a carte blanche to award damages without demonstrating foundational loss or injury.",
    "finalJudgment": "Arbitral award set aside to the extent of liquidated damages; matter remitted for reassessment.",
    "legalPrinciples": [
      "Section 74 Contract Act emphasizes reasonable compensation not exceeding the amount named.",
      "Where loss can be established by accounting evidence, dispensing with proof is patently illegal."
    ],
    "referencedPrecedents": [
      "Kailash Nath Associates vs DDA (2015) 4 SCC 136"
    ],
    "sourceType": "Demo Data",
    "isDemo": true,
    "durationDays": 524,
    "durationFormatted": "1 Year 5 Months"
  },
  {
    "id": "CL-1005",
    "caseTitle": "Union of India vs M/s Patel Infrastructure Corp",
    "caseNumber": "Civil Appeal No. 4912/2018",
    "court": "Supreme Court of India",
    "category": "Contract Dispute",
    "keywords": [
      "highway concession",
      "force majeure",
      "toll collection loss",
      "arbitration",
      "NHAI"
    ],
    "facts": "Dispute concerning concession agreement for four-laning of national highway. Concessionaire claimed compensation for revenue shortfall caused by local agitations and delay in land handover by NHAI.",
    "legalIssues": [
      "Material breach by authority",
      "Concessionaire compensation",
      "Scope of judicial review under Article 136"
    ],
    "filingDate": "2018-03-02",
    "disposalDate": "2023-04-14",
    "judgmentDate": "2023-04-14",
    "status": "Disposed",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Dr. Justice D.Y. Chandrachud, CJI",
      "Hon'ble Mr. Justice J.B. Pardiwala"
    ],
    "legalSections": [
      "National Highways Act 1956",
      "Section 37, Arbitration & Conciliation Act 1996"
    ],
    "summary": "Supreme Court affirmation of arbitral compensation for concessionaire in highway infrastructure contract.",
    "background": "NHAI appealed Division Bench order upholding arbitral award granting Rs 118 Crores for prolonged right-of-way delays.",
    "argumentsPetitioner": "Concessionaire assumed commercial risk and failed to mitigate losses; delays were attributable to local law and order.",
    "argumentsRespondent": "NHAI had an absolute contractual warranty to deliver encumbrance-free right of way within 180 days of financial closure.",
    "courtObservations": "The arbitral tribunal provided plausible interpretation of reciprocal promises under EPC model concession agreements.",
    "finalJudgment": "Civil appeal dismissed. NHAI directed to release deposited award amount with 8% interest.",
    "legalPrinciples": [
      "Courts exercising supervisory jurisdiction will not substitute arbitral interpretation with their own unless perverse.",
      "Government authorities must honor contractual timelines for providing project land."
    ],
    "referencedPrecedents": [
      "Associate Builders vs DDA (2015) 3 SCC 49",
      "Ssangyong Engineering vs NHAI (2019) 15 SCC 131"
    ],
    "sourceType": "Demo Data",
    "isDemo": true,
    "durationDays": 1869,
    "durationFormatted": "5 Years 1 Month"
  },
  {
    "id": "CL-1006",
    "caseTitle": "Kaur vs Singh",
    "caseNumber": "PRO/8042/2021",
    "court": "City Civil Court, Mumbai",
    "category": "Property Dispute",
    "keywords": [
      "partition suit",
      "validity of will",
      "joint hindu family property",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Dispute over agricultural land partition and validity of unprobated Will among co-heirs.",
    "legalIssues": [
      "Partition suit",
      "Validity of Will",
      "Joint Hindu Family property"
    ],
    "filingDate": "2021-11-26",
    "disposalDate": "2021-09-09",
    "judgmentDate": "2021-09-09",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 6, Hindu Succession Act 1956",
      "Section 63, Indian Succession Act 1925"
    ],
    "summary": "Property Dispute adjudication concerning Partition suit, Validity of Will, Joint Hindu Family property.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 6, Hindu Succession Act 1956.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 6, Hindu Succession Act 1956 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 0,
    "durationFormatted": "0 Days",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1007",
    "caseTitle": "Deshmukh vs City Municipal Council",
    "caseNumber": "PRO/8049/2022",
    "court": "District Court, Jaipur",
    "category": "Property Dispute",
    "keywords": [
      "municipal regularization",
      "demolition without hearing",
      "property rights",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Encroachment demolition notice challenged by commercial property owner holding sanctioned building plan.",
    "legalIssues": [
      "Municipal regularization",
      "Demolition without hearing",
      "Property rights"
    ],
    "filingDate": "2022-12-27",
    "disposalDate": "2024-02-12",
    "judgmentDate": "2024-02-12",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 299, Maharashtra Municipalities Act",
      "Article 300A, Constitution of India"
    ],
    "summary": "Property Dispute adjudication concerning Municipal regularization, Demolition without hearing, Property rights.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 299, Maharashtra Municipalities Act.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 299, Maharashtra Municipalities Act were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 412,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1008",
    "caseTitle": "Nair vs District Collector, Ernakulam",
    "caseNumber": "PRO/8056/2016",
    "court": "Supreme Court of India",
    "category": "Property Dispute",
    "keywords": [
      "data bank entry",
      "paddy land classification",
      "change of land use",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Rejection of land conversion application for paddy wetland conversion under Conservation of Paddy Land Act.",
    "legalIssues": [
      "Data bank entry",
      "Paddy land classification",
      "Change of land use"
    ],
    "filingDate": "2016-01-10",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Kerala Conservation of Paddy Land Act 2008"
    ],
    "summary": "Property Dispute adjudication concerning Data bank entry, Paddy land classification, Change of land use.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Kerala Conservation of Paddy Land Act 2008.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Kerala Conservation of Paddy Land Act 2008 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1009",
    "caseTitle": "Reddy vs Rao",
    "caseNumber": "PRO/8063/2017",
    "court": "Delhi High Court",
    "category": "Property Dispute",
    "keywords": [
      "readiness and willingness",
      "time essence",
      "section 16(c) specific relief",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Specific performance suit of agreement to sell 1500 sq yards residential plot in Hyderabad suburbs.",
    "legalIssues": [
      "Readiness and willingness",
      "Time essence",
      "Section 16(c) Specific Relief"
    ],
    "filingDate": "2017-02-11",
    "disposalDate": "2021-12-18",
    "judgmentDate": "2021-12-18",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 16(c), Specific Relief Act 1963",
      "Section 20, Specific Relief Act"
    ],
    "summary": "Property Dispute adjudication concerning Readiness and willingness, Time essence, Section 16(c) Specific Relief.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 16(c), Specific Relief Act 1963.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 16(c), Specific Relief Act 1963 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1771,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1010",
    "caseTitle": "Chatterjee vs State of West Bengal",
    "caseNumber": "PRO/8070/2018",
    "court": "Bombay High Court",
    "category": "Property Dispute",
    "keywords": [
      "de facto vs de jure possession",
      "repeal of urban land ceiling act",
      "land restoration",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Vesting of surplus urban land under Urban Land Ceiling Act and challenge to physical possession taking.",
    "legalIssues": [
      "De facto vs de jure possession",
      "Repeal of Urban Land Ceiling Act",
      "Land restoration"
    ],
    "filingDate": "2018-03-12",
    "disposalDate": "2019-05-21",
    "judgmentDate": "2019-05-21",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Urban Land (Ceiling & Regulation) Repeal Act 1999"
    ],
    "summary": "Property Dispute adjudication concerning De facto vs de jure possession, Repeal of Urban Land Ceiling Act, Land restoration.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Urban Land (Ceiling & Regulation) Repeal Act 1999.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Urban Land (Ceiling & Regulation) Repeal Act 1999 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 435,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1011",
    "caseTitle": "Yadav vs Gram Panchayat Sonipat",
    "caseNumber": "PRO/8077/2019",
    "court": "Rajasthan High Court",
    "category": "Property Dispute",
    "keywords": [
      "village common land",
      "proprietor rights",
      "shamlat deh vesting",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Shamlat deh land ownership claim by proprietary right holders against Village Panchayat.",
    "legalIssues": [
      "Village common land",
      "Proprietor rights",
      "Shamlat Deh vesting"
    ],
    "filingDate": "2019-04-13",
    "disposalDate": "2021-10-24",
    "judgmentDate": "2021-10-24",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Punjab Village Common Lands Regulation Act 1961"
    ],
    "summary": "Property Dispute adjudication concerning Village common land, Proprietor rights, Shamlat Deh vesting.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Punjab Village Common Lands Regulation Act 1961.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Punjab Village Common Lands Regulation Act 1961 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 925,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1012",
    "caseTitle": "Choudhary vs Land Acquisition Officer",
    "caseNumber": "PRO/8084/2020",
    "court": "Allahabad High Court",
    "category": "Property Dispute",
    "keywords": [
      "apportionment of compensation",
      "tenant commercial interest",
      "reference under section 30",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Apportionment of compensation for acquired commercial godown between landlord and statutory tenant.",
    "legalIssues": [
      "Apportionment of compensation",
      "Tenant commercial interest",
      "Reference under Section 30"
    ],
    "filingDate": "2020-05-14",
    "disposalDate": "2024-03-05",
    "judgmentDate": "2024-03-05",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 30, Land Acquisition Act 1894",
      "Section 64, RFCTLARR Act 2013"
    ],
    "summary": "Property Dispute adjudication concerning Apportionment of compensation, Tenant commercial interest, Reference under Section 30.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 30, Land Acquisition Act 1894.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 30, Land Acquisition Act 1894 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1391,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1013",
    "caseTitle": "Patil vs State of Maharashtra",
    "caseNumber": "PRO/8091/2021",
    "court": "Madras High Court",
    "category": "Property Dispute",
    "keywords": [
      "non-agricultural permission",
      "revenue code compliance",
      "promissory estoppel",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Writ against cancellation of non-agricultural (NA) permission granted for township project.",
    "legalIssues": [
      "Non-agricultural permission",
      "Revenue code compliance",
      "Promissory estoppel"
    ],
    "filingDate": "2021-06-15",
    "disposalDate": "2021-08-08",
    "judgmentDate": "2021-08-08",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Maharashtra Land Revenue Code 1966"
    ],
    "summary": "Property Dispute adjudication concerning Non-agricultural permission, Revenue code compliance, Promissory estoppel.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Maharashtra Land Revenue Code 1966.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Maharashtra Land Revenue Code 1966 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 54,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1014",
    "caseTitle": "Iyer vs Sundaram",
    "caseNumber": "PRO/8098/2022",
    "court": "Karnataka High Court",
    "category": "Property Dispute",
    "keywords": [
      "easement of necessity",
      "prescriptive right of way",
      "continuous enjoyment",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Boundary easement right of way claim through contiguous residential driveway.",
    "legalIssues": [
      "Easement of necessity",
      "Prescriptive right of way",
      "Continuous enjoyment"
    ],
    "filingDate": "2022-07-16",
    "disposalDate": "2024-01-11",
    "judgmentDate": "2024-01-11",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 13 and 15, Indian Easements Act 1882"
    ],
    "summary": "Property Dispute adjudication concerning Easement of necessity, Prescriptive right of way, Continuous enjoyment.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 13 and 15, Indian Easements Act 1882.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 13 and 15, Indian Easements Act 1882 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 544,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1015",
    "caseTitle": "Banerjee vs Housing Development Board",
    "caseNumber": "PRO/8105/2016",
    "court": "Calcutta High Court",
    "category": "Property Dispute",
    "keywords": [
      "forfeiture of earnest money",
      "housing board terms",
      "arbitrary cancellation",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Dispute regarding cancellation of high-income group flat allotment due to alleged delayed installment payments.",
    "legalIssues": [
      "Forfeiture of earnest money",
      "Housing board terms",
      "Arbitrary cancellation"
    ],
    "filingDate": "2016-08-17",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Article 14, Constitution of India",
      "Consumer Protection Act"
    ],
    "summary": "Property Dispute adjudication concerning Forfeiture of earnest money, Housing board terms, Arbitrary cancellation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 14, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 14, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1016",
    "caseTitle": "Solanki vs Municipal Corporation",
    "caseNumber": "PRO/8112/2017",
    "court": "Punjab & Haryana High Court",
    "category": "Property Dispute",
    "keywords": [
      "road setback line",
      "due process in acquisition",
      "right to fair compensation",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to road widening setback line without formal land acquisition proceedings or compensation.",
    "legalIssues": [
      "Road setback line",
      "Due process in acquisition",
      "Right to fair compensation"
    ],
    "filingDate": "2017-09-18",
    "disposalDate": "2021-11-17",
    "judgmentDate": "2021-11-17",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Article 300A, Constitution of India"
    ],
    "summary": "Property Dispute adjudication concerning Road setback line, Due process in acquisition, Right to fair compensation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 300A, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 300A, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1521,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1017",
    "caseTitle": "Bhatia vs Bhatia Properties Pvt Ltd",
    "caseNumber": "PRO/8119/2018",
    "court": "District Court, New Delhi",
    "category": "Property Dispute",
    "keywords": [
      "benami transactions prohibition",
      "fiduciary relationship exception",
      "proof of source of funds",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Suit for declaration of benami property transaction between family directors.",
    "legalIssues": [
      "Benami transactions prohibition",
      "Fiduciary relationship exception",
      "Proof of source of funds"
    ],
    "filingDate": "2018-10-19",
    "disposalDate": "2019-04-20",
    "judgmentDate": "2019-04-20",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Prohibition of Benami Property Transactions Act 1988"
    ],
    "summary": "Property Dispute adjudication concerning Benami transactions prohibition, Fiduciary relationship exception, Proof of source of funds.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Prohibition of Benami Property Transactions Act 1988.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Prohibition of Benami Property Transactions Act 1988 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 183,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1018",
    "caseTitle": "Joshi vs State of Uttarakhand",
    "caseNumber": "PRO/8126/2019",
    "court": "City Civil Court, Mumbai",
    "category": "Property Dispute",
    "keywords": [
      "lease condition breach",
      "terai land grants",
      "principles of natural justice",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Cancellation of agricultural lease granted in foothill Terai region for non-cultivation.",
    "legalIssues": [
      "Lease condition breach",
      "Terai land grants",
      "Principles of natural justice"
    ],
    "filingDate": "2019-11-20",
    "disposalDate": "2021-09-23",
    "judgmentDate": "2021-09-23",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "UP Zamindari Abolition and Land Reforms Act 1950"
    ],
    "summary": "Property Dispute adjudication concerning Lease condition breach, Terai land grants, Principles of natural justice.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of UP Zamindari Abolition and Land Reforms Act 1950.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under UP Zamindari Abolition and Land Reforms Act 1950 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 673,
    "durationFormatted": "1 Year 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1019",
    "caseTitle": "Sengupta vs Kolkata Metropolitan Authority",
    "caseNumber": "PRO/8133/2020",
    "court": "District Court, Jaipur",
    "category": "Property Dispute",
    "keywords": [
      "thika tenancy rights",
      "vesting under thika tenancy act",
      "building rules",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Retention rights over ancestral thika tenancy land and construction regularization.",
    "legalIssues": [
      "Thika tenancy rights",
      "Vesting under Thika Tenancy Act",
      "Building rules"
    ],
    "filingDate": "2020-12-21",
    "disposalDate": "2024-02-26",
    "judgmentDate": "2024-02-26",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "West Bengal Thika Tenancy Act 2001"
    ],
    "summary": "Property Dispute adjudication concerning Thika tenancy rights, Vesting under Thika Tenancy Act, Building rules.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of West Bengal Thika Tenancy Act 2001.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under West Bengal Thika Tenancy Act 2001 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1162,
    "durationFormatted": "3 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1020",
    "caseTitle": "Mishra vs Mishra",
    "caseNumber": "PRO/8140/2021",
    "court": "Supreme Court of India",
    "category": "Property Dispute",
    "keywords": [
      "daughter's coparcenary share",
      "retrospective operation of 2005 amendment",
      "preliminary decree",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Partition suit of coparcenary ancestral property including residential house and tenanted shops.",
    "legalIssues": [
      "Daughter's coparcenary share",
      "Retrospective operation of 2005 amendment",
      "Preliminary decree"
    ],
    "filingDate": "2021-01-22",
    "disposalDate": "2021-07-07",
    "judgmentDate": "2021-07-07",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 6, Hindu Succession Act (Vineeta Sharma doctrine)"
    ],
    "summary": "Property Dispute adjudication concerning Daughter's coparcenary share, Retrospective operation of 2005 amendment, Preliminary decree.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 6, Hindu Succession Act (Vineeta Sharma doctrine).",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 6, Hindu Succession Act (Vineeta Sharma doctrine) were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 166,
    "durationFormatted": "5 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1021",
    "caseTitle": "Pillai vs State of Tamil Nadu",
    "caseNumber": "PRO/8147/2022",
    "court": "Delhi High Court",
    "category": "Property Dispute",
    "keywords": [
      "assigned land alienation",
      "panchami land restoration",
      "bona fide purchaser",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Resumption of assigned land granted to landless agricultural laborers due to alleged alienation.",
    "legalIssues": [
      "Assigned land alienation",
      "Panchami land restoration",
      "Bona fide purchaser"
    ],
    "filingDate": "2022-02-23",
    "disposalDate": "2023-12-10",
    "judgmentDate": "2023-12-10",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Tamil Nadu Land Reforms Act"
    ],
    "summary": "Property Dispute adjudication concerning Assigned land alienation, Panchami land restoration, Bona fide purchaser.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Tamil Nadu Land Reforms Act.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Tamil Nadu Land Reforms Act were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 655,
    "durationFormatted": "1 Year 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1022",
    "caseTitle": "Saxena vs Nagar Nigam Kanpur",
    "caseNumber": "PRO/8154/2016",
    "court": "Bombay High Court",
    "category": "Property Dispute",
    "keywords": [
      "mutation vs tax collection",
      "registered gift deed legality",
      "municipal record correction",
      "property dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Mutation of commercial building title based on registered gift deed denied for municipal tax arrears.",
    "legalIssues": [
      "Mutation vs tax collection",
      "Registered gift deed legality",
      "Municipal record correction"
    ],
    "filingDate": "2016-03-24",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "UP Municipal Corporations Act 1959"
    ],
    "summary": "Property Dispute adjudication concerning Mutation vs tax collection, Registered gift deed legality, Municipal record correction.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of UP Municipal Corporations Act 1959.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under UP Municipal Corporations Act 1959 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Property Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1023",
    "caseTitle": "Kapoor vs Anand Commercial Trust",
    "caseNumber": "CIV/8161/2017",
    "court": "Rajasthan High Court",
    "category": "Civil Litigation",
    "keywords": [
      "leave to defend",
      "triable issue",
      "order xxxvii cpc threshold",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Summary suit under Order XXXVII CPC for recovery of Rs 85 Lakhs on dishonored promissory notes.",
    "legalIssues": [
      "Leave to defend",
      "Triable issue",
      "Order XXXVII CPC threshold"
    ],
    "filingDate": "2017-04-25",
    "disposalDate": "2021-10-16",
    "judgmentDate": "2021-10-16",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Order XXXVII Rule 3, CPC 1908",
      "Negotiable Instruments Act 1881"
    ],
    "summary": "Civil Litigation adjudication concerning Leave to defend, Triable issue, Order XXXVII CPC threshold.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Order XXXVII Rule 3, CPC 1908.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Order XXXVII Rule 3, CPC 1908 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1635,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1024",
    "caseTitle": "Shroff vs Modern Mercantile Bank",
    "caseNumber": "CIV/8168/2018",
    "court": "Allahabad High Court",
    "category": "Civil Litigation",
    "keywords": [
      "encashment of bank guarantee",
      "irretrievable harm",
      "fraud exception",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Injunction restraining enforcement of bank guarantee alleging egregious fraud in project delivery.",
    "legalIssues": [
      "Encashment of bank guarantee",
      "Irretrievable harm",
      "Fraud exception"
    ],
    "filingDate": "2018-05-26",
    "disposalDate": "2019-03-19",
    "judgmentDate": "2019-03-19",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 126, Indian Contract Act 1872"
    ],
    "summary": "Civil Litigation adjudication concerning Encashment of bank guarantee, Irretrievable harm, Fraud exception.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 126, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 126, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 297,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1025",
    "caseTitle": "Tripathi vs Northern Railways",
    "caseNumber": "CIV/8175/2019",
    "court": "Madras High Court",
    "category": "Civil Litigation",
    "keywords": [
      "carrier liability",
      "act of god defense",
      "railways act burden",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Damages claim for goods damaged during transit due to severe water ingress in freight wagons.",
    "legalIssues": [
      "Carrier liability",
      "Act of God defense",
      "Railways Act burden"
    ],
    "filingDate": "2019-06-27",
    "disposalDate": "2021-08-22",
    "judgmentDate": "2021-08-22",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 93 and 97, Railways Act 1989"
    ],
    "summary": "Civil Litigation adjudication concerning Carrier liability, Act of God defense, Railways Act burden.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 93 and 97, Railways Act 1989.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 93 and 97, Railways Act 1989 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 787,
    "durationFormatted": "2 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1026",
    "caseTitle": "Aggarwal vs Apex Diagnostics",
    "caseNumber": "CIV/8182/2020",
    "court": "Karnataka High Court",
    "category": "Civil Litigation",
    "keywords": [
      "medical standard of care",
      "bolam test",
      "vicarious liability of clinic",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Medical negligence tort claim seeking damages for incorrect diagnostic biopsy report.",
    "legalIssues": [
      "Medical standard of care",
      "Bolam test",
      "Vicarious liability of clinic"
    ],
    "filingDate": "2020-07-10",
    "disposalDate": "2024-01-25",
    "judgmentDate": "2024-01-25",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Law of Torts",
      "Consumer Protection Act 2019"
    ],
    "summary": "Civil Litigation adjudication concerning Medical standard of care, Bolam test, Vicarious liability of clinic.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Law of Torts.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Law of Torts were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1294,
    "durationFormatted": "3 Years 7 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1027",
    "caseTitle": "D'Souza vs Goa Coastal Management Authority",
    "caseNumber": "CIV/8189/2021",
    "court": "Calcutta High Court",
    "category": "Civil Litigation",
    "keywords": [
      "crz notification applicability",
      "pre-1991 existing construction",
      "demolition stay",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Demolition order against heritage homestay alleged to be within Coastal Regulation Zone (CRZ-I).",
    "legalIssues": [
      "CRZ notification applicability",
      "Pre-1991 existing construction",
      "Demolition stay"
    ],
    "filingDate": "2021-08-11",
    "disposalDate": "2026-06-06",
    "judgmentDate": "2026-06-06",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Environment Protection Act 1986",
      "CRZ Notification 2011"
    ],
    "summary": "Civil Litigation adjudication concerning CRZ notification applicability, Pre-1991 existing construction, Demolition stay.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Environment Protection Act 1986.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Environment Protection Act 1986 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1760,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1028",
    "caseTitle": "Mukherjee vs Eastern Coalfields Ltd",
    "caseNumber": "CIV/8196/2022",
    "court": "Punjab & Haryana High Court",
    "category": "Civil Litigation",
    "keywords": [
      "absolute liability",
      "subsurface rights",
      "environmental tort",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Suit for subsidence damages to residential colony caused by unscientific underground coal blasting.",
    "legalIssues": [
      "Absolute liability",
      "Subsurface rights",
      "Environmental tort"
    ],
    "filingDate": "2022-09-12",
    "disposalDate": "2023-11-09",
    "judgmentDate": "2023-11-09",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Coal Mines Nationalisation Act 1973"
    ],
    "summary": "Civil Litigation adjudication concerning Absolute liability, Subsurface rights, Environmental tort.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Coal Mines Nationalisation Act 1973.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Coal Mines Nationalisation Act 1973 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 423,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1029",
    "caseTitle": "Chauhan vs Chauhan",
    "caseNumber": "CIV/8203/2016",
    "court": "District Court, New Delhi",
    "category": "Civil Litigation",
    "keywords": [
      "proof of attesting witnesses",
      "suspicious circumstances in will",
      "testamentary capacity",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to probate of registered Will alleging undue influence and suspicious circumstances.",
    "legalIssues": [
      "Proof of attesting witnesses",
      "Suspicious circumstances in Will",
      "Testamentary capacity"
    ],
    "filingDate": "2016-10-13",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 68, Evidence Act 1872",
      "Section 63, Indian Succession Act"
    ],
    "summary": "Civil Litigation adjudication concerning Proof of attesting witnesses, Suspicious circumstances in Will, Testamentary capacity.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 68, Evidence Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 68, Evidence Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1030",
    "caseTitle": "Menon vs State of Kerala",
    "caseNumber": "CIV/8210/2017",
    "court": "City Civil Court, Mumbai",
    "category": "Civil Litigation",
    "keywords": [
      "qualifying service",
      "ad-hoc tenure regularization",
      "article 309 service rules",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Declaratory suit for pensionary benefits and inclusion of ad-hoc service for superannuation.",
    "legalIssues": [
      "Qualifying service",
      "Ad-hoc tenure regularization",
      "Article 309 service rules"
    ],
    "filingDate": "2017-11-14",
    "disposalDate": "2021-09-15",
    "judgmentDate": "2021-09-15",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Kerala Service Rules",
      "Article 309, Constitution of India"
    ],
    "summary": "Civil Litigation adjudication concerning Qualifying service, Ad-hoc tenure regularization, Article 309 service rules.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Kerala Service Rules.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Kerala Service Rules were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1401,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1031",
    "caseTitle": "Sood vs Oberoi Hotels Ltd",
    "caseNumber": "CIV/8217/2018",
    "court": "District Court, Jaipur",
    "category": "Civil Litigation",
    "keywords": [
      "quantum meruit",
      "oral contract proof",
      "limitation for services rendered",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Commercial dispute over recovery of consultancy charges and retainer fees for interior architecture.",
    "legalIssues": [
      "Quantum meruit",
      "Oral contract proof",
      "Limitation for services rendered"
    ],
    "filingDate": "2018-12-15",
    "disposalDate": "2019-02-18",
    "judgmentDate": "2019-02-18",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 70, Indian Contract Act 1872",
      "Article 18, Limitation Act 1963"
    ],
    "summary": "Civil Litigation adjudication concerning Quantum meruit, Oral contract proof, Limitation for services rendered.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 70, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 70, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 65,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1032",
    "caseTitle": "Bhardwaj vs Municipal Council Shimla",
    "caseNumber": "CIV/8224/2019",
    "court": "Supreme Court of India",
    "category": "Civil Litigation",
    "keywords": [
      "section 91 cpc leave",
      "right to clean environment",
      "mandatory injunction",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Public nuisance civil suit under Section 91 CPC for illegal dumping in eco-sensitive water catchment zone.",
    "legalIssues": [
      "Section 91 CPC leave",
      "Right to clean environment",
      "Mandatory injunction"
    ],
    "filingDate": "2019-01-16",
    "disposalDate": "2021-07-21",
    "judgmentDate": "2021-07-21",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 91, CPC 1908"
    ],
    "summary": "Civil Litigation adjudication concerning Section 91 CPC leave, Right to clean environment, Mandatory injunction.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 91, CPC 1908.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 91, CPC 1908 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 917,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1033",
    "caseTitle": "Hegde vs Mysore Urban Development Authority",
    "caseNumber": "CIV/8231/2020",
    "court": "Delhi High Court",
    "category": "Civil Litigation",
    "keywords": [
      "civic amenity lease",
      "public trust doctrine",
      "reasonable period of development",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to allotment cancellation of civic amenity site leased for hospital construction.",
    "legalIssues": [
      "Civic amenity lease",
      "Public trust doctrine",
      "Reasonable period of development"
    ],
    "filingDate": "2020-02-17",
    "disposalDate": "2023-12-24",
    "judgmentDate": "2023-12-24",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Karnataka Urban Development Authorities Act"
    ],
    "summary": "Civil Litigation adjudication concerning Civic amenity lease, Public trust doctrine, Reasonable period of development.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Karnataka Urban Development Authorities Act.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Karnataka Urban Development Authorities Act were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1406,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1034",
    "caseTitle": "Pandey vs Pandey",
    "caseNumber": "CIV/8238/2021",
    "court": "Bombay High Court",
    "category": "Civil Litigation",
    "keywords": [
      "mesne profits assessment",
      "ouster of co-owner",
      "order xx rule 12 cpc",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Mesne profits suit against co-owner retaining exclusive rental profits from commercial complex.",
    "legalIssues": [
      "Mesne profits assessment",
      "Ouster of co-owner",
      "Order XX Rule 12 CPC"
    ],
    "filingDate": "2021-03-18",
    "disposalDate": "2026-05-05",
    "judgmentDate": "2026-05-05",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 2(12) and Order XX Rule 12, CPC 1908"
    ],
    "summary": "Civil Litigation adjudication concerning Mesne profits assessment, Ouster of co-owner, Order XX Rule 12 CPC.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 2(12) and Order XX Rule 12, CPC 1908.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 2(12) and Order XX Rule 12, CPC 1908 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1874,
    "durationFormatted": "5 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1035",
    "caseTitle": "Goswami vs Star Broadcasting Ltd",
    "caseNumber": "CIV/8245/2022",
    "court": "Rajasthan High Court",
    "category": "Civil Litigation",
    "keywords": [
      "qualified privilege",
      "responsible journalism",
      "balance of free speech and reputation",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Civil defamation suit seeking damages for telecast of defamatory investigative sting operation.",
    "legalIssues": [
      "Qualified privilege",
      "Responsible journalism",
      "Balance of free speech and reputation"
    ],
    "filingDate": "2022-04-19",
    "disposalDate": "2023-10-08",
    "judgmentDate": "2023-10-08",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Defamation in Tort",
      "Article 19(1)(a) and 19(2), Constitution of India"
    ],
    "summary": "Civil Litigation adjudication concerning Qualified privilege, Responsible journalism, Balance of free speech and reputation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Defamation in Tort.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Defamation in Tort were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 537,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1036",
    "caseTitle": "Malhotra vs Malhotra",
    "caseNumber": "CIV/8252/2016",
    "court": "Allahabad High Court",
    "category": "Civil Litigation",
    "keywords": [
      "anti-suit injunction",
      "comity of courts",
      "forum non conveniens",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Restitution of conjugal rights and anti-suit injunction against foreign divorce proceedings in England.",
    "legalIssues": [
      "Anti-suit injunction",
      "Comity of courts",
      "Forum non conveniens"
    ],
    "filingDate": "2016-05-20",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 9, Hindu Marriage Act 1955",
      "Section 41, Specific Relief Act"
    ],
    "summary": "Civil Litigation adjudication concerning Anti-suit injunction, Comity of courts, Forum non conveniens.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 9, Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 9, Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1037",
    "caseTitle": "Rastogi vs State of UP",
    "caseNumber": "CIV/8259/2017",
    "court": "Madras High Court",
    "category": "Civil Litigation",
    "keywords": [
      "attachment without assessment",
      "coercive recovery",
      "quashing of recovery citation",
      "civil litigation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Suit against illegal attachment of manufacturing plant under UP Revenue Recovery Act for disputed trade tax.",
    "legalIssues": [
      "Attachment without assessment",
      "Coercive recovery",
      "Quashing of recovery citation"
    ],
    "filingDate": "2017-06-21",
    "disposalDate": "2021-08-14",
    "judgmentDate": "2021-08-14",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "UP Revenue Recovery Act 1890"
    ],
    "summary": "Civil Litigation adjudication concerning Attachment without assessment, Coercive recovery, Quashing of recovery citation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of UP Revenue Recovery Act 1890.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under UP Revenue Recovery Act 1890 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Civil Litigation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1515,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1038",
    "caseTitle": "State of Maharashtra vs Wagh",
    "caseNumber": "CRI/8266/2018",
    "court": "Karnataka High Court",
    "category": "Criminal Law",
    "keywords": [
      "demand and acceptance of bribe",
      "tainted currency recovery",
      "sanction under section 19 pc act",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Criminal appeal against acquittal in an anti-corruption trap case involving public servant.",
    "legalIssues": [
      "Demand and acceptance of bribe",
      "Tainted currency recovery",
      "Sanction under Section 19 PC Act"
    ],
    "filingDate": "2018-07-22",
    "disposalDate": "2019-01-17",
    "judgmentDate": "2019-01-17",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 7 and 13(1)(d), Prevention of Corruption Act 1988"
    ],
    "summary": "Criminal Law adjudication concerning Demand and acceptance of bribe, Tainted currency recovery, Sanction under Section 19 PC Act.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 7 and 13(1)(d), Prevention of Corruption Act 1988.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 7 and 13(1)(d), Prevention of Corruption Act 1988 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 179,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1039",
    "caseTitle": "Khan vs State of NCT of Delhi",
    "caseNumber": "CRI/8273/2019",
    "court": "Calcutta High Court",
    "category": "Criminal Law",
    "keywords": [
      "section 37 ndps embargo",
      "search compliance under section 50",
      "reasonable grounds for innocence",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Regular bail application in commercial quantity NDPS case under stringent Section 37 twin conditions.",
    "legalIssues": [
      "Section 37 NDPS embargo",
      "Search compliance under Section 50",
      "Reasonable grounds for innocence"
    ],
    "filingDate": "2019-08-23",
    "disposalDate": "2021-06-20",
    "judgmentDate": "2021-06-20",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 21(c) and 37, NDPS Act 1985"
    ],
    "summary": "Criminal Law adjudication concerning Section 37 NDPS embargo, Search compliance under Section 50, Reasonable grounds for innocence.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 21(c) and 37, NDPS Act 1985.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 21(c) and 37, NDPS Act 1985 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 667,
    "durationFormatted": "1 Year 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1040",
    "caseTitle": "Singh vs State of UP",
    "caseNumber": "CRI/8280/2020",
    "court": "Punjab & Haryana High Court",
    "category": "Criminal Law",
    "keywords": [
      "civil dispute disguised as criminal offense",
      "section 482 crpc inherent powers",
      "mens rea at inception",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Quashing of FIR under Section 482 CrPC in alleged cheating and criminal breach of trust in commercial deal.",
    "legalIssues": [
      "Civil dispute disguised as criminal offense",
      "Section 482 CrPC inherent powers",
      "Mens rea at inception"
    ],
    "filingDate": "2020-09-24",
    "disposalDate": "2023-11-23",
    "judgmentDate": "2023-11-23",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 406 and 420, IPC 1860",
      "Section 482, CrPC 1973"
    ],
    "summary": "Criminal Law adjudication concerning Civil dispute disguised as criminal offense, Section 482 CrPC inherent powers, Mens rea at inception.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 406 and 420, IPC 1860.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 406 and 420, IPC 1860 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1155,
    "durationFormatted": "3 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1041",
    "caseTitle": "Nambiar vs Central Bureau of Investigation",
    "caseNumber": "CRI/8287/2021",
    "court": "District Court, New Delhi",
    "category": "Criminal Law",
    "keywords": [
      "prima facie case at charge stage",
      "commercial misjudgment vs conspiracy",
      "discharge application",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to framing of charges in banking loan fraud and conspiracy allegations.",
    "legalIssues": [
      "Prima facie case at charge stage",
      "Commercial misjudgment vs conspiracy",
      "Discharge application"
    ],
    "filingDate": "2021-10-25",
    "disposalDate": "2026-04-26",
    "judgmentDate": "2026-04-26",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 120B and 420, IPC",
      "Section 227, CrPC"
    ],
    "summary": "Criminal Law adjudication concerning Prima facie case at charge stage, Commercial misjudgment vs conspiracy, Discharge application.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 120B and 420, IPC.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 120B and 420, IPC were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1644,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1042",
    "caseTitle": "Gowda vs State of Karnataka",
    "caseNumber": "CRI/8294/2022",
    "court": "City Civil Court, Mumbai",
    "category": "Criminal Law",
    "keywords": [
      "rebuttal of presumption under section 139",
      "legally enforceable debt",
      "standard of preponderance of probabilities",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Criminal revision against conviction under Section 138 Negotiable Instruments Act for cheque dishonour.",
    "legalIssues": [
      "Rebuttal of presumption under Section 139",
      "Legally enforceable debt",
      "Standard of preponderance of probabilities"
    ],
    "filingDate": "2022-11-26",
    "disposalDate": "2023-09-07",
    "judgmentDate": "2023-09-07",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 138 and 139, Negotiable Instruments Act 1881"
    ],
    "summary": "Criminal Law adjudication concerning Rebuttal of presumption under Section 139, Legally enforceable debt, Standard of preponderance of probabilities.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 138 and 139, Negotiable Instruments Act 1881.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 138 and 139, Negotiable Instruments Act 1881 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 285,
    "durationFormatted": "9 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1043",
    "caseTitle": "Tiwari vs State of MP",
    "caseNumber": "CRI/8301/2016",
    "court": "District Court, Jaipur",
    "category": "Criminal Law",
    "keywords": [
      "section 438 crpc parameters",
      "custodial interrogation necessity",
      "parity with co-accused",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Anticipatory bail in cross-FIR assault case involving agricultural boundary clash.",
    "legalIssues": [
      "Section 438 CrPC parameters",
      "Custodial interrogation necessity",
      "Parity with co-accused"
    ],
    "filingDate": "2016-12-27",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 438, CrPC 1973",
      "Section 307 and 326, IPC"
    ],
    "summary": "Criminal Law adjudication concerning Section 438 CrPC parameters, Custodial interrogation necessity, Parity with co-accused.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 438, CrPC 1973.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 438, CrPC 1973 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1044",
    "caseTitle": "Siddiqui vs State of Gujarat",
    "caseNumber": "CRI/8308/2017",
    "court": "Supreme Court of India",
    "category": "Criminal Law",
    "keywords": [
      "chain of circumstantial evidence",
      "last seen theory proximity",
      "corroboration requirement",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Appeal against conviction under Section 302 IPC based entirely on circumstantial evidence and last seen theory.",
    "legalIssues": [
      "Chain of circumstantial evidence",
      "Last seen theory proximity",
      "Corroboration requirement"
    ],
    "filingDate": "2017-01-10",
    "disposalDate": "2021-07-13",
    "judgmentDate": "2021-07-13",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 302, IPC 1860",
      "Section 3, Evidence Act"
    ],
    "summary": "Criminal Law adjudication concerning Chain of circumstantial evidence, Last seen theory proximity, Corroboration requirement.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 302, IPC 1860.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 302, IPC 1860 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1645,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1045",
    "caseTitle": "Pawar vs State of Maharashtra",
    "caseNumber": "CRI/8315/2018",
    "court": "Delhi High Court",
    "category": "Criminal Law",
    "keywords": [
      "hostile witness testimony",
      "statutory presumption under section 29 pocso",
      "proof beyond reasonable doubt",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Criminal appeal challenging conviction under POCSO Act with host of hostile prosecution witnesses.",
    "legalIssues": [
      "Hostile witness testimony",
      "Statutory presumption under Section 29 POCSO",
      "Proof beyond reasonable doubt"
    ],
    "filingDate": "2018-02-11",
    "disposalDate": "2018-12-16",
    "judgmentDate": "2018-12-16",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 4 and 6, POCSO Act 2012"
    ],
    "summary": "Criminal Law adjudication concerning Hostile witness testimony, Statutory presumption under Section 29 POCSO, Proof beyond reasonable doubt.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 4 and 6, POCSO Act 2012.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 4 and 6, POCSO Act 2012 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 308,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1046",
    "caseTitle": "Datta vs State of West Bengal",
    "caseNumber": "CRI/8322/2019",
    "court": "Bombay High Court",
    "category": "Criminal Law",
    "keywords": [
      "right to speedy trial article 21",
      "prolonged incarceration vs statutory bail bar",
      "k.a. najeeb doctrine",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Bail petition after 3 years incarceration without commencement of prosecution evidence in UAPA matter.",
    "legalIssues": [
      "Right to speedy trial Article 21",
      "Prolonged incarceration vs statutory bail bar",
      "K.A. Najeeb doctrine"
    ],
    "filingDate": "2019-03-12",
    "disposalDate": "2021-05-19",
    "judgmentDate": "2021-05-19",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 43D(5), UAPA 1967",
      "Article 21, Constitution of India"
    ],
    "summary": "Criminal Law adjudication concerning Right to speedy trial Article 21, Prolonged incarceration vs statutory bail bar, K.A. Najeeb doctrine.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 43D(5), UAPA 1967.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 43D(5), UAPA 1967 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 799,
    "durationFormatted": "2 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1047",
    "caseTitle": "Rathore vs State of Rajasthan",
    "caseNumber": "CRI/8329/2020",
    "court": "Rajasthan High Court",
    "category": "Criminal Law",
    "keywords": [
      "magistrate's power on closure report",
      "directing further investigation",
      "section 173(8) crpc",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Crl Revision questioning dismissal of protest petition against CBI closure report in suspicious death case.",
    "legalIssues": [
      "Magistrate's power on closure report",
      "Directing further investigation",
      "Section 173(8) CrPC"
    ],
    "filingDate": "2020-04-13",
    "disposalDate": "2023-10-22",
    "judgmentDate": "2023-10-22",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 173(8) and 190, CrPC 1973"
    ],
    "summary": "Criminal Law adjudication concerning Magistrate's power on closure report, Directing further investigation, Section 173(8) CrPC.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 173(8) and 190, CrPC 1973.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 173(8) and 190, CrPC 1973 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1287,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1048",
    "caseTitle": "Gaikwad vs State of Goa",
    "caseNumber": "CRI/8336/2021",
    "court": "Allahabad High Court",
    "category": "Criminal Law",
    "keywords": [
      "absence of independent search witness",
      "sealing and sampling procedure",
      "standing instruction compliance",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Appeal against conviction in narcotics seizure on beach premises with absence of independent panchas.",
    "legalIssues": [
      "Absence of independent search witness",
      "Sealing and sampling procedure",
      "Standing instruction compliance"
    ],
    "filingDate": "2021-05-14",
    "disposalDate": "2026-03-25",
    "judgmentDate": "2026-03-25",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 20(b), NDPS Act 1985"
    ],
    "summary": "Criminal Law adjudication concerning Absence of independent search witness, Sealing and sampling procedure, Standing instruction compliance.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 20(b), NDPS Act 1985.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 20(b), NDPS Act 1985 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1776,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1049",
    "caseTitle": "Chhabra vs State of Haryana",
    "caseNumber": "CRI/8343/2022",
    "court": "Madras High Court",
    "category": "Criminal Law",
    "keywords": [
      "quashing matrimonial disputes on settlement",
      "abuse of criminal process",
      "gian singh guidelines",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Petition for quashing proceedings under Section 498A IPC filed during pendency of mutual divorce settlement.",
    "legalIssues": [
      "Quashing matrimonial disputes on settlement",
      "Abuse of criminal process",
      "Gian Singh guidelines"
    ],
    "filingDate": "2022-06-15",
    "disposalDate": "2023-08-06",
    "judgmentDate": "2023-08-06",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 498A, IPC",
      "Section 482, CrPC"
    ],
    "summary": "Criminal Law adjudication concerning Quashing matrimonial disputes on settlement, Abuse of criminal process, Gian Singh guidelines.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 498A, IPC.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 498A, IPC were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 417,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1050",
    "caseTitle": "Prasad vs Enforcement Directorate",
    "caseNumber": "CRI/8350/2016",
    "court": "Karnataka High Court",
    "category": "Criminal Law",
    "keywords": [
      "section 45 pmla twin conditions",
      "predicate offense nexus",
      "proceeds of crime identification",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Regular bail under PMLA in money laundering complaint involving shell corporations.",
    "legalIssues": [
      "Section 45 PMLA twin conditions",
      "Predicate offense nexus",
      "Proceeds of crime identification"
    ],
    "filingDate": "2016-07-16",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 3, 4 and 45, PMLA 2002"
    ],
    "summary": "Criminal Law adjudication concerning Section 45 PMLA twin conditions, Predicate offense nexus, Proceeds of crime identification.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 3, 4 and 45, PMLA 2002.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 3, 4 and 45, PMLA 2002 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1051",
    "caseTitle": "Murugan vs State of Tamil Nadu",
    "caseNumber": "CRI/8357/2017",
    "court": "Calcutta High Court",
    "category": "Criminal Law",
    "keywords": [
      "inquiry into juvenility claim",
      "retrospective benefit of jj act",
      "ossification test",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Juvenility plea raised for the first time in criminal appeal before the High Court.",
    "legalIssues": [
      "Inquiry into juvenility claim",
      "Retrospective benefit of JJ Act",
      "Ossification test"
    ],
    "filingDate": "2017-08-17",
    "disposalDate": "2021-06-12",
    "judgmentDate": "2021-06-12",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Juvenile Justice (Care & Protection) Act 2015",
      "Section 94 JJ Act"
    ],
    "summary": "Criminal Law adjudication concerning Inquiry into juvenility claim, Retrospective benefit of JJ Act, Ossification test.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Juvenile Justice (Care & Protection) Act 2015.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Juvenile Justice (Care & Protection) Act 2015 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1395,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1052",
    "caseTitle": "Thakur vs State of HP",
    "caseNumber": "CRI/8364/2018",
    "court": "Punjab & Haryana High Court",
    "category": "Criminal Law",
    "keywords": [
      "reliability of dying declaration",
      "cruelty in connection with dowry demand soon before death",
      "section 113b evidence act presumption",
      "criminal law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Criminal appeal against conviction under Section 304B IPC (Dowry Death) based on dying declaration.",
    "legalIssues": [
      "Reliability of dying declaration",
      "Cruelty in connection with dowry demand soon before death",
      "Section 113B Evidence Act presumption"
    ],
    "filingDate": "2018-09-18",
    "disposalDate": "2018-11-15",
    "judgmentDate": "2018-11-15",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 304B and 498A, IPC",
      "Section 113B, Evidence Act"
    ],
    "summary": "Criminal Law adjudication concerning Reliability of dying declaration, Cruelty in connection with dowry demand soon before death, Section 113B Evidence Act presumption.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 304B and 498A, IPC.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 304B and 498A, IPC were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Criminal Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 58,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1053",
    "caseTitle": "Bansal vs Bansal",
    "caseNumber": "FAM/8371/2019",
    "court": "District Court, New Delhi",
    "category": "Family Law",
    "keywords": [
      "mental cruelty definition",
      "irretrievable breakdown of marriage",
      "section 13(1)(ia) hma",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Petition for dissolution of marriage on ground of mental cruelty and desertion for over 7 years.",
    "legalIssues": [
      "Mental cruelty definition",
      "Irretrievable breakdown of marriage",
      "Section 13(1)(ia) HMA"
    ],
    "filingDate": "2019-10-19",
    "disposalDate": "2021-04-18",
    "judgmentDate": "2021-04-18",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 13(1)(ia) and (ib), Hindu Marriage Act 1955"
    ],
    "summary": "Family Law adjudication concerning Mental cruelty definition, Irretrievable breakdown of marriage, Section 13(1)(ia) HMA.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 13(1)(ia) and (ib), Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 13(1)(ia) and (ib), Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 547,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1054",
    "caseTitle": "Fernandes vs Fernandes",
    "caseNumber": "FAM/8378/2020",
    "court": "City Civil Court, Mumbai",
    "category": "Family Law",
    "keywords": [
      "welfare of the child paramount",
      "shared parenting",
      "intercountry custody protocol",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Custody dispute regarding 6-year-old child between resident mother and NRI father.",
    "legalIssues": [
      "Welfare of the child paramount",
      "Shared parenting",
      "Intercountry custody protocol"
    ],
    "filingDate": "2020-11-20",
    "disposalDate": "2023-09-21",
    "judgmentDate": "2023-09-21",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Guardians and Wards Act 1890",
      "Section 26, Hindu Marriage Act"
    ],
    "summary": "Family Law adjudication concerning Welfare of the child paramount, Shared parenting, Intercountry custody protocol.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Guardians and Wards Act 1890.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Guardians and Wards Act 1890 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1035,
    "durationFormatted": "2 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1055",
    "caseTitle": "Kulkarni vs Kulkarni",
    "caseNumber": "FAM/8385/2021",
    "court": "District Court, Jaipur",
    "category": "Family Law",
    "keywords": [
      "income affidavit disclosure",
      "standard of living parity",
      "rajnesh vs neha guidelines",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Interim maintenance enhancement application under Section 125 CrPC considering spouse's true corporate earnings.",
    "legalIssues": [
      "Income affidavit disclosure",
      "Standard of living parity",
      "Rajnesh vs Neha guidelines"
    ],
    "filingDate": "2021-12-21",
    "disposalDate": "2026-02-24",
    "judgmentDate": "2026-02-24",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 125, CrPC 1973",
      "Section 24, Hindu Marriage Act"
    ],
    "summary": "Family Law adjudication concerning Income affidavit disclosure, Standard of living parity, Rajnesh vs Neha guidelines.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 125, CrPC 1973.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 125, CrPC 1973 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1526,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1056",
    "caseTitle": "Qureshi vs Qureshi",
    "caseNumber": "FAM/8392/2022",
    "court": "Supreme Court of India",
    "category": "Family Law",
    "keywords": [
      "payment of prompt vs deferred mahr",
      "reasonable and fair provision",
      "section 3 muslim women act",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Wife's petition for recovery of unpaid Mahr and maintenance under Muslim Women Protection Act.",
    "legalIssues": [
      "Payment of prompt vs deferred Mahr",
      "Reasonable and fair provision",
      "Section 3 Muslim Women Act"
    ],
    "filingDate": "2022-01-22",
    "disposalDate": "2023-07-05",
    "judgmentDate": "2023-07-05",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Muslim Women (Protection of Rights on Divorce) Act 1986"
    ],
    "summary": "Family Law adjudication concerning Payment of prompt vs deferred Mahr, Reasonable and fair provision, Section 3 Muslim Women Act.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Muslim Women (Protection of Rights on Divorce) Act 1986.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Muslim Women (Protection of Rights on Divorce) Act 1986 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 529,
    "durationFormatted": "1 Year 5 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1057",
    "caseTitle": "Ranganathan vs Ranganathan",
    "caseNumber": "FAM/8399/2016",
    "court": "Delhi High Court",
    "category": "Family Law",
    "keywords": [
      "fraudulent consent to marriage",
      "mental fitness for marriage",
      "section 12(1)(c) hma",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Annulment of marriage on ground of concealment of pre-existing severe psychiatric disorder.",
    "legalIssues": [
      "Fraudulent consent to marriage",
      "Mental fitness for marriage",
      "Section 12(1)(c) HMA"
    ],
    "filingDate": "2016-02-23",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 5(ii) and 12(1)(c), Hindu Marriage Act 1955"
    ],
    "summary": "Family Law adjudication concerning Fraudulent consent to marriage, Mental fitness for marriage, Section 12(1)(c) HMA.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 5(ii) and 12(1)(c), Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 5(ii) and 12(1)(c), Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1058",
    "caseTitle": "Khatun vs State of Bihar",
    "caseNumber": "FAM/8406/2017",
    "court": "Bombay High Court",
    "category": "Family Law",
    "keywords": [
      "shared household right",
      "domestic violence definition",
      "satish chander ahuja precedent",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Application for shared household rights under Domestic Violence Act against in-laws.",
    "legalIssues": [
      "Shared household right",
      "Domestic violence definition",
      "Satish Chander Ahuja precedent"
    ],
    "filingDate": "2017-03-24",
    "disposalDate": "2021-05-11",
    "judgmentDate": "2021-05-11",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 17 and 19, Protection of Women from Domestic Violence Act 2005"
    ],
    "summary": "Family Law adjudication concerning Shared household right, Domestic violence definition, Satish Chander Ahuja precedent.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 17 and 19, Protection of Women from Domestic Violence Act 2005.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 17 and 19, Protection of Women from Domestic Violence Act 2005 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1509,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1059",
    "caseTitle": "Anand vs Anand",
    "caseNumber": "FAM/8413/2018",
    "court": "Rajasthan High Court",
    "category": "Family Law",
    "keywords": [
      "section 13b(2) waiver",
      "amardeep singh guidelines",
      "irretrievable marital separation",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Waiver of 6-month statutory cooling-off period in mutual consent divorce under Section 13B(2) HMA.",
    "legalIssues": [
      "Section 13B(2) waiver",
      "Amardeep Singh guidelines",
      "Irretrievable marital separation"
    ],
    "filingDate": "2018-04-25",
    "disposalDate": "2018-10-14",
    "judgmentDate": "2018-10-14",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 13B, Hindu Marriage Act 1955"
    ],
    "summary": "Family Law adjudication concerning Section 13B(2) waiver, Amardeep Singh guidelines, Irretrievable marital separation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 13B, Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 13B, Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 172,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1060",
    "caseTitle": "Singhania vs Singhania",
    "caseNumber": "FAM/8420/2019",
    "court": "Allahabad High Court",
    "category": "Family Law",
    "keywords": [
      "permanent alimony quantification",
      "spouse's contribution to marital estate",
      "section 25 hma",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Division of matrimonial assets and permanent alimony settlement in high-net-worth divorce.",
    "legalIssues": [
      "Permanent alimony quantification",
      "Spouse's contribution to marital estate",
      "Section 25 HMA"
    ],
    "filingDate": "2019-05-26",
    "disposalDate": "2021-03-17",
    "judgmentDate": "2021-03-17",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 25, Hindu Marriage Act 1955"
    ],
    "summary": "Family Law adjudication concerning Permanent alimony quantification, Spouse's contribution to marital estate, Section 25 HMA.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 25, Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 25, Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 661,
    "durationFormatted": "1 Year 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1061",
    "caseTitle": "George vs George",
    "caseNumber": "FAM/8427/2020",
    "court": "Madras High Court",
    "category": "Family Law",
    "keywords": [
      "standard of proof for matrimonial offense",
      "section 10 indian divorce act",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Divorce petition under Indian Divorce Act on ground of persistent adultery and cruelty.",
    "legalIssues": [
      "Standard of proof for matrimonial offense",
      "Section 10 Indian Divorce Act"
    ],
    "filingDate": "2020-06-27",
    "disposalDate": "2023-08-20",
    "judgmentDate": "2023-08-20",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 10, Indian Divorce Act 1869"
    ],
    "summary": "Family Law adjudication concerning Standard of proof for matrimonial offense, Section 10 Indian Divorce Act.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 10, Indian Divorce Act 1869.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 10, Indian Divorce Act 1869 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1149,
    "durationFormatted": "3 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1062",
    "caseTitle": "Srinivasan vs Srinivasan",
    "caseNumber": "FAM/8434/2021",
    "court": "Karnataka High Court",
    "category": "Family Law",
    "keywords": [
      "reasonable excuse to withdraw from society",
      "burden of proof under section 9",
      "judicial separation",
      "family law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Restitution of conjugal rights contested with counter-claim for judicial separation.",
    "legalIssues": [
      "Reasonable excuse to withdraw from society",
      "Burden of proof under Section 9",
      "Judicial separation"
    ],
    "filingDate": "2021-07-10",
    "disposalDate": "2026-01-23",
    "judgmentDate": "2026-01-23",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 9 and 10, Hindu Marriage Act 1955"
    ],
    "summary": "Family Law adjudication concerning Reasonable excuse to withdraw from society, Burden of proof under Section 9, Judicial separation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 9 and 10, Hindu Marriage Act 1955.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 9 and 10, Hindu Marriage Act 1955 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Family Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1658,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1063",
    "caseTitle": "Sterling Agro Foods vs Northern Cold Storage Ltd",
    "caseNumber": "CON/8441/2022",
    "court": "Calcutta High Court",
    "category": "Contract Dispute",
    "keywords": [
      "bailee's duty of care",
      "exclusion clause validity",
      "section 151 contract act",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Dispute regarding perishables spoilage due to continuous power failure and lack of backup genset.",
    "legalIssues": [
      "Bailee's duty of care",
      "Exclusion clause validity",
      "Section 151 Contract Act"
    ],
    "filingDate": "2022-08-11",
    "disposalDate": "2023-06-26",
    "judgmentDate": "2023-06-26",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 151 and 152, Indian Contract Act 1872"
    ],
    "summary": "Contract Dispute adjudication concerning Bailee's duty of care, Exclusion clause validity, Section 151 Contract Act.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 151 and 152, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 151 and 152, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 319,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1064",
    "caseTitle": "Zenith EPC Projects vs Bharat Petroleum Corp",
    "caseNumber": "CON/8448/2016",
    "court": "Punjab & Haryana High Court",
    "category": "Contract Dispute",
    "keywords": [
      "price escalation formula",
      "force majeure in commercial difficulty",
      "energy and commodity surge",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Arbitral challenge regarding price escalation reimbursement for steep global steel price hike.",
    "legalIssues": [
      "Price escalation formula",
      "Force majeure in commercial difficulty",
      "Energy and commodity surge"
    ],
    "filingDate": "2016-09-12",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 56, Indian Contract Act 1872",
      "Section 34, Arbitration Act"
    ],
    "summary": "Contract Dispute adjudication concerning Price escalation formula, Force majeure in commercial difficulty, Energy and commodity surge.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 56, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 56, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1065",
    "caseTitle": "Apex Logistics vs TransIndia Logistics Ltd",
    "caseNumber": "CON/8455/2017",
    "court": "District Court, New Delhi",
    "category": "Contract Dispute",
    "keywords": [
      "lien on cargo",
      "demurrage liability",
      "multi-modal transport terms",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Suit for outstanding freight charges and demurrage fees withheld over container detention.",
    "legalIssues": [
      "Lien on cargo",
      "Demurrage liability",
      "Multi-modal transport terms"
    ],
    "filingDate": "2017-10-13",
    "disposalDate": "2021-04-10",
    "judgmentDate": "2021-04-10",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Multimodal Transportation of Goods Act 1993",
      "Section 170 Contract Act"
    ],
    "summary": "Contract Dispute adjudication concerning Lien on cargo, Demurrage liability, Multi-modal transport terms.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Multimodal Transportation of Goods Act 1993.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Multimodal Transportation of Goods Act 1993 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1275,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1066",
    "caseTitle": "Aura Media Works vs CineVision Studios",
    "caseNumber": "CON/8462/2018",
    "court": "City Civil Court, Mumbai",
    "category": "Contract Dispute",
    "keywords": [
      "section 27 restraint of trade",
      "negative covenant during contract vs post-term",
      "specific performance of personal service",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Injunction suit enforcing non-compete negative covenant against lead film director.",
    "legalIssues": [
      "Section 27 restraint of trade",
      "Negative covenant during contract vs post-term",
      "Specific performance of personal service"
    ],
    "filingDate": "2018-11-14",
    "disposalDate": "2018-09-13",
    "judgmentDate": "2018-09-13",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 27, Indian Contract Act 1872",
      "Section 14, Specific Relief Act"
    ],
    "summary": "Contract Dispute adjudication concerning Section 27 restraint of trade, Negative covenant during contract vs post-term, Specific performance of personal service.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 27, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 27, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 0,
    "durationFormatted": "0 Days",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1067",
    "caseTitle": "Greenfield Solar Power vs DISCOM Rajasthan",
    "caseNumber": "CON/8469/2019",
    "court": "District Court, Jaipur",
    "category": "Contract Dispute",
    "keywords": [
      "power purchase agreement (ppa) breach",
      "deemed generation payment",
      "regulatory commission jurisdiction",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Dispute over deemed generation compensation due to grid curtailment during peak solar irradiance.",
    "legalIssues": [
      "Power Purchase Agreement (PPA) breach",
      "Deemed generation payment",
      "Regulatory commission jurisdiction"
    ],
    "filingDate": "2019-12-15",
    "disposalDate": "2021-02-16",
    "judgmentDate": "2021-02-16",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Electricity Act 2003",
      "Section 73, Indian Contract Act"
    ],
    "summary": "Contract Dispute adjudication concerning Power Purchase Agreement (PPA) breach, Deemed generation payment, Regulatory commission jurisdiction.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Electricity Act 2003.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Electricity Act 2003 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 429,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1068",
    "caseTitle": "Vanguard Marine vs Cochin Shipyard",
    "caseNumber": "CON/8476/2020",
    "court": "Supreme Court of India",
    "category": "Contract Dispute",
    "keywords": [
      "latent defect warranty",
      "notice of breach within warranty period",
      "sale of goods inspection",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Defect liability claim for drydock overhaul repairs and structural warranty violations.",
    "legalIssues": [
      "Latent defect warranty",
      "Notice of breach within warranty period",
      "Sale of goods inspection"
    ],
    "filingDate": "2020-01-16",
    "disposalDate": "2023-07-19",
    "judgmentDate": "2023-07-19",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 40 and 42, Sale of Goods Act 1930"
    ],
    "summary": "Contract Dispute adjudication concerning Latent defect warranty, Notice of breach within warranty period, Sale of goods inspection.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 40 and 42, Sale of Goods Act 1930.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 40 and 42, Sale of Goods Act 1930 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1280,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1069",
    "caseTitle": "Titan Engineering vs Metro Rail Corporation",
    "caseNumber": "CON/8483/2021",
    "court": "Delhi High Court",
    "category": "Contract Dispute",
    "keywords": [
      "wrongful termination",
      "invocation of performance security",
      "time extension claims",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Termination of signalling contract due to alleged performance milestones slippage.",
    "legalIssues": [
      "Wrongful termination",
      "Invocation of performance security",
      "Time extension claims"
    ],
    "filingDate": "2021-02-17",
    "disposalDate": "2025-12-22",
    "judgmentDate": "2025-12-22",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 39, Indian Contract Act 1872",
      "Section 9, Arbitration Act"
    ],
    "summary": "Contract Dispute adjudication concerning Wrongful termination, Invocation of performance security, Time extension claims.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 39, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 39, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1769,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1070",
    "caseTitle": "Kalyan Jewellers Franchisee vs Kalyan Group",
    "caseNumber": "CON/8490/2022",
    "court": "Bombay High Court",
    "category": "Contract Dispute",
    "keywords": [
      "franchise covenants",
      "misrepresentation at contracting",
      "commercial breach remedies",
      "contract dispute",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Franchise agreement dispute regarding minimum assured return and territorial exclusivity.",
    "legalIssues": [
      "Franchise covenants",
      "Misrepresentation at contracting",
      "Commercial breach remedies"
    ],
    "filingDate": "2022-03-18",
    "disposalDate": "2023-05-25",
    "judgmentDate": "2023-05-25",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 18 and 19, Indian Contract Act 1872"
    ],
    "summary": "Contract Dispute adjudication concerning Franchise covenants, Misrepresentation at contracting, Commercial breach remedies.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 18 and 19, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 18 and 19, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Contract Dispute.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 433,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1071",
    "caseTitle": "Narang vs Prestige City Real Estate Ltd",
    "caseNumber": "CON/8497/2016",
    "court": "Rajasthan High Court",
    "category": "Consumer Protection",
    "keywords": [
      "builder buyer agreement delay",
      "refund with interest vs delayed possession penalty",
      "unfair trade practice",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Delay of 5 years in handing over possession of luxury residential apartment with demand for refund.",
    "legalIssues": [
      "Builder buyer agreement delay",
      "Refund with interest vs delayed possession penalty",
      "Unfair trade practice"
    ],
    "filingDate": "2016-04-19",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 2(47) and 35, Consumer Protection Act 2019",
      "RERA Section 18"
    ],
    "summary": "Consumer Protection adjudication concerning Builder buyer agreement delay, Refund with interest vs delayed possession penalty, Unfair trade practice.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 2(47) and 35, Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 2(47) and 35, Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1072",
    "caseTitle": "Bose vs Star Health Insurance Co",
    "caseNumber": "CON/8504/2017",
    "court": "Allahabad High Court",
    "category": "Consumer Protection",
    "keywords": [
      "repudiation of health insurance",
      "duty of utmost good faith (uberrimae fidei)",
      "nexus between lifestyle ailment and surgical cause",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Repudiation of medical reimbursement claim on ground of non-disclosure of pre-existing hypertension.",
    "legalIssues": [
      "Repudiation of health insurance",
      "Duty of utmost good faith (Uberrimae fidei)",
      "Nexus between lifestyle ailment and surgical cause"
    ],
    "filingDate": "2017-05-20",
    "disposalDate": "2021-03-09",
    "judgmentDate": "2021-03-09",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Insurance Act 1938",
      "Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication concerning Repudiation of health insurance, Duty of utmost good faith (Uberrimae fidei), Nexus between lifestyle ailment and surgical cause.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Insurance Act 1938.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Insurance Act 1938 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1389,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1073",
    "caseTitle": "Seth vs Air India Express",
    "caseNumber": "CON/8511/2018",
    "court": "Madras High Court",
    "category": "Consumer Protection",
    "keywords": [
      "airline passenger charter",
      "deficiency in service",
      "consequential damages",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Compensation claim for cancelled international flight resulting in lost business conference and hotel forfeiture.",
    "legalIssues": [
      "Airline passenger charter",
      "Deficiency in service",
      "Consequential damages"
    ],
    "filingDate": "2018-06-21",
    "disposalDate": "2018-08-12",
    "judgmentDate": "2018-08-12",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Carriage by Air Act 1972",
      "DGCA Passenger Guidelines"
    ],
    "summary": "Consumer Protection adjudication concerning Airline passenger charter, Deficiency in service, Consequential damages.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Carriage by Air Act 1972.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Carriage by Air Act 1972 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 52,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1074",
    "caseTitle": "Merchant vs Samsung Electronics India",
    "caseNumber": "CON/8518/2019",
    "court": "Karnataka High Court",
    "category": "Consumer Protection",
    "keywords": [
      "product liability action",
      "consumer warranty enforcement",
      "manufacturing defect replacement",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Product liability claim against manufacturer for defective OLED panel with dead pixels.",
    "legalIssues": [
      "Product liability action",
      "Consumer warranty enforcement",
      "Manufacturing defect replacement"
    ],
    "filingDate": "2019-07-22",
    "disposalDate": "2021-01-15",
    "judgmentDate": "2021-01-15",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 82 to 87, Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication concerning Product liability action, Consumer warranty enforcement, Manufacturing defect replacement.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 82 to 87, Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 82 to 87, Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 543,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1075",
    "caseTitle": "Bhattacharya vs Max Super Specialty Hospital",
    "caseNumber": "CON/8525/2020",
    "court": "Calcutta High Court",
    "category": "Consumer Protection",
    "keywords": [
      "res ipsa loquitur",
      "hospital vicarious liability",
      "consumer protection jurisdiction for medical services",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Deficiency of service and hospital negligence claim for retained surgical swab during laparoscopy.",
    "legalIssues": [
      "Res ipsa loquitur",
      "Hospital vicarious liability",
      "Consumer protection jurisdiction for medical services"
    ],
    "filingDate": "2020-08-23",
    "disposalDate": "2023-06-18",
    "judgmentDate": "2023-06-18",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 2(42), Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication concerning Res ipsa loquitur, Hospital vicarious liability, Consumer protection jurisdiction for medical services.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 2(42), Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 2(42), Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1029,
    "durationFormatted": "2 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1076",
    "caseTitle": "Khurana vs Amazon India Ltd",
    "caseNumber": "CON/8532/2021",
    "court": "Punjab & Haryana High Court",
    "category": "Consumer Protection",
    "keywords": [
      "intermediary safe harbor vs consumer marketplace accountability",
      "e-commerce rules 2020",
      "unfair trade practices",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "E-commerce platform liability for fake counterfeit luxury watch shipped by third-party marketplace seller.",
    "legalIssues": [
      "Intermediary safe harbor vs consumer marketplace accountability",
      "E-commerce rules 2020",
      "Unfair trade practices"
    ],
    "filingDate": "2021-09-24",
    "disposalDate": "2025-11-21",
    "judgmentDate": "2025-11-21",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Consumer Protection (E-Commerce) Rules 2020",
      "Section 79, IT Act 2000"
    ],
    "summary": "Consumer Protection adjudication concerning Intermediary safe harbor vs consumer marketplace accountability, E-commerce rules 2020, Unfair trade practices.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Consumer Protection (E-Commerce) Rules 2020.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Consumer Protection (E-Commerce) Rules 2020 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1519,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1077",
    "caseTitle": "Venkatesh vs HDFC Bank Ltd",
    "caseNumber": "CON/8539/2022",
    "court": "District Court, New Delhi",
    "category": "Consumer Protection",
    "keywords": [
      "rbi zero customer liability circular",
      "cyber fraud reporting timeline",
      "bank deficiency in service",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Unauthorized credit card transactions after immediate notification of lost card to customer care.",
    "legalIssues": [
      "RBI zero customer liability circular",
      "Cyber fraud reporting timeline",
      "Bank deficiency in service"
    ],
    "filingDate": "2022-10-25",
    "disposalDate": "2023-04-24",
    "judgmentDate": "2023-04-24",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "RBI Circular on Customer Protection in Electronic Banking",
      "Consumer Protection Act"
    ],
    "summary": "Consumer Protection adjudication concerning RBI zero customer liability circular, Cyber fraud reporting timeline, Bank deficiency in service.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of RBI Circular on Customer Protection in Electronic Banking.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under RBI Circular on Customer Protection in Electronic Banking were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 181,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1078",
    "caseTitle": "Sharma vs Asian Paints Home Solutions",
    "caseNumber": "CON/8546/2016",
    "court": "City Civil Court, Mumbai",
    "category": "Consumer Protection",
    "keywords": [
      "service warranty",
      "consumer court compensation for mental agony",
      "independent expert analysis",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Deficiency claim for peeling exterior waterproofing within six months of costly turnkey project.",
    "legalIssues": [
      "Service warranty",
      "Consumer court compensation for mental agony",
      "Independent expert analysis"
    ],
    "filingDate": "2016-11-26",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 38, Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication concerning Service warranty, Consumer court compensation for mental agony, Independent expert analysis.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 38, Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 38, Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1079",
    "caseTitle": "Deshpande vs BYJU'S Learning App",
    "caseNumber": "CON/8553/2017",
    "court": "District Court, Jaipur",
    "category": "Consumer Protection",
    "keywords": [
      "unfair trade practices in edtech",
      "forfeiture of advance subscription fee",
      "misleading advertising",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Complaint seeking refund of multi-year tuition subscription cancelled within cooling-off trial period.",
    "legalIssues": [
      "Unfair trade practices in edtech",
      "Forfeiture of advance subscription fee",
      "Misleading advertising"
    ],
    "filingDate": "2017-12-27",
    "disposalDate": "2021-02-08",
    "judgmentDate": "2021-02-08",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Consumer Protection Act 2019",
      "CCPA Guidelines"
    ],
    "summary": "Consumer Protection adjudication concerning Unfair trade practices in edtech, Forfeiture of advance subscription fee, Misleading advertising.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1139,
    "durationFormatted": "3 Years 1 Month",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1080",
    "caseTitle": "Mukund vs Honda Cars India Ltd",
    "caseNumber": "CON/8560/2018",
    "court": "Supreme Court of India",
    "category": "Consumer Protection",
    "keywords": [
      "lemon car remedy",
      "defect in goods",
      "replacement of vehicle vs refund",
      "consumer protection",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Repeated transmission failure in brand new vehicle within 10,000 kilometers running.",
    "legalIssues": [
      "Lemon car remedy",
      "Defect in goods",
      "Replacement of vehicle vs refund"
    ],
    "filingDate": "2018-01-10",
    "disposalDate": "2018-07-11",
    "judgmentDate": "2018-07-11",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 39, Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication concerning Lemon car remedy, Defect in goods, Replacement of vehicle vs refund.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 39, Consumer Protection Act 2019.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 39, Consumer Protection Act 2019 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Consumer Protection.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 182,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1081",
    "caseTitle": "Chopra vs Wipro Technologies Ltd",
    "caseNumber": "EMP/8567/2019",
    "court": "Delhi High Court",
    "category": "Employment Law",
    "keywords": [
      "principles of natural justice in termination",
      "stigmatic termination",
      "enquiry necessity",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to termination of employment without conducting domestic inquiry on alleged breach of code of conduct.",
    "legalIssues": [
      "Principles of natural justice in termination",
      "Stigmatic termination",
      "Enquiry necessity"
    ],
    "filingDate": "2019-02-11",
    "disposalDate": "2020-12-14",
    "judgmentDate": "2020-12-14",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Industrial Employment (Standing Orders) Act 1946",
      "Article 226"
    ],
    "summary": "Employment Law adjudication concerning Principles of natural justice in termination, Stigmatic termination, Enquiry necessity.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Industrial Employment (Standing Orders) Act 1946.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Industrial Employment (Standing Orders) Act 1946 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 672,
    "durationFormatted": "1 Year 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1082",
    "caseTitle": "Subramanian vs Indian Oil Corporation Ltd",
    "caseNumber": "EMP/8574/2020",
    "court": "Bombay High Court",
    "category": "Employment Law",
    "keywords": [
      "compassionate appointment scheme",
      "financial destitution criteria",
      "no vested right doctrine",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Denial of compassionate appointment to dependent son following employee's demise during service.",
    "legalIssues": [
      "Compassionate appointment scheme",
      "Financial destitution criteria",
      "No vested right doctrine"
    ],
    "filingDate": "2020-03-12",
    "disposalDate": "2023-05-17",
    "judgmentDate": "2023-05-17",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Article 14 and 16, Constitution of India"
    ],
    "summary": "Employment Law adjudication concerning Compassionate appointment scheme, Financial destitution criteria, No vested right doctrine.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 14 and 16, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 14 and 16, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1161,
    "durationFormatted": "3 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1083",
    "caseTitle": "Rai vs State Bank of India",
    "caseNumber": "EMP/8581/2021",
    "court": "Rajasthan High Court",
    "category": "Employment Law",
    "keywords": [
      "proportionality of penalty",
      "standard of proof in departmental inquiry",
      "wednesbury unreasonableness",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Disciplinary proceedings challenging compulsory retirement penalty for administrative lapses.",
    "legalIssues": [
      "Proportionality of penalty",
      "Standard of proof in departmental inquiry",
      "Wednesbury unreasonableness"
    ],
    "filingDate": "2021-04-13",
    "disposalDate": "2025-10-20",
    "judgmentDate": "2025-10-20",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "SBI Employees Service Rules",
      "Article 311, Constitution"
    ],
    "summary": "Employment Law adjudication concerning Proportionality of penalty, Standard of proof in departmental inquiry, Wednesbury unreasonableness.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of SBI Employees Service Rules.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under SBI Employees Service Rules were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1651,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1084",
    "caseTitle": "Jadhav vs Tata Motors Ltd",
    "caseNumber": "EMP/8588/2022",
    "court": "Allahabad High Court",
    "category": "Employment Law",
    "keywords": [
      "sham and camouflage contract labor",
      "direct supervision test",
      "absorption of workmen",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Industrial dispute raised by contract laborers claiming regularization as permanent workmen.",
    "legalIssues": [
      "Sham and camouflage contract labor",
      "Direct supervision test",
      "Absorption of workmen"
    ],
    "filingDate": "2022-05-14",
    "disposalDate": "2023-03-23",
    "judgmentDate": "2023-03-23",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Contract Labour (Regulation & Abolition) Act 1970",
      "Industrial Disputes Act 1947"
    ],
    "summary": "Employment Law adjudication concerning Sham and camouflage contract labor, Direct supervision test, Absorption of workmen.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Contract Labour (Regulation & Abolition) Act 1970.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Contract Labour (Regulation & Abolition) Act 1970 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 313,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1085",
    "caseTitle": "Dutta vs Infosys BPM Ltd",
    "caseNumber": "EMP/8595/2016",
    "court": "Madras High Court",
    "category": "Employment Law",
    "keywords": [
      "section 12 maternity benefit act bar on discharge",
      "statutory compensation",
      "equal employment opportunity",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Claim for unpaid maternity benefits and unlawful severance during maternity leave protection window.",
    "legalIssues": [
      "Section 12 Maternity Benefit Act bar on discharge",
      "Statutory compensation",
      "Equal employment opportunity"
    ],
    "filingDate": "2016-06-15",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 12, Maternity Benefit Act 1961"
    ],
    "summary": "Employment Law adjudication concerning Section 12 Maternity Benefit Act bar on discharge, Statutory compensation, Equal employment opportunity.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 12, Maternity Benefit Act 1961.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 12, Maternity Benefit Act 1961 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1086",
    "caseTitle": "Ahluwalia vs Delhi Public School Society",
    "caseNumber": "EMP/8602/2017",
    "court": "Karnataka High Court",
    "category": "Employment Law",
    "keywords": [
      "section 4(6) payment of gratuity act conditions",
      "deprivation of retirement corpus",
      "interest on delayed gratuity",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Gratuity withholding by educational institution citing unadjudicated loss of school assets.",
    "legalIssues": [
      "Section 4(6) Payment of Gratuity Act conditions",
      "Deprivation of retirement corpus",
      "Interest on delayed gratuity"
    ],
    "filingDate": "2017-07-16",
    "disposalDate": "2021-01-07",
    "judgmentDate": "2021-01-07",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Payment of Gratuity Act 1972"
    ],
    "summary": "Employment Law adjudication concerning Section 4(6) Payment of Gratuity Act conditions, Deprivation of retirement corpus, Interest on delayed gratuity.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Payment of Gratuity Act 1972.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Payment of Gratuity Act 1972 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1271,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1087",
    "caseTitle": "Rawat vs National Thermal Power Corp",
    "caseNumber": "EMP/8609/2018",
    "court": "Calcutta High Court",
    "category": "Employment Law",
    "keywords": [
      "catch-up rule in seniority",
      "reservation in promotions",
      "administrative tribunal findings",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Seniority fixation and retrospective promotion dispute among engineering cadre officers.",
    "legalIssues": [
      "Catch-up rule in seniority",
      "Reservation in promotions",
      "Administrative Tribunal findings"
    ],
    "filingDate": "2018-08-17",
    "disposalDate": "2023-06-10",
    "judgmentDate": "2023-06-10",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Central Administrative Tribunals Act 1985"
    ],
    "summary": "Employment Law adjudication concerning Catch-up rule in seniority, Reservation in promotions, Administrative Tribunal findings.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Central Administrative Tribunals Act 1985.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Central Administrative Tribunals Act 1985 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1758,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1088",
    "caseTitle": "Murthy vs Bharat Heavy Electricals Ltd",
    "caseNumber": "EMP/8616/2019",
    "court": "Punjab & Haryana High Court",
    "category": "Employment Law",
    "keywords": [
      "withdrawal of vrs before effective date",
      "contractual acceptance",
      "service jurisprudence",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Denial of voluntary retirement scheme (VRS) benefits after submission and unilateral revocation.",
    "legalIssues": [
      "Withdrawal of VRS before effective date",
      "Contractual acceptance",
      "Service jurisprudence"
    ],
    "filingDate": "2019-09-18",
    "disposalDate": "2020-11-13",
    "judgmentDate": "2020-11-13",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Service Jurisprudence",
      "Indian Contract Act"
    ],
    "summary": "Employment Law adjudication concerning Withdrawal of VRS before effective date, Contractual acceptance, Service jurisprudence.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Service Jurisprudence.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Service Jurisprudence were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 422,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1089",
    "caseTitle": "Tyagi vs Air India Ltd",
    "caseNumber": "EMP/8623/2020",
    "court": "District Court, New Delhi",
    "category": "Employment Law",
    "keywords": [
      "equal pay for equal work doctrine",
      "substantial similarity of duties",
      "article 39(d) directive principles",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Equal pay for equal work claim by contractual cabin crew compared with regular permanent staff.",
    "legalIssues": [
      "Equal pay for equal work doctrine",
      "Substantial similarity of duties",
      "Article 39(d) directive principles"
    ],
    "filingDate": "2020-10-19",
    "disposalDate": "2023-04-16",
    "judgmentDate": "2023-04-16",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Article 14 and 39(d), Constitution of India",
      "Industrial Disputes Act"
    ],
    "summary": "Employment Law adjudication concerning Equal pay for equal work doctrine, Substantial similarity of duties, Article 39(d) directive principles.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 14 and 39(d), Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 14 and 39(d), Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 909,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1090",
    "caseTitle": "Swaminathan vs Larsen & Toubro Infotech",
    "caseNumber": "EMP/8630/2021",
    "court": "City Civil Court, Mumbai",
    "category": "Employment Law",
    "keywords": [
      "section 27 restraint on employment",
      "training expense recovery vs punitive bond",
      "proportionality",
      "employment law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Enforceability of liquidated damages in employment bond for resigning before two-year training tenure.",
    "legalIssues": [
      "Section 27 restraint on employment",
      "Training expense recovery vs punitive bond",
      "Proportionality"
    ],
    "filingDate": "2021-11-20",
    "disposalDate": "2025-09-19",
    "judgmentDate": "2025-09-19",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 27 and 74, Indian Contract Act 1872"
    ],
    "summary": "Employment Law adjudication concerning Section 27 restraint on employment, Training expense recovery vs punitive bond, Proportionality.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 27 and 74, Indian Contract Act 1872.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 27 and 74, Indian Contract Act 1872 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Employment Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1399,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1091",
    "caseTitle": "Foundation for Media Professionals vs Union of India",
    "caseNumber": "CON/8637/2022",
    "court": "District Court, Jaipur",
    "category": "Constitutional Law",
    "keywords": [
      "proportionality standard",
      "right to internet access article 19(1)(a)",
      "anuradha bhasin compliance",
      "constitutional law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to interception rules and mobile internet suspension orders under Telecom Suspension Rules.",
    "legalIssues": [
      "Proportionality standard",
      "Right to internet access Article 19(1)(a)",
      "Anuradha Bhasin compliance"
    ],
    "filingDate": "2022-12-21",
    "disposalDate": "2023-02-22",
    "judgmentDate": "2023-02-22",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Information Technology Act 2000",
      "Telegraph Act 1885",
      "Article 19 and 21, Constitution"
    ],
    "summary": "Constitutional Law adjudication concerning Proportionality standard, Right to internet access Article 19(1)(a), Anuradha Bhasin compliance.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Information Technology Act 2000.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Information Technology Act 2000 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Constitutional Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 63,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1092",
    "caseTitle": "Association for Democratic Reforms vs Election Commission of India",
    "caseNumber": "CON/8644/2016",
    "court": "Supreme Court of India",
    "category": "Constitutional Law",
    "keywords": [
      "electoral transparency",
      "voter's right to know article 19(1)(a)",
      "integrity of election mechanism",
      "constitutional law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Writ petition seeking independent verification of EVM vote counts with 100% VVPAT slip paper trails.",
    "legalIssues": [
      "Electoral transparency",
      "Voter's right to know Article 19(1)(a)",
      "Integrity of election mechanism"
    ],
    "filingDate": "2016-01-22",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Conduct of Election Rules 1961",
      "Representation of the People Act 1951"
    ],
    "summary": "Constitutional Law adjudication concerning Electoral transparency, Voter's right to know Article 19(1)(a), Integrity of election mechanism.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Conduct of Election Rules 1961.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Conduct of Election Rules 1961 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Constitutional Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1093",
    "caseTitle": "Citizens for Judicial Accountability vs Union of India",
    "caseNumber": "CON/8651/2017",
    "court": "Delhi High Court",
    "category": "Constitutional Law",
    "keywords": [
      "open justice principle",
      "right to access courts article 21",
      "swapnil tripathi guidelines",
      "constitutional law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Public Interest Litigation seeking implementation of uniform rules for live streaming of court proceedings across all High Courts.",
    "legalIssues": [
      "Open justice principle",
      "Right to access courts Article 21",
      "Swapnil Tripathi guidelines"
    ],
    "filingDate": "2017-02-23",
    "disposalDate": "2020-12-06",
    "judgmentDate": "2020-12-06",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Article 21 and 145, Constitution of India"
    ],
    "summary": "Constitutional Law adjudication concerning Open justice principle, Right to access courts Article 21, Swapnil Tripathi guidelines.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 21 and 145, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 21 and 145, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Constitutional Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1382,
    "durationFormatted": "3 Years 9 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1094",
    "caseTitle": "State of Tamil Nadu vs Governor of Tamil Nadu",
    "caseNumber": "CON/8658/2018",
    "court": "Bombay High Court",
    "category": "Constitutional Law",
    "keywords": [
      "article 200 powers of governor",
      "as soon as possible phrasing",
      "federal constitutional balance",
      "constitutional law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Writ petition under Article 32 challenging indefinite withholding of gubernatorial assent to state legislative bills.",
    "legalIssues": [
      "Article 200 powers of Governor",
      "As soon as possible phrasing",
      "Federal constitutional balance"
    ],
    "filingDate": "2018-03-24",
    "disposalDate": "2023-05-09",
    "judgmentDate": "2023-05-09",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Article 200, 201 and 163, Constitution of India"
    ],
    "summary": "Constitutional Law adjudication concerning Article 200 powers of Governor, As soon as possible phrasing, Federal constitutional balance.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 200, 201 and 163, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 200, 201 and 163, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Constitutional Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1872,
    "durationFormatted": "5 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1095",
    "caseTitle": "Shroff vs Union of India",
    "caseNumber": "CON/8665/2019",
    "court": "Rajasthan High Court",
    "category": "Constitutional Law",
    "keywords": [
      "legislative competence for retrospective tax",
      "vested commercial rights",
      "doctrine of legitimate expectation",
      "constitutional law",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Constitutional challenge to statutory retrospective taxation provisions violating fundamental rights under Article 19(1)(g).",
    "legalIssues": [
      "Legislative competence for retrospective tax",
      "Vested commercial rights",
      "Doctrine of legitimate expectation"
    ],
    "filingDate": "2019-04-25",
    "disposalDate": "2020-10-12",
    "judgmentDate": "2020-10-12",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Article 14, 19(1)(g) and 265, Constitution of India"
    ],
    "summary": "Constitutional Law adjudication concerning Legislative competence for retrospective tax, Vested commercial rights, Doctrine of legitimate expectation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Article 14, 19(1)(g) and 265, Constitution of India.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Article 14, 19(1)(g) and 265, Constitution of India were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Constitutional Law.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 536,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1096",
    "caseTitle": "Goyal vs State of Haryana",
    "caseNumber": "LAN/8672/2020",
    "court": "Allahabad High Court",
    "category": "Land Acquisition",
    "keywords": [
      "social impact assessment mandatory nature",
      "section 11 notice compliance",
      "lapse of acquisition",
      "land acquisition",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to notification acquiring 200 acres for industrial corridor without completing Social Impact Assessment.",
    "legalIssues": [
      "Social Impact Assessment mandatory nature",
      "Section 11 notice compliance",
      "Lapse of acquisition"
    ],
    "filingDate": "2020-05-26",
    "disposalDate": "2023-03-15",
    "judgmentDate": "2023-03-15",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Right to Fair Compensation & Transparency in Land Acquisition Act 2013 (RFCTLARR)"
    ],
    "summary": "Land Acquisition adjudication concerning Social Impact Assessment mandatory nature, Section 11 notice compliance, Lapse of acquisition.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Right to Fair Compensation & Transparency in Land Acquisition Act 2013 (RFCTLARR).",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Right to Fair Compensation & Transparency in Land Acquisition Act 2013 (RFCTLARR) were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Land Acquisition.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1023,
    "durationFormatted": "2 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1097",
    "caseTitle": "Kishan vs Dedicated Freight Corridor Corp",
    "caseNumber": "LAN/8679/2021",
    "court": "Madras High Court",
    "category": "Land Acquisition",
    "keywords": [
      "severance damages under section 28",
      "comparable circle rates",
      "multiplier for rural land",
      "land acquisition",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Appellate enhancement of market value for agricultural land severed diagonally by railway freight line.",
    "legalIssues": [
      "Severance damages under Section 28",
      "Comparable circle rates",
      "Multiplier for rural land"
    ],
    "filingDate": "2021-06-27",
    "disposalDate": "2025-08-18",
    "judgmentDate": "2025-08-18",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 26, 28 and 30, RFCTLARR Act 2013"
    ],
    "summary": "Land Acquisition adjudication concerning Severance damages under Section 28, Comparable circle rates, Multiplier for rural land.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 26, 28 and 30, RFCTLARR Act 2013.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 26, 28 and 30, RFCTLARR Act 2013 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Land Acquisition.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1513,
    "durationFormatted": "4 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1098",
    "caseTitle": "Prajapati vs National Highways Authority of India",
    "caseNumber": "LAN/8686/2022",
    "court": "Karnataka High Court",
    "category": "Land Acquisition",
    "keywords": [
      "land use potential at acquisition date",
      "section 3g(5) nh act arbitration",
      "revaluation of acquired ribbon land",
      "land acquisition",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Arbitral review of NHAI compensation determination based on agricultural classification when commercial use was prevalent.",
    "legalIssues": [
      "Land use potential at acquisition date",
      "Section 3G(5) NH Act arbitration",
      "Revaluation of acquired ribbon land"
    ],
    "filingDate": "2022-07-10",
    "disposalDate": "2023-01-21",
    "judgmentDate": "2023-01-21",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Section 3G, National Highways Act 1956"
    ],
    "summary": "Land Acquisition adjudication concerning Land use potential at acquisition date, Section 3G(5) NH Act arbitration, Revaluation of acquired ribbon land.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 3G, National Highways Act 1956.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 3G, National Highways Act 1956 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Land Acquisition.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 195,
    "durationFormatted": "6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1099",
    "caseTitle": "Reddy vs State of Telangana",
    "caseNumber": "LAN/8693/2016",
    "court": "Calcutta High Court",
    "category": "Land Acquisition",
    "keywords": [
      "section 24(2) lapse conditions",
      "indore development authority constitution bench interpretation",
      "physical possession proof",
      "land acquisition",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Claim for declaration of lapse of land acquisition proceedings under Section 24(2) where neither physical possession was taken nor compensation tendered.",
    "legalIssues": [
      "Section 24(2) lapse conditions",
      "Indore Development Authority Constitution Bench interpretation",
      "Physical possession proof"
    ],
    "filingDate": "2016-08-11",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 24(2), RFCTLARR Act 2013"
    ],
    "summary": "Land Acquisition adjudication concerning Section 24(2) lapse conditions, Indore Development Authority Constitution Bench interpretation, Physical possession proof.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 24(2), RFCTLARR Act 2013.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 24(2), RFCTLARR Act 2013 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Land Acquisition.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1100",
    "caseTitle": "Bisht vs State of Uttarakhand",
    "caseNumber": "LAN/8700/2017",
    "court": "Punjab & Haryana High Court",
    "category": "Land Acquisition",
    "keywords": [
      "resettlement entitlements",
      "land-for-land entitlement",
      "public interest vs displacement rights",
      "land acquisition",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Rehabilitation and resettlement package dispute for families displaced by hydroelectric dam reservoir filling.",
    "legalIssues": [
      "Resettlement entitlements",
      "Land-for-land entitlement",
      "Public interest vs displacement rights"
    ],
    "filingDate": "2017-09-12",
    "disposalDate": "2020-11-05",
    "judgmentDate": "2020-11-05",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Second and Third Schedule, RFCTLARR Act 2013"
    ],
    "summary": "Land Acquisition adjudication concerning Resettlement entitlements, Land-for-land entitlement, Public interest vs displacement rights.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Second and Third Schedule, RFCTLARR Act 2013.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Second and Third Schedule, RFCTLARR Act 2013 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Land Acquisition.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1150,
    "durationFormatted": "3 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1101",
    "caseTitle": "Punjab National Bank vs Surya Fabtex Ltd",
    "caseNumber": "BAN/8707/2018",
    "court": "District Court, New Delhi",
    "category": "Banking and Finance",
    "keywords": [
      "rule 8 and 9 security interest rules compliance",
      "valuation of mortgaged asset",
      "reserve price fixation",
      "banking and finance",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Section 17 SARFAESI appeal before DRT challenging auction sale notice of industrial textile mill mortgaged property.",
    "legalIssues": [
      "Rule 8 and 9 Security Interest Rules compliance",
      "Valuation of mortgaged asset",
      "Reserve price fixation"
    ],
    "filingDate": "2018-10-13",
    "disposalDate": "2023-04-08",
    "judgmentDate": "2023-04-08",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "SARFAESI Act 2002",
      "Security Interest (Enforcement) Rules 2002"
    ],
    "summary": "Banking and Finance adjudication concerning Rule 8 and 9 Security Interest Rules compliance, Valuation of mortgaged asset, Reserve price fixation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of SARFAESI Act 2002.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under SARFAESI Act 2002 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Banking and Finance.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1638,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1102",
    "caseTitle": "State Bank of India vs M/s Modern Steel Fabricators",
    "caseNumber": "BAN/8714/2019",
    "court": "City Civil Court, Mumbai",
    "category": "Banking and Finance",
    "keywords": [
      "debt and default proof",
      "limitation for section 7 application",
      "acknowledgement under section 18 limitation act",
      "banking and finance",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Corporate insolvency resolution process (CIRP) admission petition under Section 7 of Insolvency and Bankruptcy Code.",
    "legalIssues": [
      "Debt and default proof",
      "Limitation for Section 7 application",
      "Acknowledgement under Section 18 Limitation Act"
    ],
    "filingDate": "2019-11-14",
    "disposalDate": "2020-09-11",
    "judgmentDate": "2020-09-11",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 7, Insolvency and Bankruptcy Code 2016",
      "Section 18, Limitation Act"
    ],
    "summary": "Banking and Finance adjudication concerning Debt and default proof, Limitation for Section 7 application, Acknowledgement under Section 18 Limitation Act.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 7, Insolvency and Bankruptcy Code 2016.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 7, Insolvency and Bankruptcy Code 2016 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Banking and Finance.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 302,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1103",
    "caseTitle": "Kotak Mahindra Bank vs Apex Alloys Ltd",
    "caseNumber": "BAN/8721/2020",
    "court": "District Court, Jaipur",
    "category": "Banking and Finance",
    "keywords": [
      "lalit kumar jain doctrine",
      "simultaneous remedy against guarantor",
      "discharge of surety defense",
      "banking and finance",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Enforcement of personal guarantee against promoter directors following failure of corporate resolution plan.",
    "legalIssues": [
      "Lalit Kumar Jain doctrine",
      "Simultaneous remedy against guarantor",
      "Discharge of surety defense"
    ],
    "filingDate": "2020-12-15",
    "disposalDate": "2023-02-14",
    "judgmentDate": "2023-02-14",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 128, Indian Contract Act",
      "Section 60(2), IBC 2016"
    ],
    "summary": "Banking and Finance adjudication concerning Lalit Kumar Jain doctrine, Simultaneous remedy against guarantor, Discharge of surety defense.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 128, Indian Contract Act.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 128, Indian Contract Act were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Banking and Finance.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 791,
    "durationFormatted": "2 Years 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1104",
    "caseTitle": "Reserve Bank of India vs Sahara India Financial Corp",
    "caseNumber": "BAN/8728/2021",
    "court": "Supreme Court of India",
    "category": "Banking and Finance",
    "keywords": [
      "rbi regulatory powers under section 45ja",
      "protection of depositors",
      "judicial review of economic policy",
      "banking and finance",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to regulatory directions restricting public deposit acceptance by non-banking financial company.",
    "legalIssues": [
      "RBI regulatory powers under Section 45JA",
      "Protection of depositors",
      "Judicial review of economic policy"
    ],
    "filingDate": "2021-01-16",
    "disposalDate": "2025-07-17",
    "judgmentDate": "2025-07-17",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Reserve Bank of India Act 1934",
      "Banking Regulation Act 1949"
    ],
    "summary": "Banking and Finance adjudication concerning RBI regulatory powers under Section 45JA, Protection of depositors, Judicial review of economic policy.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Reserve Bank of India Act 1934.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Reserve Bank of India Act 1934 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Banking and Finance.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1643,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1105",
    "caseTitle": "ICICI Bank Ltd vs Pioneer Realtech",
    "caseNumber": "BAN/8735/2022",
    "court": "Delhi High Court",
    "category": "Banking and Finance",
    "keywords": [
      "escrow agreement covenants",
      "pari passu charge",
      "specific performance of financial covenants",
      "banking and finance",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Dispute over escrow account mechanism and priority of cash flow disbursement during construction slowdown.",
    "legalIssues": [
      "Escrow agreement covenants",
      "Pari passu charge",
      "Specific performance of financial covenants"
    ],
    "filingDate": "2022-02-17",
    "disposalDate": "2022-12-20",
    "judgmentDate": "2022-12-20",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Indian Contract Act",
      "SARFAESI Act"
    ],
    "summary": "Banking and Finance adjudication concerning Escrow agreement covenants, Pari passu charge, Specific performance of financial covenants.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Indian Contract Act.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Indian Contract Act were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Banking and Finance.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 306,
    "durationFormatted": "10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1106",
    "caseTitle": "Cipla Ltd vs Novartis AG",
    "caseNumber": "INT/8742/2016",
    "court": "Bombay High Court",
    "category": "Intellectual Property",
    "keywords": [
      "section 3(d) therapeutic efficacy standard",
      "evergreening of pharmaceutical patents",
      "interim injunction balance of convenience",
      "intellectual property",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Patent infringement and validity dispute over crystal polymorphism of anti-cancer compound.",
    "legalIssues": [
      "Section 3(d) therapeutic efficacy standard",
      "Evergreening of pharmaceutical patents",
      "Interim injunction balance of convenience"
    ],
    "filingDate": "2016-03-18",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Section 3(d), 48 and 64, Patents Act 1970"
    ],
    "summary": "Intellectual Property adjudication concerning Section 3(d) therapeutic efficacy standard, Evergreening of pharmaceutical patents, Interim injunction balance of convenience.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 3(d), 48 and 64, Patents Act 1970.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 3(d), 48 and 64, Patents Act 1970 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Intellectual Property.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1107",
    "caseTitle": "Haldiram India Pvt Ltd vs Haldiram Bhujiawala",
    "caseNumber": "INT/8749/2017",
    "court": "Rajasthan High Court",
    "category": "Intellectual Property",
    "keywords": [
      "concurrent user defense",
      "territorial partition of trademark",
      "trans-border reputation",
      "intellectual property",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Trademark infringement and passing off dispute regarding split territory rights under family dissolution deed.",
    "legalIssues": [
      "Concurrent user defense",
      "Territorial partition of trademark",
      "Trans-border reputation"
    ],
    "filingDate": "2017-04-19",
    "disposalDate": "2020-10-26",
    "judgmentDate": "2020-10-26",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Section 29 and 34, Trade Marks Act 1999"
    ],
    "summary": "Intellectual Property adjudication concerning Concurrent user defense, Territorial partition of trademark, Trans-border reputation.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 29 and 34, Trade Marks Act 1999.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 29 and 34, Trade Marks Act 1999 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Intellectual Property.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1286,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1108",
    "caseTitle": "Super Cassettes Industries (T-Series) vs YouTube LLC",
    "caseNumber": "INT/8756/2018",
    "court": "Allahabad High Court",
    "category": "Intellectual Property",
    "keywords": [
      "intermediary safe harbor section 79",
      "takedown notice compliance",
      "primary vs secondary infringement",
      "intellectual property",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Copyright infringement and safe harbor protection for user-uploaded audio tracks and sync licensing.",
    "legalIssues": [
      "Intermediary safe harbor Section 79",
      "Takedown notice compliance",
      "Primary vs secondary infringement"
    ],
    "filingDate": "2018-05-20",
    "disposalDate": "2023-03-07",
    "judgmentDate": "2023-03-07",
    "status": "Allowed",
    "outcome": "Dismissed",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Copyright Act 1957",
      "Information Technology Act 2000"
    ],
    "summary": "Intellectual Property adjudication concerning Intermediary safe harbor Section 79, Takedown notice compliance, Primary vs secondary infringement.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Copyright Act 1957.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Copyright Act 1957 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Intellectual Property.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1752,
    "durationFormatted": "4 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1109",
    "caseTitle": "Bennett, Coleman & Co vs TimesNewsNow Media",
    "caseNumber": "INT/8763/2019",
    "court": "Madras High Court",
    "category": "Intellectual Property",
    "keywords": [
      "domain name trademark status",
      "phonetic and visual similarity",
      "passing off injunction",
      "intellectual property",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Deceptive similarity and domain name cybersquatting dispute in news media branding.",
    "legalIssues": [
      "Domain name trademark status",
      "Phonetic and visual similarity",
      "Passing off injunction"
    ],
    "filingDate": "2019-06-21",
    "disposalDate": "2020-08-10",
    "judgmentDate": "2020-08-10",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Trade Marks Act 1999",
      "Indlaw Domain Policy"
    ],
    "summary": "Intellectual Property adjudication concerning Domain name trademark status, Phonetic and visual similarity, Passing off injunction.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Trade Marks Act 1999.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Trade Marks Act 1999 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Intellectual Property.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 416,
    "durationFormatted": "1 Year 2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1110",
    "caseTitle": "Bayer CropScience vs Insecticides India Ltd",
    "caseNumber": "INT/8770/2020",
    "court": "Karnataka High Court",
    "category": "Intellectual Property",
    "keywords": [
      "process patent claim construction",
      "equivalents doctrine",
      "prima facie invalidity defense",
      "intellectual property",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Agricultural chemical patent infringement suit involving pesticide formulation process.",
    "legalIssues": [
      "Process patent claim construction",
      "Equivalents doctrine",
      "Prima facie invalidity defense"
    ],
    "filingDate": "2020-07-22",
    "disposalDate": "2023-01-13",
    "judgmentDate": "2023-01-13",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice S.K. Kaul",
      "Hon'ble Mr. Justice Surya Kant"
    ],
    "legalSections": [
      "Patents Act 1970",
      "Commercial Courts Act 2015"
    ],
    "summary": "Intellectual Property adjudication concerning Process patent claim construction, Equivalents doctrine, Prima facie invalidity defense.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Patents Act 1970.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Patents Act 1970 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Intellectual Property.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 905,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1111",
    "caseTitle": "Commissioner of Income Tax vs Infosys BPO Ltd",
    "caseNumber": "TAX/8777/2021",
    "court": "Calcutta High Court",
    "category": "Taxation",
    "keywords": [
      "transfer pricing comparables",
      "most appropriate method (tnmm)",
      "safe harbor guidelines",
      "taxation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Transfer pricing adjustment dispute regarding arm's length price mark-up for IT-enabled back-office services.",
    "legalIssues": [
      "Transfer pricing comparables",
      "Most appropriate method (TNMM)",
      "Safe harbor guidelines"
    ],
    "filingDate": "2021-08-23",
    "disposalDate": "2025-06-16",
    "judgmentDate": "2025-06-16",
    "status": "Resolved",
    "outcome": "Respondent Successful",
    "judgeNames": [
      "Hon'ble Mrs. Justice B.V. Nagarathna",
      "Hon'ble Mr. Justice D.K. Sen"
    ],
    "legalSections": [
      "Section 92C, Income Tax Act 1961"
    ],
    "summary": "Taxation adjudication concerning Transfer pricing comparables, Most appropriate method (TNMM), Safe harbor guidelines.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 92C, Income Tax Act 1961.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 92C, Income Tax Act 1961 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter resolved with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Taxation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1393,
    "durationFormatted": "3 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1112",
    "caseTitle": "M/s Adani Green Energy vs Commissioner of Customs",
    "caseNumber": "TAX/8784/2022",
    "court": "Punjab & Haryana High Court",
    "category": "Taxation",
    "keywords": [
      "customs tariff classification",
      "general rules of interpretation",
      "advance ruling challenge",
      "taxation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Classification dispute of imported solar cells under customs tariff heading for anti-dumping duty levy.",
    "legalIssues": [
      "Customs tariff classification",
      "General rules of interpretation",
      "Advance ruling challenge"
    ],
    "filingDate": "2022-09-24",
    "disposalDate": "2022-11-19",
    "judgmentDate": "2022-11-19",
    "status": "Dismissed",
    "outcome": "Partially Successful",
    "judgeNames": [
      "Hon'ble Mr. Justice Surya Kant",
      "Hon'ble Mr. Justice P.K. Mishra"
    ],
    "legalSections": [
      "Customs Tariff Act 1975",
      "Customs Act 1962"
    ],
    "summary": "Taxation adjudication concerning Customs tariff classification, General rules of interpretation, Advance ruling challenge.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Customs Tariff Act 1975.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Customs Tariff Act 1975 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter dismissed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Taxation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 56,
    "durationFormatted": "2 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1113",
    "caseTitle": "State of Gujarat vs Reliance Industries Ltd",
    "caseNumber": "TAX/8791/2016",
    "court": "District Court, New Delhi",
    "category": "Taxation",
    "keywords": [
      "input tax credit eligibility",
      "manufacturing process definition",
      "vesting of statutory tax rebate",
      "taxation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Disallowance of input tax credit (ITC) on value added tax (VAT) for natural gas utilized in power generation.",
    "legalIssues": [
      "Input tax credit eligibility",
      "Manufacturing process definition",
      "Vesting of statutory tax rebate"
    ],
    "filingDate": "2016-10-25",
    "disposalDate": null,
    "judgmentDate": null,
    "status": "Pending",
    "outcome": "Under Adjudication",
    "judgeNames": [
      "Hon'ble Mr. Justice D.K. Sen",
      "Hon'ble Ms. Justice R. Banumathi"
    ],
    "legalSections": [
      "Gujarat Value Added Tax Act 2003",
      "Central Sales Tax Act"
    ],
    "summary": "Taxation adjudication concerning Input tax credit eligibility, Manufacturing process definition, Vesting of statutory tax rebate.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Gujarat Value Added Tax Act 2003.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Gujarat Value Added Tax Act 2003 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Proceedings currently pending final arguments before the Bench.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Taxation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": null,
    "durationFormatted": "Pending (Ongoing)",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1114",
    "caseTitle": "Union of India vs Bharti Telemedia Ltd",
    "caseNumber": "TAX/8798/2017",
    "court": "City Civil Court, Mumbai",
    "category": "Taxation",
    "keywords": [
      "transitional credit under section 140",
      "procedural glitches in gst portal",
      "substantive right to tax credit",
      "taxation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Challenge to rectification of Form GSTR-3B for claiming accumulated transitional credit under GST regime.",
    "legalIssues": [
      "Transitional credit under Section 140",
      "Procedural glitches in GST portal",
      "Substantive right to tax credit"
    ],
    "filingDate": "2017-11-26",
    "disposalDate": "2020-09-25",
    "judgmentDate": "2020-09-25",
    "status": "Partially Allowed",
    "outcome": "Other / Unclear",
    "judgeNames": [
      "Hon'ble Mr. Justice P.K. Mishra",
      "Hon'ble Mr. Justice S.K. Kaul"
    ],
    "legalSections": [
      "Section 16 and 140, Central Goods and Services Tax Act 2017"
    ],
    "summary": "Taxation adjudication concerning Transitional credit under Section 140, Procedural glitches in GST portal, Substantive right to tax credit.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 16 and 140, Central Goods and Services Tax Act 2017.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 16 and 140, Central Goods and Services Tax Act 2017 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter partially allowed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Taxation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1034,
    "durationFormatted": "2 Years 10 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1115",
    "caseTitle": "DLF Universal Ltd vs Deputy Commissioner of Income Tax",
    "caseNumber": "TAX/8805/2018",
    "court": "District Court, Jaipur",
    "category": "Taxation",
    "keywords": [
      "section 68 unexplained credits",
      "creditworthiness of institutional investor",
      "angel tax scrutiny",
      "taxation",
      "indian precedent",
      "judicial determination"
    ],
    "facts": "Addition under Section 68 of Income Tax Act for unexplained cash credit received via share premium.",
    "legalIssues": [
      "Section 68 unexplained credits",
      "Creditworthiness of institutional investor",
      "Angel tax scrutiny"
    ],
    "filingDate": "2018-12-27",
    "disposalDate": "2023-02-06",
    "judgmentDate": "2023-02-06",
    "status": "Disposed",
    "outcome": "Petitioner Successful",
    "judgeNames": [
      "Hon'ble Ms. Justice R. Banumathi",
      "Hon'ble Mrs. Justice B.V. Nagarathna"
    ],
    "legalSections": [
      "Section 68 and 56(2)(viib), Income Tax Act 1961"
    ],
    "summary": "Taxation adjudication concerning Section 68 unexplained credits, Creditworthiness of institutional investor, Angel tax scrutiny.",
    "background": "The litigation originated following dispute between the parties regarding statutory compliance and interpretation of Section 68 and 56(2)(viib), Income Tax Act 1961.",
    "argumentsPetitioner": "Petitioner contended that continuous enjoyment of rights and statutory protections under Section 68 and 56(2)(viib), Income Tax Act 1961 were arbitrarily infringed without adequate opportunity of hearing.",
    "argumentsRespondent": "Respondents argued that actions taken conformed with administrative regulations, statutory time-bars and established institutional guidelines.",
    "courtObservations": "The Court observed that judicial oversight requires balancing competing rights while strictly enforcing the plain text of statutory law and procedural fairness.",
    "finalJudgment": "Matter disposed with directions for compliance within eight weeks.",
    "legalPrinciples": [
      "Statutory timelines and procedural mandates must be strictly adhered to in Taxation.",
      "Judicial discretion cannot override express legislative prohibitions or settled precedent."
    ],
    "referencedPrecedents": [
      "State of Punjab vs Baldev Singh (1999) 6 SCC 172",
      "Maneka Gandhi vs Union of India AIR 1978 SC 597",
      "K.S. Puttaswamy vs Union of India (2017) 10 SCC 1"
    ],
    "durationDays": 1502,
    "durationFormatted": "4 Years 1 Month",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1116",
    "caseTitle": "Rathore vs Municipal Board Alwar",
    "caseNumber": "CIVIL/1116/2021",
    "court": "Supreme Court of India",
    "category": "Property Dispute",
    "keywords": [
      "municipal lease",
      "ownership document",
      "regularization scheme",
      "property dispute",
      "demonstration record"
    ],
    "facts": "Dispute over ownership and regularization of commercial shop in old walled city market.",
    "legalIssues": [
      "Municipal lease",
      "Ownership document",
      "Regularization scheme"
    ],
    "filingDate": "2019-05-14",
    "disposalDate": "2020-11-20",
    "judgmentDate": "2020-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Rajasthan Municipalities Act 2009"
    ],
    "summary": "Property Dispute adjudication addressing Municipal lease, Ownership document, Regularization scheme.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 556,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1117",
    "caseTitle": "Namboodiri vs Cochin Devaswom Board",
    "caseNumber": "CIVIL/1117/2021",
    "court": "Delhi High Court",
    "category": "Civil Litigation",
    "keywords": [
      "hereditary temple rights",
      "public trust property",
      "section 92 cpc",
      "civil litigation",
      "demonstration record"
    ],
    "facts": "Civil suit claiming hereditary priesthood right and temple property management.",
    "legalIssues": [
      "Hereditary temple rights",
      "Public trust property",
      "Section 92 CPC"
    ],
    "filingDate": "2020-05-14",
    "disposalDate": "2022-11-20",
    "judgmentDate": "2022-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Section 92, CPC 1908"
    ],
    "summary": "Civil Litigation adjudication addressing Hereditary temple rights, Public trust property, Section 92 CPC.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 920,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1118",
    "caseTitle": "Verma vs Central Bureau of Narcotics",
    "caseNumber": "CIVIL/1118/2021",
    "court": "Bombay High Court",
    "category": "Criminal Law",
    "keywords": [
      "knowledge and conscious possession",
      "section 37 ndps",
      "courier liability",
      "criminal law",
      "demonstration record"
    ],
    "facts": "Anticipatory bail petition in suspected contraband transportation through courier consignment.",
    "legalIssues": [
      "Knowledge and conscious possession",
      "Section 37 NDPS",
      "Courier liability"
    ],
    "filingDate": "2021-05-14",
    "disposalDate": "2024-11-20",
    "judgmentDate": "2024-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Section 8 and 21, NDPS Act"
    ],
    "summary": "Criminal Law adjudication addressing Knowledge and conscious possession, Section 37 NDPS, Courier liability.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 1286,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1119",
    "caseTitle": "Gupta vs FlyEasy Airlines",
    "caseNumber": "CIVIL/1119/2021",
    "court": "Rajasthan High Court",
    "category": "Consumer Protection",
    "keywords": [
      "carrier baggage limitation",
      "montréal convention applicability",
      "deficiency in service",
      "consumer protection",
      "demonstration record"
    ],
    "facts": "Compensation claim for severe baggage damage containing irreplaceable ancestral documents.",
    "legalIssues": [
      "Carrier baggage limitation",
      "Montréal Convention applicability",
      "Deficiency in service"
    ],
    "filingDate": "2022-05-14",
    "disposalDate": "2026-11-20",
    "judgmentDate": "2026-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Consumer Protection Act 2019"
    ],
    "summary": "Consumer Protection adjudication addressing Carrier baggage limitation, Montréal Convention applicability, Deficiency in service.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 1651,
    "durationFormatted": "4 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1120",
    "caseTitle": "Bansal Infra vs Rail Vikas Nigam Ltd",
    "caseNumber": "CIVIL/1120/2021",
    "court": "Allahabad High Court",
    "category": "Contract Dispute",
    "keywords": [
      "unilateral appointment of arbitrator",
      "perkins eastman doctrine",
      "section 11(6) arbitration act",
      "contract dispute",
      "demonstration record"
    ],
    "facts": "Arbitration petition seeking appointment of independent arbitrator under Section 11(6) after departmental panel dispute.",
    "legalIssues": [
      "Unilateral appointment of arbitrator",
      "Perkins Eastman doctrine",
      "Section 11(6) Arbitration Act"
    ],
    "filingDate": "2018-05-14",
    "disposalDate": "2019-11-20",
    "judgmentDate": "2019-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Arbitration & Conciliation Act 1996"
    ],
    "summary": "Contract Dispute adjudication addressing Unilateral appointment of arbitrator, Perkins Eastman doctrine, Section 11(6) Arbitration Act.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 555,
    "durationFormatted": "1 Year 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1121",
    "caseTitle": "Chadha vs DLF Home Developers",
    "caseNumber": "CIVIL/1121/2021",
    "court": "Madras High Court",
    "category": "Property Dispute",
    "keywords": [
      "super area inflation",
      "builder buyer agreement",
      "unfair trade practice",
      "property dispute",
      "demonstration record"
    ],
    "facts": "Allottee challenge to escalated super area calculation and demand for refund of proportionate amount.",
    "legalIssues": [
      "Super area inflation",
      "Builder buyer agreement",
      "Unfair trade practice"
    ],
    "filingDate": "2019-05-14",
    "disposalDate": "2021-11-20",
    "judgmentDate": "2021-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "RERA Act 2016",
      "Specific Relief Act"
    ],
    "summary": "Property Dispute adjudication addressing Super area inflation, Builder buyer agreement, Unfair trade practice.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 921,
    "durationFormatted": "2 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  },
  {
    "id": "CL-1122",
    "caseTitle": "Sen vs Sen & Brothers",
    "caseNumber": "CIVIL/1122/2021",
    "court": "Karnataka High Court",
    "category": "Civil Litigation",
    "keywords": [
      "partnership dissolution",
      "settlement of accounts",
      "goodwill valuation",
      "civil litigation",
      "demonstration record"
    ],
    "facts": "Family business partition and dissolution of partnership firm running printing presses in Kolkata.",
    "legalIssues": [
      "Partnership dissolution",
      "Settlement of accounts",
      "Goodwill valuation"
    ],
    "filingDate": "2020-05-14",
    "disposalDate": "2023-11-20",
    "judgmentDate": "2023-11-20",
    "status": "Disposed",
    "outcome": "Allowed",
    "judgeNames": [
      "Hon'ble Mr. Justice R.F. Nariman",
      "Hon'ble Mr. Justice K.M. Joseph"
    ],
    "legalSections": [
      "Section 44, Indian Partnership Act 1932"
    ],
    "summary": "Civil Litigation adjudication addressing Partnership dissolution, Settlement of accounts, Goodwill valuation.",
    "background": "Civil dispute originating from disagreement on contractual terms and statutory bounds.",
    "argumentsPetitioner": "Substantive statutory rights violated due to arbitrary and unilateral actions.",
    "argumentsRespondent": "Actions strictly in accordance with agreement clauses and administrative discretion.",
    "courtObservations": "Arbitrary administrative action cannot withstand judicial scrutiny where statutory guidelines are bypassed.",
    "finalJudgment": "Petition allowed with directions to restore status within forty-five days.",
    "legalPrinciples": [
      "No party can unilaterally enrich themselves contrary to agreed covenants.",
      "Statutory authorities are bound by the doctrine of fairness in state action."
    ],
    "referencedPrecedents": [
      "Kumari Shrilekha Vidyarthi vs State of UP (1991) 1 SCC 212"
    ],
    "durationDays": 1285,
    "durationFormatted": "3 Years 6 Months",
    "sourceType": "Demo Data",
    "isDemo": true
  }
];
