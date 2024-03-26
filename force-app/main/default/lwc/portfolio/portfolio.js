import { LightningElement, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
 import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'


export default class PortfolioBanner extends LightningElement {

    fullName="K R Uday Kumar"
    designation="Senior Software Engineer"
    companyName="Apisero"
    companyLocation="Bengaluru,Karnataka"

    linkedinUrl = 'https://www.linkedin.com/in/k-r-uday-kumar'
    githubUrl = 'https://github.com/udaysibi'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/udakr'


    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

    recordId = 'a0V5i00000GpcB1EAJ'
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("record Data", JSON.stringify(data))
    //     }
    //     if(error){
    //         console.error("error", error)
    //     }
    // }

    // get fullName(){
    //     return getFieldValue(this.portfolioData.data, FULLNAME)
    // }
    // get companyLocation(){
    //     return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    // }
    // get companyName(){
    //     return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    // }
    // get designation(){
    //     return getFieldValue(this.portfolioData.data, DESIGNATION)
    // }

}