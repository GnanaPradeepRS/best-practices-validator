const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.post('/api', (req, res) => {
    let response = JSON.parse(JSON.stringify(req.body.params.businessRule))
    let resp = controller(response);
    res.send({ response: resp })
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
        if (br.includes(keyWordList[i])) {
            switch (keyWordList[i]) {

                case "GetEntityIds":
                    let x = GetEntityIds(br);
                    obj["GetEntityIds"] = x ;
                    break;
                
                case "GetWhereUsedEntityIds":
                    break;

                case "IsEntityInWorkflow":
                    let y = GetEntityIds(br);
                    obj["GetEntityIds"] = x;
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

        return obj;
    }
}

const GetEntityIds = (br) => {
    let obj = {warnings : 'br'}
    return obj;
}

const IsEntityInWorkflow = (br) => {
    let obj = {IsEntityInWorkflow : br}
    return obj;
}

const counter = (keyword , br) => {
    let kew = RegExp(keyword)
    return br.split(kew).length-1;
}

let port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server Started'))