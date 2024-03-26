import { LightningElement } from 'lwc';

export default class Portfolioandstats extends LightningElement {
    handleDownload() {
       window.open("https://github.com/udaysibi/resume-uday/blob/main/Uday_ResumeNag.pdf","__blank")
    }
}