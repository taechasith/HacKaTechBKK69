# Archive Creation Methodology 🛠️

This archive was created to preserve the technological outputs of the HacKaTech BKK 69 hackathon (June 18-20, 2026). Below is the systematic approach taken to normalize and compile this repository.

---

## 1. URL Collection and Normalization
Raw project submissions often contained formatting inconsistencies, trailing spaces, or redundant `.git` extensions. All URLs were normalized using the following rules:
*   Standardized all protocols to `https://` (e.g. converting `http://github.com` to `https://github.com`).
*   Cleaned trailing whitespace, backslashes, and extraneous terms (e.g., removing trailing `" Model"` from messy links).
*   Stripped `.git` extensions from repository URLs to point directly to user-facing GitHub web pages.
*   Parsed owners and repository names to establish clean metadata fields.

## 2. Deduplication
Duplicate submissions (often identical repositories submitted by different team members or repeated entries) were identified and consolidated. The final index contains **22 unique project submissions**.

## 3. Link Verification
Every normalized URL was checked programmatically to verify its availability status:
*   **Active:** The repository/deployment is live and public.
*   **Inactive (404):** The link is currently returning a 404 error (possibly deleted, made private, or contains typos in the original submission). These links are preserved transparently in the index to maintain a complete history of the event's submissions.

## 4. Metadata Extraction
For active repositories, public README documentation was programmatically analyzed to extract:
*   Project summaries.
*   Associated team names (e.g., *SixDucks*, *เจ็ดจริงดิ!*, *Flip flops*, *I love My Job*).
*   Civic track classifications (e.g. Mobility, Flooding, Public Services, environment, Welfare).
*   Inferred technical stacks (Node.js, Next.js, Android, Python, etc.).

## 5. Preservation of Original Ownership
*   **No ownership transfer is implied or claimed:** All codebases, designs, and copy remain the exclusive property of the original hackathon participants.
*   **No License Assumption:** Where no license file was present in the participant's repository, the license has been marked as `Unspecified`.
