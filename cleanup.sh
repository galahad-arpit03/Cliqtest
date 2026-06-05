#!/bin/bash
mkdir -p public/images public/videos public/logos
mv "public/about/hero.png" "public/images/about-hero.png"
mv "public/assets/landing hero.png" "public/images/landing-hero.png"
mv "public/assets/brain.png" "public/images/brain.png"
mv "public/landing page/enterprise.png" "public/images/enterprise.png"
mv "public/landing page/ai agent.png" "public/images/ai-agent.png"
mv "public/landing page/Testcase.png" "public/images/testcase.png"
mv "public/landing page/2.png" "public/images/2.png"
mv "public/landing page/bn.png" "public/images/bn.png"
mv "public/landing page/env.png" "public/images/env.png"
mv "public/nocode-automation/automation1.png" "public/images/automation1.png"

mv "public/assets/brain.mp4" "public/videos/brain.mp4"
mv "public/assets/b.mp4" "public/videos/b.mp4"
mv "public/landing page/brain.mp4" "public/videos/landing-brain.mp4"

mv "public/logos/vscode-removebg-preview.png" "public/logos/vscode.png"
mv "public/logos/jira-removebg-preview.png" "public/logos/jira.png"
mv "public/logos/git-removebg-preview.png" "public/logos/git.png"
mv "public/logos/docker-removebg-preview.png" "public/logos/docker.png"
mv "public/logos/jenkins-removebg-preview.png" "public/logos/jenkins.png"
mv "public/logos/aws-removebg-preview.png" "public/logos/aws.png"

mv "public/logo/logo.png" "public/logos/logo.png"
mv "public/logo/bglogo.png" "public/logos/bglogo.png"

# Search and replace
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/about/hero.png|/images/about-hero.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/assets/landing hero.png|/images/landing-hero.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/assets/brain.png|/images/brain.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/enterprise.png|/images/enterprise.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/ai agent.png|/images/ai-agent.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/Testcase.png|/images/testcase.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/2.png|/images/2.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/bn.png|/images/bn.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/env.png|/images/env.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/nocode-automation/automation1.png|/images/automation1.png|g'

find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/assets/brain.mp4|/videos/brain.mp4|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/assets/b.mp4|/videos/b.mp4|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/landing page/brain.mp4|/videos/landing-brain.mp4|g'

find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/vscode-removebg-preview.png|/logos/vscode.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/jira-removebg-preview.png|/logos/jira.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/git-removebg-preview.png|/logos/git.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/docker-removebg-preview.png|/logos/docker.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/jenkins-removebg-preview.png|/logos/jenkins.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logos/aws-removebg-preview.png|/logos/aws.png|g'

find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logo/logo.png|/logos/logo.png|g'
find src app -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's|/logo/bglogo.png|/logos/bglogo.png|g'

rmdir public/about public/assets "public/landing page" public/nocode-automation public/logo 2>/dev/null || true
