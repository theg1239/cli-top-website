# CLI-TOP WEBSITE

A Command Line Interface (CLI) tool for _seamless interaction_ with the student portal, VTOP.

## To add new build files, you first need to clone this repository. Follow these steps:

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Git: [Download Git](https://git-scm.com/downloads)

### Fork the Repository

1. Open your web browser and go to the [repository](https://github.com/ACM-VIT/cli-top-website).

2. Click the "Fork" button in the upper right corner of the page. This will create a copy of the repository in your GitHub account.

### Clone the Repository

1. Open your terminal.

2. Navigate to the directory where you want to clone the repository.

3. Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

## Once you have cloned your fork of this repository locally, follow these steps to add the build files

1. Create a new folder in the `buildFiles` directory with the name as the version of your update. Say:
   `v1.0.1`

2. Add separate build files in this folder for each of the OS versions for which you have build files with the following syntax:
   `cli-top_<os_name>_v<version_number>.zip`

3. Update the `latest.json` file with the new version numbers **only for the OS's for which your update applies** (Do not add new values, update the existing version numbers with the newer ones)

## Once the build files have been added, you need to commit, push these changes and create a pull request

These instructions will help you make a request to modify the repository with your new build files.

### Push the changes to your fork on GitHub:

1. Open your terminal.
2. Navigate to the directory where you cloned your repository
3. Commit and push the changes that you have made:

```bash
git add .
git commit -m "commit_name"
git push
```

### Make a pull request to get your changes reviewed and finally, merged.

1.  Go to your forked repository on GitHub.

2.  Open the Pull Requests tab on the top of the page.

3.  Click on the `New pull request` button.

4.  Review your changes and click "Create pull request."

5.  Add a title and description to your pull request, then click "Create pull request."

6.  Your changes are now proposed to be merged into the original repository. The project maintainer will review and merge your changes.

# Authors

- [Amritsai](https://github.com/gekyxme)
- [K.Dhanush Baalaji](https://github.com/Realitylion)
