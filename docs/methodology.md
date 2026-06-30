# Archive Creation Methodology 🛠️

This archive was created to preserve the technological outputs of the HacKaTech BKK 69 hackathon (June 18-20, 2026). Below is the systematic approach taken to normalize and compile this repository.

---

## 1. URL Collection and Normalization
Raw project submissions often contained formatting inconsistencies, trailing spaces, or redundant `.git` extensions. All URLs were normalized using the following rules:
*   Standardized all protocols to `https://` (e.g. converting `http://github.com` to `https://github.com`).
*   Cleaned trailing whitespace, backslashes, and extraneous terms (e.g., removing trailing `" Model"` from messy links).
*   Stripped `.git` extensions from repository URLs to point directly to user-facing GitHub web pages.
*   Parsed owners and repository names to establish clean metadata fields.

## 2. Deduplication & Cleanup
*   Duplicate submissions were identified and consolidated.
*   All inactive, private, or 404 links were purged from the active catalog to maintain a high-quality list of working repositories. The final archive catalogs **19 active project submissions**.

## 3. Link Verification
Every normalized URL was checked programmatically to verify its availability status. Only verified, active links are included in the primary index.

## 4. Metadata Extraction
For active repositories, public README documentation was programmatically analyzed to extract:
*   Project summaries.
*   Associated team names (e.g., *SixDucks*, *เจ็ดจริงดิ!*, *Flip flops*, *I love My Job*).
*   Civic track classifications (e.g. Mobility, Flooding, Public Services, environment, Welfare).
*   Inferred technical stacks (Node.js, Next.js, Android, Python, etc.).

## 5. Preservation of Original Ownership
*   **No ownership transfer is implied or claimed:** All codebases, designs, and copy remain the exclusive property of the original hackathon participants.
*   **No License Assumption:** Where no license file was present in the participant's repository, the license has been marked as `Unspecified`.
