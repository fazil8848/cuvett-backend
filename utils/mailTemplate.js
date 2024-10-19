const emailContentExporter = (job) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exciting Job Opportunity</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4a90e2;
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .job-details {
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
        }
        .job-details h2 {
            color: #4a90e2;
            margin-top: 0;
        }
        .detail-row {
            display: flex;
            margin-bottom: 10px;
        }
        .detail-label {
            font-weight: 600;
            width: 130px;
            color: #555;
        }
        .detail-value {
            flex: 1;
        }
        .cta-button {
            display: inline-block;
            background-color: #4caf50;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
        .footer {
            background-color: #f1f3f5;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
        .footer a {
            color: #4a90e2;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Exciting Job Opportunity</h1>
        </div>
        <div class="content">
            <p>Hello there,</p>
            <p>We are thrilled to share an amazing job opening at <strong>${job.companyName}</strong> that could be the perfect match for your skills and aspirations!</p>
            
            <div class="job-details">
                <h2>🔍 Job Details</h2>
                <div class="detail-row">
                    <span class="detail-label">Job Title:</span>
                    <span class="detail-value">${job.jobTittle}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${job.jobDescription}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Experience:</span>
                    <span class="detail-value">${job.experienceLevel}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${job.location}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Salary:</span>
                    <span class="detail-value">${job.salary}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Apply Before:</span>
                    <span class="detail-value">${job.endDate}</span>
                </div>
            </div>
            
            <p>This opportunity aligns perfectly with your expertise. We'd be excited to have you join our team!</p>
            
            <center>
                <a href="${job.applyLink}" class="cta-button">Apply Now</a>
            </center>
        </div>
        <div class="footer">
            <p>If you have any questions, please contact us at <a href="mailto:${process.env.EMAIL}">${process.env.EMAIL}</a>.</p>
            <p>Best regards,<br><strong>${job.companyName} Hiring Team</strong></p>
        </div>
    </div>
</body>
</html>
`;
};

module.exports = { emailContentExporter };
