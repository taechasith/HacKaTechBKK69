document.addEventListener('DOMContentLoaded', () => {
    let projectsData = [];
    let currentFilter = 'all';
    let searchQuery = '';
    let activeOnly = false;

    // DOM Elements
    const projectGrid = document.getElementById('project-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activeOnlyCheckbox = document.getElementById('active-only-checkbox');
    const resultsCount = document.getElementById('results-count');

    // Fetch projects database
    fetch('data/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            projectsData = data;
            renderProjects();
        })
        .catch(error => {
            console.error('Failed to load project database:', error);
            projectGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Failed to load project archive database. Please check local JSON file.
                </div>
            `;
        });

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProjects();
    });

    // Handle filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active states
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            renderProjects();
        });
    });

    // Handle active-only checkbox
    activeOnlyCheckbox.addEventListener('change', (e) => {
        activeOnly = e.target.checked;
        renderProjects();
    });

    // Render projects grid
    function renderProjects() {
        // Filter projects
        const filtered = projectsData.filter(project => {
            // 1. Filter by category
            if (currentFilter !== 'all' && project.civic_area !== currentFilter) {
                return false;
            }

            // 2. Filter by status (active only)
            if (activeOnly && project.status !== 'active') {
                return false;
            }

            // 3. Filter by search query
            if (searchQuery) {
                const nameMatch = project.name.toLowerCase().includes(searchQuery);
                const ownerMatch = project.owner.toLowerCase().includes(searchQuery);
                const summaryMatch = project.summary.toLowerCase().includes(searchQuery);
                const summaryThMatch = project.summary_th.toLowerCase().includes(searchQuery);
                const techMatch = project.tech_stack.toLowerCase().includes(searchQuery);
                const creditsMatch = project.credits.toLowerCase().includes(searchQuery);

                if (!nameMatch && !ownerMatch && !summaryMatch && !summaryThMatch && !techMatch && !creditsMatch) {
                    return false;
                }
            }

            return true;
        });

        // Update counts
        resultsCount.textContent = `Showing ${filtered.length} project${filtered.length === 1 ? '' : 's'}`;

        // Clear grid
        projectGrid.innerHTML = '';

        if (filtered.length === 0) {
            projectGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    No projects found matching your criteria.
                </div>
            `;
            return;
        }

        // Generate Cards
        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';

            // Split tech stack into tags
            const techList = p.tech_stack !== 'Unspecified' ? p.tech_stack.split(', ') : [];
            const techTagsHtml = techList.map(t => `<span class="tech-tag">${t}</span>`).join('');

            card.innerHTML = `
                <div class="card-header">
                    <h3 class="card-title">${p.name}</h3>
                    <span class="status-badge ${p.status}">${p.status.replace('_', ' ')}</span>
                </div>
                <div class="card-meta">
                    <span class="area-badge"><i class="fa-solid fa-city"></i> ${p.civic_area}</span>
                    <span class="owner-badge"><i class="fa-brands fa-github"></i> ${p.owner}</span>
                </div>
                <div class="card-body">
                    <p class="card-desc">${p.summary}</p>
                    <p class="card-desc-th">${p.summary_th}</p>
                    ${techList.length > 0 ? `<div class="tech-tags">${techTagsHtml}</div>` : ''}
                </div>
                <div class="card-footer">
                    <a href="${p.url}" target="_blank" class="btn-card btn-card-primary">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Original
                    </a>
                    <a href="projects/${p.id}.md" class="btn-card btn-card-secondary">
                        <i class="fa-solid fa-file-lines"></i> Archive Note
                    </a>
                </div>
            `;
            projectGrid.appendChild(card);
        });
    }
});
