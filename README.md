# CI/CD Pipeline: GitHub to Azure Web App

This guide provides steps to set up a Continuous Integration and Continuous Deployment (CI/CD) pipeline to automatically deploy code from a GitHub repository to an Azure Web App. This pipeline uses GitHub Actions to trigger builds and deployments on commits or pull requests.

## Steps to set-up

1. **GitHub Repository**: Have a GitHub repository with your application code
2. **Azure Web App**: Create an Azure Web App in the [Azure portal](https://portal.azure.com/).
3. **Azure Web Secret Key**: In the created Azure Web App, click on 'Download Publish Profile'. This generates a secret key
4. **Repository Secret**: In your repository, Settings > Secrets and Variables > Actions. Add the secret key as a new repository secret
5. **Github Actions Workflow**: In your GitHub repository, create a `.github/workflows/config.yml` file to add YAML file
