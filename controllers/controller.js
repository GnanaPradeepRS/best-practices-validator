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
                
                // case "GetWhereUsedEntityIds":
                //     let getWhereUsedEntityIds = GetWhereUsedEntityIds(br);
                //     if (getWhereUsedEntityIds !== null) {
                //         obj["GetWhereUsedEntityIds"] = getWhereUsedEntityIds;   
                //     }
                //     break;

                // case "IsEntityInWorkflow":
                //     let isEntityInWorkflow = keywordCountCommonMethod(br , 'IsEntityInWorkflow' , 1);
                //     if (isEntityInWorkflow !== null) {
                //         obj["IsEntityInWorkflow"] = isEntityInWorkflow;   
                //     }
                //     break;

                // case "IsEntityInWorkflowInContext":
                //     let isEntityInWorkflowInContext = keywordCountCommonMethod(br , 'IsEntityInWorkflowInContext' , 1);
                //     if (isEntityInWorkflowInContext !== null) {
                //         obj["IsEntityInWorkflow"] = isEntityInWorkflowInContext;   
                //     }
                //     break;

                // case "InvokeWorkflow":
                //     let invokeWorkflow = keywordCountCommonMethod(br , 'InvokeWorkflow' , 5);
                //     if (invokeWorkflow !== null) {
                //         obj["InvokeWorkflow"] = invokeWorkflow;   
                //     }
                //     break;

                // case "ResumeWorkflow":
                //     let resumeWorkflow = ResumeWorkflow(br);
                //     if (resumeWorkflow !== null) {
                //         obj["ResumeWorkflow"] = resumeWorkflow;   
                //     }
                //     break;

                // case "ResumeWorkflowInContext":
                //     let resumeWorkflowInContext = keywordCountCommonMethod(br , 'ResumeWorkflowInContext' , 5);
                //     if (resumeWorkflowInContext !== null) {
                //         obj["ResumeWorkflowInContext"] = resumeWorkflowInContext;   
                //     }
                //     break;

                // case "ResumeRelatedEntityWorkflow":
                //     let resumeRelatedEntityWorkflow = ResumeRelatedEntityWorkflow(br);
                //     if (resumeRelatedEntityWorkflow !== null) {
                //         obj["ResumeRelatedEntityWorkflow"] = resumeRelatedEntityWorkflow;   
                //     }
                //     break;

                // case "GetRelatedEntityIds":
                //     let getRelatedEntityIds = GetRelatedEntityIds(br);
                //     if (getRelatedEntityIds !== null) {
                //         obj["GetRelatedEntityIds"] = getRelatedEntityIds;   
                //     }
                //     break;

                // case "GetRelatedEntityIdsForContext":
                //     let getRelatedEntityIdsForContext = GetRelatedEntityIdsForContext(br);
                //     if (getRelatedEntityIdsForContext !== null) {
                //         obj["GetRelatedEntityIdsForContext"] = getRelatedEntityIdsForContext;   
                //     }
                //     break;

                // case "GetRestAPIResponse":
                //     let getRestAPIResponse = GetRestAPIResponse(br);
                //     if (getRestAPIResponse !== null) {
                //         obj["GetRestAPIResponse"] = getRestAPIResponse;   
                //     }
                //     break;

                // case "CreateEntity":
                //     let createEntity = CreateEntity(br);
                //     if (createEntity !== null) {
                //         obj["CreateEntity"] = createEntity;   
                //     }
                //     break;

                // case "DeleteEntity":
                //     let deleteEntity = DeleteEntity(br);
                //     if (deleteEntity !== null) {
                //         obj["DeleteEntity"] = deleteEntity;   
                //     }
                //     break;

                case "CreateSnapshot":
                    let createSnapshot = Rules.CreateSnapshot(br);
                    if (createSnapshot !== null) {
                        obj["CreateSnapshot"] = createSnapshot;   
                    }
                    break;

                // case "RestoreSnapshot":
                //     let restoreSnapshot = RestoreSnapshot(br);
                //     if (RestoreSnapshot !== null) {
                //         obj["IsEntityInWorkflow"] = restoreSnapshot;   
                //     }
                //     break;

                // case "SetEntityAttributeValue":
                //     let setEntityAttributeValue = SetEntityAttributeValue(br);
                //     if (setEntityAttributeValue !== null) {
                //         obj["SetEntityAttributeValue"] = setEntityAttributeValue;   
                //     }
                //     break;

                // case "SetEntityAttributeValueForContext":
                //     let setEntityAttributeValueForContext = SetEntityAttributeValueForContext(br);
                //     if (setEntityAttributeValueForContext !== null) {
                //         obj["SetEntityAttributeValueForContext"] = setEntityAttributeValueForContext;   
                //     }
                //     break;

                // case "AddEntityNestedAttributeRow":
                //     let addEntityNestedAttributeRow = AddEntityNestedAttributeRow(br);
                //     if (addEntityNestedAttributeRow !== null) {
                //         obj["AddEntityNestedAttributeRow"] = addEntityNestedAttributeRow;   
                //     }
                //     break;

                // case "SetRelatedEntityAttributeValue":
                //     let setRelatedEntityAttributeValue = SetRelatedEntityAttributeValue(br);
                //     if (setRelatedEntityAttributeValue !== null) {
                //         obj["SetRelatedEntityAttributeValue"] = setRelatedEntityAttributeValue;   
                //     }
                //     break;

                // case "SetRelatedEntityAttributeValueForContext":
                //     let setRelatedEntityAttributeValueForContext = SetRelatedEntityAttributeValueForContext(br);
                //     if (setRelatedEntityAttributeValueForContext !== null) {
                //         obj["SetRelatedEntityAttributeValueForContext"] = setRelatedEntityAttributeValueForContext;   
                //     }
                //     break;

                // case "GetEntityBusinessConditionStatus":
                //     let getEntityBusinessConditionStatus = GetEntityBusinessConditionStatus(br);
                //     if (getEntityBusinessConditionStatus !== null) {
                //         obj["GetEntityBusinessConditionStatus"] = getEntityBusinessConditionStatus;   
                //     }
                //     break;

                // case "GetEntityAttributeValueById":
                //     let getEntityAttributeValueById = GetEntityAttributeValueById(br);
                //     if (getEntityAttributeValueById !== null) {
                //         obj["GetEntityAttributeValueById"] = getEntityAttributeValueById;   
                //     }
                //     break;

                // case "GetEntityAttributeValueByIdInContext":
                //     let getEntityAttributeValueByIdInContext = GetEntityAttributeValueByIdInContext(br);
                //     if (getEntityAttributeValueByIdInContext !== null) {
                //         obj["GetEntityAttributeValueByIdInContext"] = getEntityAttributeValueByIdInContext;   
                //     }
                //     break;

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
                    let initiateExport = Rules.InitiateExportCommonMethod(br);
                    if (initiateExport !== null) {
                        obj["InitiateExport"] = initiateExport;   
                    }
                    break;

                case "InitiateExportInContext":
                    let initiateExportInContext = Rules.InitiateExportCommonMethod(br);
                    if (initiateExportInContext !== null) {
                        obj["InitiateExportInContext"] = initiateExportInContext;   
                    }
                    break;

                case "InitiateExportInLocale":
                    let initiateExportInLocale = Rules.InitiateExportCommonMethod(br);
                    if (initiateExportInLocale !== null) {
                        obj["InitiateExportInLocale"] = initiateExportInLocale;   
                    }
                    break;

                case "InitiateExportInContextAndLocale":
                    let initiateExportInContextAndLocale = Rules.InitiateExportCommonMethod(br);
                    if (initiateExportInContextAndLocale !== null) {
                        obj["InitiateExportInContextAndLocale"] = initiateExportInContextAndLocale;   
                    }
                    break;

                case "InitiateExportForDeletedEntity":
                    let initiateExportForDeletedEntity = Rules.InitiateExportCommonMethod(br);
                    if (initiateExportForDeletedEntity !== null) {
                        obj["InitiateExportForDeletedEntity"] = initiateExportForDeletedEntity;   
                    }
                    break;

                case "InitiateExportForEntity":
                    let initiateExportForEntity = Rules.InitiateExportCommonMethod(br);
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