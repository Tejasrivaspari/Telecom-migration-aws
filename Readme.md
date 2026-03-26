# Telecom Backend Migration to AWS EKS

Migrated telecom billing and subscriber services from on-prem to AWS EKS with zero-downtime blue-green deployments.

## Architecture

## Tech Stack
- Terraform (EKS, VPC, RDS)
- Jenkins CI/CD (Blue-Green)  
- Docker + Kubernetes
- Node.js + Python APIs
- CloudWatch + Prometheus

## Quick Start
```bash
terraform init && terraform apply
kubectl apply -k k8s/
