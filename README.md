# My Lambda Project

This project is an AWS Lambda function that returns a simple "Hello, World!" message. 

## Project Structure

```
my-lambda-project
├── src
│   ├── index.js          # Entry point of the Lambda function
│   └── handlers
│       └── helloWorld.js # Contains the helloWorld function
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine
- AWS CLI configured with your credentials

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-lambda-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Deploying the Lambda Function

1. Package the Lambda function:
   ```
   npm run build
   ```

2. Deploy the function using AWS CLI:
   ```
   aws lambda create-function --function-name HelloWorldFunction --zip-file fileb://function.zip --handler src/index.handler --runtime nodejs14.x --role <your-iam-role-arn>
   ```

### Invoking the Lambda Function

You can invoke the function using the AWS CLI:
```
aws lambda invoke --function-name HelloWorldFunction output.txt
```

The output will be saved in `output.txt`. You should see the message "Hello, World!" in the output.