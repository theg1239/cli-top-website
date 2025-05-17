async function loadChangelogData() {
    try {
        const [releasesResponse, latestResponse] = await Promise.all([
            fetch("../releases.json"),
            fetch("../latest.json")
        ]);
        
        const releasesData = await releasesResponse.json();
        const latestData = await latestResponse.json();
        
        if (!releasesData || !releasesData.releases || !Array.isArray(releasesData.releases)) {
            throw new Error("Invalid releases data format");        }        const versionList = document.querySelector(".version-list");
        versionList.innerHTML = "";
        
        const currentVersionElement = document.createElement("div");
        currentVersionElement.className = "current-version";
        currentVersionElement.innerHTML = `<p>Current version: <span class="version-number">v${latestData.version}</span> — downloads available in the <span class="tilde">/Download</span> tab</p>`;
        versionList.appendChild(currentVersionElement);
        
        // Group releases by major version
        const majorVersions = {};
        releasesData.releases.forEach(release => {
            const version = release.version;
            const majorVersion = version.split('.')[0];
            
            if (!majorVersions[majorVersion]) {
                majorVersions[majorVersion] = [];
            }
            
            majorVersions[majorVersion].push(release);
        });
        
        // Display releases grouped by major version
        Object.keys(majorVersions).sort((a, b) => b - a).forEach(majorVersion => {
            // Create major version group
            const majorVersionGroup = document.createElement("div");
            majorVersionGroup.className = "major-version-group";
            
            // Create major version header
            const majorVersionHeader = document.createElement("h2");
            majorVersionHeader.className = "major-version-header";
            majorVersionHeader.textContent = `Version ${majorVersion}.x`;
            majorVersionGroup.appendChild(majorVersionHeader);
            
            // Sort releases within this major version (newest first)
            const releases = majorVersions[majorVersion].sort((a, b) => {
                return parseFloat(b.version) - parseFloat(a.version);
            });
            
            // Create releases list for this major version
            releases.forEach(release => {
            const versionElement = document.createElement("div");
            versionElement.className = "version-entry";
            
            const isCurrent = release.version === latestData.version;
            if (isCurrent) {
                versionElement.classList.add("current");
            }
            
            const releaseDate = new Date(release.releaseDate);
            const formattedDate = releaseDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            const versionHeader = document.createElement("h3");
            versionHeader.innerHTML = `v${release.version} <span class="release-date">${formattedDate}</span>`;
            if (isCurrent) {
                versionHeader.innerHTML += ' <span class="current-badge">current</span>';
            }
            versionElement.appendChild(versionHeader);
            
            const changesList = document.createElement("ul");
            changesList.className = "changes-list";
            
            release.changes.forEach(change => {
                const changeItem = document.createElement("li");
                changeItem.textContent = change;
                changesList.appendChild(changeItem);
            });                versionElement.appendChild(changesList);
            
            if (isCurrent) {
                const downloadSection = document.createElement("div");
                downloadSection.className = "version-downloads";
                
                const baseUrl = "https://github.com/technical-director-acmvit/cli-top-website/raw/main/buildFiles";
                
                const platforms = [
                    { name: "Windows", file: `cli-top-windows_v${release.version}.zip` },
                    { name: "Linux", file: `cli-top-linux_v${release.version}.zip` },
                    { name: "MacOS", file: `cli-top-macos_v${release.version}.zip` },
                    { name: "Android", file: `cli-top-android_v${release.version}.zip` },
                    { name: "Windows Installer", file: `cli-top-windows-installer_v${release.version}.exe` }
                ];
                
                platforms.forEach(platform => {
                    const downloadLink = document.createElement("a");
                    downloadLink.href = `${baseUrl}/v${release.version}/${platform.file}`;
                    downloadLink.className = "version-download-link";
                    downloadLink.textContent = platform.name;
                    downloadLink.setAttribute("download", "");
                    downloadLink.setAttribute("target", "_blank");
                    downloadSection.appendChild(downloadLink);
                });
                
                versionElement.appendChild(downloadSection);
            }
            
                majorVersionGroup.appendChild(versionElement);
            });
            
            versionList.appendChild(majorVersionGroup);
        });
        
    } catch (error) {
        console.error("Error loading changelog data:", error);
        const versionList = document.querySelector(".version-list");
        versionList.innerHTML = "<p>Error loading release history. Please try again later.</p>";
    }
}

export { loadChangelogData };
