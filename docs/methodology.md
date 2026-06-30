# HacKaTech BKK 69 Archive Methodology 🧪

This page explains the technical methodology used to collect, normalize, verify, and document the open-source projects archived in this repository.

---

## 1. URL Collection and Normalization
Raw project submissions often contained formatting inconsistencies, trailing spaces, or redundant `.git` extensions. All URLs were normalized using the following rules:
*   Standardized all protocols to `https://` (e.g. converting `http://github.com` to `https://github.com`).
*   Cleaned trailing whitespace, backslashes, and extraneous terms (e.g., removing trailing `" Model"` from messy links).
*   Stripped `.git` extensions from repository URLs to point directly to user-facing GitHub web pages.
*   Parsed owners and repository names to establish clean metadata fields.

## 2. Deduplication & Cleanup
*   Duplicate submissions were identified and consolidated.
*   All inactive, private, or 404 links were documented but kept in the active catalogue, clearly marked with a status of `INACTIVE / 404` to maintain metadata transparency.
*   A total of **22 project submissions** (19 active, 3 inactive) are catalogued.

## 3. Link Verification
Every normalized URL was checked programmatically to verify its availability status. Only verified, active links are marked as `ACTIVE`. Messey, broken, or 404 links are preserved but marked as `INACTIVE`.

## 4. Metadata Extraction & Credits Matching
Credits were compiled by cross-referencing registration records, submission repositories, and participant confirmation forms:
*   **Confirmed (`confirmed`):** High confidence match where email records, submitter name, and team name map perfectly to the repository link.
*   **Partial (`partial`):** Submitter email matched, but some team members did not submit exact confirmation forms, or multiple teams submitted the same repository.
*   **Inferred (`inferred`):** Submitter mistyped an email or submitted name clues that were matched manually using repository owner metadata.

## 5. Preservation of Original Ownership
*   **No ownership transfer is implied or claimed:** All codebases, designs, and copy remain the exclusive property of the original hackathon participants.
*   **No License Assumption:** Where no license file was present in the participant's repository, the license has been marked as `Not specified`.
