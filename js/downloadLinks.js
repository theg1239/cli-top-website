fetch("https://raw.githubusercontent.com/theg1239/cli-top-website/refs/heads/main/latest.json")
  .then(response => response.json())
  .then(data => {
    console.log(data.version);
    
    const windowsAnchorTag = document.getElementById("windows-download-link");
    const linuxAnchorTag = document.getElementById("linux-download-link");
    const macAnchorTag = document.getElementById("mac-download-link");
    const androidAnchorTag = document.getElementById("android-download-link");
    const windowsInstallerAnchorTag = document.getElementById("windows-installer-download-link");

    // The link to the download is a direct link to the file on the deployed repository
    // TODO: Change link to "`https://github.com/ACM-VIT/<cli-top-website>/..." once the repository is made under ACM-VIT organization


    windowsAnchorTag.href = `https://github.com/theg1239/cli-top-website/raw/main/buildFiles/v${data.version}/cli-top-windows_v${data.version}.zip`;
    linuxAnchorTag.href = `https://github.com/theg1239/cli-top-website/raw/main/buildFiles/v${data.version}/cli-top-linux_v${data.version}.zip`;
    macAnchorTag.href = `https://github.com/theg1239/cli-top-website/raw/main/buildFiles/v${data.version}/cli-top-macos_v${data.version}.zip`;
    androidAnchorTag.href = `https://github.com/theg1239/cli-top-website/raw/main/buildFiles/v${data.version}/cli-top-android_v${data.version}.zip`;
    windowsInstallerAnchorTag.href = `https://github.com/theg1239/cli-top-website/raw/main/buildFiles/v${data.version}/cli-top-windows-installer_v${data.version}.exe`;

    windowsAnchorTag.innerText = `v${data.version}`;
    linuxAnchorTag.innerText = `v${data.version}`;
    macAnchorTag.innerText = `v${data.version}`;
    androidAnchorTag.innerText = `v${data.version}`;
    windowsInstallerAnchorTag.innerText = `v${data.version}`;
});