const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.post('/api', (req, res) => {
    let request = JSON.parse(JSON.stringify(req.body.params.businessRule))
    let resp = controller(request);
    if (Object.keys(resp).length > 0) {
        response = {
            errorKeywords : resp,
            status : "error"
        }         
    }
    else{
        response = {
            message : 'The Business Rule is following the Best practices recommended',
            status : "success"
        } 
    }

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
        if (br.includes(keyWordList[i]) === true) {
            
            switch (keyWordList[i]) {

                case "GetEntityIds":
                    let getEntityIds = GetEntityIds(br);
                    if (getEntityIds !== null) {
                        obj["GetEntityIds"] = getEntityIds;   
                    }
                    break;
                
                case "GetWhereUsedEntityIds":
                    break;

                case "IsEntityInWorkflow":
                    let isEntityInWorkflow = IsEntityInWorkflow(br);
                    if (isEntityInWorkflow !== null) {
                        obj["IsEntityInWorkflow"] = isEntityInWorkflow;   
                    }
                    break;

                case "IsEntityInWorkflowInContext":
                    break;

                case "InvokeWorkflow":
                    break;

                case "ResumeWorkflow":
                    break;

                case "ResumeWorkflowInContext":
                    break;

                case "ResumeRelatedEntityWorkflow":
                    break;

                case "GetRelatedEntityIds":
                    break;

                case "GetRelatedEntityIdsForContext":
                    break;

                case "GetRestAPIResponse":
                    break;

                case "CreateEntity":
                    break;

                case "DeleteEntity":
                    break;

                case "CreateSnapshot":
                    break;

                case "RestoreSnapshot":
                    break;

                case "SetEntityAttributeValue":
                    break;

                case "SetEntityAttributeValueForContext":
                    break;

                case "AddEntityNestedAttributeRow":
                    break;

                case "SetRelatedEntityAttributeValue":
                    break;

                case "SetRelatedEntityAttributeValueForContext":
                    break;

                case "GetEntityBusinessConditionStatus":
                    break;

                case "GetEntityBusinessConditionStatus":
                    break;

                case "GetEntityAttributeValueById":
                    break;

                case "GetEntityAttributeValueByIdInContext":
                    break;

                case "SendEntityForGraphProcessing":
                    break;

                case "SendWhereUsedEntitiesForGraphProcessing":
                    break;

                case "InitiateExport":
                    break;

                case "InitiateExportInContext":
                    break;

                case "InitiateExportInLocale":
                    break;

                case "InitiateExportInContextAndLocale":
                    break;

                case "InitiateExportInContextAndLocale":
                    break;

                case "InitiateExportForDeletedEntity":
                    break;

                case "InitiateExportForEntity":
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

const IsEntityInWorkflow = (br) => {
    let obj = null;
    let result = counter('IsEntityInWorkflow' , br)
    if (result > 1) {
        obj = {warnings : ['This keyword must not be used more than once in any business Rule']}
    }
    return obj;
}

const counter = (keyword , br) => {
    let kew = RegExp(keyword)
    return br.split(kew).length-1;
}

let port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server Started'))