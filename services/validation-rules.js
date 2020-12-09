 const Resources = require('../services/resources')
const GetEntityIds = (br) => {
    let obj = null;
    let result = Resources.counter('GetEntityIds' , br)
    let warningArray = [];
    
    if (result > 5) {
        warningArray.push('This keyword must not be used more than 5 times in any business Rule');
    }
    // console.log(childKeywordChecker(br , 'ITERATE[' , 'GetEntityIds'))
    
    if ((Resources.childKeywordChecker(br , 'ITERATE[' , 'GetEntityIds' )) === true) {
        warningArray.push('This keyword is used inside ITERATE please make sure iteration count is not more than 5')
    }

    warningArray.push('Make sure you have proper criteria provided for this keyword so that it returns limited set of entity ids(preferably less than 50), This keyword should not be used to get 100s of entity ids')
    if (warningArray.length > 0) {
        obj = {
            warnings : warningArray
        }
    }

    return obj;
}

const CreateSnapshot = (br) => {
    let obj = null;
    let result = Resources.counter('CreateSnapshot' , br)
    let warningArray = [];
    
    if (result > 5) {
        warningArray.push('This keyword must not be used more than 5 times in any business Rule');
    }

    if ((Resources.childKeywordChecker(br , 'ITERATE[' , 'CreateSnapshot' )) === true) {
        warningArray.push('This keyword is used inside ITERATE please make sure iteration count is not more than 5')
    }

    if (warningArray.length > 0) {
        obj = {
            warnings : warningArray
        }
    }
    
    return obj;
}

const SendEntityForGraphProcessing = (br) => {
    let obj = null;
    obj = {
        warnings : ['ScheduleEntityForGraphProcessing keyword is recommended instead of this keyword please use ScheduleEntityForGraphProcessing if you can use it']
    }
    return obj
}

const SendWhereUsedEntitiesForGraphProcessing = (br) => {
    let obj = null;
    obj = {
        warnings : ['ScheduleWhereUsedEntitiesForGraphProcessing keyword is recommended instead of this keyword please use ScheduleWhereUsedEntitiesForGraphProcessing if you can use it']
    }
    return obj
}

const keywordCountCommonMethod = (br , keyword , count) => {
    let obj = null;
    let result = Resources.counter(keyword , br)
    if (result > count) {
        obj = {
            warnings : [`This keyword must not be used more than ${count} ${count>1 ? 'times' : 'time'} in any business Rule`]
        }
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

module.exports = {
    GetEntityIds : GetEntityIds,
    CreateSnapshot : CreateSnapshot,
    SendEntityForGraphProcessing : SendEntityForGraphProcessing,
    SendWhereUsedEntitiesForGraphProcessing : SendWhereUsedEntitiesForGraphProcessing,
    keywordCountCommonMethod : keywordCountCommonMethod,
    InitiateExportCommonMethod : InitiateExportCommonMethod
}