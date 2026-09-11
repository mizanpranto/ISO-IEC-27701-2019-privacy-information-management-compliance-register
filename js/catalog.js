// Canonical ISO/IEC 27701:2019 structure: Clause 5 PIMS-specific requirements,
// Annex A controls (PII controllers), Annex B controls (PII processors).
// Titles are short reference labels; not a reproduction of standard text.
const CONTROL_CATALOG = [
  {
    "ref": "5.2.1",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "title": "Understanding the organization and its context \u2014 PIMS scope and applicable privacy legislation"
  },
  {
    "ref": "5.2.2",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "title": "Understanding the needs and expectations of interested parties \u2014 PII principals and privacy regulators"
  },
  {
    "ref": "5.2.3",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "title": "Determining the scope of the information security management system \u2014 PIMS scope aligned to ISMS scope"
  },
  {
    "ref": "5.2.4",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "title": "Information security management system \u2014 PIMS established, implemented, maintained and continually improved"
  },
  {
    "ref": "5.4.1.2",
    "category": "Mandatory Clauses",
    "section": "5.4 - Planning (PIMS)",
    "title": "Information security risk assessment \u2014 extended to privacy risk to PII principals"
  },
  {
    "ref": "5.4.1.3",
    "category": "Mandatory Clauses",
    "section": "5.4 - Planning (PIMS)",
    "title": "Information security risk treatment \u2014 extended to privacy risk treatment"
  },
  {
    "ref": "A.7.2.1",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Identify and document purpose"
  },
  {
    "ref": "A.7.2.2",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Identify lawful basis"
  },
  {
    "ref": "A.7.2.3",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Determine when and how consent is to be obtained"
  },
  {
    "ref": "A.7.2.4",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Obtain and record consent"
  },
  {
    "ref": "A.7.2.5",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Privacy impact assessment"
  },
  {
    "ref": "A.7.2.6",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Contracts with PII processors"
  },
  {
    "ref": "A.7.2.7",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Joint PII controller"
  },
  {
    "ref": "A.7.2.8",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "title": "Records related to processing PII"
  },
  {
    "ref": "A.7.3.1",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Determining and fulfilling obligations to PII principals"
  },
  {
    "ref": "A.7.3.2",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Determining information for PII principals"
  },
  {
    "ref": "A.7.3.3",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Providing information to PII principals"
  },
  {
    "ref": "A.7.3.4",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Providing mechanism to modify or withdraw consent"
  },
  {
    "ref": "A.7.3.5",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Providing mechanism to object to PII processing"
  },
  {
    "ref": "A.7.3.6",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Access, correction and/or erasure"
  },
  {
    "ref": "A.7.3.7",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "PII controllers' obligations to inform third parties"
  },
  {
    "ref": "A.7.3.8",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Providing copy of PII processed"
  },
  {
    "ref": "A.7.3.9",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Handling requests"
  },
  {
    "ref": "A.7.3.10",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "title": "Automated decision making"
  },
  {
    "ref": "A.7.4.1",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Limit collection"
  },
  {
    "ref": "A.7.4.2",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Limit processing"
  },
  {
    "ref": "A.7.4.3",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Accuracy and quality"
  },
  {
    "ref": "A.7.4.4",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "PII minimization objectives"
  },
  {
    "ref": "A.7.4.5",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "PII de-identification and deletion at the end of processing"
  },
  {
    "ref": "A.7.4.6",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Temporary files"
  },
  {
    "ref": "A.7.4.7",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Retention"
  },
  {
    "ref": "A.7.4.8",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "Disposal"
  },
  {
    "ref": "A.7.4.9",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "title": "PII transmission controls"
  },
  {
    "ref": "A.7.5.1",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "title": "Identify basis for PII transfer between jurisdictions"
  },
  {
    "ref": "A.7.5.2",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "title": "Countries and international organizations to which PII can be transferred"
  },
  {
    "ref": "A.7.5.3",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "title": "Records of transfer of PII"
  },
  {
    "ref": "A.7.5.4",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "title": "Records of PII disclosure to third parties"
  },
  {
    "ref": "B.8.2.1",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Customer agreement"
  },
  {
    "ref": "B.8.2.2",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Organization's purposes"
  },
  {
    "ref": "B.8.2.3",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Marketing and advertising use"
  },
  {
    "ref": "B.8.2.4",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Infringing instruction"
  },
  {
    "ref": "B.8.2.5",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Customer obligations"
  },
  {
    "ref": "B.8.2.6",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "title": "Records related to processing PII"
  },
  {
    "ref": "B.8.3.1",
    "category": "Annex B Controls",
    "section": "B.8.3 - Obligations to PII principals",
    "title": "Obligations to PII principals"
  },
  {
    "ref": "B.8.4.1",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "title": "Temporary files"
  },
  {
    "ref": "B.8.4.2",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "title": "Return, transfer or disposal of PII"
  },
  {
    "ref": "B.8.4.3",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "title": "PII transmission controls"
  },
  {
    "ref": "B.8.5.1",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Basis for PII transfer between jurisdictions"
  },
  {
    "ref": "B.8.5.2",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Countries and international organizations to which PII can be transferred"
  },
  {
    "ref": "B.8.5.3",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Records of PII disclosure to third parties"
  },
  {
    "ref": "B.8.5.4",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Notification of PII disclosure requests"
  },
  {
    "ref": "B.8.5.5",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Legally binding PII disclosures"
  },
  {
    "ref": "B.8.5.6",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Disclosure of subcontractors used to process PII"
  },
  {
    "ref": "B.8.5.7",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Engagement of a subcontractor to process PII"
  },
  {
    "ref": "B.8.5.8",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "title": "Change of subcontractor to process PII"
  }
];
