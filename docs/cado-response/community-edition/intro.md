---
sidebar_position: 1
id: community-intro
title: Summary
---

# Cado Response Community Edition
[Cado Response](/cado-response/intro) is *the* cloud investigation platform that empowers security teams to respond to threats at cloud speed. Cado Response Community Edition is a free version of Cado Response that lets you analyze:

- Disk images captured in DD format
- Exports of triaged items from open source forensics tools like KAPE and Velociraptor
- Sample data - e.g data published by Cado that illustrates different types of issues incident responders might encounter across server-based, container-based and serverless systems in the cloud.
With Cado Response Community Edition, users can:
Navigate files and folders 
View a  timeline of activities performed on the system
Analyze captured artifacts for threats and indicators of compromise
Easily pivot and search across artifacts 


### Benefits
Cado Response Community Edition gives you:
- **Cloud Scale and Speed** - Adding the speed of cloud-native analysis to their existing data capture processes
- **Automated Analysis** - Performing automated analysis of systems using built-in detections provided by experts in the Cado Labs team 
- **Easier Sharing** - Easier sharing of artifacts and findings using a cloud-based system
---------

## Getting Started
Interested in getting started?  Here are some of the most frequently accessed help topics. 

### Signing up for Cado Response Community Edition
The Cado Response Community Edition website page is **COMING SOON!**. Once signed up, a Cado representative will send you a license and link to our CloudFormation template.


### Deploying in your cloud environment
How to deploy Cado Response Community Edition in your cloud environment in AWS. Please note that Cado Response Community Edition only supports CloudFormation deployment in AWS. Also, although there are many configurable deployment settings accepting the default values will work well for Cado Response Community Edition. You’ll need a key pair in case you want to access the SSH port of the system (however, for the Community Edition this probably won’t be necessary). Lastly, we recommend that you take advantage of the IP address restrictions available.

**[Learn how >](/cado-response/getting-started/deploy/aws-deploy)**


### Processing Data
After deploying Cado Response Community Edition,  you can import data from the S3 bucket created by the CloudFormation template (you can find the identifier under CloudFormation - Stacks - *stack name* - Outputs - S3Bucket). Please note that all other options will be unavailable. Also, please note that Cado Response Community Edition will only analyze .dd, dd.gz, and .zip files

**[Learn how >](/cado-response/importing-data/importing)**

### Analyzing Evidence
Data which is imported is automatically processed, analyzed and added to the platform.  Automatic detections, timeline of events and more are available for investigation.

**[Learn how >](/cado-response/investigating/investigate)**

---------

## How does Cado Response Community Edition differ from the full Cado Response Platform?
The Cado Response Community Edition provides only a subset of the features that are available in the enterprise version of the Cado Response platform.
In addition to the features available in the Cado Response Community Edition, The enterprise version of the Cado Response Platform also supports:

- Automated capture and processing of data cloud based systems across AWS, Azure and Google Cloud Platform
- Analysis of container based, serverless and infrastructure as code artifacts
- Automated integration of threat feeds and YARA rules
- API and automated capture and processing of data
- Multiple concurrent users with role-based access

