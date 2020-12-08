const express = require('express')
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express()
app.use(bodyParser.json())

app.post('/api/warnings', (req, res) => {
    let request = JSON.parse(JSON.stringify(req.body.params.businessRules));
    let requestKeys = Object.keys(request);
    let requestValues = Object.values(request);
    let errorFlag = 0;
    let obj = {
        businessRules : {}
    }

    for (let i = 0; i < requestKeys.length; i++) {
        let resp = controller(requestValues[i]);
        let responseBR = {}
        if (Object.keys(resp).length > 0) {
            
            responseBR = {
                errorKeywords : resp,
                status : 'error'
            } 
            errorFlag++;
            obj.businessRules[requestKeys[i]] = responseBR
        }
    }

    if (!(errorFlag > 0)) {
        obj = {
            message : 'The Business Rules are following the Best practices recommended',
            status : 'success'
        }
    }

    let response = obj

    res.send({ response: response })
});

app.post('/api/all', (req, res) => {
    let request = JSON.parse(JSON.stringify(req.body.params.businessRules));
    let requestKeys = Object.keys(request);
    let requestValues = Object.values(request);
    let errorFlag = 0;
    let obj = {
        businessRules : {},
        status : ''
    }

    for (let i = 0; i < requestKeys.length; i++) {
        let resp = controller(requestValues[i]);
        let responseBR = {}
        if (Object.keys(resp).length > 0) {
            
            responseBR = {
                errorKeywords : resp,
                status : 'error'
            } 
            errorFlag++;            
        }
        else{
            responseBR = {
                message : 'This Business Rule is following the Best practices recommended',
                status : 'success'
            }
        }
        obj.businessRules[requestKeys[i]] = responseBR
    }

    let response = obj

    res.send({ response: response })
});

