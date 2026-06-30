# HacKaTechBKK69 Archive Methodology 🧪

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

## Participant perspective and privacy method

This archive uses participant perspective only in aggregated and privacy-preserving form. The organizer originally collected confirmation forms, review forms, project links, team names, and post-event reflections through private spreadsheets. Those files may contain personal information such as names, emails, phone numbers, payment proof, health notes, emergency contacts, and private comments. These raw files are not published in this repository.

For public documentation, the archive only uses:
*   public project links,
*   public or organizer-approved team/project credits,
*   aggregated feedback themes,
*   non-identifying learning themes,
*   and project-level interpretation based on public repositories, submitted project links, and sanitized organizer analysis.

The project-intersection analysis is therefore an interpretive archive layer, not a release of raw survey data. It is meant to help future organizers, educators, civic-tech communities, sponsors, researchers, and youth builders understand what kinds of public problems emerged from the hackathon and how participants learned through the process.

## Data limitations

The repository does not include the original private spreadsheets. Some civic-area tags are inferred from project names, public links, and sanitized feedback themes. These tags should be treated as provisional until each team confirms its own public project summary. Where credit matching was partial or inferred, the archive marks uncertainty instead of silently resolving it.
