fetch("../latest.json")
  .then(response => response.json())
  .then(data => {
    console.log(data.version);

    if (data.killSwitch === 1) {
      console.warn("Downloads are disabled due to the kill switch.");
      
      document.getElementById("download-section").innerHTML = "<p>Downloads are currently disabled.</p>";
      return;
    }

    const windowsAnchorTag = document.getElementById("windows-download-link");
    const linuxAnchorTag = document.getElementById("linux-download-link");
    const macAnchorTag = document.getElementById("mac-download-link");
    const androidAnchorTag = document.getElementById("android-download-link");
    const windowsInstallerAnchorTag = document.getElementById("windows-installer-download-link");

    const baseUrl = "https://github.com/technical-director-acmvit/cli-top-website/raw/main/buildFiles";

    windowsAnchorTag.href = `${baseUrl}/v${data.version}/cli-top-windows_v${data.version}.zip`;
    linuxAnchorTag.href = `${baseUrl}/v${data.version}/cli-top-linux_v${data.version}.zip`;
    macAnchorTag.href = `${baseUrl}/v${data.version}/cli-top-macos_v${data.version}.zip`;
    androidAnchorTag.href = `${baseUrl}/v${data.version}/cli-top-android_v${data.version}.zip`;
    windowsInstallerAnchorTag.href = `${baseUrl}/v${data.version}/cli-top-windows-installer_v${data.version}.exe`;

    windowsAnchorTag.innerText = `v${data.version}`;
    linuxAnchorTag.innerText = `v${data.version}`;
    macAnchorTag.innerText = `v${data.version}`;
    androidAnchorTag.innerText = `v${data.version}`;
    windowsInstallerAnchorTag.innerText = `v${data.version}`;
  })
  .catch(error => {
    console.error("Error fetching latest.json:", error);
  });
