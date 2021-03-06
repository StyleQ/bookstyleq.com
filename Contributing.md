# Contributing
This contributing guide was created with hopes and intentions to make collaboration as painless as possible on this project. In other to achieve that, there is room for this document to get better overtime so feel free to improve it if there is something you think can have a better documentation.

After cloning the repository, every solution to address a ticket should be created on their own separate branch.

```
git checkout -b your-new-branch && git pull origin staging
```

Make changes as needed on this branch and push those changes up to a remote for the custom branch. From that updated branch, you may now create a pull request for code review and keep other team members informed about the need for code review by moving the pull request into the **Needs Review** column.

## Needs Changes
When code is moved to **Needs Changes**, it means there are problems to be addressed before the issue can be regarded as complete or done. If this is a coding required issue, then the pull request or issue has not met all required objectives. To fix this, move the issue back to **To do** and address required changes, then move back to **Needs Review**.

## Merging
Code from a branch should only be merged in by the branch's author after review has been done and it has been moved to the **Reviewer approved** column of the project.

After review and approval, pull requests get merged into `staging` and becomes available for preview at [https://staging--styleq.netlify.com/]()

## Commits
To keep a convention across our commit history for the benefit of readability and clarity, follow this [git commiting guide](https://chris.beams.io/posts/git-commit/).

## Reviewing
When reviewing work of other contributors, be kinda and try to be as less opinionated as possible. We have linting rules to check for a lot of errors and enforce adherence to accepted patterns within the project. If some preference is not covered by our linter, try to explain why given preference is chosen or preferred. And always link valuable resource where possible.
