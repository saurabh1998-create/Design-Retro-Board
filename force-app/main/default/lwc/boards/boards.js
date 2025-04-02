import { LightningElement } from 'lwc';
import BOARD from '@salesforce/schema/Board__c'
import BOARD_NAME from '@salesforce/schema/Board__c.Name'
import BOARD_DESCRIPTION from '@salesforce/schema/Board__c.Description__c'
import BOARD_NO_OF_DESCRIPTION from '@salesforce/schema/Board__c.NoOfSections__c'


export default class Boards extends LightningElement {

    showModalPop = false

    objectApiName=BOARD
    recordId=''
    nameField=BOARD_NAME
    DescriptionField=BOARD_DESCRIPTION
    noOfSectionsField= BOARD_NO_OF_DESCRIPTION
    sections = []


    popupCloseHandler(){
        this.showModalPop = false

    }

    addHandler(){
        this.showModalPop = true
    }

    addSectionchangeHandler(event){
        let noOfsections = event.target.value
        this.sections =[]

        for (let index = 0; index < noOfsections; index++) {
           this.sections.push({id : index, sectionlabel: `Section ${index+1} Title`})
            
        }
        console.log('array===='+this.sections);
        
    }
    handleSubmit(event){
        

    }
}