const controller = (br) => {

    let keyWordList = [
        "GetEntityIds",
        "GetWhereUsedEntityIds",
        "IsEntityInWorkflow",
        "IsEntityInWorkflowInContext",
        "InvokeWorkflow",
        "ResumeWorkflow",
        "ResumeWorkflowInContext",
        "ResumeRelatedEntityWorkflow",
        "GetRelatedEntityIds",
        "GetRelatedEntityIdsForContext",
        "GetRestAPIResponse",
        "CreateEntity",
        "DeleteEntity",
        "CreateSnapshot",
        "RestoreSnapshot",
        "SetEntityAttributeValue",
        "SetEntityAttributeValueForContext",
        "AddEntityNestedAttributeRow",
        "SetRelatedEntityAttributeValue",
        "SetRelatedEntityAttributeValueForContext",
        "GetEntityBusinessConditionStatus",
        "GetEntityBusinessConditionStatus",
        "GetEntityAttributeValueById",
        "GetEntityAttributeValueByIdInContext",
        "SendEntityForGraphProcessing",
        "SendWhereUsedEntitiesForGraphProcessing",
        "InitiateExport",
        "InitiateExportInContext",
        "InitiateExportInLocale",
        "InitiateExportInContextAndLocale",
        "InitiateExportInContextAndLocale",
        "InitiateExportForDeletedEntity",
        "InitiateExportForEntity"
    ]

    let obj = {}
   
    for (let i = 0; i < keyWordList.length; i++) {
        if (br.includes(keyWordList[i]+'[') === true) {
            
            switch (keyWordList[i]) {

                case "GetEntityIds":
                    let getEntityIds = GetEntityIds(br);
                    if (getEntityIds !== null) {
                        obj["GetEntityIds"] = getEntityIds;
                    }
                    break;
                
                case "GetWhereUsedEntityIds":
                    let getWhereUsedEntityIds = GetWhereUsedEntityIds(br);
                    if (getWhereUsedEntityIds !== null) {
                        obj["GetWhereUsedEntityIds"] = getWhereUsedEntityIds;   
                    }
                    break;

                case "IsEntityInWorkflow":
                    let isEntityInWorkflow = keywordCountCommonMethod(br , 'IsEntityInWorkflow' , 1);
                    if (isEntityInWorkflow !== null) {
                        obj["IsEntityInWorkflow"] = isEntityInWorkflow;   
                    }
                    break;

                case "IsEntityInWorkflowInContext":
                    let isEntityInWorkflowInContext = keywordCountCommonMethod(br , 'IsEntityInWorkflowInContext' , 1);
                    if (isEntityInWorkflowInContext !== null) {
                        obj["IsEntityInWorkflow"] = isEntityInWorkflowInContext;   
                    }
                    break;

                case "InvokeWorkflow":
                    let invokeWorkflow = keywordCountCommonMethod(br , 'InvokeWorkflow' , 5);
                    if (invokeWorkflow !== null) {
                        obj["InvokeWorkflow"] = invokeWorkflow;   
                    }
                    break;

                case "ResumeWorkflow":
                    let resumeWorkflow = ResumeWorkflow(br);
                    if (resumeWorkflow !== null) {
                        obj["ResumeWorkflow"] = resumeWorkflow;   
                    }
                    break;

                case "ResumeWorkflowInContext":
                    let resumeWorkflowInContext = keywordCountCommonMethod(br , 'ResumeWorkflowInContext' , 5);
                    if (resumeWorkflowInContext !== null) {
                        obj["ResumeWorkflowInContext"] = resumeWorkflowInContext;   
                    }
                    break;

                case "ResumeRelatedEntityWorkflow":
                    let resumeRelatedEntityWorkflow = ResumeRelatedEntityWorkflow(br);
                    if (resumeRelatedEntityWorkflow !== null) {
                        obj["ResumeRelatedEntityWorkflow"] = resumeRelatedEntityWorkflow;   
                    }
                    break;

                case "GetRelatedEntityIds":
                    let getRelatedEntityIds = GetRelatedEntityIds(br);
                    if (getRelatedEntityIds !== null) {
                        obj["GetRelatedEntityIds"] = getRelatedEntityIds;   
                    }
                    break;

                case "GetRelatedEntityIdsForContext":
                    let getRelatedEntityIdsForContext = GetRelatedEntityIdsForContext(br);
                    if (getRelatedEntityIdsForContext !== null) {
                        obj["GetRelatedEntityIdsForContext"] = getRelatedEntityIdsForContext;   
                    }
                    break;

                case "GetRestAPIResponse":
                    let getRestAPIResponse = GetRestAPIResponse(br);
                    if (getRestAPIResponse !== null) {
                        obj["GetRestAPIResponse"] = getRestAPIResponse;   
                    }
                    break;

                case "CreateEntity":
                    let createEntity = CreateEntity(br);
                    if (createEntity !== null) {
                        obj["CreateEntity"] = createEntity;   
                    }
                    break;

                case "DeleteEntity":
                    let deleteEntity = DeleteEntity(br);
                    if (deleteEntity !== null) {
                        obj["DeleteEntity"] = deleteEntity;   
                    }
                    break;

                case "CreateSnapshot":
                    let createSnapshot = CreateSnapshot(br);
                    if (createSnapshot !== null) {
                        obj["CreateSnapshot"] = createSnapshot;   
                    }
                    break;

                case "RestoreSnapshot":
                    let restoreSnapshot = RestoreSnapshot(br);
                    if (RestoreSnapshot !== null) {
                        obj["IsEntityInWorkflow"] = restoreSnapshot;   
                    }
                    break;

                case "SetEntityAttributeValue":
                    let setEntityAttributeValue = SetEntityAttributeValue(br);
                    if (setEntityAttributeValue !== null) {
                        obj["SetEntityAttributeValue"] = setEntityAttributeValue;   
                    }
                    break;

                case "SetEntityAttributeValueForContext":
                    let setEntityAttributeValueForContext = SetEntityAttributeValueForContext(br);
                    if (setEntityAttributeValueForContext !== null) {
                        obj["SetEntityAttributeValueForContext"] = setEntityAttributeValueForContext;   
                    }
                    break;

                case "AddEntityNestedAttributeRow":
                    let addEntityNestedAttributeRow = AddEntityNestedAttributeRow(br);
                    if (addEntityNestedAttributeRow !== null) {
                        obj["AddEntityNestedAttributeRow"] = addEntityNestedAttributeRow;   
                    }
                    break;

                case "SetRelatedEntityAttributeValue":
                    let setRelatedEntityAttributeValue = SetRelatedEntityAttributeValue(br);
                    if (setRelatedEntityAttributeValue !== null) {
                        obj["SetRelatedEntityAttributeValue"] = setRelatedEntityAttributeValue;   
                    }
                    break;

                case "SetRelatedEntityAttributeValueForContext":
                    let setRelatedEntityAttributeValueForContext = SetRelatedEntityAttributeValueForContext(br);
                    if (setRelatedEntityAttributeValueForContext !== null) {
                        obj["SetRelatedEntityAttributeValueForContext"] = setRelatedEntityAttributeValueForContext;   
                    }
                    break;

                case "GetEntityBusinessConditionStatus":
                    let getEntityBusinessConditionStatus = GetEntityBusinessConditionStatus(br);
                    if (getEntityBusinessConditionStatus !== null) {
                        obj["GetEntityBusinessConditionStatus"] = getEntityBusinessConditionStatus;   
                    }
                    break;

                case "GetEntityAttributeValueById":
                    let getEntityAttributeValueById = GetEntityAttributeValueById(br);
                    if (getEntityAttributeValueById !== null) {
                        obj["GetEntityAttributeValueById"] = getEntityAttributeValueById;   
                    }
                    break;

                case "GetEntityAttributeValueByIdInContext":
                    let getEntityAttributeValueByIdInContext = GetEntityAttributeValueByIdInContext(br);
                    if (getEntityAttributeValueByIdInContext !== null) {
                        obj["GetEntityAttributeValueByIdInContext"] = getEntityAttributeValueByIdInContext;   
                    }
                    break;

                case "SendEntityForGraphProcessing":
                    let sendEntityForGraphProcessing = SendEntityForGraphProcessing(br);
                    if (sendEntityForGraphProcessing !== null) {
                        obj["SendEntityForGraphProcessing"] = sendEntityForGraphProcessing;   
                    }
                    break;

                case "SendWhereUsedEntitiesForGraphProcessing":
                    let sendWhereUsedEntitiesForGraphProcessing = SendWhereUsedEntitiesForGraphProcessing(br);
                    if (sendWhereUsedEntitiesForGraphProcessing !== null) {
                        obj["SendWhereUsedEntitiesForGraphProcessing"] = sendWhereUsedEntitiesForGraphProcessing;   
                    }
                    break;

                case "InitiateExport":
                    let initiateExport = InitiateExportCommonMethod(br);
                    if (initiateExport !== null) {
                        obj["InitiateExport"] = initiateExport;   
                    }
                    break;

                case "InitiateExportInContext":
                    let initiateExportInContext = InitiateExportCommonMethod(br);
                    if (initiateExportInContext !== null) {
                        obj["InitiateExportInContext"] = initiateExportInContext;   
                    }
                    break;

                case "InitiateExportInLocale":
                    let initiateExportInLocale = InitiateExportCommonMethod(br);
                    if (initiateExportInLocale !== null) {
                        obj["InitiateExportInLocale"] = initiateExportInLocale;   
                    }
                    break;

                case "InitiateExportInContextAndLocale":
                    let initiateExportInContextAndLocale = InitiateExportCommonMethod(br);
                    if (initiateExportInContextAndLocale !== null) {
                        obj["InitiateExportInContextAndLocale"] = initiateExportInContextAndLocale;   
                    }
                    break;

                case "InitiateExportForDeletedEntity":
                    let initiateExportForDeletedEntity = InitiateExportCommonMethod(br);
                    if (initiateExportForDeletedEntity !== null) {
                        obj["InitiateExportForDeletedEntity"] = initiateExportForDeletedEntity;   
                    }
                    break;

                case "InitiateExportForEntity":
                    let initiateExportForEntity = InitiateExportCommonMethod(br);
                    if (initiateExportForEntity !== null) {
                        obj["InitiateExportForEntity"] = initiateExportForEntity;   
                    }
                    break;

                default:
                    break;

            }
        }
    }
    return obj;
}

const GetEntityIds = (br) => {
    let obj = null;
    let result = counter('GetEntityIds' , br)
    let warningArray = []
    if (result > 5) {
        warningArray.push('This keyword must not be used more than once in any business Rule');
    }
    warningArray.push('Make sure you have proper criteria provided in for this keyword usage so that it returns limited set of entity ids(preferably less than 50), These keyword should not be used to get 100s of entity ids')
    obj = {
        warnings : warningArray
    }
    return obj;
}

const keywordCountCommonMethod = (br , keyword , count) => {
    let obj = null;
    let result = counter(keyword , br)
    if (result > count) {
        obj = {warnings : [`This keyword must not be used more than ${count} ${count>1 ? 'times' : 'time'} in any business Rule`]}
    }
    return obj;
}

const InitiateExportCommonMethod = (br) => {
    let obj = {
        warnings : [
            "ScheduleEntityForExport keyword is recommended instead of this keyword please use ScheduleEntityForExport if you can use it"
        ]
    }
    return obj;
}

const counter = (keyword , br) => {
    let kew = RegExp(keyword)
    return br.split(kew).length-1;
}

let port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server Started'))