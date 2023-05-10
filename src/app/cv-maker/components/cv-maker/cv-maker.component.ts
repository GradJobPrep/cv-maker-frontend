import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CvMakerService } from '../../services/cv-maker.service';

@Component({
  selector: 'app-cv-maker',
  templateUrl: './cv-maker.component.html',
  styleUrls: ['./cv-maker.component.css'],
  providers: [CvMakerService]
})
export class CvMakerComponent {

  constructor(private formBuilder: FormBuilder, private cvMakerService: CvMakerService) { }

  checkoutForm = this.formBuilder.group({
    "firstName": "Shubham",
    "lastName": "Sharma",
    "designation": "Senior Software Engineer (4 years Exp.)",
    "currentCompany": "JP Morgan Chase",
    "yearsOfExperience": "August 2021- September 2021",
    "email": "shubhamsharma5170@gmail.com",
    "mobile": "9828886157",
    "linkedInUrl": "",
    "projectsWorkedUpon": this.formBuilder.array([{
      "nameOfProject": "Customer Onboarding",
      "nameOfOrganization": "Upstox",
      "durationOfProject": "March 2021-Present",
      "projectDescription": "Currently working on Customer Onboarding service which allows customers to open accounts in upstox working with BPMN frameworks and REST APIs in JAVA using Sprint Boot which manages customers on-boarding flow and takes care of various steps seamlessly.",
      "city": "Chennai, Tamil Nadu, India"
    },
    {
      "nameOfProject": "Billpay",
      "nameOfOrganization": "Fidelity Investment",
      "durationOfProject": "December 2017-August 2019",
      "projectDescription": "Worked on Billpay Project which allows feature of billpayment/ ebill to a third party or vendor, created and maintained secure REST APIs to facilitate that, as well as developing angular app for the same",
      "city": "Chennai, Tamil Nadu, India"
    },
    {
      "nameOfProject": "BankSetup",
      "nameOfOrganization": "Fidelity Investment",
      "durationOfProject": "December 2017-August 2019",
      "projectDescription": "Worked on Banksetup Project, which verifies a first party or third party beneficiary before adding it to a person’s account, created and maintained secure REST APIs to facilitate the same using Springboot and Dropwizard",
      "city": "Chennai, Tamil Nadu, India"
    },
    {
      "nameOfProject": "Leap Project",
      "nameOfOrganization": "Fidelity Campus",
      "durationOfProject": "July 2017-November 2017",
      "projectDescription": "Worked as Project Lead on Check Payment Stop Self Service, created a fully functioning app to help fidelity customer representatives to put stoppage on check issued by customer as per customer request",
      "city": "Chennai, Tamil Nadu, India"
    },
    {
      "nameOfProject": "Summer Internship",
      "nameOfOrganization": "Defense Research Development Organization",
      "durationOfProject": "15 May 2016-15 July 2016",
      "projectDescription": "Worked on Image Inpainting Techniques which included Bertalmio’s Algorithm, Oliveira’s Algorithm under the guidance of Mr Amit Shrivastava, Scientist-’F’ Grade",
      "city": "Hyderabad, Telangana, India"
    }]),
    "educationalDetails": this.formBuilder.array([{
      "nameOfDeegree": "Graduation",
      "nameOfOrganization": "Malviya National Institute of Technology",
      "durationOfDeegree": "2013-2017",
      "city": "Jaipur, Rajasthan, India",
      "score": "CGPA(on a scale of 10): 9.07"
    },
    {
      "nameOfDeegree": "Senior Secondary Education",
      "nameOfOrganization": "Central Academy School (C.B.S.E.)",
      "durationOfDeegree": "2012-2013",
      "city": "Alwar,Rajasthan, India",
      "score": "Percentage 90.04%"
    },
    {
      "nameOfDeegree": "Secondary Education",
      "nameOfOrganization": "Happy Public School (C.B.S.E.)",
      "durationOfDeegree": "2010-2011",
      "city": "Alwar,Rajasthan, India",
      "score": "CGPA(on a scale of 10): 10"
    }]),
    "listOfCertifications": this.formBuilder.array([
      {
        "name": "Oracle Certified Java 8 Professional",
        "maxScale": 100,
        "scored": 80
      },
      {
        "name": "Oracle Certified Java 8 Developer Associate",
        "maxScale": 100,
        "scored": 90
      },
      {
        "name": "AWS Certified Cloud Developer Associate",
        "maxScale": 100,
        "scored": 76
      }
    ]),
    "skills": this.formBuilder.array([
      {
        "skillName": "Java",
        "skillLevel": 5
      },
      {
        "skillName": "Rest APIs",
        "skillLevel": 5
      },
      {
        "skillName": "Spring",
        "skillLevel": 5
      },
      {
        "skillName": "CICD",
        "skillLevel": 5
      },
      {
        "skillName": "MongoDB",
        "skillLevel": 4
      },
      {
        "skillName": "SQL",
        "skillLevel": 4
      },
      {
        "skillName": "Cloud",
        "skillLevel": 4
      },
      {
        "skillName": "Splunk",
        "skillLevel": 4
      },
      {
        "skillName": "JS",
        "skillLevel": 3
      },
      {
        "skillName": "Angular",
        "skillLevel": 3
      },
      {
        "skillName": "C",
        "skillLevel": 3
      },
      {
        "skillName": "Agile",
        "skillLevel": 3
      }
    ]),
    "hobbies": this.formBuilder.array([])
  });



  onSubmit(): void {
    this.cvMakerService.createCV(this.checkoutForm).subscribe(blob => {
      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(blob)
      a.href = objectUrl
      a.download = 'cv.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
