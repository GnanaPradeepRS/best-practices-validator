const Rules = require('../services/validation-rules')
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
                    let getEntityIds =Rules.GetEntityIds(br);
                    if (getEntityIds !== null) {
                        obj["GetEntityIds"] = getEntityIds;
                    }
                    break;
                
                case "GetWhereUsedEntityIds":
                    let getWhereUsedEntityIds = Rules.GetWhereUsedEntityIds(br);
                    if (getWhereUsedEntityIds !== null) {
                        obj["GetWhereUsedEntityIds"] = getWhereUsedEntityIds;   
                    }
                    break;

                case "IsEntityInWorkflow":
                    let isEntityInWorkflow = Rules.keywordCountCommon(br , 'IsEntityInWorkflow' , 1);
                    if (isEntityInWorkflow !== null) {
                        obj["IsEntityInWorkflow"] = isEntityInWorkflow;   
                    }
                    break;

                case "IsEntityInWorkflowInContext":
                    let isEntityInWorkflowInContext = Rules.keywordCountCommon(br , 'IsEntityInWorkflowInContext' , 1);
                    if (isEntityInWorkflowInContext !== null) {
                        obj["IsEntityInWorkflow"] = isEntityInWorkflowInContext;   
                    }
                    break;

                case "InvokeWorkflow":
                    let invokeWorkflow = Rules.keywordCountCommon(br , 'InvokeWorkflow' , 5);
                    if (invokeWorkflow !== null) {
                        obj["InvokeWorkflow"] = invokeWorkflow;   
                    }
                    break;

                case "ResumeWorkflow":
                    let resumeWorkflow = Rules.ResumeWorkflow(br);
                    if (resumeWorkflow !== null) {
                        obj["ResumeWorkflow"] = resumeWorkflow;   
                    }
                    break;

                case "ResumeWorkflowInContext":
                    let resumeWorkflowInContext = Rules.keywordCountCommon(br , 'ResumeWorkflowInContext' , 5);
                    if (resumeWorkflowInContext !== null) {
                        obj["ResumeWorkflowInContext"] = resumeWorkflowInContext;   
                    }
                    break;

                case "ResumeRelatedEntityWorkflow":
                    let resumeRelatedEntityWorkflow = Rules.ResumeRelatedEntityWorkflow(br);
                    if (resumeRelatedEntityWorkflow !== null) {
                        obj["ResumeRelatedEntityWorkflow"] = resumeRelatedEntityWorkflow;   
                    }
                    break;

                case "GetRelatedEntityIds":
                    let getRelatedEntityIds = Rules.GetRelatedEntityIds(br);
                    if (getRelatedEntityIds !== null) {
                        obj["GetRelatedEntityIds"] = getRelatedEntityIds;   
                    }
                    break;

                case "GetRelatedEntityIdsForContext":
                    let getRelatedEntityIdsForContext = Rules.GetRelatedEntityIdsForContext(br);
                    if (getRelatedEntityIdsForContext !== null) {
                        obj["GetRelatedEntityIdsForContext"] = getRelatedEntityIdsForContext;   
                    }
                    break;

                case "GetRestAPIResponse":
                    let getRestAPIResponse = Rules.GetRestAPIResponse(br);
                    if (getRestAPIResponse !== null) {
                        obj["GetRestAPIResponse"] = getRestAPIResponse;   
                    }
                    break;

                case "CreateEntity":
                    let createEntity = Rules.IterationAndCountCommon(br , 'CreateEntity');
                    if (createEntity !== null) {
                        obj["CreateEntity"] = createEntity;   
                    }
                    break;

                case "DeleteEntity":
                    let deleteEntity = Rules.IterationAndCountCommon(br , 'DeleteEntity');
                    if (deleteEntity !== null) {
                        obj["DeleteEntity"] = deleteEntity;   
                    }
                    break;

                case "CreateSnapshot":
                    let createSnapshot = Rules.IterationAndCountCommon(br , 'CreateSnapshot');
                    if (createSnapshot !== null) {
                        obj["CreateSnapshot"] = createSnapshot;   
                    }
                    break;

                case "RestoreSnapshot":
                    let restoreSnapshot = Rules.IterationAndCountCommon(br , 'RestoreSnapshot');
                    if (restoreSnapshot !== null) {
                        obj["RestoreSnapshot"] = restoreSnapshot;   
                    }
                    break;

                case "SetEntityAttributeValue":
                    let setEntityAttributeValue = Rules.IerationCountAndIIFCheckCommon(br , 'SetEntityAttributeValue' , 5);
                    if (setEntityAttributeValue !== null) {
                        obj["SetEntityAttributeValue"] = setEntityAttributeValue;   
                    }
                    break;

                case "SetEntityAttributeValueForContext":
                    let setEntityAttributeValueForContext = Rules.IerationCountAndIIFCheckCommon(br , 'SetEntityAttributeValueForContext' , 5);
                    if (setEntityAttributeValueForContext !== null) {
                        obj["SetEntityAttributeValueForContext"] = setEntityAttributeValueForContext;   
                    }
                    break;

                case "AddEntityNestedAttributeRow":
                    let addEntityNestedAttributeRow = Rules.IerationCountAndIIFCheckCommon(br , 'AddEntityNestedAttributeRow' , 5);
                    if (addEntityNestedAttributeRow !== null) {
                        obj["AddEntityNestedAttributeRow"] = addEntityNestedAttributeRow;   
                    }
                    break;

                case "SetRelatedEntityAttributeValue":
                    let setRelatedEntityAttributeValue = Rules.IterationAndCountCommon(br , 'SetRelatedEntityAttributeValue');
                    if (setRelatedEntityAttributeValue !== null) {
                        obj["SetRelatedEntityAttributeValue"] = setRelatedEntityAttributeValue;   
                    }
                    break;

                case "SetRelatedEntityAttributeValueForContext":
                    let setRelatedEntityAttributeValueForContext = Rules.IterationAndCountCommon(br , 'SetRelatedEntityAttributeValueForContext');
                    if (setRelatedEntityAttributeValueForContext !== null) {
                        obj["SetRelatedEntityAttributeValueForContext"] = setRelatedEntityAttributeValueForContext;   
                    }
                    break;

                case "GetEntityBusinessConditionStatus":
                    let getEntityBusinessConditionStatus = Rules.IterationAndCountCommon(br , 'GetEntityBusinessConditionStatus');
                    if (getEntityBusinessConditionStatus !== null) {
                        obj["GetEntityBusinessConditionStatus"] = getEntityBusinessConditionStatus;   
                    }
                    break;

                case "GetEntityAttributeValueById":
                    let getEntityAttributeValueById = Rules.IerationCountAndIIFCheckCommon(br , 'GetEntityAttributeValueById' , 10);
                    if (getEntityAttributeValueById !== null) {
                        obj["GetEntityAttributeValueById"] = getEntityAttributeValueById;   
                    }
                    break;

                case "GetEntityAttributeValuesById":
                    let getEntityAttributeValuesById = Rules.IerationCountAndIIFCheckCommon(br , 'GetEntityAttributeValuesById' , 10);
                    if (getEntityAttributeValuesById !== null) {
                        obj["GetEntityAttributeValuesById"] = getEntityAttributeValuesById;   
                    }
                    break;

                case "GetEntityAttributeValueByIdInContext":
                    let getEntityAttributeValueByIdInContext = Rules.IerationCountAndIIFCheckCommon(br , 'GetEntityAttributeValueByIdInContext' , 10);
                    if (getEntityAttributeValueByIdInContext !== null) {
                        obj["GetEntityAttributeValueByIdInContext"] = getEntityAttributeValueByIdInContext;   
                    }
                    break;

                case "SendEntityForGraphProcessing":
                    let sendEntityForGraphProcessing = Rules.SendEntityForGraphProcessing(br);
                    if (sendEntityForGraphProcessing !== null) {
                        obj["SendEntityForGraphProcessing"] = sendEntityForGraphProcessing;   
                    }
                    break;

                case "SendWhereUsedEntitiesForGraphProcessing":
                    let sendWhereUsedEntitiesForGraphProcessing = Rules.SendWhereUsedEntitiesForGraphProcessing(br);
                    if (sendWhereUsedEntitiesForGraphProcessing !== null) {
                        obj["SendWhereUsedEntitiesForGraphProcessing"] = sendWhereUsedEntitiesForGraphProcessing;   
                    }
                    break;

                case "InitiateExport":
                    let initiateExport = Rules.InitiateExportCommon(br);
                    if (initiateExport !== null) {
                        obj["InitiateExport"] = initiateExport;   
                    }
                    break;

                case "InitiateExportInContext":
                    let initiateExportInContext = Rules.InitiateExportCommon(br);
                    if (initiateExportInContext !== null) {
                        obj["InitiateExportInContext"] = initiateExportInContext;   
                    }
                    break;

                case "InitiateExportInLocale":
                    let initiateExportInLocale = Rules.InitiateExportCommon(br);
                    if (initiateExportInLocale !== null) {
                        obj["InitiateExportInLocale"] = initiateExportInLocale;   
                    }
                    break;

                case "InitiateExportInContextAndLocale":
                    let initiateExportInContextAndLocale = Rules.InitiateExportCommon(br);
                    if (initiateExportInContextAndLocale !== null) {
                        obj["InitiateExportInContextAndLocale"] = initiateExportInContextAndLocale;   
                    }
                    break;

                case "InitiateExportForDeletedEntity":
                    let initiateExportForDeletedEntity = Rules.InitiateExportCommon(br);
                    if (initiateExportForDeletedEntity !== null) {
                        obj["InitiateExportForDeletedEntity"] = initiateExportForDeletedEntity;   
                    }
                    break;

                case "InitiateExportForEntity":
                    let initiateExportForEntity = Rules.InitiateExportCommon(br);
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

module.exports = controller