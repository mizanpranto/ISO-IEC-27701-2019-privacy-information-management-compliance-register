// Sample ISO/IEC 27701:2019 privacy information management (PIMS) gap-assessment dataset (fictional demo data)
const SAMPLE_ASSESSMENT = [
  {
    "ref": "5.2.1",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for understanding the organization and its context \u2014 PIMS scope and applicable privacy legislation, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Understanding the organization and its context \u2014 PIMS scope and applicable privacy legislation is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "5.2.2",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for understanding the needs and expectations of interested parties \u2014 PII principals and privacy regulators, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Gap identified during review \u2014 understanding the needs and expectations of interested parties \u2014 PII principals and privacy regulators not yet formally established. Remediation plan required."
  },
  {
    "ref": "5.2.3",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for determining the scope of the information security management system \u2014 PIMS scope aligned to ISMS scope, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 determining the scope of the information security management system \u2014 PIMS scope aligned to ISMS scope not yet formally established. Remediation plan required."
  },
  {
    "ref": "5.2.4",
    "category": "Mandatory Clauses",
    "section": "5.2 - Context of the organization (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for information security management system \u2014 PIMS established, implemented, maintained and continually improved, with documented evidence available for review?",
    "compliance": "Not Applicable",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.4.1.2",
    "category": "Mandatory Clauses",
    "section": "5.4 - Planning (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for information security risk assessment \u2014 extended to privacy risk to PII principals, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.4.1.3",
    "category": "Mandatory Clauses",
    "section": "5.4 - Planning (PIMS)",
    "requirement": "Has the organisation addressed the PIMS requirement for information security risk treatment \u2014 extended to privacy risk treatment, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.1",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to identify and document purpose?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.2",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to identify lawful basis?",
    "compliance": "Not Applicable",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.3",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to determine when and how consent is to be obtained?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Determine when and how consent is to be obtained is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.2.4",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to obtain and record consent?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.5",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to privacy impact assessment?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.6",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to contracts with PII processors?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.7",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to joint PII controller?",
    "compliance": "Not Applicable",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.2.8",
    "category": "Annex A Controls",
    "section": "A.7.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to records related to processing PII?",
    "compliance": "Partially Compliant",
    "owner": "DPO Team",
    "priority": "Medium",
    "notes": "Records related to processing PII is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.3.1",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to determining and fulfilling obligations to PII principals?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 determining and fulfilling obligations to PII principals has not been implemented. Remediation plan required."
  },
  {
    "ref": "A.7.3.2",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to determining information for PII principals?",
    "compliance": "Fully Compliant",
    "owner": "Privacy Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.3",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to providing information to PII principals?",
    "compliance": "Partially Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Providing information to PII principals is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.3.4",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to providing mechanism to modify or withdraw consent?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.5",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to providing mechanism to object to PII processing?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.6",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to access, correction and/or erasure?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 access, correction and/or erasure has not been implemented. Remediation plan required."
  },
  {
    "ref": "A.7.3.7",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to PII controllers' obligations to inform third parties?",
    "compliance": "Fully Compliant",
    "owner": "DPO Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.8",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to providing copy of PII processed?",
    "compliance": "Fully Compliant",
    "owner": "Privacy Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.9",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to handling requests?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3.10",
    "category": "Annex A Controls",
    "section": "A.7.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to automated decision making?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 automated decision making has not been implemented. Remediation plan required."
  },
  {
    "ref": "A.7.4.1",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to limit collection?",
    "compliance": "Fully Compliant",
    "owner": "Privacy Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4.2",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to limit processing?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Limit processing is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.4.3",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to accuracy and quality?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4.4",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to PII minimization objectives?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4.5",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to PII de-identification and deletion at the end of processing?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "Low",
    "notes": "PII de-identification and deletion at the end of processing is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.4.6",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to temporary files?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Temporary files is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.4.7",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to retention?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 retention has not been implemented. Remediation plan required."
  },
  {
    "ref": "A.7.4.8",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to disposal?",
    "compliance": "Fully Compliant",
    "owner": "DPO Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4.9",
    "category": "Annex A Controls",
    "section": "A.7.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to PII transmission controls?",
    "compliance": "Fully Compliant",
    "owner": "Privacy Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.5.1",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to identify basis for PII transfer between jurisdictions?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.5.2",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to countries and international organizations to which PII can be transferred?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Countries and international organizations to which PII can be transferred is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A.7.5.3",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to records of transfer of PII?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.5.4",
    "category": "Annex A Controls",
    "section": "A.7.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to records of PII disclosure to third parties?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.2.1",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to customer agreement?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Customer agreement is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "B.8.2.2",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to organization's purposes?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 organization's purposes has not been implemented. Remediation plan required."
  },
  {
    "ref": "B.8.2.3",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to marketing and advertising use?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 marketing and advertising use has not been implemented. Remediation plan required."
  },
  {
    "ref": "B.8.2.4",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to infringing instruction?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.2.5",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to customer obligations?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Customer obligations is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "B.8.2.6",
    "category": "Annex B Controls",
    "section": "B.8.2 - Conditions for collection and processing",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to records related to processing PII?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Records related to processing PII is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "B.8.3.1",
    "category": "Annex B Controls",
    "section": "B.8.3 - Obligations to PII principals",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to obligations to PII principals?",
    "compliance": "Fully Compliant",
    "owner": "Privacy Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.4.1",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to temporary files?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.4.2",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to return, transfer or disposal of PII?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.4.3",
    "category": "Annex B Controls",
    "section": "B.8.4 - Privacy by design and privacy by default",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to PII transmission controls?",
    "compliance": "Not Applicable",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.1",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to basis for PII transfer between jurisdictions?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.2",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to countries and international organizations to which PII can be transferred?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.3",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to records of PII disclosure to third parties?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.4",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to notification of PII disclosure requests?",
    "compliance": "Not Applicable",
    "owner": "DPO Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.5",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to legally binding PII disclosures?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.6",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to disclosure of subcontractors used to process PII?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.7",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to engagement of a subcontractor to process PII?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "B.8.5.8",
    "category": "Annex B Controls",
    "section": "B.8.5 - PII sharing, transfer, and disclosure",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to change of subcontractor to process PII?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Gap identified during review \u2014 change of subcontractor to process PII has not been implemented. Remediation plan required."
  }
];
